"use client";

import { useState } from "react";
import Link from "next/link";
import PageTop from "@/components/PageTop";
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
  Trash2,
  ShieldAlert,
  Info,
  Mail,
} from "lucide-react";

type RequestType = "full_account" | "partial_data";

const dataTypes = [
  {
    id: "profile",
    label: "Profielgegevens",
    description: "Naam, profielfoto, bio",
  },
  {
    id: "appointments",
    label: "Afspraakgeschiedenis",
    description: "Alle gemaakte afspraken",
  },
  {
    id: "reviews",
    label: "Reviews en beoordelingen",
    description: "Uw gegeven beoordelingen",
  },
  {
    id: "messages",
    label: "Berichten",
    description: "Chatberichten met kappers",
  },
  {
    id: "payment",
    label: "Betalingsgegevens",
    description: "Opgeslagen betaalmethodes",
  },
  {
    id: "preferences",
    label: "Voorkeuren",
    description: "App-instellingen en voorkeuren",
  },
];

export default function AccountVerwijderen() {
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState<RequestType>("full_account");
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>([]);
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDataTypeToggle = (id: string) => {
    setSelectedDataTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!email) {
      setStatus("error");
      setErrorMessage("Vul alstublieft uw e-mailadres in.");
      return;
    }

    if (requestType === "partial_data" && selectedDataTypes.length === 0) {
      setStatus("error");
      setErrorMessage(
        "Selecteer minimaal een type gegevens om te verwijderen."
      );
      return;
    }

    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Instructies bekeken
          </h1>

          <p className="text-gray-600 mb-6">
            U kunt uw account verwijderen in de app via{" "}
            <strong>Instellingen</strong> → <strong>Account</strong> →{" "}
            <strong>Account verwijderen</strong>
            {email ? (
              <>
                . U bent momenteel ingelogd/gekoppeld met{" "}
                <strong>{email}</strong>.
              </>
            ) : (
              "."
            )}
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left mb-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-gray-700 mt-0.5" />
              <p className="text-gray-700 text-sm">
                Kunt u de optie niet vinden of heeft u geen toegang tot de app?
                Mail ons via{" "}
                <a
                  href="mailto:privacy@thuiskapper.app"
                  className="text-emerald-600 hover:underline font-medium"
                >
                  privacy@thuiskapper.app
                </a>
                .
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageTop
        title="Account verwijderen"
        description="U kunt uw Thuiskapper-account zelf verwijderen binnen de applicatie. Op deze pagina leggen we uit waar u dit kunt doen en wat er daarna gebeurt."
        crumbs={[{ label: "Account verwijderen" }]}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Optional: keep a subtle back link inside the white content area */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Terug naar home
        </Link>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 mb-8">
          <div className="flex items-start gap-3">
            <Trash2 className="w-5 h-5 text-emerald-700 mt-0.5" />
            <div>
              <h2 className="font-semibold text-emerald-900 mb-1">
                Verwijderen in de app
              </h2>
              <p className="text-emerald-800 text-sm">
                Ga naar <strong>Instellingen</strong> → <strong>Account</strong>{" "}
                → <strong>Account verwijderen</strong>.
              </p>
              <p className="text-emerald-800 text-sm mt-2">
                Volg de stappen in de app en bevestig de verwijdering.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <h2 className="font-semibold text-amber-800 mb-2">
            Belangrijke informatie
          </h2>
          <ul className="text-amber-700 text-sm space-y-1">
            <li>
              Na verwijderen verliest u toegang tot uw account en gegevens die
              aan uw account gekoppeld zijn.
            </li>
            <li>
              Sommige gegevens kunnen langer bewaard worden vanwege wettelijke
              verplichtingen.
            </li>
            <li>
              Kunt u de optie niet vinden? Controleer of u de nieuwste
              app-versie gebruikt en met het juiste account bent ingelogd.
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              E-mailadres van uw account (optioneel)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="uw@email.nl"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            <p className="text-xs text-gray-500 mt-2">
              Dit veld is alleen voor uw eigen referentie of wanneer u contact
              opneemt met ons privacyteam.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-4">
              Wat wilt u verwijderen? (informatie)
            </label>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                <input
                  type="radio"
                  name="requestType"
                  value="full_account"
                  checked={requestType === "full_account"}
                  onChange={() => setRequestType("full_account")}
                  className="mt-1 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <span className="font-medium text-gray-900">
                    Volledige account verwijdering
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    Uw account en alle bijbehorende gegevens worden verwijderd
                    binnen de app via de optie{" "}
                    <strong>Account verwijderen</strong>.
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                <input
                  type="radio"
                  name="requestType"
                  value="partial_data"
                  checked={requestType === "partial_data"}
                  onChange={() => setRequestType("partial_data")}
                  className="mt-1 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <span className="font-medium text-gray-900">
                    Specifieke gegevens verwijderen
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    In de app kunt u ook bepaalde gegevens beheren/verwijderen
                    via instellingen en privacy-opties.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {requestType === "partial_data" && (
            <div className="pl-4 border-l-2 border-emerald-200">
              <label className="block text-sm font-medium text-gray-900 mb-4">
                Voorbeelden van gegevens (informatie)
              </label>
              <div className="space-y-2">
                {dataTypes.map((type) => (
                  <label
                    key={type.id}
                    className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-300 hover:bg-emerald-50/30 transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDataTypes.includes(type.id)}
                      onChange={() => handleDataTypeToggle(type.id)}
                      className="mt-0.5 w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                    />
                    <div>
                      <span className="font-medium text-gray-900 text-sm">
                        {type.label}
                      </span>
                      <p className="text-xs text-gray-500">
                        {type.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-start gap-3">
                <Info className="w-5 h-5 text-gray-700 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  Dit is een overzicht ter uitleg. Voor het daadwerkelijk
                  verwijderen/beheren van gegevens gebruikt u de instellingen in
                  de app.
                </p>
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Reden (optioneel, alleen voor uzelf)
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              placeholder="Bijv. ik gebruik de app niet meer..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              Dit wordt niet verzonden via deze pagina. Als u contact opneemt
              via e-mail kunt u dit eventueel meenemen.
            </p>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-700 text-sm">{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Ik heb het begrepen
              </>
            ) : (
              "Ik heb het begrepen"
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Wat gebeurt er na het verwijderen?
          </h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </span>
              <div>
                <h3 className="font-medium text-gray-900">
                  Bevestiging in de app
                </h3>
                <p className="text-gray-600 text-sm">
                  U bevestigt de verwijdering binnen de app.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </span>
              <div>
                <h3 className="font-medium text-gray-900">Verwerking</h3>
                <p className="text-gray-600 text-sm">
                  Uw account wordt verwijderd volgens onze privacyvoorwaarden.
                  Sommige gegevens kunnen bewaard blijven als dit wettelijk
                  verplicht is.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </span>
              <div>
                <h3 className="font-medium text-gray-900">
                  Hulp wanneer nodig
                </h3>
                <p className="text-gray-600 text-sm">
                  Kunt u niet inloggen of lukt het niet? Neem contact op met ons
                  privacyteam.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-3 mb-3">
            <ShieldAlert className="w-5 h-5 text-gray-700 mt-0.5" />
            <h2 className="text-lg font-bold text-gray-900">
              Gegevensbewaring
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            De volgende gegevens kunnen langer bewaard worden vanwege wettelijke
            verplichtingen:
          </p>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>
              <strong>Financiële transacties:</strong> 7 jaar
              (belastingwetgeving)
            </li>
            <li>
              <strong>Facturen:</strong> 7 jaar (boekhoudkundige vereisten)
            </li>
            <li>
              <strong>Juridische geschillen:</strong> totdat het geschil is
              opgelost
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Heeft u vragen? Neem contact op via{" "}
            <a
              href="mailto:privacy@thuiskapper.app"
              className="inline-flex items-center gap-2 text-emerald-600 hover:underline"
            >
              <Mail className="w-4 h-4" />
              privacy@thuiskapper.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
