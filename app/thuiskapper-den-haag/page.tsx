// app/thuiskapper-den-haag/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-den-haag";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Den Haag | Kapper aan huis - Thuiskapper.app",
  description:
    "Kapper aan huis in Den Haag boeken? Onze thuiskappers knippen stijl, golvend, gekruld en kroeshaar — in centrum en buitenwijken van ’s-Gravenhage.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Den Haag | Kapper aan huis - Thuiskapper.app",
    description:
      "Kapper aan huis in Den Haag boeken? Onze thuiskappers knippen stijl, golvend, gekruld en kroeshaar — in centrum en buitenwijken van ’s-Gravenhage.",
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

export default function ThuiskapperDenHaagPage() {
  const current = "/thuiskapper-den-haag";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Den Haag | Kapper aan huis - Thuiskapper.app",
    description:
      "Kapper aan huis in Den Haag boeken? Thuiskappers voor stijl, golvend, gekruld en kroeshaar — in centrum en buitenwijken.",
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
      { "@type": "ListItem", position: 3, name: "Den Haag", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Den Haag",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Den Haag",
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
        title="Thuiskapper in Den Haag"
        description="Kapper aan huis in Den Haag: onze thuiskappers komen in het centrum én in de buitenwijken van ’s-Gravenhage langs."
        crumbs={[
          { label: "Locaties", href: "/#kappers" },
          { label: "Den Haag" },
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
                      Kapper reserveren thuis op locatie in Den Haag
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Thuiskappers voor elk haartype — ook in ’s-Gravenhage.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Bent u gevestigd in Den Haag en op zoek naar een thuiskapper
                  voor het verzorgen van uw haar? Onze kappers knippen niet
                  alleen stijl en golvend haar, maar uiteraard ook gekruld en
                  kroeshaar. Naast dat onze thuiskappers bij u thuis op locatie
                  langskomen, vervullen ze ook uw wensen op het gebied van uw
                  haar.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Onze kappers komen overal langs in Den Haag — dus niet alleen
                  in de buitenwijken van ’s-Gravenhage, maar natuurlijk ook
                  gewoon in het centrum van de stad.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Soorten kappers in Den Haag
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Wij hebben verschillende soorten kappers in Den Haag die in
                  meerdere specialiteiten getraind zijn. Zo heeft de één veel
                  mannen als klant en de ander juist meer vrouwelijke klanten.
                  Heeft u golvend of gekruld haar en wilt u hiervoor een
                  knipbeurt inplannen via één van onze thuiskappers? Dat is
                  zeker mogelijk.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Niet alleen golvend en gekruld haar kan geknipt worden via
                  onze thuiskappers: ook mensen met stijl haar of kroeshaar zijn
                  gewoon welkom.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper boeken in ’s-Gravenhage
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Via ons platform boekt u gemakkelijk en snel een thuiskapper
                  voor in ’s-Gravenhage. Met een paar drukken op de knop maakt u
                  de knipbeurt beschikbaar voor onze thuiskappers, die
                  vervolgens een bod kunnen uitbrengen.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  U geeft aan of u een thuiskapper wilt ontvangen voor 1 tot en
                  met 5 personen en vervolgens beschrijft u hoe u geknipt wilt
                  worden. Daarna vult u datum, tijd en locatie in. Vervolgens
                  kunt u biedingen accepteren en afronden om de afspraak te
                  bevestigen.
                </p>

                <div className="mt-5 p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-900 font-semibold mb-1">Tip</p>
                  <p className="text-emerald-800 text-sm">
                    Beschrijf per persoon kort de wensen (bijv. opscheer,
                    punten, kleuren). Zo kan de kapper een passender voorstel
                    doen.
                  </p>
                </div>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Voordelen van een kapper thuis op locatie ontvangen
                </h2>

                <ul className="space-y-2 text-gray-700">
                  {[
                    "Geen drukke/openbare plaatsen meer hoeven bezoeken.",
                    "Altijd in uw eigen rustige thuisomgeving de kapper ontvangen.",
                    "Geen tijdverlies meer door te reizen naar de kapsalon.",
                    "Gemakkelijk online reserveren en beoordelingen achterlaten.",
                    "Groot assortiment aan verschillende soorten kappers.",
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
                  En zo hebben wij nog meer argumenten waarom u beter een
                  thuiskapper kunt inhuren dan er één op te zoeken in de stad
                  Den Haag. Ook knipbeurten voor groepen/families zijn een mooie
                  oplossing voor mensen die graag gezamenlijk geknipt willen
                  worden.
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Den Haag
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Het maakt onze kappers niet uit waar u zich bevindt — of dit
                  nou in het centrum van Den Haag is of aan de buitenrand van de
                  stad. Overal komen kappers bij u thuis langs om uw haar onder
                  handen te nemen. Of uw haar nu rood, groen of paars geverfd
                  moet worden, of u gewoon het koppie kaal wilt laten scheren:
                  via een thuiskapper kan het allemaal.
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
