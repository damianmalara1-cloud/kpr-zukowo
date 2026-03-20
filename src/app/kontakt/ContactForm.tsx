"use client";

import Script from "next/script";
import { useRef, useState, type FormEvent } from "react";
import type { ContactFormState } from "./types";

const WEB3FORMS_KEY = "7b929b5c-9b82-493c-94ed-cf874aa5860d";

const subjectLabels: Record<string, string> = {
  sponsoring: "Współpraca sponsorska",
  mecenat: "Mecenat",
  treningi: "Treningi",
  media: "Media",
  inne: "Inne",
};

const initialState: ContactFormState = {
  success: false,
  error: null,
  fieldErrors: {},
};

export default function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState(initialState);

    const formData = new FormData(formRef.current!);

    // Honeypot
    if (formData.get("website")) {
      setState({ success: true, error: null, fieldErrors: {} });
      return;
    }

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const subject = formData.get("subject")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";
    const hcaptchaResponse = formData.get("h-captcha-response")?.toString() ?? "";

    // Validation
    const fieldErrors: ContactFormState["fieldErrors"] = {};

    if (!name) fieldErrors.name = "Imię i nazwisko jest wymagane.";
    if (!email) {
      fieldErrors.email = "Adres e-mail jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      fieldErrors.email = "Podaj poprawny adres e-mail.";
    }
    if (!subject) fieldErrors.subject = "Wybierz temat wiadomości.";
    if (!message) {
      fieldErrors.message = "Wiadomość jest wymagana.";
    } else if (message.length < 10) {
      fieldErrors.message = "Wiadomość musi mieć co najmniej 10 znaków.";
    }

    if (!hcaptchaResponse) {
      fieldErrors.captcha = "Potwierdź, że nie jesteś robotem.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      setState({ success: false, error: null, fieldErrors });
      statusRef.current?.focus();
      return;
    }

    const subjectLabel = subjectLabels[subject] ?? subject;

    setIsPending(true);
    try {
      const submitData = new FormData();
      submitData.append("access_key", WEB3FORMS_KEY);
      submitData.append("h-captcha-response", hcaptchaResponse);
      submitData.append("subject", `[Strona WWW] ${subjectLabel} - ${name}`);
      submitData.append("from_name", name);
      submitData.append("replyto", email);
      submitData.append("name", name);
      submitData.append("email", email);
      submitData.append("temat", subjectLabel);
      submitData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: submitData,
      });

      let result: Record<string, unknown>;
      try {
        result = await response.json();
      } catch {
        const text = await response.text().catch(() => "");
        setState({
          success: false,
          error: `Błąd serwera (${response.status}): ${text || "brak odpowiedzi"}. Napisz na klub@kprzukowo.pl`,
          fieldErrors: {},
        });
        return;
      }

      if (!response.ok) {
        setState({
          success: false,
          error: `Błąd serwera (${response.status}): ${(result.message as string) || JSON.stringify(result)}. Napisz na klub@kprzukowo.pl`,
          fieldErrors: {},
        });
        return;
      }

      if (result.success) {
        setState({ success: true, error: null, fieldErrors: {} });
        formRef.current?.reset();
        // Reset hCaptcha widget
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).hcaptcha?.reset();
      } else {
        setState({
          success: false,
          error: (result.message as string) || "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na klub@kprzukowo.pl",
          fieldErrors: {},
        });
      }
    } catch (err) {
      setState({
        success: false,
        error: err instanceof Error
          ? `Błąd połączenia: ${err.message}. Sprawdź internet lub napisz na klub@kprzukowo.pl`
          : "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na klub@kprzukowo.pl",
        fieldErrors: {},
      });
    } finally {
      setIsPending(false);
      statusRef.current?.focus();
    }
  }

  return (
    <>
      <Script src="https://js.hcaptcha.com/1/api.js" strategy="lazyOnload" />
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Honeypot */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Status messages */}
        <div ref={statusRef} aria-live="polite" tabIndex={-1} className="outline-none">
          {state.success && (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
              <p className="font-medium">Wiadomość wysłana!</p>
              <p className="text-sm mt-1">Odpowiemy w ciągu 24-48 godzin.</p>
            </div>
          )}
          {state.error && (
            <div role="alert" className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
              <p className="font-medium">Wystąpił błąd</p>
              <p className="text-sm mt-1">{state.error}</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Imię i nazwisko <span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-invalid={!!state.fieldErrors.name}
            aria-describedby={state.fieldErrors.name ? "name-error" : undefined}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-[border-color,box-shadow]"
            placeholder="Jan Kowalski"
          />
          {state.fieldErrors.name && (
            <p id="name-error" role="alert" className="text-red text-sm mt-1">
              {state.fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail <span className="text-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-invalid={!!state.fieldErrors.email}
            aria-describedby={state.fieldErrors.email ? "email-error" : undefined}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-[border-color,box-shadow]"
            placeholder="jan@example.com"
          />
          {state.fieldErrors.email && (
            <p id="email-error" role="alert" className="text-red text-sm mt-1">
              {state.fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Temat <span className="text-red">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            aria-invalid={!!state.fieldErrors.subject}
            aria-describedby={state.fieldErrors.subject ? "subject-error" : undefined}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-[border-color,box-shadow]"
          >
            <option value="">Wybierz temat</option>
            <option value="sponsoring">Współpraca sponsorska</option>
            <option value="mecenat">Mecenat</option>
            <option value="treningi">Treningi</option>
            <option value="media">Media</option>
            <option value="inne">Inne</option>
          </select>
          {state.fieldErrors.subject && (
            <p id="subject-error" role="alert" className="text-red text-sm mt-1">
              {state.fieldErrors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Wiadomość <span className="text-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            aria-invalid={!!state.fieldErrors.message}
            aria-describedby={state.fieldErrors.message ? "message-error" : undefined}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-[border-color,box-shadow] resize-none"
            placeholder="Treść wiadomości..."
          />
          {state.fieldErrors.message && (
            <p id="message-error" role="alert" className="text-red text-sm mt-1">
              {state.fieldErrors.message}
            </p>
          )}
        </div>

        <div>
          <div className="h-captcha" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" />
          {state.fieldErrors.captcha && (
            <p role="alert" className="text-red text-sm mt-1">
              {state.fieldErrors.captcha}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-red hover:bg-red-dark text-white font-semibold py-4 px-6 rounded-lg transition-[color,background-color,transform,box-shadow] hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
        >
          {isPending ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Wysyłanie...
            </span>
          ) : (
            "Wyślij wiadomość"
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          Odpowiadamy zazwyczaj w ciągu 24-48 godzin.
        </p>
      </form>
    </>
  );
}
