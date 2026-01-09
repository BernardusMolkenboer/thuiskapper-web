// app/cookies/page.tsx
"use client";

import PageTop from "@/components/PageTop";
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Cookie,
  ShieldCheck,
  BarChart3,
  Megaphone,
  SlidersHorizontal,
  CheckCircle,
  Info,
  Mail,
  ExternalLink,
  RefreshCcw,
} from "lucide-react";

type ConsentLevel = "necessary" | "analytics" | "marketing";

const LAST_UPDATED = "9 januari 2026";

type CookieCategory = {
  id: ConsentLevel;
  title: string;
  description: string;
  icon: React.ElementType;
  required?: boolean;
  examples: string[];
};

const categories: CookieCategory[] = [
  {
    id: "necessary",
    title: "Noodzakelijk",
    description:
      "Deze cookies/technieken zijn nodig om de website veilig en correct te laten werken (bijv. beveiliging, basisfunctionaliteit, performance).",
    icon: ShieldCheck,
    required: true,
    examples: [
      "Beveiliging & fraudepreventie",
      "Load balancing / performance",
      "Basisfunctionaliteit (navigatie, paginaweergave)",
      "Opslag van cookievoorkeur (indien aanwezig)",
    ],
  },
  {
    id: "analytics",
    title: "Analytisch (optioneel)",
    description:
      "Helpt ons begrijpen hoe bezoekers de site gebruiken, zodat we de ervaring kunnen verbeteren. Alleen actief als u dit aanzet.",
    icon: BarChart3,
    examples: [
      "Geaggregeerde statistieken (paginaweergaven, kliks, scroll)",
      "Meten van prestaties & foutopsporing",
      "Inzichten voor verbetering van content en UX",
    ],
  },
  {
    id: "marketing",
    title: "Marketing (optioneel)",
    description:
      "Kan worden gebruikt om campagnes te meten of om relevante aanbiedingen te tonen. Alleen actief als u dit aanzet.",
    icon: Megaphone,
    examples: [
      "Meten van campagne-effectiviteit",
      "Beperktere herhaling van advertenties",
      "Relevantere aanbiedingen (indien toegepast)",
    ],
  },
];

function clampList(list: string[]) {
  return list.filter(Boolean).slice(0, 12);
}

export default function CookiesPage() {
  const [consent, setConsent] = useState<Record<ConsentLevel, boolean>>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const [openSection, setOpenSection] = useState<string>("wat-zijn-cookies");
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");

  const enabledSummary = useMemo(() => {
    const parts: string[] = [];
    parts.push("Noodzakelijk");
    if (consent.analytics) parts.push("Analytisch");
    if (consent.marketing) parts.push("Marketing");
    return parts.join(", ");
  }, [consent.analytics, consent.marketing]);

  const savePreferences = async () => {
    setStatus("saving");
    try {
      localStorage.setItem(
        "thuiskapper_cookie_preferences",
        JSON.stringify({
          necessary: true,
          analytics: !!consent.analytics,
          marketing: !!consent.marketing,
          updatedAt: new Date().toISOString(),
        })
      );
      await new Promise((r) => setTimeout(r, 550));
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 1200);
    } catch {
      setStatus("idle");
    }
  };

  const acceptAll = () => {
    setConsent({ necessary: true, analytics: true, marketing: true });
    setOpenSection("voorkeuren");
  };

  const rejectOptional = () => {
    setConsent({ necessary: true, analytics: false, marketing: false });
    setOpenSection("voorkeuren");
  };

  const resetToDefault = () => {
    setConsent({ necessary: true, analytics: false, marketing: false });
  };

  return (
    <div className="min-h-screen bg-white">
      <PageTop
        title="Cookieverklaring"
        description="Ontdek welke cookies en vergelijkbare technologieën we gebruiken, waarom we dat doen en hoe u uw voorkeuren beheert."
        crumbs={[{ label: "Cookieverklaring" }]}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Summary / actions */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 mb-8">
          <div className="flex items-start gap-3">
            <Cookie className="w-5 h-5 text-emerald-700 mt-0.5" />
            <div className="flex-1">
              <h2 className="font-semibold text-emerald-900 mb-1">
                Uw cookievoorkeuren
              </h2>
              <p className="text-emerald-800 text-sm">
                Actief: <strong>{enabledSummary}</strong>
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <CheckCircle className="w-4 h-4" />
                  Alles accepteren
                </button>

                <button
                  type="button"
                  onClick={rejectOptional}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold py-3 px-4 rounded-lg border border-emerald-200 transition-colors"
                >
                  Alleen noodzakelijk
                </button>

                <button
                  type="button"
                  onClick={() => setOpenSection("voorkeuren")}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 font-semibold py-3 px-4 rounded-lg border border-emerald-200 transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Voorkeuren aanpassen
                </button>
              </div>

              <p className="text-emerald-800 text-xs mt-4">
                <strong>Laatst bijgewerkt:</strong> {LAST_UPDATED}
              </p>
            </div>
          </div>
        </div>

        {/* Important info */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-amber-800 mb-2">
            Belangrijke informatie
          </h2>
          <ul className="text-amber-700 text-sm space-y-1">
            <li>
              Noodzakelijke cookies zijn altijd aan omdat ze essentieel zijn
              voor beveiliging en werking.
            </li>
            <li>
              Analytische en marketingcookies zetten we alleen aan als u dat
              kiest.
            </li>
            <li>
              U kunt uw voorkeuren op elk moment aanpassen of cookies
              verwijderen via uw browserinstellingen.
            </li>
          </ul>
        </div>

        {/* Simple in-page navigation */}
        <div className="border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-sm font-medium text-gray-900 mb-3">Snel naar:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "wat-zijn-cookies", label: "Wat zijn cookies?" },
              { id: "categorieen", label: "Categorieën" },
              { id: "voorkeuren", label: "Voorkeuren" },
              { id: "browser", label: "Browserinstellingen" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpenSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  openSection === item.id
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Wat zijn cookies */}
          <section className="border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-3 mb-3">
              <Info className="w-5 h-5 text-gray-700 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Wat zijn cookies?
                </h2>
                <p className="text-gray-600 text-sm">
                  Kleine bestanden / opslag die de website helpen werken en
                  voorkeuren onthouden.
                </p>
              </div>
            </div>

            {openSection === "wat-zijn-cookies" ? (
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  Cookies zijn kleine tekstbestanden die in uw browser kunnen
                  worden opgeslagen. Ze helpen bijvoorbeeld bij beveiliging,
                  basisfunctionaliteit of het onthouden van voorkeuren.
                </p>
                <p>
                  Naast cookies bestaan ook{" "}
                  <strong>vergelijkbare technieken</strong> zoals local storage
                  en scripts. Wanneer die worden gebruikt voor analytics of
                  marketing, behandelen we ze hetzelfde als cookies: alleen met
                  uw toestemming.
                </p>
                <p className="text-gray-600">
                  Meer over persoonsgegevens leest u in ons{" "}
                  <Link
                    href="/privacy"
                    className="text-emerald-600 hover:underline"
                  >
                    privacybeleid
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setOpenSection("wat-zijn-cookies")}
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Toon uitleg
              </button>
            )}
          </section>

          {/* Categorieën */}
          <section className="border border-gray-200 rounded-lg p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Categorieën cookies
            </h2>

            <div className="space-y-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isOpen =
                  openSection === "categorieen" || openSection === cat.id;

                return (
                  <div
                    key={cat.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-gray-700 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {cat.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {cat.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            {cat.required ? (
                              <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200">
                                Altijd aan
                              </span>
                            ) : (
                              <span className="text-xs font-semibold bg-white text-gray-700 px-2.5 py-1 rounded-full border border-gray-200">
                                Optioneel
                              </span>
                            )}
                          </div>
                        </div>

                        {isOpen && (
                          <div className="mt-3">
                            <p className="text-xs font-medium text-gray-900 mb-2">
                              Voorbeelden:
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                              {clampList(cat.examples).map((e) => (
                                <li key={e}>{e}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {openSection !== "categorieen" &&
                          openSection !== cat.id && (
                            <button
                              type="button"
                              onClick={() => setOpenSection(cat.id)}
                              className="mt-3 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                            >
                              Toon details
                            </button>
                          )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
              <Info className="w-5 h-5 text-gray-700 mt-0.5" />
              <p className="text-gray-700 text-sm">
                We activeren <strong>analytische</strong> en{" "}
                <strong>marketing</strong> cookies alleen wanneer u deze
                categorieën aanzet. Noodzakelijke cookies blijven actief voor
                beveiliging en werking van de site.
              </p>
            </div>
          </section>

          {/* Voorkeuren */}
          <section className="border border-gray-200 rounded-lg p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Voorkeuren aanpassen
            </h2>

            {openSection === "voorkeuren" ? (
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Noodzakelijk
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Altijd aan voor beveiliging en basisfunctionaliteit.
                      </p>
                    </div>
                    <span className="text-xs font-semibold bg-white text-gray-700 px-2.5 py-1 rounded-full border border-gray-200">
                      Aan
                    </span>
                  </div>

                  <label className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Analytisch (optioneel)
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Helpt ons de website te verbeteren door gebruik te
                        meten.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={() =>
                        setConsent((p) => ({ ...p, analytics: !p.analytics }))
                      }
                      className="mt-1 w-5 h-5 text-emerald-600 focus:ring-emerald-500 rounded"
                    />
                  </label>

                  <label className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                    <div>
                      <p className="font-semibold text-gray-900">
                        Marketing (optioneel)
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Voor het meten van campagnes en relevantere aanbiedingen
                        (indien toegepast).
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={() =>
                        setConsent((p) => ({ ...p, marketing: !p.marketing }))
                      }
                      className="mt-1 w-5 h-5 text-emerald-600 focus:ring-emerald-500 rounded"
                    />
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={savePreferences}
                    disabled={status === "saving"}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {status === "saving" ? (
                      <>
                        <RefreshCcw className="w-5 h-5 animate-spin" />
                        Opslaan...
                      </>
                    ) : status === "saved" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Opgeslagen
                      </>
                    ) : (
                      "Voorkeuren opslaan"
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={resetToDefault}
                    className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-6 rounded-lg border border-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    Reset
                  </button>
                </div>

                <p className="text-xs text-gray-500">
                  We slaan uw voorkeuren lokaal op in uw browser (geen account
                  nodig). Als u cookies of sitegegevens verwijdert, kan deze
                  keuze verdwijnen.
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setOpenSection("voorkeuren")}
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Open voorkeuren
              </button>
            )}
          </section>

          {/* Browser */}
          <section className="border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 className="w-5 h-5 text-gray-700 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Cookies verwijderen via uw browser
                </h2>
                <p className="text-gray-600 text-sm">
                  U kunt cookies altijd verwijderen of blokkeren via uw browser.
                </p>
              </div>
            </div>

            {openSection === "browser" ? (
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  U kunt via de instellingen van uw browser cookies verwijderen,
                  blokkeren of beperken. Houd er rekening mee dat het blokkeren
                  van noodzakelijke cookies invloed kan hebben op de werking van
                  de website.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    <strong>Verwijderen:</strong> verwijder “cookies en
                    sitegegevens” in uw browserinstellingen.
                  </li>
                  <li>
                    <strong>Blokkeren:</strong> stel uw browser in om cookies
                    (gedeeltelijk) te weigeren.
                  </li>
                  <li>
                    <strong>Privémodus:</strong> helpt om minder gegevens te
                    bewaren na het sluiten van de browser.
                  </li>
                </ul>

                <p className="text-gray-600">
                  Tip: als u alles wilt “resetten”, verwijder dan ook “site
                  data” voor <strong>thuiskapper.app</strong> in uw browser.
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setOpenSection("browser")}
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Toon stappen
              </button>
            )}
          </section>

          {/* Contact */}
          <section className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-3 mb-3">
              <Mail className="w-5 h-5 text-gray-700 mt-0.5" />
              <h2 className="text-lg font-bold text-gray-900">
                Vragen over cookies?
              </h2>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Heeft u vragen over deze cookieverklaring of wilt u iets
              verduidelijken? Neem contact met ons op.
            </p>

            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                Cookies & algemene vragen:{" "}
                <a
                  href="mailto:info@thuiskapper.app"
                  className="text-emerald-600 hover:underline inline-flex items-center gap-1"
                >
                  info@thuiskapper.app <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>
              <p className="text-gray-600">
                Privacyvragen:{" "}
                <a
                  href="mailto:privacy@thuiskapper.app"
                  className="text-emerald-600 hover:underline inline-flex items-center gap-1"
                >
                  privacy@thuiskapper.app{" "}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>
              <p className="text-gray-600">
                Lees ook ons{" "}
                <Link
                  href="/privacy"
                  className="text-emerald-600 hover:underline"
                >
                  privacybeleid
                </Link>
                .
              </p>
            </div>

            <p className="text-gray-500 text-xs mt-5">
              Sectie-ID: <span className="font-mono">/cookies</span> • Laatste
              update: {LAST_UPDATED}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
