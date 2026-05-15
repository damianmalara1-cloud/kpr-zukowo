import { redirect } from "next/navigation";

// /turniej-mistrzow został zintegrowany ze stroną główną (/) — zachowujemy URL dla
// linków rozprowadzonych w social media. Redirect pierwszego rzędu siedzi w next.config.ts.
export default function TurniejMistrzowRedirect() {
  redirect("/");
}
