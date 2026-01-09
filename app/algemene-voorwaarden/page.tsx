// app/algemene-voorwaarden/page.tsx
import type { Metadata } from "next";
import PageTop from "@/components/PageTop";
import Link from "next/link";
import { Mail, ShieldAlert, Info } from "lucide-react";

const LAST_UPDATED = "9 januari 2026";
const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/algemene-voorwaarden";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | Thuiskapper.app",
  description:
    "Lees de algemene voorwaarden van Thuiskapper.app. Deze voorwaarden leggen uit hoe het platform werkt, welke rollen er zijn en welke afspraken gelden bij het gebruik.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: "Algemene voorwaarden | Thuiskapper.app",
    description:
      "Lees de algemene voorwaarden van Thuiskapper.app. Deze voorwaarden leggen uit hoe het platform werkt, welke rollen er zijn en welke afspraken gelden bij het gebruik.",
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Thuiskapper.app",
    type: "article",
    locale: "nl_NL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlgemeneVoorwaardenPage() {
  const pageUrl = `${SITE_URL}${CANONICAL_PATH}`;

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Algemene voorwaarden | Thuiskapper.app",
    description:
      "Lees de algemene voorwaarden van Thuiskapper.app. Deze voorwaarden leggen uit hoe het platform werkt, welke rollen er zijn en welke afspraken gelden bij het gebruik.",
    inLanguage: "nl-NL",
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
      email: "info@thuiskapper.app",
    },
    dateModified: "2026-01-09",
    datePublished: "2026-01-09",
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Algemene voorwaarden",
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD (SEO Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLdWebPage, jsonLdBreadcrumbs]),
        }}
      />

      <PageTop
        title="Algemene voorwaarden"
        description="Deze voorwaarden leggen uit hoe Thuiskapper.app werkt, welke rollen er zijn (platform, klant en kapper) en welke afspraken gelden bij het gebruik van onze diensten."
        crumbs={[{ label: "Algemene voorwaarden" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            <strong>Laatst bijgewerkt:</strong> {LAST_UPDATED}
          </p>

          <div className="not-prose bg-amber-50 border border-amber-200 rounded-lg p-5 mt-6 mb-10">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-800 mt-0.5" />
              <div>
                <p className="text-amber-900 font-semibold mb-1">
                  Belangrijke samenvatting
                </p>
                <ul className="text-amber-800 text-sm space-y-1 list-disc pl-5">
                  <li>
                    Thuiskapper.app is een <strong>platform</strong> dat klanten
                    en kappers met elkaar in contact brengt.
                  </li>
                  <li>
                    De overeenkomst voor de knipdienst komt doorgaans tot stand
                    tussen <strong>klant</strong> en <strong>kapper</strong>.
                  </li>
                  <li>
                    Betaling, annulering en klachten kunnen (deels) via het
                    platform verlopen, afhankelijk van de gekozen flow in de
                    app.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2>1. Definities</h2>
          <ul>
            <li>
              <strong>Platform:</strong> de website(s), mobiele app(s) en
              overige digitale diensten van Thuiskapper.app.
            </li>
            <li>
              <strong>Thuiskapper.app (“wij”):</strong> de aanbieder/beheerder
              van het Platform.
            </li>
            <li>
              <strong>Klant:</strong> een natuurlijke persoon of rechtspersoon
              die via het Platform een afspraak plaatst/boekt.
            </li>
            <li>
              <strong>Kapper:</strong> een zelfstandige professional of
              (kappers)organisatie die via het Platform diensten aanbiedt en/of
              uitvoert.
            </li>
            <li>
              <strong>Dienst:</strong> de dienstverlening door Thuiskapper.app
              aan gebruikers, waaronder het faciliteren van het plaatsen van
              aanvragen/afspraken en het tot stand brengen van contact tussen
              Klant en Kapper.
            </li>
            <li>
              <strong>Afspraak:</strong> een door Klant geboekte behandeling
              (bijv. knippen/baard/styling) die door een Kapper wordt
              uitgevoerd.
            </li>
            <li>
              <strong>Overeenkomst:</strong> de overeenkomst voor uitvoering van
              de Afspraak tussen Klant en Kapper.
            </li>
            <li>
              <strong>Fooi:</strong> een vrijwillige extra betaling door Klant
              aan Kapper buiten of bovenop de overeengekomen prijs (indien
              beschikbaar).
            </li>
          </ul>

          <h2>2. Identiteit en contact</h2>
          <p>Voor vragen over het Platform kunt u contact opnemen via:</p>

          <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-gray-900 font-semibold mb-2">Thuiskapper.app</p>
            <p className="text-gray-700 mb-1">
              E-mail:{" "}
              <a
                href="mailto:info@thuiskapper.app"
                className="text-emerald-600 hover:underline inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                info@thuiskapper.app
              </a>
            </p>
            <p className="text-gray-700">
              Website:{" "}
              <a className="text-emerald-600 hover:underline" href={SITE_URL}>
                {SITE_URL}
              </a>
            </p>
          </div>

          <h2>3. Toepasselijkheid</h2>
          <ol>
            <li>
              Deze algemene voorwaarden zijn van toepassing op het gebruik van
              het Platform en op de Dienst van Thuiskapper.app.
            </li>
            <li>
              Voor zover een Afspraak leidt tot een Overeenkomst voor uitvoering
              van een behandeling, komt die Overeenkomst in beginsel tot stand
              tussen Klant en Kapper. Thuiskapper.app is in dat geval
              bemiddelend/faciliterend.
            </li>
            <li>
              Indien er aanvullende voorwaarden gelden (bijv. specifieke
              voorwaarden van een Kapper), dan worden deze vóór of tijdens het
              boeken kenbaar gemaakt.
            </li>
          </ol>

          <h2>4. Gebruik van het Platform</h2>
          <ol>
            <li>
              Gebruikers dienen correcte en actuele gegevens te verstrekken
              (zoals naam, contact- en adresgegevens) wanneer dit nodig is voor
              de Afspraak.
            </li>
            <li>
              Het is niet toegestaan het Platform te misbruiken, te verstoren of
              te gebruiken in strijd met wet- en regelgeving.
            </li>
            <li>
              Thuiskapper.app kan maatregelen nemen bij misbruik, waaronder het
              beperken of beëindigen van toegang tot het Platform.
            </li>
          </ol>

          <h2>5. Aanbod, prijzen en informatie</h2>
          <ol>
            <li>
              Kappers bepalen zelf hun aanbod, beschikbaarheid en (waar van
              toepassing) prijzen, tenzij in de app anders wordt aangegeven.
            </li>
            <li>
              Wij doen ons best om informatie op het Platform actueel te houden
              (zoals profielen en beschrijvingen), maar kunnen niet garanderen
              dat alle informatie altijd volledig of foutloos is.
            </li>
            <li>
              Kennelijke vergissingen of fouten (bijv. evidente prijsfouten)
              binden Thuiskapper.app, Klant of Kapper niet.
            </li>
          </ol>

          <h2>6. Totstandkoming van de Overeenkomst</h2>
          <ol>
            <li>
              Een Overeenkomst ontstaat doorgaans op het moment dat een Afspraak
              door Klant is bevestigd (bijv. via een “Boek”/“Reserveer” stap) en
              door Kapper is geaccepteerd, of wanneer het Platform aangeeft dat
              de boeking definitief is.
            </li>
            <li>
              De Afspraak kan alleen goed worden uitgevoerd als Klant juiste
              contact- en adresgegevens aanlevert. Klant is verantwoordelijk
              voor de juistheid daarvan.
            </li>
            <li>
              Eventuele bijzondere wensen, medische/allergie-informatie of
              relevante omstandigheden dienen vóór de behandeling met de Kapper
              te worden besproken.
            </li>
          </ol>

          <h2>7. Annuleren, wijzigen en no-show</h2>
          <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-lg p-5 mt-4 mb-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-800 mt-0.5" />
              <p className="text-emerald-900 text-sm">
                Let op: exacte annuleringsregels kunnen per Kapper verschillen
                en worden in de app (bij het boeken) getoond. Onderstaande
                regels gelden als algemene uitgangspunten.
              </p>
            </div>
          </div>
          <ol>
            <li>
              Klant kan een Afspraak wijzigen of annuleren volgens de
              voorwaarden die bij de Afspraak worden weergegeven (bijv. tot een
              bepaalde tijd vooraf kosteloos).
            </li>
            <li>
              Bij te late annulering of no-show (niet verschijnen) kan de Kapper
              kosten in rekening brengen (bijv. (een deel van) het tarief), voor
              zover wettelijk toegestaan en vooraf kenbaar gemaakt.
            </li>
            <li>
              Indien een Kapper door overmacht of andere redenen niet kan
              uitvoeren, zal de Kapper of Thuiskapper.app (afhankelijk van de
              flow) contact opnemen om een alternatief te bieden, zoals een
              nieuwe afspraak of annulering.
            </li>
          </ol>

          <h2>8. Betaling</h2>
          <ol>
            <li>
              Indien het Platform betaling faciliteert, kan betaling verlopen
              via een externe betalingsdienstverlener (bijv. Mollie of een
              gelijkwaardige provider).
            </li>
            <li>
              Eventuele betaalmethoden en betaalmomenten worden in de app
              weergegeven tijdens het boeken.
            </li>
            <li>
              Bij terugbetalingen (indien van toepassing) wordt het bedrag
              teruggestort via dezelfde betaalroute, tenzij anders
              overeengekomen.
            </li>
          </ol>

          <h2>9. Uitvoering van de Afspraak</h2>
          <ol>
            <li>
              De Kapper is verantwoordelijk voor de uitvoering en kwaliteit van
              de behandeling, het gebruikte materiaal en het naleven van
              toepasselijke (hygiëne)regels.
            </li>
            <li>
              Thuiskapper.app is in beginsel niet aansprakelijk voor de
              uitvoering van de Overeenkomst door de Kapper, tenzij dwingend
              recht anders bepaalt.
            </li>
            <li>
              Fooi is altijd vrijwillig en – indien gegeven – bedoeld voor de
              Kapper (tenzij in de app anders aangegeven).
            </li>
          </ol>

          <h2>10. Klachten</h2>
          <ol>
            <li>
              Klachten over de uitvoering van een Afspraak (kwaliteit, gedrag,
              resultaat) dienen primair bij de Kapper te worden gemeld zodat een
              oplossing kan worden gezocht.
            </li>
            <li>
              Klachten over het Platform of onze Dienst kunt u melden via{" "}
              <a href="mailto:info@thuiskapper.app">info@thuiskapper.app</a>.
            </li>
            <li>
              Wij streven ernaar om binnen een redelijke termijn te reageren en
              een oplossing te bieden, doorgaans binnen 14 dagen. In complexe
              gevallen kan dit langer duren; u ontvangt dan een update.
            </li>
          </ol>

          <h2>11. Aansprakelijkheid</h2>
          <ol>
            <li>
              Thuiskapper.app is niet aansprakelijk voor schade die voortvloeit
              uit de uitvoering van de behandeling door een Kapper, behalve
              wanneer sprake is van opzet of bewuste roekeloosheid aan onze kant
              of wanneer dwingend recht anders bepaalt.
            </li>
            <li>
              Thuiskapper.app is niet aansprakelijk voor indirecte schade, zoals
              gevolgschade, gemiste besparingen of gemiste omzet.
            </li>
            <li>
              Voor zover Thuiskapper.app toch aansprakelijk is, is de
              aansprakelijkheid beperkt tot het bedrag dat (in het betreffende
              geval) via het Platform is betaald voor de Afspraak, tenzij
              dwingend recht anders voorschrijft.
            </li>
          </ol>

          <h2>12. Privacy en cookies</h2>
          <p>
            Wij verwerken persoonsgegevens in overeenstemming met ons{" "}
            <Link href="/privacy">privacybeleid</Link>. Informatie over cookies
            en vergelijkbare technologieën vindt u in onze{" "}
            <Link href="/cookies">cookieverklaring</Link>.
          </p>

          <h2>13. Wijzigingen</h2>
          <p>
            Wij kunnen deze algemene voorwaarden wijzigen. De meest recente
            versie staat altijd op deze pagina, met vermelding van de datum van
            de laatste update.
          </p>

          <h2>14. Toepasselijk recht</h2>
          <p>
            Op deze algemene voorwaarden en het gebruik van het Platform is
            Nederlands recht van toepassing. Geschillen worden – voor zover
            wettelijk toegestaan – voorgelegd aan de bevoegde rechter in
            Nederland.
          </p>
        </div>
      </div>
    </div>
  );
}
