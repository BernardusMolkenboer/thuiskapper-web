// app/thuiskapper-nijmegen/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles, Clock } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-nijmegen";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Nijmegen | Kapper aan huis - Thuiskapper.app",
  description:
    "Ontdek de beste thuiskappers van Nijmegen. Boek een kapper aan huis in Nijmegen Noord, Lindenholt of Dukenburg — ook voor 1-5 personen.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Nijmegen | Kapper aan huis - Thuiskapper.app",
    description:
      "Ontdek de beste thuiskappers van Nijmegen. Boek een kapper aan huis in Nijmegen Noord, Lindenholt of Dukenburg — ook voor 1-5 personen.",
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

export default function ThuiskapperNijmegenPage() {
  const current = "/thuiskapper-nijmegen";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Nijmegen | Kapper aan huis - Thuiskapper.app",
    description:
      "Ontdek de beste thuiskappers van Nijmegen. Kapper aan huis in o.a. Nijmegen-Noord, Lindenholt en Dukenburg.",
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
      { "@type": "ListItem", position: 3, name: "Nijmegen", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Nijmegen",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Nijmegen",
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
        title="Thuiskapper in Nijmegen"
        description="Ontdek de beste thuiskappers van Nijmegen en boek een kapper aan huis — comfortabel, snel en flexibel."
        crumbs={[
          { label: "Locaties", href: "/locaties" },
          { label: "Nijmegen" },
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
                      Ontdek de beste thuiskappers van Nijmegen
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Thuis op locatie, in uw eigen stoel en sfeer.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Heeft u een keer geen zin om de deur uit te gaan om er goed
                  uit te zien? Laat dan één van de thuiskappers uit de omgeving
                  van Nijmegen bij u langskomen. Thuis op locatie, in uw eigen
                  stoel met uw eigen muziek op de achtergrond. Laat de kapper
                  bij u thuis komen en word geknipt — eventueel met tot 4 andere
                  personen.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Houdt u van een strakke coupe en wilt u elke week een vers
                  kapsel? Ook daar kunnen onze kappers bij helpen met een
                  knipbeurt op locatie. Onze kappers komen door heel Nijmegen,
                  dus ook als u in Nijmegen-Noord, Lindenholt of Dukenburg
                  woont. Een thuiskapper boeken op locatie is nog nooit zo
                  makkelijk geweest!
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Thuiskapper-ervaring bij u thuis in Nijmegen
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Misschien heeft u al een favoriete kapper in Nijmegen waar u
                  vaker reserveert — bijvoorbeeld in de binnenstad. U hoeft de
                  deur niet meer uit om geknipt te worden: wij zorgen dat de
                  kapper bij u thuis op locatie komt. De kappers uit Nijmegen
                  zijn altijd met hun eigen gereedschap op pad en verzorgen een
                  knipbeurt aan huis, terwijl u in uw eigen sfeer kunt
                  ontspannen.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Misschien wilt u wel een drankje tijdens de knipbeurt, met uw
                  eigen muziek op de achtergrond — thuis heeft u die vrijheid.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Kappers op locatie laten komen
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Het is een privilege als u niet meer naar buiten hoeft en de
                  kapper gewoon thuis kunt ontvangen. Zo hoeft u niet meer naar
                  drukke locaties of een kapsalon om uw haar onder handen te
                  laten nemen. Daarnaast bespaart het u tijd, omdat de kapper
                  naar u toe komt en u zelf niet op pad hoeft.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Onze thuiskappers knippen niet alleen mannen, maar zeker ook
                  vrouwen. En of u nu stijl haar, golvend haar, gekruld haar of
                  kroeshaar heeft: voor onze kappers is dat geen probleem.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Een knipbeurt plaatsen via Thuiskapper.app gaat zo
                </h2>

                <ul className="space-y-2 text-gray-700 mt-2">
                  {[
                    "Selecteer een knipbeurt voor 1-5 personen.",
                    "Geef (optioneel) de leeftijd op en hoe u geknipt wilt worden.",
                    "Geef tijden op wanneer u beschikbaar bent.",
                    "Vul uw adres in om de knipbeurt af te ronden.",
                    "Ontvang en betaal biedingen van kappers om te reserveren.",
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
                  <p className="text-emerald-900 font-semibold mb-1">Tip</p>
                  <p className="text-emerald-800 text-sm">
                    Hoe duidelijker uw wensen, hoe sneller u een passend bod
                    ontvangt.
                  </p>
                </div>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Het gemak van een thuiskapper op locatie in Nijmegen
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Een thuiskapper op locatie is echt iets wat u een keer wilt
                  ervaren. Als u eenmaal het gemak heeft ervaren, kunnen wij u
                  garanderen dat u niet meer anders wilt. Wij streven naar een
                  goede relatie tussen kapper en klant en nemen hiermee zoveel
                  mogelijk stress weg.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Reserveren en een kapper boeken kan gemakkelijk via ons
                  platform. Betalen kan met verschillende methodes zoals
                  creditcard, PayPal en natuurlijk iDEAL.
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
