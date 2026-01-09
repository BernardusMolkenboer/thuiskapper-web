// app/thuiskapper-eindhoven/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles, Clock } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-eindhoven";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Eindhoven | Kapper aan huis - Thuiskapper.app",
  description:
    "Thuiskapper in Eindhoven reserveren? Boek snel een kapper aan huis in Stratum, Gestel of Strijp. Flexibel, professioneel en comfortabel thuis geknipt.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Eindhoven | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper in Eindhoven reserveren? Boek snel een kapper aan huis in Stratum, Gestel of Strijp. Flexibel, professioneel en comfortabel thuis geknipt.",
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

export default function ThuiskapperEindhovenPage() {
  const current = "/thuiskapper-eindhoven";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Eindhoven | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper in Eindhoven reserveren: kapper aan huis in o.a. Stratum, Gestel en Strijp. Voor elk haartype en elke stijl.",
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
      { "@type": "ListItem", position: 3, name: "Eindhoven", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Eindhoven",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Eindhoven",
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
        title="Thuiskapper in Eindhoven"
        description="Een thuiskapper reserveren in Eindhoven? Onze kappers komen bij u thuis langs — van Stratum tot Strijp."
        crumbs={[
          { label: "Locaties", href: "/#kappers" },
          { label: "Eindhoven" },
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
                      Een thuiskapper reserveren in Eindhoven doe je zo
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Thuis geknipt worden is een fluitje van een cent.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  U komt net van uw werk en was vergeten dat u nog langs de
                  kapper moest — geen probleem. Via onze website of applicatie
                  is thuis geknipt worden een fluitje van een cent. U boekt
                  gemakkelijk en snel een thuiskapper die bij u thuis op locatie
                  komt knippen.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Of dit nu is bij een huis in Stratum, Gestel of Strijp: voor
                  onze kappers is dat geen enkel probleem. Onze thuiskappers
                  komen overal op locatie langs in Eindhoven, ongeacht waar u
                  zich bevindt.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    De beste thuiskappers van Eindhoven
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Via onze app kunt u in contact komen met professionele
                  thuiskappers. Het maakt verder niet uit of u stijl haar heeft,
                  golvend, gekruld of kroeshaar: onze kappers weten met elk
                  kapsel raad en kunnen uw wensen waarmaken.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Wilt u uw haar laten verven door één van onze professionals
                  die al jaren in het vak zit? Ook dat is geen enkel probleem.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Op elk moment van de dag een fris kapsel
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  De thuiskappers die via ons platform knippen hebben jaren
                  ervaring en weten precies hoe ze u als klant tevreden kunnen
                  houden. Wilt u dus een knipbeurt laten uitvoeren door één van
                  onze professionals? Maak dan gemakkelijk een afspraak via ons
                  platform.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Gemakkelijk een knipbeurt beschikbaar maken
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Via ons platform/app kunt u eenvoudig een knipbeurt
                  beschikbaar maken voor thuiskappers. Vervolgens zal één van de
                  kappers een bod uitbrengen op de door u aangeboden knipbeurt.
                  Deze kunt u accepteren en vervolgens voldoen via ons
                  betalingsplatform.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Het gehele reserveringsproces werkt als volgt:
                </p>

                <ul className="space-y-2 text-gray-700 mt-4">
                  {[
                    "Account aanmaken met uw persoonlijke gegevens.",
                    "Plaats een knipbeurt voor 1-5 personen met hun wensen.",
                    "Geef voor de aankomende week de tijden op waarop u beschikbaar bent.",
                    "Ontvang een bod van één of meerdere kappers.",
                    "Accepteer de bieding en reserveer de kapper.",
                    "Ontvang de kapper en geniet van uw nieuwe kapsel!",
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
                    Voordeel
                  </p>
                  <p className="text-emerald-800 text-sm">
                    U plant makkelijk een afspraak en voorkomt gedoe: reserveer
                    en betaal overzichtelijk via het platform.
                  </p>
                </div>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Voordelen van een thuiskapper
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Via Thuiskapper.app kunt u gemakkelijk een afspraak plannen
                  met een kapper. Wij streven naar een goede samenwerking tussen
                  kapper en klant — en als er iets misgaat, helpen we u om dit
                  netjes op te lossen.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Reserveer en betaal eenvoudig via ons platform en voorkom
                  onduidelijkheid rondom uw afspraak.
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Eindhoven
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Kunt u niet wachten om in Eindhoven een thuiskapper bij u op
                  locatie langs te laten komen? Bekijk dan op onze website welke
                  mogelijkheden er zijn en boek uw thuiskapper via de app.
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
