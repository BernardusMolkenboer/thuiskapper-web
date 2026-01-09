// app/thuiskapper-rotterdam/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-rotterdam";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Rotterdam | Kapper aan huis - Thuiskapper.app",
  description:
    "Geknipt worden op locatie in Rotterdam? Boek een thuiskapper aan huis in Rotterdam Noord, Zuid of Centrum. Snel, flexibel en comfortabel thuis.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Rotterdam | Kapper aan huis - Thuiskapper.app",
    description:
      "Geknipt worden op locatie in Rotterdam? Boek een thuiskapper aan huis in Rotterdam Noord, Zuid of Centrum. Snel, flexibel en comfortabel thuis.",
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

export default function ThuiskapperRotterdamPage() {
  const current = "/thuiskapper-rotterdam";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Rotterdam | Kapper aan huis - Thuiskapper.app",
    description:
      "Geknipt worden op locatie in Rotterdam? Boek een thuiskapper aan huis in Rotterdam Noord, Zuid of Centrum.",
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
        item: `${SITE_URL}/locaties`,
      },
      { "@type": "ListItem", position: 3, name: "Rotterdam", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Rotterdam",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Rotterdam",
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
        title="Thuiskapper in Rotterdam"
        description="Geknipt worden op locatie in Rotterdam? Onze thuiskappers komen langs in Noord, Zuid en het Centrum."
        crumbs={[
          { label: "Locaties", href: "/locaties" },
          { label: "Rotterdam" },
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
                    Klaar om te boeken? Ga naar{" "}
                    <Link
                      href="/#download"
                      className="text-emerald-700 hover:underline font-medium"
                    >
                      download
                    </Link>{" "}
                    en start direct in de app.
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
                      Geknipt worden op locatie in Rotterdam
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Rotterdam Noord, Zuid en Centrum — wij komen naar u toe.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Zit u gevestigd in Rotterdam en wilt u graag een thuiskapper
                  op locatie langs laten komen om een knipbeurt te verzorgen?
                  Voor onze kappers is dat geen enkel probleem. Zij komen zowel
                  op drukke als op rustigere locaties langs om uw haar te
                  verzorgen. Niet alleen in Rotterdam Noord, maar ook in Zuid en
                  het Centrum van Rotterdam.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Wilt u uw haar laten verven in een andere kleur, een opscheer
                  of moeten er gewoon even de dode puntjes af? Via ons
                  thuiskapper platform kunt u gemakkelijk een knipbeurt plaatsen
                  en uw kapper vervolgens beoordelen.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Soorten kappers in Rotterdam
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Wij hebben niet alleen vrouwelijke of mannelijke kappers, maar
                  kappers van elk segment. Het maakt dus niet uit of u golvend,
                  stijl, gekruld of kroeshaar heeft — in veel gevallen is dit
                  gewoon mogelijk via onze thuiskappers.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Bent u minder beweegbaar, of maakt u een afspraak voor uw
                  vader of moeder op leeftijd die niet meer zomaar naar buiten
                  kan? Ook dan is een thuiskapper een fijn alternatief.
                  Daarnaast kunt u via de app ook plannen op tijden waarop
                  kappers vaak niet meer open zijn.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper boeken in Rotterdam
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Maak gemakkelijk een account aan via ons platform, plaats uw
                  knipbeurt en vertel hoe u geknipt wilt worden. Vervolgens
                  geeft u data en tijden op. Daarna ontvangt u biedingen van
                  onze kappers.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Wanneer u een bod accepteert en de reservering afrondt,
                  bevestigt u hiermee de afspraak zodat de kapper langskomt voor
                  een knipbeurt. Knipbeurten in Rotterdam reserveren kan voor 1
                  tot en met 5 personen — ook voor grote families is dit een
                  goed alternatief.
                </p>

                <div className="mt-5 p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-900 font-semibold mb-1">Tip</p>
                  <p className="text-emerald-800 text-sm">
                    Vermeld per persoon de wensen (bijv. opscheer, punten,
                    kleuren) zodat de kapper een passend voorstel kan doen.
                  </p>
                </div>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Een paar voordelen van een kapper aan huis
                </h2>

                <ul className="space-y-2 text-gray-700">
                  {[
                    "U hoeft niet meer naar openbare en drukke plekken.",
                    "U zit lekker thuis, in uw eigen omgeving.",
                    "Scheelt tijd doordat u niet hoeft te reizen.",
                    "Gemakkelijk online digitaal boeken en afronden.",
                    "Zeer groot assortiment aan verschillende kappers.",
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
                  En zo zijn er nog meer redenen waarom een thuiskapper vaak een
                  betere keuze is dan zelf naar de kapper gaan.
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Rotterdam
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Waar u zich ook bevindt in Rotterdam: voor onze thuiskappers
                  is dat geen probleem. De kapper komt bij u thuis op locatie
                  langs zodra er een afspraak is geboekt via het platform. Bent
                  u er klaar voor om uw haar te laten kleuren door één van onze
                  specialisten in de app? Probeer het eens en kijk of het bij u
                  past!
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
                    href="/vraag-en-antwoord"
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
