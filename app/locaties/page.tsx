// app/locaties/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import NLInteractiveMap from "@/components/NLInteractiveMap";
import {
  MapPin,
  ChevronRight,
  Smartphone,
  Scissors,
  ShieldCheck,
} from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/locaties";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Werkgebied | Thuiskapper.app - Heel Nederland",
  description:
    "Thuiskapper.app is beschikbaar in heel Nederland. Bekijk ons werkgebied, ontdek populaire steden en boek eenvoudig een kapper aan huis via de app.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Werkgebied | Thuiskapper.app - Heel Nederland",
    description:
      "Thuiskapper.app is beschikbaar in heel Nederland. Bekijk ons werkgebied, ontdek populaire steden en boek eenvoudig een kapper aan huis via de app.",
    url: PAGE_URL,
    siteName: "Thuiskapper.app",
    type: "article",
    locale: "nl_NL",
  },
  robots: { index: true, follow: true },
};

const cities = [
  {
    name: "Amsterdam",
    slug: "/thuiskapper-amsterdam",
    region: "Noord-Holland",
    lat: 52.3676,
    lng: 4.9041,
  },
  {
    name: "Rotterdam",
    slug: "/thuiskapper-rotterdam",
    region: "Zuid-Holland",
    lat: 51.9244,
    lng: 4.4777,
  },
  {
    name: "Den Haag",
    slug: "/thuiskapper-den-haag",
    region: "Zuid-Holland",
    lat: 52.0705,
    lng: 4.3007,
  },
  {
    name: "Utrecht",
    slug: "/thuiskapper-utrecht",
    region: "Utrecht",
    lat: 52.0907,
    lng: 5.1214,
  },
  {
    name: "Eindhoven",
    slug: "/thuiskapper-eindhoven",
    region: "Noord-Brabant",
    lat: 51.4416,
    lng: 5.4697,
  },
  {
    name: "Tilburg",
    slug: "/thuiskapper-tilburg",
    region: "Noord-Brabant",
    lat: 51.5555,
    lng: 5.0913,
  },
  {
    name: "Groningen",
    slug: "/thuiskapper-groningen",
    region: "Groningen",
    lat: 53.2194,
    lng: 6.5665,
  },
  {
    name: "Almere",
    slug: "/thuiskapper-almere",
    region: "Flevoland",
    lat: 52.3508,
    lng: 5.2647,
  },
  {
    name: "Breda",
    slug: "/thuiskapper-breda",
    region: "Noord-Brabant",
    lat: 51.5719,
    lng: 4.7683,
  },
  {
    name: "Nijmegen",
    slug: "/thuiskapper-nijmegen",
    region: "Gelderland",
    lat: 51.8126,
    lng: 5.8372,
  },
];

export default function LocatiesPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Werkgebied | Thuiskapper.app - Heel Nederland",
    description:
      "Overzicht van het werkgebied van Thuiskapper.app in heel Nederland, inclusief populaire steden en informatie over boeken via de app.",
    inLanguage: "nl-NL",
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Thuiskapper.app",
    },
    about: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Thuiskapper.app",
      url: SITE_URL,
    },
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Werkgebied", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Nederland",
    serviceType: "Kapper aan huis",
    areaServed: { "@type": "Country", name: "Nederland" },
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Thuiskapper.app",
      url: SITE_URL,
    },
    url: PAGE_URL,
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Populaire steden voor Thuiskapper.app",
    itemListElement: cities.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${SITE_URL}${c.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLdWebPage,
            jsonLdBreadcrumbs,
            jsonLdService,
            jsonLdItemList,
          ]),
        }}
      />

      <PageTop
        title="Werkgebied in Nederland"
        description="Thuiskapper.app is beschikbaar in heel Nederland. Zoom in, klik op een stad en bekijk de lokale pagina."
        crumbs={[{ label: "Werkgebied" }]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            {
              icon: Smartphone,
              title: "Boek via de app",
              text: "Plaats een knipbeurt, ontvang voorstellen en bevestig uw afspraak eenvoudig in de app.",
            },
            {
              icon: Scissors,
              title: "Voor elk haartype",
              text: "Van stijl tot krullen en kroeshaar: kies een kapper die past bij uw wensen.",
            },
            {
              icon: ShieldCheck,
              title: "Beoordelingen & zekerheid",
              text: "Bekijk ervaringen en laat na afloop een beoordeling achter voor extra transparantie.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-5 bg-white hover:border-emerald-300 hover:bg-emerald-50/20 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <section className="lg:col-span-7">
            <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Interactieve kaart
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                      Zoom in/uit en klik op een marker. Markers gebruiken jouw
                      favicon en openen direct de stadspagina.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-emerald-700" />
                    Heel NL
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <NLInteractiveMap
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                  cities={cities.map(({ name, slug, lat, lng }) => ({
                    name,
                    slug,
                    lat,
                    lng,
                  }))}
                />
                <p className="text-xs text-gray-500 mt-3">
                  Tip: op mobiel kunt u met twee vingers zoomen en de kaart
                  verslepen.
                </p>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Populaire steden
                </h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Klik op een stad om meer te lezen over thuiskappers op
                  locatie.
                </p>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={c.slug}
                      className="group border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-bold text-gray-900">{c.name}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            {c.region}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-700 transition-colors mt-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="font-bold text-emerald-900 mb-1">
                    Direct starten?
                  </p>
                  <p className="text-emerald-800 text-sm">
                    Download de Thuiskapper.app en plaats binnen een paar
                    minuten uw knipbeurt. U ontvangt voorstellen en kiest zelf
                    de kapper die bij u past.
                  </p>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/#download"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                      Naar download
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/vraag-en-antwoord"
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-4 rounded-lg border border-gray-200 transition-colors"
                    >
                      Bekijk FAQ
                    </Link>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-600">
                  <p>
                    Staat uw woonplaats er niet tussen? Geen probleem — u kunt
                    alsnog een aanvraag plaatsen. We proberen altijd de best
                    beschikbare thuiskapper in uw regio te matchen.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
