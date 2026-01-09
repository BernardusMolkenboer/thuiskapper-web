// app/privacy/page.tsx
import type { Metadata } from "next";
import PageTop from "@/components/PageTop";
import Link from "next/link";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/privacy";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;

const LAST_UPDATED_DISPLAY = "27 december 2025";
const LAST_UPDATED_ISO = "2025-12-27";

export const metadata: Metadata = {
  title: "Privacybeleid | Thuiskapper.app",
  description:
    "Lees hoe Thuiskapper.app persoonsgegevens verwerkt, waarom we gegevens verwerken, met wie we delen en welke rechten u heeft onder de AVG.",
  alternates: {
    canonical: CANONICAL_PATH,
  },
  openGraph: {
    title: "Privacybeleid | Thuiskapper.app",
    description:
      "Lees hoe Thuiskapper.app persoonsgegevens verwerkt, waarom we gegevens verwerken, met wie we delen en welke rechten u heeft onder de AVG.",
    url: PAGE_URL,
    siteName: "Thuiskapper.app",
    type: "article",
    locale: "nl_NL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacy() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Privacybeleid | Thuiskapper.app",
    description:
      "Privacybeleid van Thuiskapper.app met uitleg over gegevensverwerking en rechten onder de AVG.",
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
      email: "privacy@thuiskapper.app",
    },
    dateModified: LAST_UPDATED_ISO,
    datePublished: LAST_UPDATED_ISO,
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacybeleid",
        item: PAGE_URL,
      },
    ],
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Thuiskapper.app",
    url: SITE_URL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@thuiskapper.app",
        availableLanguage: ["nl"],
      },
      {
        "@type": "ContactPoint",
        contactType: "privacy",
        email: "privacy@thuiskapper.app",
        availableLanguage: ["nl"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD (SEO Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLdWebPage,
            jsonLdBreadcrumbs,
            jsonLdOrganization,
          ]),
        }}
      />

      <PageTop
        title="Privacybeleid"
        description="Lees hoe Thuiskapper.app omgaat met persoonsgegevens, waarom we gegevens verwerken en welke rechten u heeft."
        crumbs={[{ label: "Privacybeleid" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Laatst bijgewerkt:</strong> {LAST_UPDATED_DISPLAY}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Inleiding
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thuiskapper ("wij", "ons" of "onze") respecteert uw privacy en zet
              zich in voor de bescherming van uw persoonlijke gegevens. Dit
              privacybeleid beschrijft hoe wij informatie verzamelen, gebruiken
              en delen wanneer u onze mobiele applicatie gebruikt.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Informatie die wij verzamelen
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.1 Informatie die u verstrekt
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Accountinformatie (naam, e-mailadres, telefoonnummer)</li>
              <li>Profielinformatie (profielfoto, bio, vaardigheden)</li>
              <li>Locatiegegevens (adres voor dienstverlening)</li>
              <li>
                Betalingsinformatie (verwerkt via beveiligde betalingsproviders)
              </li>
              <li>Communicatie tussen gebruikers en kappers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.2 Automatisch verzamelde informatie
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Apparaatinformatie (model, besturingssysteem, unieke
                identificatoren)
              </li>
              <li>Loggegevens (IP-adres, toegangstijden, app-crashes)</li>
              <li>
                Gebruiksgegevens (functiegebruik, interacties binnen de app)
              </li>
              <li>Locatiegegevens (met uw toestemming)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Hoe wij uw informatie gebruiken
            </h2>
            <p className="text-gray-700 mb-3">
              Wij gebruiken de verzamelde informatie voor:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Het leveren en verbeteren van onze diensten</li>
              <li>Het faciliteren van afspraken tussen klanten en kappers</li>
              <li>Het verwerken van betalingen en transacties</li>
              <li>Het versturen van notificaties over afspraken en updates</li>
              <li>Klantenondersteuning en communicatie</li>
              <li>
                Het analyseren van gebruikspatronen om de app te verbeteren
              </li>
              <li>Het voorkomen van fraude en misbruik</li>
              <li>Naleving van wettelijke verplichtingen</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Delen van informatie
            </h2>
            <p className="text-gray-700 mb-3">Wij delen uw informatie met:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Kappers:</strong> Noodzakelijke informatie voor het
                uitvoeren van diensten
              </li>
              <li>
                <strong>Dienstverleners:</strong> Partijen die ons helpen bij
                betalingsverwerking, hosting en analyses
              </li>
              <li>
                <strong>Wettelijke verplichting:</strong> Wanneer vereist door
                de wet of ter bescherming van rechten
              </li>
              <li>
                <strong>Bedrijfsoverdracht:</strong> Bij fusie, overname of
                verkoop van activa
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              Wij verkopen uw persoonlijke gegevens nooit aan derden.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Gegevensbeveiliging
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wij implementeren passende technische en organisatorische
              maatregelen om uw persoonlijke gegevens te beschermen tegen
              ongeautoriseerde toegang, wijziging, openbaarmaking of
              vernietiging. Dit omvat encryptie, beveiligde servers en
              regelmatige beveiligingsbeoordelingen.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Uw rechten
            </h2>
            <p className="text-gray-700 mb-3">
              Onder de AVG heeft u de volgende rechten:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Recht op inzage:</strong> Toegang tot uw persoonlijke
                gegevens
              </li>
              <li>
                <strong>Recht op rectificatie:</strong> Correctie van onjuiste
                gegevens
              </li>
              <li>
                <strong>Recht op verwijdering:</strong> Verwijdering van uw
                gegevens ("recht om vergeten te worden")
              </li>
              <li>
                <strong>Recht op beperking:</strong> Beperking van de verwerking
                van uw gegevens
              </li>
              <li>
                <strong>Recht op dataportabiliteit:</strong> Ontvang uw gegevens
                in een gestructureerd formaat
              </li>
              <li>
                <strong>Recht van bezwaar:</strong> Bezwaar maken tegen bepaalde
                verwerkingen
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              Om deze rechten uit te oefenen, kunt u contact met ons opnemen via
              de contactgegevens onderaan dit beleid.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Bewaarperiode
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wij bewaren uw persoonlijke gegevens alleen zolang als nodig is
              voor de doeleinden waarvoor ze zijn verzameld, of zolang als
              wettelijk vereist. Wanneer u uw account verwijdert, worden uw
              gegevens binnen 30 dagen permanent verwijderd, tenzij wij
              wettelijk verplicht zijn deze langer te bewaren.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Kinderen
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Onze diensten zijn niet gericht op kinderen jonger dan 16 jaar.
              Wij verzamelen niet bewust persoonlijke informatie van kinderen
              onder de 16. Als u ontdekt dat uw kind ons persoonlijke informatie
              heeft verstrekt, neem dan contact met ons op zodat wij passende
              maatregelen kunnen nemen.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Cookies en tracking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Onze app maakt gebruik van cookies en vergelijkbare technologieën
              om uw ervaring te verbeteren en gebruik te analyseren. Deze
              technologieën helpen ons om:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Uw voorkeuren te onthouden</li>
              <li>Inzicht te krijgen in hoe onze app wordt gebruikt</li>
              <li>De prestaties van de app te optimaliseren</li>
            </ul>
            <p className="text-gray-700 mt-3">
              U kunt cookies beheren via uw apparaatinstellingen. Lees ook onze{" "}
              <Link href="/cookies">cookieverklaring</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Internationale gegevensoverdracht
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Uw gegevens kunnen worden overgedragen naar en verwerkt in landen
              buiten de Europese Economische Ruimte (EER). In dergelijke
              gevallen zorgen wij ervoor dat passende waarborgen aanwezig zijn
              om uw gegevens te beschermen in overeenstemming met dit
              privacybeleid en toepasselijke wetgeving.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Wijzigingen in dit privacybeleid
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Wanneer
              wij belangrijke wijzigingen aanbrengen, zullen wij u hiervan op de
              hoogte stellen via de app of per e-mail. Wij raden u aan dit
              beleid regelmatig te controleren om op de hoogte te blijven van
              hoe wij uw informatie beschermen.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Contact
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Voor vragen over dit privacybeleid of over hoe wij uw persoonlijke
              gegevens verwerken, kunt u contact met ons opnemen:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Thuiskapper</strong>
              </p>
              <p className="text-gray-700 mb-2">
                E-mail: privacy@thuiskapper.app
              </p>
              <p className="text-gray-700">Website: {SITE_URL}</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Toezichthouder
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Als u niet tevreden bent met hoe wij met uw klacht omgaan, heeft u
              het recht een klacht in te dienen bij de Autoriteit
              Persoonsgegevens (AP), de Nederlandse toezichthouder voor
              gegevensbescherming.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Autoriteit Persoonsgegevens</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Postbus 93374, 2509 AJ Den Haag
              </p>
              <p className="text-gray-700 mb-2">
                Telefoon: (+31) - (0)70 - 888 85 00
              </p>
              <p className="text-gray-700">
                Website: https://autoriteitpersoonsgegevens.nl
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
