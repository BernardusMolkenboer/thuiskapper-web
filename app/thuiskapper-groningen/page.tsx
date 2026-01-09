// app/thuiskapper-groningen/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles, Clock } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-groningen";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Groningen | Kapper aan huis - Thuiskapper.app",
  description:
    "Reserveer gemakkelijk een thuiskapper in Groningen. Voor stijl, golvend, gekruld of kroeshaar — ook in omgeving (Roden, Hoogezand, Haren).",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Groningen | Kapper aan huis - Thuiskapper.app",
    description:
      "Reserveer gemakkelijk een thuiskapper in Groningen. Voor stijl, golvend, gekruld of kroeshaar — ook in omgeving (Roden, Hoogezand, Haren).",
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

export default function ThuiskapperGroningenPage() {
  const current = "/thuiskapper-groningen";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Groningen | Kapper aan huis - Thuiskapper.app",
    description:
      "Reserveer gemakkelijk een thuiskapper in Groningen en omgeving. Voor ieder haartype, thuis op locatie.",
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
      { "@type": "ListItem", position: 3, name: "Groningen", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Groningen",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Groningen",
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
        title="Thuiskapper in Groningen"
        description="Reserveer gemakkelijk een kapper aan huis in Groningen en omgeving — snel, flexibel en comfortabel thuis geknipt."
        crumbs={[
          { label: "Locaties", href: "/locaties" },
          { label: "Groningen" },
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
                      Reserveer gemakkelijk een thuiskapper in Groningen
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Perfect voor drukke werkdagen en weinig tijd.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Heeft u een lange werkdag gehad of bent u doordeweeks vaak
                  laat thuis door uw werk? Dan is Thuiskapper.app een goed
                  alternatief om toch een knipbeurt te plannen. Laat uzelf
                  gemakkelijk en ontspannen onder handen nemen door één van onze
                  thuiskappers uit de omgeving van Groningen.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Via onze app reserveert u binnen mum van tijd een fris nieuw
                  kapsel van één van onze kappers die bij u thuis op locatie
                  komt knippen.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Ontdek de beste thuiskappers van Groningen
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Van stijl en golvend tot gekruld of kroeshaar: voor onze
                  kappers is elk haartype geen uitdaging, zeker niet wanneer het
                  hun specialiteit is. Laat uw haar eens knippen op een
                  uitdagende manier en kies eens voor een nieuwe coupe.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  De kappers uit Groningen komen bij u thuis op locatie om er
                  een kunstwerk van te maken, zoals u dat van ze verwacht. Lees
                  en schrijf gemakkelijk beoordelingen voor of na het
                  gebruikmaken van onze service.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Een fris kapsel, wanneer u dat maar wilt
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Met thuiskappers hoeft u nooit meer te plannen in een drukke
                  kapsalon. Lekker thuis een kapper ontvangen is natuurlijk een
                  privilege. Onze kappers komen op de door u opgegeven datum en
                  tijd langs om uw haar te knippen zoals u dat wilt.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Gaat u morgen op zakenreis en wilt u nog even snel een
                  knipbeurt inplannen voordat u op reis gaat? Geen probleem.
                  Bent u minder goed ter been? Ook dan zijn thuiskappers een
                  perfecte uitkomst.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper op locatie laten komen in Groningen werkt zo
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Wanneer u via ons een knipbeurt plaatst via uw smartphone of
                  computer, maken wij deze beschikbaar voor thuiskappers.
                  Vervolgens zal één of meerdere kappers een bod uitbrengen. U
                  kunt daarna datum en tijd bevestigen en de boeking afronden om
                  de knipbeurt vast te zetten.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Een knipbeurt plaatsen werkt als volgt:
                </p>

                <ul className="space-y-2 text-gray-700 mt-4">
                  {[
                    "U maakt een account aan met uw gegevens.",
                    "Vervolgens plaatst u een knipbeurt met uw wensen.",
                    "U geeft de tijden op van de aankomende 7 dagen waarop u geknipt kunt worden.",
                    "Ontvang biedingen van één of meerdere kappers.",
                    "Accepteer het bod en rond de betaling af.",
                    "U wordt geknipt en geniet van uw nieuwe kapsel!",
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
                    Bekijk hoe makkelijk het werkt
                  </p>
                  <p className="text-emerald-800 text-sm">
                    Het maakt niet uit waar in Groningen of omgeving u zich
                    bevindt. We komen ook in plaatsen zoals Roden, Hoogezand en
                    Haren.
                  </p>
                </div>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Groningen en omgeving
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Het maakt dus niet uit waar u zich bevindt in Groningen of
                  omstreken. Naast Groningen komen onze kappers ook in de
                  omgeving, denk aan Roden, Hoogezand en Haren. Vind de beste
                  thuiskapper via onze website en betaal gemakkelijk online. Zo
                  heeft u extra zekerheid dat de kapper ook daadwerkelijk
                  langskomt.
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Groningen
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Bent u geïnteresseerd om een kapper uit de omgeving van
                  Groningen te proberen voor de thuiskapperdienst? Onze kappers
                  komen flexibel bij u op locatie langs — of dat nu ’s avonds of
                  in de ochtend is. Wees verrast en reserveer uw knipbeurt
                  vandaag nog!
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
