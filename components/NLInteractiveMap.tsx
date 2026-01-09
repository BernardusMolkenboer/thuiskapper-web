"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type City = {
  name: string;
  slug: string;
  lat: number;
  lng: number;
};

declare global {
  interface Window {
    google?: any;
  }
}

function loadGoogleMaps(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject(new Error("No window"));
    if (window.google?.maps) return resolve();

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-google-maps="true"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Google Maps load failed"))
      );
      return;
    }

    const script = document.createElement("script");
    script.dataset.googleMaps = "true";
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&v=weekly`;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps load failed"));
    document.head.appendChild(script);
  });
}

function injectInfoWindowCssOnce() {
  if (document.getElementById("thuiskapper-gmaps-css")) return;

  const style = document.createElement("style");
  style.id = "thuiskapper-gmaps-css";
  style.textContent = `
    .gm-ui-hover-effect { display: none !important; }

    .tk-infowindow { font-family: ui-sans-serif, system-ui; padding: 0; margin: 0; }
    .tk-card {
      background: rgba(255,255,255,0.96);
      border: 1px solid rgba(229,231,235,1);
      border-radius: 14px;
      padding: 10px 12px;
      box-shadow: 0 16px 40px rgba(17,24,39,0.14), 0 6px 14px rgba(17,24,39,0.08);
      backdrop-filter: blur(10px);
      min-width: 170px;
    }
    .tk-row { display: flex; align-items: center; gap: 10px; }
    .tk-dot {
      width: 10px; height: 10px; border-radius: 999px;
      background: #10b981;
      box-shadow: 0 0 0 8px rgba(16,185,129,0.12);
      flex: 0 0 auto;
    }
    .tk-title { font-weight: 800; font-size: 13px; color: #111827; line-height: 1.1; }
    .tk-sub { margin-top: 2px; font-size: 12px; color: #6b7280; font-weight: 600; }
  `;
  document.head.appendChild(style);
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("FileReader failed"));
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(blob);
  });
}

async function getFaviconDataUrl(): Promise<string> {
  // Use same-origin fetch -> convert to base64 data URL
  const res = await fetch("/favicon.png", { cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to fetch /favicon.png");
  const blob = await res.blob();
  return blobToDataUrl(blob);
}

function svgPinDataUrl(faviconDataUrl: string) {
  // Embed the favicon data directly inside the SVG (no external request)
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="10" stdDeviation="6" flood-color="#111827" flood-opacity="0.18"/>
        <feDropShadow dx="0" dy="6" stdDeviation="3" flood-color="#10b981" flood-opacity="0.10"/>
      </filter>

      <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#10b981" stop-opacity="0.45"/>
        <stop offset="1" stop-color="#10b981" stop-opacity="0.18"/>
      </linearGradient>

      <clipPath id="clip">
        <rect x="16" y="16" width="22" height="22" rx="7" ry="7"/>
      </clipPath>
    </defs>

    <circle cx="27" cy="28" r="18" fill="#10b981" opacity="0.12"/>

    <g filter="url(#shadow)">
      <rect x="8" y="8" width="38" height="38" rx="14" ry="14" fill="white" fill-opacity="0.97"/>
      <rect x="8.75" y="8.75" width="36.5" height="36.5" rx="13.5" ry="13.5" fill="none" stroke="url(#ring)" stroke-width="1.5"/>
      <rect x="11.5" y="11.5" width="33" height="33" rx="12" ry="12" fill="none" stroke="#e5e7eb" stroke-width="1"/>
    </g>

    <g clip-path="url(#clip)">
      <image href="${faviconDataUrl}" x="16" y="16" width="22" height="22" preserveAspectRatio="xMidYMid slice"/>
    </g>
  </svg>`.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function NLInteractiveMap({
  apiKey,
  cities,
}: {
  apiKey: string | undefined;
  cities: City[];
}) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mapStyles = useMemo(
    () => [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      { featureType: "transit", stylers: [{ visibility: "off" }] },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },

      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f7faf9" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e9f7f2" }],
      },

      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e5e7eb" }],
      },

      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#10b981" }, { weight: 2 }],
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [{ color: "#d1d5db" }, { weight: 1 }],
      },

      // Keep city labels subtle (optional)
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#111827" }],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }, { weight: 3 }],
      },
    ],
    []
  );

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!apiKey) {
        setError(
          "Geen Google Maps API key gevonden (NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)."
        );
        return;
      }

      try {
        injectInfoWindowCssOnce();
        await loadGoogleMaps(apiKey);
        if (cancelled) return;
        if (!mapRef.current) return;

        const g = window.google;

        const map = new g.maps.Map(mapRef.current, {
          center: { lat: 52.1326, lng: 5.2913 },
          zoom: 7,
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
          clickableIcons: false,
          gestureHandling: "greedy",
          backgroundColor: "#ffffff",
        });

        const bounds = new g.maps.LatLngBounds(
          { lat: 50.6, lng: 3.1 },
          { lat: 53.7, lng: 7.3 }
        );
        map.fitBounds(bounds);

        const info = new g.maps.InfoWindow({ disableAutoPan: true });
        const openInfo = (marker: any, city: City) => {
          info.setContent(`
            <div class="tk-infowindow">
              <div class="tk-card">
                <div class="tk-row">
                  <div class="tk-dot"></div>
                  <div>
                    <div class="tk-title">${city.name}</div>
                    <div class="tk-sub">Klik om te openen</div>
                  </div>
                </div>
              </div>
            </div>
          `);
          info.open({ map, anchor: marker });
        };

        map.addListener("click", () => info.close());

        // Build a premium SVG marker with embedded favicon data
        let iconUrl = "/favicon.png";
        try {
          const faviconDataUrl = await getFaviconDataUrl();
          iconUrl = svgPinDataUrl(faviconDataUrl);
        } catch {
          // fallback stays /favicon.png
        }

        const icon = {
          url: iconUrl,
          scaledSize: new g.maps.Size(42, 42),
          anchor: new g.maps.Point(21, 21),
        };

        cities.forEach((city) => {
          const marker = new g.maps.Marker({
            map,
            position: { lat: city.lat, lng: city.lng },
            title: city.name,
            icon,
            optimized: true,
            zIndex: 10,
          });

          marker.addListener("mouseover", () => openInfo(marker, city));
          marker.addListener("mouseout", () => info.close());
          marker.addListener("click", () => {
            window.location.href = city.slug;
          });
        });

        setReady(true);
      } catch (e: any) {
        setError(e?.message ?? "Google Maps kon niet geladen worden.");
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, [apiKey, cities, mapStyles]);

  if (error) {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <p className="font-semibold text-gray-900 mb-2">
          Kaart niet beschikbaar
        </p>
        <p className="text-sm text-gray-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl border border-gray-200 overflow-hidden">
      <div
        ref={mapRef}
        className="w-full h-[360px] sm:h-[420px]"
        aria-label="Interactieve kaart van Nederland"
      />
      {!ready && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
          <div className="text-sm font-medium text-gray-700">Kaart laden…</div>
        </div>
      )}

      {/* Only ONE helpful hint (removed the "Marker: ..." pill) */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-2 text-xs bg-white/90 border border-gray-200 rounded-full px-3 py-1 text-gray-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Hover voor naam • Klik om te openen
        </span>
      </div>
    </div>
  );
}
