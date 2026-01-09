// app/thuiskapper-breda/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles, Clock } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-breda";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Breda | Kapper aan huis - Thuiskapper.app",
  description:
    "Thuiskapper aan huis in Breda boeken? Onze kappers komen bij u op locatie in o.a. Hoge Vucht, Princenhage en Haagse Beemden. Snel en comfortabel thuis geknipt.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Breda | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper aan huis in Breda boeken? Onze kappers komen bij u op locatie in o.a. Hoge Vucht, Princenhage en Haagse Beemden. Snel en comfortabel thuis geknipt.",
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

export default function ThuiskapperBredaPage() {
  const current = "/thuiskapper-breda";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Breda | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper aan huis in Breda. Boek een kapper op locatie in o.a. Hoge Vucht, Princenhage en Haagse Beemden.",
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
      { "@type": "ListItem", position: 3, name: "Breda", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Breda",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Breda",
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
        title="Thuiskapper in Breda"
        description="Geen zin om naar de kapper te gaan? Boek een kapper aan huis in Breda — comfortabel, snel en flexibel."
        crumbs={[{ label: "Locaties", href: "/locaties" }, { label: "Breda" }]}
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
                      Thuiskapper aan huis laten knippen in Breda
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Snel en ontspannen thuis geknipt.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  U kent het wel: de hele week tot laat gewerkt of elke dag pas
                  laat klaar. In de meeste gevallen heeft u dan geen zin meer om
                  een bezoek te brengen aan een kapper in de binnenstad. Ook kan
                  het zijn dat u liever niet naar een drukke locatie gaat. Dat
                  is meer dan begrijpelijk.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Via onze app kunt u gemakkelijk een thuiskapper in Breda langs
                  laten komen op locatie.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Ontdek de professionele thuiskappers
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Het maakt onze kappers niet uit of uw haar golvend, stijl,
                  gekruld of kroeshaar is. Geen enkele haarsoort vormt een
                  uitdaging. Laat uw haar eens knippen in een strakke look of
                  laat er een kunstwerk van maken. Onze thuiskappers uit de
                  omgeving van Breda komen graag bij u thuis langs.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  U kunt ook beoordelingen lezen en schrijven over kappers —
                  handig voor en na uw afspraak.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Altijd netjes geknipt en op afspraak
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Met thuiskappers hoeft u niet meer langs de kapsalon. Dat
                  scheelt tijd, omdat u niet hoeft te reizen. Bovendien is het
                  super ontspannend om thuis geknipt te worden: met een muziekje
                  op de achtergrond en eventueel een drankje erbij. Totaal in
                  eigen sfeer dus.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Onze kappers werken flexibel. Wilt u nog snel even een
                  thuiskapper langs laten komen voordat u bijvoorbeeld op
                  zakenreis gaat? Geen probleem.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper op locatie laten komen in Breda
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Wanneer u een knipbeurt plaatst (na het aanmaken van een
                  account), geeft u aan om hoeveel personen het gaat. Meer dan 1
                  persoon laten knippen is dus ook mogelijk. De website/app
                  werkt als volgt:
                </p>

                <ul className="space-y-2 text-gray-700 mt-4">
                  {[
                    "U geeft aan om hoeveel personen het gaat (1-5).",
                    "Per persoon geeft u (optioneel) de leeftijd en hoe die geknipt wil worden.",
                    "Voor de komende 7 dagen geeft u tijden op wanneer u beschikbaar bent.",
                    "Vul het adres in waar de thuiskapper naartoe komt.",
                    "U ontvangt biedingen van één of meerdere kappers die u kunt afronden om de reservering te bevestigen.",
                    "De afspraak is bevestigd voor de overeengekomen tijd.",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-900 font-semibold mb-1">
                    Kijken hoe Thuiskapper.app werkt
                  </p>
                  <p className="text-emerald-800 text-sm">
                    Het maakt niet uit waar u bent in Breda: onze thuiskappers
                    komen overal — bijvoorbeeld in Hoge Vucht, Princenhage en
                    Haagse Beemden.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Maak via ons uw eerste afspraak met een thuiskapper en ervaar
                  hoe makkelijk het is.
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Breda
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Bent u geïnteresseerd geraakt om eens een afspraak met een
                  kapper uit Breda of omgeving te maken? Onze kappers komen
                  flexibel bij u langs op locatie in Breda. Wees verrast over de
                  kwaliteiten die onze thuiskappers kunnen leveren.
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
