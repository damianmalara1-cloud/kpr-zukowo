"use server";

interface ContactFormState {
  success: boolean;
  error: string | null;
  fieldErrors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check — bots fill this hidden field
  const honeypot = formData.get("website");
  if (honeypot) {
    return { success: true, error: null, fieldErrors: {} };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  // Validation
  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!name) {
    fieldErrors.name = "Imię i nazwisko jest wymagane.";
  }

  if (!email) {
    fieldErrors.email = "Adres e-mail jest wymagany.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Podaj poprawny adres e-mail.";
  }

  if (!subject) {
    fieldErrors.subject = "Wybierz temat wiadomości.";
  }

  if (!message) {
    fieldErrors.message = "Wiadomość jest wymagana.";
  } else if (message.length < 10) {
    fieldErrors.message = "Wiadomość musi mieć co najmniej 10 znaków.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, error: null, fieldErrors };
  }

  const subjectLabels: Record<string, string> = {
    sponsoring: "Współpraca sponsorska",
    mecenat: "Mecenat",
    treningi: "Treningi",
    media: "Media",
    inne: "Inne",
  };

  const subjectLabel = subjectLabels[subject] ?? subject;

  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured");
      return {
        success: false,
        error:
          "Wysyłka wiadomości jest chwilowo niedostępna. Napisz bezpośrednio na klub@kprzukowo.pl",
        fieldErrors: {},
      };
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[Strona WWW] ${subjectLabel} — ${name}`,
        from_name: name,
        replyto: email,
        name,
        email,
        temat: subjectLabel,
        message,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Web3Forms error");
    }

    return { success: true, error: null, fieldErrors: {} };
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return {
      success: false,
      error:
        "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na klub@kprzukowo.pl",
      fieldErrors: {},
    };
  }
}

export type { ContactFormState };
