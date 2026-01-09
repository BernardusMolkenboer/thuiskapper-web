// app/thuiskapper-almere/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import {
  MapPin,
  ChevronRight,
  Scissors,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/thuiskapper-almere";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Thuiskapper in Almere | Kapper aan huis - Thuiskapper.app",
  description:
    "Thuiskapper in Almere boeken? Onze kappers komen aan huis in Almere Buiten, Haven en Hout. Voor stijl, golvend, gekruld en kroeshaar — snel en comfortabel.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Thuiskapper in Almere | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper in Almere boeken? Onze kappers komen aan huis in Almere Buiten, Haven en Hout. Voor stijl, golvend, gekruld en kroeshaar — snel en comfortabel.",
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

export default function ThuiskapperAlmerePage() {
  const current = "/thuiskapper-almere";

  // JSON-LD (SEO Schema)
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Thuiskapper in Almere | Kapper aan huis - Thuiskapper.app",
    description:
      "Thuiskapper in Almere: boek een kapper aan huis in o.a. Almere Buiten, Almere Haven en Almere Hout.",
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
      { "@type": "ListItem", position: 3, name: "Almere", item: PAGE_URL },
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kapper aan huis in Almere",
    serviceType: "Kapper aan huis",
    areaServed: {
      "@type": "City",
      name: "Almere",
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
        title="Thuiskapper in Almere"
        description="Kapper aan huis in Almere: ontspannen thuis geknipt worden, zonder gedoe en zonder reizen."
        crumbs={[{ label: "Locaties", href: "/#kappers" }, { label: "Almere" }]}
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
                      Thuiskapper laten langskomen in Almere
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Thuis ontspannen terwijl u geknipt wordt.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Na een lange werkdag nog even thuis ontspannen, en dan gaat de
                  deurbel: het is de thuiskapper uit de omgeving van Almere die
                  u heeft gereserveerd. U bent slechts enkele stappen verwijderd
                  van een thuiskapper via ons platform. Lekker in uw eigen
                  stoel, met een drankje erbij, terwijl u in alle rust geknipt
                  wordt.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Kapper op locatie in Almere
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Of het nu gaat om stijl, golvend, gekruld of kroeshaar: voor
                  onze specialisten is dat geen enkel probleem. Onze kappers
                  komen langs in heel Almere én de omgeving. Plaatsen in Almere
                  waar onze kappers komen zijn bijvoorbeeld Almere Buiten,
                  Almere Haven en Almere Hout. Plaats uw knipbeurt op ons
                  platform en maak uw eerste afspraak met een thuiskapper.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Nooit meer naar buiten hoeven gaan
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Uiteraard is dat luchtig bedoeld, maar het idee is duidelijk:
                  met een kapper aan huis kunt u drukke plekken vermijden, zoals
                  de binnenstad of een overvolle kapsalon. U bespaart tijd en
                  blijft lekker in uw eigen omgeving.
                </p>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Een thuiskapper in Almere boeken, werkt zo
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Wanneer u geregistreerd bent op onze website of via één van de
                  apps, kunt u vervolgens een knipbeurt plaatsen. Dit gaat als
                  volgt:
                </p>

                <ul className="space-y-2 text-gray-700 mt-4">
                  {[
                    "Een knipbeurt aanmaken kan voor 1 tot 5 personen tegelijk.",
                    "U geeft per persoon aan hoe die persoon geknipt wil worden.",
                    "Vul de beschikbare tijden in van de aankomende 7 dagen.",
                    "Geef als laatste het adres op; daarna komen er biedingen binnen.",
                    "U ontvangt biedingen van kappers in uw dashboard.",
                    "Betaal één van de biedingen om de thuiskapper te reserveren.",
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
                    Beschrijf uw wensen zo duidelijk mogelijk, dan kan de kapper
                    een passend bod doen.
                  </p>
                </div>
              </section>

              <section className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-white">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Thuiskapper-beoordelingen
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Wij werken achter de schermen hard aan een prettig platform
                  voor thuiskappers in Almere en omgeving. Daarom hebben wij een
                  beoordelingssysteem. Hiermee kunt u makkelijk zien wie de
                  bieder is, welke naam de kapper heeft en hoeveel beoordelingen
                  deze op ons platform heeft.
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-7">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thuiskapper in Almere
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Een knipbeurt van een thuiskapper in Almere ontvangen is nog
                  nooit zo makkelijk geweest. Reserveren gaat binnen mum van
                  tijd en kost vrijwel geen moeite. Ook als u slecht ter been
                  bent, of reserveert voor iemand zoals uw vader of moeder op
                  leeftijd, is dat uiteraard mogelijk.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Onze kappers werken netjes en schoon. Thuis een kapper laten
                  komen is een fijn alternatief wanneer u liever niet naar
                  drukke, openbare kapsalons gaat.
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
