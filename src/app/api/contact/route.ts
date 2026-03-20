import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const subjectLabels: Record<string, string> = {
  sponsoring: "Współpraca sponsorska",
  mecenat: "Mecenat",
  treningi: "Treningi",
  media: "Media",
  inne: "Inne",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Podaj poprawny adres e-mail." },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Wiadomość musi mieć co najmniej 10 znaków." },
        { status: 400 },
      );
    }

    const subjectLabel = subjectLabels[subject] ?? subject;

    const { error } = await resend.emails.send({
      from: "Formularz KPR <onboarding@resend.dev>",
      to: "klub@kprzukowo.pl",
      replyTo: email,
      subject: `[Strona WWW] ${subjectLabel} - ${name}`,
      text: [
        `Imię i nazwisko: ${name}`,
        `E-mail: ${email}`,
        `Temat: ${subjectLabel}`,
        "",
        "Wiadomość:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Wewnętrzny błąd serwera." },
      { status: 500 },
    );
  }
}
