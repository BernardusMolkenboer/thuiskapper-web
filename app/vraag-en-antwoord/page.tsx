// app/vraag-en-antwoord/page.tsx
import type { Metadata } from "next";
import PageTop from "@/components/PageTop";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  Mail,
  ShieldCheck,
  Scissors,
  Wallet,
} from "lucide-react";

const SITE_URL = "https://www.thuiskapper.app";
const CANONICAL_PATH = "/vraag-en-antwoord";
const PAGE_URL = `${SITE_URL}${CANONICAL_PATH}`;
const LAST_UPDATED_DISPLAY = "9 januari 2026";
const LAST_UPDATED_ISO = "2026-01-09";

export const metadata: Metadata = {
  title: "Veelgestelde vragen | Thuiskapper.app",
  description:
    "Antwoorden op de meest gestelde vragen over Thuiskapper.app: account, knipbeurt plaatsen, biedingen, betaling en annuleren.",
  alternates: { canonical: CANONICAL_PATH },
  openGraph: {
    title: "Veelgestelde vragen | Thuiskapper.app",
    description:
      "Antwoorden op de meest gestelde vragen over Thuiskapper.app: account, knipbeurt plaatsen, biedingen, betaling en annuleren.",
    url: PAGE_URL,
    siteName: "Thuiskapper.app",
    type: "article",
    locale: "nl_NL",
  },
  robots: { index: true, follow: true },
};

type FaqItem = {
  question: string;
  answer: React.ReactNode;
  category:
    | "Algemeen"
    | "Account"
    | "Knipbeurt plaatsen"
    | "Biedingen & afspraak"
    | "Betaling"
    | "Annuleren & wijzigen"
    | "Veiligheid & kwaliteit";
  icon: React.ElementType;
};

const faqs: FaqItem[] = [
  {
    category: "Algemeen",
    icon: HelpCircle,
    question: "Wat is Thuiskapper.app precies?",
    answer: (
      <>
        Thuiskapper.app is een platform waar u eenvoudig een{" "}
        <strong>kapper aan huis</strong> kunt vinden. U plaatst een
        aanvraag/knipbeurt en ontvangt reacties of voorstellen van beschikbare
        kappers.
      </>
    ),
  },
  {
    category: "Algemeen",
    icon: HelpCircle,
    question: "Is Thuiskapper.app een kapsalon of bemiddelingsplatform?",
    answer: (
      <>
        Thuiskapper.app is een <strong>bemiddelend platform</strong>. De
        uitvoering van de knipbeurt gebeurt door de gekozen kapper.
        Thuiskapper.app helpt met het vinden, vergelijken en (waar van
        toepassing) het faciliteren van de afspraak.
      </>
    ),
  },
  {
    category: "Account",
    icon: ShieldCheck,
    question: "Moet ik een account aanmaken om een knipbeurt te boeken?",
    answer: (
      <>
        Ja. Een account is nodig om aanvragen te plaatsen, afspraken te beheren
        en om contactinformatie correct te koppelen aan de afspraak.
      </>
    ),
  },
  {
    category: "Account",
    icon: ShieldCheck,
    question: "Welke gegevens heb ik nodig bij registratie?",
    answer: (
      <>
        Meestal vragen we om:
        <ul className="list-disc pl-5 mt-2">
          <li>Uw naam</li>
          <li>Uw e-mailadres</li>
          <li>Uw telefoonnummer</li>
          <li>Adresgegevens voor de afspraak (waar nodig)</li>
        </ul>
        Deze gegevens helpen de kapper om de afspraak goed uit te voeren.
      </>
    ),
  },
  {
    category: "Knipbeurt plaatsen",
    icon: Scissors,
    question: "Hoe plaats ik een knipbeurt?",
    answer: (
      <>
        In grote lijnen:
        <ol className="list-decimal pl-5 mt-2">
          <li>Log in</li>
          <li>Ga naar uw dashboard</li>
          <li>
            Kies <strong>Nieuwe knipbeurt</strong>
          </li>
          <li>
            Vul aantal personen, wensen per persoon, beschikbaarheid en locatie
            in
          </li>
          <li>Bevestig en plaats de aanvraag</li>
        </ol>
        Hoe duidelijker uw wensen, hoe beter een kapper tijd en prijs kan
        inschatten.
      </>
    ),
  },
  {
    category: "Knipbeurt plaatsen",
    icon: Scissors,
    question: "Kan ik meerdere personen tegelijk laten knippen?",
    answer: (
      <>
        Ja, u kunt vaak meerdere personen in één aanvraag zetten. Tip: vermeld
        per persoon leeftijd (optioneel), haarlengte en gewenste stijl zodat de
        kapper een realistischer voorstel kan doen.
      </>
    ),
  },
  {
    category: "Biedingen & afspraak",
    icon: HelpCircle,
    question: "Hoe ontvang ik reacties/biedingen van kappers?",
    answer: (
      <>
        Zodra uw aanvraag live staat, kunnen beschikbare kappers reageren met
        een voorstel. U kiest vervolgens zelf met welke kapper u verdergaat.
      </>
    ),
  },
  {
    category: "Biedingen & afspraak",
    icon: HelpCircle,
    question: "Waarom is een duidelijke beschrijving zo belangrijk?",
    answer: (
      <>
        Met een duidelijke beschrijving voorkomt u verrassingen. Denk aan:
        <ul className="list-disc pl-5 mt-2">
          <li>Haarlengte (kort/halflang/lang)</li>
          <li>Wens (bijv. fade, boblijn, punten knippen, baard trimmen)</li>
          <li>
            Eventuele voorkeuren (stilte, kindvriendelijk, specifieke producten)
          </li>
        </ul>
      </>
    ),
  },
  {
    category: "Betaling",
    icon: Wallet,
    question: "Hoe werkt de betaling?",
    answer: (
      <>
        Betaling verloopt (waar van toepassing) via een veilige betaalroute. U
        ziet altijd vooraf wat er betaald wordt en wanneer. Als betaling (deels)
        buiten het platform om gaat, wordt dit duidelijk weergegeven in de
        app/flow.
      </>
    ),
  },
  {
    category: "Annuleren & wijzigen",
    icon: HelpCircle,
    question: "Kan ik een afspraak annuleren of wijzigen?",
    answer: (
      <>
        Ja. Annuleren/wijzigen kan vaak binnen de app of in overleg met de
        kapper. De exacte voorwaarden (bijv. kosteloos tot X uur vooraf) kunnen
        per kapper verschillen.
      </>
    ),
  },
  {
    category: "Veiligheid & kwaliteit",
    icon: ShieldCheck,
    question: "Hoe zit het met veiligheid en kwaliteit?",
    answer: (
      <>
        We streven naar een betrouwbaar platform. Controleer altijd het profiel,
        reviews en aanbod van de kapper. Heeft u vragen vooraf? Bespreek ze vóór
        de afspraak met de kapper (bijv. allergieën of specifieke wensen).
      </>
    ),
  },
];

function toPlainText(node: React.ReactNode): string {
  // Best-effort plain text for schema answers (keeps it safe and simple)
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toPlainText).join(" ");
  if (node && typeof node === "object" && "props" in (node as any)) {
    const props = (node as any).props;
    return toPlainText(props?.children);
  }
  return "";
}

export default function VeelgesteldeVragen() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: toPlainText(f.answer).replace(/\s+/g, " ").trim(),
      },
    })),
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Veelgestelde vragen | Thuiskapper.app",
    description:
      "Antwoorden op de meest gestelde vragen over Thuiskapper.app: account, knipbeurt plaatsen, biedingen, betaling en annuleren.",
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
        name: "Veelgestelde vragen",
        item: PAGE_URL,
      },
    ],
  };

  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD (SEO Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLdWebPage, jsonLdBreadcrumbs, faqSchema]),
        }}
      />

      <PageTop
        title="Veelgestelde vragen"
        description="Alles wat u wilt weten over Thuiskapper.app: account, aanvragen, biedingen, betalen en annuleren."
        crumbs={[{ label: "Veelgestelde vragen" }]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                title: "Snel antwoord",
                desc: "Open een vraag en u ziet direct het antwoord.",
                icon: HelpCircle,
              },
              {
                title: "Privacy & data",
                desc: (
                  <>
                    Bekijk ook ons{" "}
                    <Link
                      href="/privacy"
                      className="text-emerald-700 hover:underline font-medium"
                    >
                      privacybeleid
                    </Link>{" "}
                    en de{" "}
                    <Link
                      href="/cookies"
                      className="text-emerald-700 hover:underline font-medium"
                    >
                      cookieverklaring
                    </Link>
                    .
                  </>
                ),
                icon: ShieldCheck,
              },
              {
                title: "Contact",
                desc: (
                  <span>
                    Staat uw vraag er niet tussen? Mail ons via{" "}
                    <a
                      href="mailto:info@thuiskapper.app"
                      className="text-emerald-700 hover:underline font-medium"
                    >
                      info@thuiskapper.app
                    </a>
                    .
                  </span>
                ),
                icon: Mail,
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl p-4 sm:p-5 bg-white hover:border-emerald-300 hover:bg-emerald-50/20 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900">
                        {card.title}
                      </p>
                      <div className="text-sm text-gray-600 mt-1">
                        {card.desc}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            <strong>Laatst bijgewerkt:</strong> {LAST_UPDATED_DISPLAY}
          </p>
        </div>

        {/* FAQ sections */}
        <div className="space-y-10">
          {categories.map((cat) => {
            const items = faqs.filter((f) => f.category === cat);
            return (
              <section key={cat}>
                <div className="flex items-end justify-between gap-4 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {cat}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {items.length} vragen
                  </span>
                </div>

                <div className="space-y-3">
                  {items.map((f, idx) => {
                    const Icon = f.icon;
                    const openByDefault = cat === "Algemeen" && idx === 0;

                    return (
                      <details
                        key={`${f.question}-${idx}`}
                        className="group border border-gray-200 rounded-xl bg-white overflow-hidden hover:border-emerald-300 transition-all"
                        open={openByDefault}
                      >
                        <summary className="list-none cursor-pointer select-none px-4 sm:px-5 py-4 flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all">
                            <Icon className="w-5 h-5 text-gray-700 group-hover:text-emerald-700 transition-colors" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                              {f.question}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              Klik om te openen/sluiten
                            </p>
                          </div>

                          <ChevronDown className="w-5 h-5 text-gray-400 mt-1 transition-transform duration-300 group-open:rotate-180" />
                        </summary>

                        <div className="px-4 sm:px-5 pb-5">
                          <div className="pt-3 border-t border-gray-100 text-gray-700 text-sm sm:text-base leading-relaxed">
                            {f.answer}
                          </div>
                        </div>
                      </details>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-gray-700 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900">Nog steeds vragen?</h3>
              <p className="text-gray-600 text-sm mt-1">
                Mail ons op{" "}
                <a
                  href="mailto:info@thuiskapper.app"
                  className="text-emerald-700 hover:underline font-medium"
                >
                  info@thuiskapper.app
                </a>{" "}
                en we helpen u verder.
              </p>
              <p className="text-gray-500 text-xs mt-3">
                Tip: voor privacyvragen kunt u ook mailen naar{" "}
                <a
                  href="mailto:privacy@thuiskapper.app"
                  className="text-emerald-700 hover:underline font-medium"
                >
                  privacy@thuiskapper.app
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
