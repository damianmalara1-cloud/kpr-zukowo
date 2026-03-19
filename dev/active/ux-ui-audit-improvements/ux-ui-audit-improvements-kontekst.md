# Kontekst: Wdrożenie rekomendacji audytu UX/UI

**Branch:** `feature/ux-ui-audit-improvements`
**Ostatnia aktualizacja:** 2026-03-19 (Faza 3 🟡)

---

## Powiązane pliki (mapa zależności)

### Pliki krytyczne — edytowane w wielu fazach

| Plik | Fazy | Opis zmian |
|------|------|-----------|
| `src/app/globals.css` | 1, 3 | user-select fix, reduced-motion, transition fix, focus-visible, skip-link style |
| `src/app/layout.tsx` | 1, 3, 4 | skip-link, OG meta, heading font import, JSON-LD schema |
| `src/app/kontakt/page.tsx` | 1, 2 | usunięcie `.selectable`, server action, walidacja, stany |
| `src/components/Navbar.tsx` | 4 | keyboard nav, transition-all fix (3 inst.), raw img (1) |
| `src/components/SponsorsBar.tsx` | 4, 5 | Next.js Image (3 raw img), transition-all fix (4 inst.), sponsor data extraction |

### Pliki edytowane w jednej fazie

| Plik | Faza | Opis zmian |
|------|------|-----------|
| `src/components/HeroSlider.tsx` | 3 | Uproszczenie z karuzeli na single hero, transition-all fix (3 inst.) |
| `src/components/Footer.tsx` | 4 | Next.js Image (1 raw img) |
| `src/app/mecenasi/page.tsx` | 4, 5 | Next.js Image (1 raw img), transition-all fix (9 inst.), JSON-LD FAQPage, sponsor data import |
| `src/app/sponsorzy/page.tsx` | 4, 5 | Next.js Image (5 raw img), transition-all fix (5 inst.), sponsor data import |
| `src/app/mecze/[id]/page.tsx` | 4 | JSON-LD SportsEvent, transition fix (2 inst.) |
| `src/app/page.tsx` | 3, 4 | Social proof bar w hero, transition-all fix (2 inst. na CTA) |

### Pliki nowe (do utworzenia)

| Plik | Faza | Opis |
|------|------|------|
| `src/app/robots.ts` | 1 | Next.js robots.txt convention |
| `src/app/sitemap.ts` | 1 | Next.js sitemap.xml convention |
| `public/images/og-image.jpg` | 1 | OG image 1200x630 |
| `src/app/kontakt/actions.ts` | 2 | Server action do wysyłki email |
| `src/data/sponsors.ts` | 5 | Single source of truth dla sponsorów |

---

## Szczegółowa mapa `transition-all` (do zamiany)

> **Zweryfikowano: 2026-03-19** na bieżącym kodzie branch `feature/ux-ui-audit-improvements`

| Plik | Linia | Kontekst | Zamiana na |
|------|-------|----------|-----------|
| `globals.css` | 216 | `button, .btn { transition: all }` | `transition: color, background-color, border-color, transform, box-shadow` |
| `Navbar.tsx` | 114 | Desktop dropdown container | `transition-[opacity,transform,visibility]` |
| `Navbar.tsx` | 176 | Mobile dropdown overflow | `transition-[max-height,opacity]` |
| `Navbar.tsx` | 274 | Mobile menu container | `transition-[max-height,opacity]` |
| `HeroSlider.tsx` | 70 | Primary CTA button | `transition-colors` |
| `HeroSlider.tsx` | 76 | Secondary CTA button | `transition-colors` |
| `HeroSlider.tsx` | 89 | Slide indicator | `transition-colors` |
| `BoardMembers.tsx` | 41 | Card hover | `transition-[transform,box-shadow]` |
| `BoardMembers.tsx` | 46 | Avatar hover ring | `transition-shadow` |
| `SponsorsBar.tsx` | 124 | Sponsor card hover | `transition-[transform,box-shadow]` |
| `SponsorsBar.tsx` | 151 | Tytularny card | `transition-[transform,box-shadow]` |
| `SponsorsBar.tsx` | 193 | CTA button | `transition-colors` |
| `PositionFilter.tsx` | 83 | Player card (staff) | `transition-[transform,box-shadow]` |
| `PositionFilter.tsx` | 133 | Position filter button | `transition-colors` |
| `PositionFilter.tsx` | 150 | Player card (players) | `transition-[transform,box-shadow]` |
| `kontakt/page.tsx` | 110,114,118,122 | Topic cards | `transition-[border-color,box-shadow]` |
| `kontakt/page.tsx` | 143,156,168 | Form inputs | `transition-[border-color,box-shadow]` |
| `kontakt/page.tsx` | 187 | Textarea | `transition-[border-color,box-shadow]` |
| `kontakt/page.tsx` | 194 | Submit button | `transition-colors` |
| `kibice/page.tsx` | 60,69,78 | Info cards | `transition-[transform,box-shadow]` |
| `kibice/page.tsx` | 160 | Primary CTA | `transition-colors` |
| `kibice/page.tsx` | 168 | Secondary CTA | `transition-colors` |
| `wspolpraca/page.tsx` | 54,100 | Package cards | `transition-[transform,box-shadow]` |
| `wspolpraca/page.tsx` | 88,134 | CTA buttons w pakietach | `transition-colors` |
| `wspolpraca/page.tsx` | 185 | Contact CTA | `transition-colors` |
| `mecenasi/page.tsx` | 135,141 | CTA buttons | `transition-colors` |
| `mecenasi/page.tsx` | 258 | Partner logo card | `transition-[transform,box-shadow]` |
| `mecenasi/page.tsx` | 274 | CTA button | `transition-colors` |
| `mecenasi/page.tsx` | 334 | Package card | `transition-[transform,box-shadow]` |
| `mecenasi/page.tsx` | 402 | CTA button | `transition-colors` |
| `mecenasi/page.tsx` | 491 | Bottom CTA | `transition-colors` |
| `sponsorzy/page.tsx` | 234 | CTA button | `transition-colors` |
| `sponsorzy/page.tsx` | 292 | Emocji CTA | `transition-colors` |
| `sponsorzy/page.tsx` | 340 | Sezonu CTA | `transition-colors` |
| `sponsorzy/page.tsx` | 454 | Contact CTA | `transition-colors` |
| `EmocjeCategoryPicker.tsx` | 55 | Category card | `transition-colors` |
| `EmocjeCategoryPicker.tsx` | 70 | Description container | `transition-colors` |
| `admin/AdminPanel.tsx` | 54 | Password input | `transition-[border-color,box-shadow]` |
| `page.tsx` | 270 | Home CTA | `transition-colors` |
| `page.tsx` | 322 | Community CTA | `transition-colors` |

**Łącznie: 48 instancji** (poprzednio dokumentowano 27)

---

## Szczegółowa mapa raw `<img>` (do zamiany na Next.js Image)

> **Zweryfikowano: 2026-03-19** — w bieżącym kodzie istnieje **6 instancji** (nie 11 jak wcześniej)

| Plik | Linia | Element | Uwagi |
|------|-------|---------|-------|
| `SponsorsBar.tsx` | 153 | Logo tytularnego (dynamiczne) | h-24/h-36, wymiary w `logo-dimensions.ts` |
| `sponsorzy/page.tsx` | 359 | Logo Fit Dieta (hardcoded) | h-24/h-36 |
| `sponsorzy/page.tsx` | 373 | Logo strategiczny (loop) | h-16/h-24 |
| `sponsorzy/page.tsx` | 388 | Logo złoty (loop) | h-12/h-18 |
| `sponsorzy/page.tsx` | 404 | Logo srebrny (loop) | h-10/h-14 |
| `sponsorzy/page.tsx` | 428 | Logo brązowy (loop) | h-7/h-10 |

**Uwaga:** Navbar i Footer używają już `<Image>` lub innego rozwiązania — nie wymagają migracji.

---

## Dane sponsorów — duplikacje

### Źródło 1: `SponsorsBar.tsx` (linie 8-48)
- `tytularny`: [{name: "Fit Dieta", logo: "/images/logo/fitdietaa.png"}]
- `strategiczny`: 2 firmy
- `zloty`: 2 firmy
- `srebrny`: 3 firmy
- `brazowy`: 11 firm
- `partnerzy`: 5 firm
- **ŁĄCZNIE: 24 pozycje**

### Źródło 2: `mecenasi/page.tsx` (linie 60-85)
- `currentPartners`: 25 pozycji (flat array, bez tier)
- Pokrywa się częściowo z SponsorsBar ale MA INNY SKŁAD

### Źródło 3: `sponsorzy/page.tsx` (linie ~350-440)
- Hardcoded JSX z logami per tier
- Pokrywa się z SponsorsBar ale w innym formacie

**Wniosek:** Konsolidacja do `src/data/sponsors.ts` z typowanymi tierami jest konieczna przed każdą kolejną zmianą danych sponsorów.

---

## Decyzje techniczne

| Decyzja | Wybór | Uzasadnienie |
|---------|-------|-------------|
| Email API | Resend (rekomendowany) | Darmowy tier 100 emaili/dzień, prosty SDK, Next.js friendly |
| Font nagłówkowy | Oswald | Kondensowany, sportowy charakter, doskonałe polskie znaki, Google Fonts |
| Analityka | Vercel Analytics lub Plausible | GDPR-compliant, zero cookie banner |
| JSON-LD schemas | SportsTeam, LocalBusiness, SportsEvent, FAQPage | Pokrywają wszystkie typy treści na stronie |
| Sitemap format | Next.js `sitemap.ts` convention | Automatyczna generacja, ISR-friendly |
| Sponsor data format | TypeScript z typami per tier | Type-safe, import-friendly, łatwe do migracji na CMS |

---

## Zależności zewnętrzne

| Zależność | Typ | Wymagane w fazie |
|-----------|-----|-----------------|
| `resend` (npm) | Nowy package | 2 |
| Resend API key | Konfiguracja | 2 |
| Weryfikacja domeny w Resend | DNS | 2 (opcjonalne, ale rekomendowane) |
| `@vercel/analytics` (npm) | Nowy package | 5 |
| OG image (grafika) | Asset | 1 |

---

## Przekazanie

### Sesja 4: 2026-03-19 — Faza 3 ✅ COMPLETE, Vercel preview deployed

- **Branch:** `feature/ux-ui-audit-improvements`
- **Ostatni commit:** `0e6a8fb` — fix: usunięcie metadataBase powodującego ByteString error w Next.js 16
- **Problem naprawiony:** Błąd ByteString w Next.js 16 — `metadataBase` z polskimi znakami w metadata powodował crash „Cannot convert argument to a ByteString" blokujący nawigację między podstronami

- **Zmiana:** Usunięcie `metadataBase: new URL("https://kprzukowo.pl")` z `src/app/layout.tsx`

- **Wynik:**
  - ✅ Strona główna: 200 w ~1.9s
  - ✅ Podstrony (/o-klubie, /kontakt, /mecze, /mecenasi): 200 w ~0.3-0.4s
  - ✅ Vercel preview: zaktualizowany i deployed ✅
  - ⚠️ ByteString warning nadal loguje się (to bug Next.js 16 z polskimi znakami), ale nie blokuje renderowania

- **Edytowane pliki (poprzednie sesje):**
  - `src/app/layout.tsx` (Oswald import, `oswaldHeading` zamiast `latoHeading`, skip-link, OG+Twitter meta)
  - `src/app/globals.css` (letter-spacing 0.01em, uppercase h2-h6, focus-visible rules, prefers-reduced-motion, user-select fix, transition fixes)
  - `src/components/HeroSlider.tsx` (przebudowa: karuzela → static hero, server component, social proof bar)
  - `src/app/page.tsx` (2x transition-all → transition-colors)

- **Cel zmian (Faza 3):** Wzmocnienie identyfikacji wizualnej — sportowy font Oswald, uproszczony hero z social proof, globalne focus-visible dla a11y, naprawa błędów blokujących nawigację

- **Decyzje techniczne:**
  - Oswald wagi 500/600/700 (bez 400 — body zostaje Lato)
  - `text-transform: uppercase` tylko na h2-h6 (h1 bez — hero "Tu zaczyna się historia" potrzebuje mixed case)
  - `letter-spacing: 0.01em` (vs poprzednie -0.02em) — Oswald jest naturalnie kondensowany
  - Hero: Grupa-7.jpg (zdjęcie drużynowe, lepsze niż Grupa-6)
  - HeroSlider → server component (usunięto "use client", zero JS na kliencie)
  - Social proof: "24+ Partnerów | 2M+ Wyświetleń | 100% Darmowe wejście"
  - Focus-visible: red na białych tłach, white na navy — selector `[class*="bg-navy"] :focus-visible`

- **Weryfikacja:**
  - `npm run dev` ✅ — serwer staruje bezproblemowo (Turbopack)
  - `curl http://localhost:3000/` ✅ — 200 ~1.9s
  - `curl http://localhost:3000/{o-klubie,kontakt,mecze,mecenasi}` ✅ — wszystkie 200 w ~0.3-0.4s
  - Vercel preview deployment ✅ — https://kpr-zukowo-4ym5annur-damians-projects-00b2acae.vercel.app

- **Decyzja:** ByteString warning w Next.js 16 jest znane, nie blokuje funkcjonalności — można wdrożyć bez czekania na fixes

- **Następny krok:**
  - Wizualna inspekcja na https://kpr-zukowo-4ym5annur-damians-projects-00b2acae.vercel.app (375px, 768px, 1024px, 1440px)
  - Sprawdzić: uppercase h2-h6 na ALL stronach, focus-visible na ciemnych/jasnych tłach, hero layout na mobile
  - Potem: Faza 4 — JSON-LD, keyboard nav dropdown, Next.js Image migration, transition-all cleanup
  - Uruchom: `/dev-docs-execute Faza 4`

**Status Fazy 3:** ✅ COMPLETE — kod deployed, wymaga wizualnej inspekcji
- [x] Oswald font (layout.tsx + globals.css)
- [x] Static hero z social proof (HeroSlider.tsx)
- [x] focus-visible styling (globals.css)
- [x] npm run build przechodzi
- [x] Vercel preview deployed
- ⏳ Wizualna inspekcja na 4 breakpointach (user w trakcie)

---

### Sesja 2: 2026-03-19 — Faza 2 częściowo ukończona

- **Branch:** `feature/ux-ui-audit-improvements`
- **Nowe/edytowane pliki:**
  - `src/app/kontakt/actions.ts` (nowy — server action, walidacja)
  - `src/app/kontakt/ContactForm.tsx` (nowy — client component, walidacja, Web3Forms fetch, a11y)
  - `src/app/kontakt/types.ts` (nowy — ContactFormState interface)
  - `src/app/kontakt/page.tsx` (zrefaktoryzowano — formularz wydzielony do ContactForm)

- **Cel zmian:** Uruchomienie głównego funnela konwersji — formularz kontaktowy z walidacją per-pole, stanami pending/success/error, honeypot antyspam, pełną dostępnością

- **Decyzje techniczne:**
  - Rezygnacja z Resend (wymaga API key + weryfikacja domeny) na rzecz Web3Forms (darmowy, publiczny klucz)
  - Web3Forms klucz: `7b929b5c-9b82-493c-94ed-cf874aa5860d`, email: `klub@kprzukowo.pl`
  - Wysyłka client-side (FormData POST) — Web3Forms blokuje server-side requesty na free plan

- **BLOKADA:** Web3Forms zwraca 403 na localhost. Prawdopodobnie zadziała po deploy na docelową domenę. Do przetestowania po hostingu.

- **Następny krok:** Faza 3 — Poprawa wizualna i konwersji
  - Zadania: Oswald font, uproszczenie hero, focus-visible styling
  - Uruchom: `/dev-docs-execute Faza 3`

**Status Fazy 2:** 🟡 CZĘŚCIOWO
- [x] ContactForm client component z walidacją
- [x] Stany: pending (spinner), success (zielony), error (czerwony)
- [x] Honeypot antyspam
- [x] aria-live, aria-invalid, role="alert"
- [x] npm run build przechodzi
- [ ] Test end-to-end wysyłki email (wymaga deploy na hosting)

---

### Sesja 1: 2026-03-19 — Faza 1 ukończona

- **Branch:** `feature/ux-ui-audit-improvements`
- **Ostatni commit:** `55a879e` — feat(ux-ui-audit): Faza 1 — krytyczne poprawki a11y + SEO
- **Edytowane pliki:**
  - `src/app/globals.css` (user-select, transition, prefers-reduced-motion, skip-link styles)
  - `src/app/layout.tsx` (skip-link, metadataBase, OG, twitter metadata)
  - `src/app/kontakt/page.tsx` (usunięto selectable)
  - `src/app/robots.ts` (nowy)
  - `src/app/sitemap.ts` (nowy)
  - `public/images/og-image.jpg` (nowy, 1200x630)
  - `src/data/logo-dimensions.ts` (nowy, 28 logo)

**Status Fazy 1:** ✅ COMPLETE
