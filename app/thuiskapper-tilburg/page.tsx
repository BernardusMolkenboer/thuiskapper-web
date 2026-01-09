// app/thuiskapper-tilburg/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import { MapPin, ChevronRight, Scissors, Sparkles, Clock } from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-tilburg";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Tilburg | Kapper aan huis - Thuiskapper.app",
  description:
    "Thuiskapper in Tilburg boeken? Van opscheer tot verven: onze kappers komen aan huis in Tilburg en omgeving (o.a. Udenhout, Oisterwijk, Rijen, Dongen).",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Tilburg | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper in Tilburg boeken? Van opscheer tot verven: onze kappers komen aan huis in Tilburg en omgeving (o.a. Udenhout, Oisterwijk, Rijen, Dongen).",
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

export default function ThuiskapperTilburgPage() {
  const current = "/thuiskapper-tilburg";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Tilburg | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper in Tilburg: boek een kapper aan huis voor opscheer, knippen of verven. Ook beschikbaar in omliggende plaatsen.",
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
      { "@type": "ListItem", position: 3, name: "Tilburg", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Tilburg",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Tilburg",
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
        title="Thuiskapper in Tilburg"
        description="Geen zin om naar de kapsalon te gaan? Boek een kapper aan huis in Tilburg — snel, flexibel en comfortabel."
        crumbs={[
          { label: "Locaties", href: "/#kappers" },
          { label: "Tilburg" },
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
                      Thuiskapper in Tilburg, zo werkt het
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Van opscheer tot verven: alles op locatie.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Wanneer u geen zin heeft om naar de kapsalon te gaan om daar
                  uw haar te laten knippen, heeft u gelukkig nog de thuiskapper.
                  Onze thuiskappers komen door heel Tilburg en verzorgen elke
                  knipbeurt die u voor ogen kunt hebben. Tilburg heeft het
                  allemaal — als het om kappers gaat tenminste! Van opscheer tot
                  uw haren laten verven: u kunt het zo gek niet bedenken.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Dag en nacht kappers beschikbaar op elk moment
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Onze kappers zijn dag en nacht actief en hebben zeker geen
                  9-tot-5 mentaliteit. Misschien gaat u vannacht wel op reis en
                  wilt u van tevoren nog snel een kapper boeken? Ook dat kan via
                  ons. De thuiskappers uit Tilburg beschikken over professionele
                  kwaliteiten — of het nu gaat om mannen knippen of vrouwen
                  knippen.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Verschillende soorten kappers uit Tilburg
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Waar de ene kapper gespecialiseerd is in het knippen van
                  mannen, is de andere kapster juist gespecialiseerd in het
                  knippen van vrouwen. Of u nu lang haar heeft, stijl, golvend
                  of kroeshaar — wij hebben in ieder geval een kapper die past
                  bij uw wensen.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Naast Tilburg komen onze kappers natuurlijk ook in omliggende
                  plaatsen zoals Udenhout, Oisterwijk, Rijen en Dongen — en
                  verder door Nederland.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Op zoek naar een kapper in Tilburg
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Via ons hoeft u nooit meer op zoek naar een nieuwe kapper in
                  de omgeving van Tilburg. Wanneer u een knipbeurt aanmaakt via
                  onze website of app, wordt deze beschikbaar gesteld aan onze
                  kappers. Eén van de thuiskappers uit de omgeving van Tilburg
                  zal vervolgens een bod uitbrengen op uw knipbeurt, die u
                  daarna kunt reserveren en afronden via één van onze
                  betaalmethoden.
                </p>

                <div className="mt-5 p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-900 font-semibold mb-1">Tip</p>
                  <p className="text-emerald-800 text-sm">
                    Beschrijf uw wensen per persoon zo duidelijk mogelijk. Zo
                    krijgt u sneller een passend voorstel.
                  </p>
                </div>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Word gebruiker van Thuiskapper.app
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Word gebruiker van onze applicatie en reserveer/boek
                  gemakkelijk een afspraak met een kapper bij u thuis op
                  locatie. Een knipbeurt aanmaken gaat als volgt:
                </p>

                <ul className="space-y-2 text-gray-700 mt-4">
                  {[
                    "Maak uw knipbeurt aan voor 1-5 personen.",
                    "Beschrijf per persoon hoe u geknipt wilt worden.",
                    "Geef de tijden op van de aankomende 7 dagen waarop u beschikbaar bent.",
                    "Vul de locatie van de knipbeurt in.",
                    "Ontvang biedingen en reserveer een kapper.",
                    "Word geknipt!",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Tilburg
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Wilt u zichzelf eens goed onder handen laten nemen door een
                  thuiskapper? Bekijk dan onze kappers die in Tilburg voor u aan
                  het werk zijn en boek snel uw eerste knipbeurt — thuis in
                  Tilburg op locatie!
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
