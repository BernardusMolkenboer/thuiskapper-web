// app/thuiskapper-amsterdam/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-amsterdam";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Amsterdam | Kapper aan huis - Thuiskapper.app",
  description:
    "Boek een thuiskapper in Amsterdam. Onze kappers komen bij u op locatie langs — van Zuidas tot Bijlmer. Snel, flexibel en comfortabel thuis geknipt.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Amsterdam | Kapper aan huis - Thuiskapper.app",
    description:
      "Boek een thuiskapper in Amsterdam. Onze kappers komen bij u op locatie langs — van Zuidas tot Bijlmer. Snel, flexibel en comfortabel thuis geknipt.",
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

export default function ThuiskapperAmsterdamPage() {
  const current = "/thuiskapper-amsterdam";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Amsterdam | Kapper aan huis - Thuiskapper.app",
    description:
      "Boek een thuiskapper in Amsterdam. Onze kappers komen bij u op locatie langs — van Zuidas tot Bijlmer.",
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
      { "@type": "ListItem", position: 3, name: "Amsterdam", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Amsterdam",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Amsterdam",
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
        title="Thuiskapper in Amsterdam"
        description="Kapper aan huis in Amsterdam: onze thuiskappers komen overal op locatie langs — snel, flexibel en comfortabel."
        crumbs={[
          { label: "Locaties", href: "/#kappers" },
          { label: "Amsterdam" },
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
                      Kies een stad en navigeer snel.
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
                    en start direct in de app.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-8">
            <article className="space-y-8">
              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Thuiskapper op locatie laten knippen in Amsterdam
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Van de Zuidas tot de Bijlmer: wij komen naar u toe.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Het maakt niet uit waar u zich bevindt in Amsterdam: onze
                  thuiskappers komen overal op locatie langs. Veel drukke
                  plekken zijn tegenwoordig bijna onbereikbaar met de auto.
                  Daarom verzorgen wij voor u kappers aan huis die de diensten
                  op locatie uitvoeren. Gaat het om een simpele opscheer, even
                  de zijkanten strak scheren of alleen de dode puntjes eraf? Er
                  is van alles mogelijk.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Ook voor vrouwen is de app natuurlijk interessant — daarom
                  hebben wij een beoordelingssysteem om u extra zekerheid te
                  geven. Voor onze kappers maakt het niet uit waar in Amsterdam
                  u woont: zij komen naar elke locatie. Laat uw thuiskapper dus
                  gerust komen op de Zuidas, in het hart van onze hoofdstad of
                  gewoon in de Bijlmer.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    De verschillende kappers van Amsterdam
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  In een grote stad als Amsterdam is er natuurlijk een ruim
                  aanbod aan kappers via onze applicatie. U heeft dus genoeg
                  keuze uit kappers die kunnen reageren op uw knipbeurt. Moet u
                  bijvoorbeeld ineens op zakenreis en wilt u nog snel een
                  knipbeurt meepakken? Dat kan.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Onze kappers werken flexibel en niet alleen voor zakenreizen:
                  ook als u minder mobiel bent of liever niet naar drukke
                  locaties gaat, is een thuiskapper ideaal.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Hoe boek je een thuiskapper in Amsterdam?
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Na het aanmaken van een account kunt u, na het inloggen, een
                  knipbeurt aanmaken. U geeft aan of het om 1 tot 5 personen
                  gaat en vervolgens hoe iedereen geknipt wil worden.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Als laatste vult u (waar mogelijk) haarstijl/haartype in en de
                  tijden waarop u beschikbaar bent. Daarna ontvangt u één of
                  meerdere voorstellen van een kapper. U kiest, accepteert en
                  betaalt om de afspraak te bevestigen met een kapper in
                  Amsterdam.
                </p>

                <div className="mt-5 p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-900 font-semibold mb-1">Tip</p>
                  <p className="text-emerald-800 text-sm">
                    Hoe duidelijker u uw knipbeurt omschrijft, hoe beter de
                    kapper tijd en prijs kan inschatten.
                  </p>
                </div>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Voordelen van een kapper aan huis
                </h2>

                <ul className="space-y-2 text-gray-700">
                  {[
                    "Het vermijden van drukke plekken.",
                    "Geniet van de rust terwijl u thuis geknipt wordt.",
                    "Niet meer reizen — dat scheelt tijd.",
                    "Gemakkelijk boeken en digitaal betalen voor extra zekerheid.",
                    "Groot assortiment aan verschillende kappers.",
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
                  En zo zijn er nog veel meer voordelen. Wanneer u eenmaal een
                  thuiskapper boekt, wilt u vaak niet meer terug naar de
                  kapsalon.
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Amsterdam
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Waar u ook bent: u kunt een thuiskapper boeken die naar u toe
                  komt in Amsterdam. Lekker rustig thuis geknipt worden, in uw
                  eigen omgeving. Klaar voor die opscheer, of wilt u uw haar
                  rood laten verven via één van onze kappers in Amsterdam?
                  Probeer het platform en u wilt niet meer anders.
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
