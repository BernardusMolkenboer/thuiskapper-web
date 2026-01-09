// app/thuiskapper-utrecht/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-utrecht";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Utrecht | Kapper aan huis - Thuiskapper.app",
  description:
    "Thuiskapper in Utrecht boeken? Onze kappers komen op locatie langs in Utrecht en omgeving (o.a. Woerden, Amersfoort) — voor elk haartype.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Utrecht | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper in Utrecht boeken? Onze kappers komen op locatie langs in Utrecht en omgeving (o.a. Woerden, Amersfoort) — voor elk haartype.",
    url: PAGE_URL,
    siteName: "Thuiskapper.app",
    type: "article",
    locale: "nl_NL",
  },
  robots: { index: true, follow: true },
};

const locations = [
  { name: "Amsterdam", href: "/thuiskapper-amsterdam" },
  { name: "Rotterdam", href: "/thuiskapper-rotterdam" },
  { name: "Den Haag", href: "/thuiskapper-den-haag" },
  { name: "Utrecht", href: "/thuiskapper-utrecht" },
  { name: "Eindhoven", href: "/thuiskapper-eindhoven" },
  { name: "Tilburg", href: "/thuiskapper-tilburg" },
  { name: "Groningen", href: "/thuiskapper-groningen" },
  { name: "Almere", href: "/thuiskapper-almere" },
  { name: "Breda", href: "/thuiskapper-breda" },
  { name: "Nijmegen", href: "/thuiskapper-nijmegen" },
];

export default function ThuiskapperUtrechtPage() {
  const current = "/thuiskapper-utrecht";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Utrecht | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper in Utrecht en omgeving boeken. Knipbeurten aan huis voor elk haartype, ook in omliggende plaatsen.",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Locaties",
        item: `${SITE_URL}/#kappers`,
      },
      { "@type": "ListItem", position: 3, name: "Utrecht", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Utrecht",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Utrecht",
      addressCountry: "NL",
    },
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Thuiskapper.app",
      url: SITE_URL,
    },
    url: PAGE_URL,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLdWebPage,
            jsonLdBreadcrumbs,
            jsonLdService,
          ]),
        }}
      />

      <PageTop
        title="Thuiskapper in Utrecht"
        description="Kapper aan huis in Utrecht en omgeving: plan snel en gemakkelijk een knipbeurt op locatie."
        crumbs={[
          { label: "Locaties", href: "/#kappers" },
          { label: "Utrecht" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="border border-gray-200 rounded-xl p-4 sm:p-5 bg-white">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Locaties</p>
                    <p className="text-sm text-gray-600">
                      Navigeer tussen steden.
                    </p>
                  </div>
                </div>

                <nav aria-label="Locaties">
                  <ul className="space-y-1">
                    {locations.map((loc) => {
                      const active = loc.href === current;
                      return (
                        <li key={loc.href}>
                          <Link
                            href={loc.href}
                            className={[
                              "flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg border transition-colors",
                              active
                                ? "bg-emerald-600 text-white border-emerald-600"
                                : "bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/30",
                            ].join(" ")}
                          >
                            <span className="font-medium">{loc.name}</span>
                            <ChevronRight
                              className={[
                                "w-4 h-4",
                                active ? "text-white/90" : "text-gray-400",
                              ].join(" ")}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="mt-5 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-sm text-gray-700">
                    Liever meteen boeken? Ga naar{" "}
                    <Link
                      href="/#download"
                      className="text-emerald-700 hover:underline font-medium"
                    >
                      download
                    </Link>{" "}
                    en start in de app.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="lg:col-span-8">
            <article className="space-y-8">
              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Thuiskapper op locatie laten knippen in Utrecht
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Ook in Utrecht en omgeving: wij komen naar u toe.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Wanneer u op zoek bent naar een thuiskapper in de omgeving van
                  Utrecht, bent u bij ons aan het juiste adres. Onze kappers
                  verzorgen knipbeurten in en rond Utrecht en komen ook langs op
                  locaties zoals Woerden, Amersfoort of gewoon Kanaleneiland.
                  Een goed verzorgde knipbeurt op locatie — of u nu stijl haar
                  heeft, golvend, krullend of kroeshaar.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Onze kappers hebben ervaring met allerlei typen en soorten
                  knipbeurten die u maar kunt bedenken. Plan via ons platform
                  gemakkelijk en snel een knipbeurt in via één van onze
                  thuiskappers.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Knipbeurt thuis aan huis in Utrecht
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  In een stad als Utrecht is er uiteraard veel aanbod om uw haar
                  te laten knippen door een thuiskapper. Misschien bent u wat
                  minder goed ter been, of heeft u gewoon geen zin om de deur
                  uit te gaan voor een knipbeurt. In dat geval is ons platform
                  een mooie uitkomst: u plant een afspraak in met een paar
                  drukken op de knop.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Laat één van onze kappers dus gemakkelijk thuis langskomen en
                  geniet van het gemak.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper boeken in Utrecht
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Via onze applicatie kunt u gemakkelijk en snel een knipbeurt
                  aanmaken waarop kappers kunnen bieden om een afspraak tot
                  stand te laten komen. U kunt knipbeurten aanmaken voor 1 tot
                  en met 5 personen tegelijk.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Na het plaatsen van uw knipbeurt ontvangt u biedingen van
                  kappers in de omgeving, die u vervolgens kunt accepteren om
                  een kapper te reserveren. Bent u geïnteresseerd geraakt in het
                  ontvangen van een thuiskapper op locatie in Utrecht? Maak dan
                  snel een account aan en maak gebruik van ons platform.
                </p>

                <div className="mt-5 p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-900 font-semibold mb-1">Tip</p>
                  <p className="text-emerald-800 text-sm">
                    Vermeld duidelijk uw wensen (bijv. opscheer, punten,
                    kleuren) en uw beschikbaarheid voor een sneller en beter
                    voorstel.
                  </p>
                </div>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Een paar voordelen van thuiskappers
                </h2>

                <ul className="space-y-2 text-gray-700">
                  {[
                    "Nooit meer naar drukke plekken hoeven te reizen.",
                    "Lekker thuis in uw eigen omgeving geknipt worden.",
                    "Geen tijdverlies meer door te reizen naar de kapper.",
                    "Reserveer en beoordeel kappers via onze applicatie.",
                    "Altijd een nieuwe kapper beschikbaar voor een knipbeurt.",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-700 leading-relaxed mt-4">
                  En zo zijn er nog meer redenen waarom u beter een thuiskapper
                  naar uw huis kunt laten komen. Naar buiten gaan is vaak druk,
                  en thuis is het gewoon het meest ontspannen.
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Utrecht
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Het maakt onze kappers niet uit waar u zich bevindt in Utrecht
                  — of dit nu Papendorp, Rivierenwijk of ergens in Noordoost is.
                  Thuis geknipt worden op locatie door een thuiskapper kan
                  gemakkelijk via ons platform. Bent u dus op zoek naar een
                  thuiskapper in Utrecht? Maak dan gebruik van ons platform of
                  onze applicatie en boek uw thuiskapper.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#download"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-5 rounded-lg transition-colors"
                  >
                    Boek via de app
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/veelgestelde-vragen"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3.5 px-5 rounded-lg border border-gray-200 transition-colors"
                  >
                    Bekijk FAQ
                  </Link>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
