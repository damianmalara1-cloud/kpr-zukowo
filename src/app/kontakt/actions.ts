"use server";

import type { ContactFormState } from "./types";

export async function validateContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check
  const honeypot = formData.get("website");
  if (honeypot) {
    return { success: true, error: null, fieldErrors: {} };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

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

  // Validation passed — client will handle the Web3Forms submission
  return { success: true, error: null, fieldErrors: {} };
}
