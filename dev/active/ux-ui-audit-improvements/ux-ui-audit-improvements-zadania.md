# Zadania: Wdrożenie rekomendacji audytu UX/UI

**Branch:** `feature/ux-ui-audit-improvements`
**Ostatnia aktualizacja:** 2026-03-19

---

## FAZA 1: Krytyczne poprawki a11y + SEO (~2h)

- [ ] **1.1** Usunąć `user-select: none` z body w `globals.css:44-47` (rozmiar: S)
  - Usunąć `pointer-events: none` z `img` w `globals.css:56`
  - Usunąć klasę `.selectable` z `globals.css:59-64`
  - Usunąć klasę `selectable` z `kontakt/page.tsx:39,54`
  - Zostawić `user-drag: none` na obrazkach

- [ ] **1.2** Dodać `prefers-reduced-motion` media query w `globals.css` (rozmiar: S)
  - Dodać na końcu pliku blok `@media (prefers-reduced-motion: reduce)`
  - Wyzerowywać animation-duration i transition-duration

- [ ] **1.3** Dodać skip-to-content link w `layout.tsx` (rozmiar: S)
  - Dodać `<a href="#main-content" class="skip-link">` przed `<Navbar />`
  - Dodać `id="main-content"` do `<main>`
  - Dodać style `.skip-link` w `globals.css` (sr-only, widoczny na focus)

- [ ] **1.4** Uzupełnić OG image + meta tagi w `layout.tsx` (rozmiar: S)
  - Przygotować `og-image.jpg` (1200x630) z Grupa-6.jpg lub Grupa-7.jpg
  - Dodać `metadataBase: new URL('https://kprzukowo.pl')`
  - Dodać `openGraph.images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }]`
  - Dodać `twitter: { card: 'summary_large_image', ... }`

- [ ] **1.5** Utworzyć `robots.ts` i `sitemap.ts` w `src/app/` (rozmiar: S)
  - `robots.ts`: Allow all, disallow /admin, Sitemap URL
  - `sitemap.ts`: Wszystkie statyczne strony + dynamiczne mecze i aktualności z JSON

- [ ] **1.6** Naprawić `transition: all` w `globals.css:216` (rozmiar: S)
  - Zamienić na: `transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease`

**Weryfikacja Fazy 1:**
- [ ] `npm run build` przechodzi
- [ ] Tekst można zaznaczać na wszystkich stronach
- [ ] Tab-through: skip-link przenosi do main
- [ ] OG image widoczny (sprawdzić źródło HTML: `<meta property="og:image">`)
- [ ] /robots.txt i /sitemap.xml zwracają poprawne dane
- [ ] Lighthouse Accessibility >= 90

---

## FAZA 2: Formularz kontaktowy (~4h)

- [ ] **2.1** Zaimplementować server action w `kontakt/actions.ts` (rozmiar: M)
  - Zainstalować `resend` (`npm install resend`)
  - Utworzyć server action `sendContactEmail(formData: FormData)`
  - Walidacja: name (required), email (required, format), subject (required), message (required, min 10 znaków)
  - Wysyłka email via Resend API na `klub@kprzukowo.pl`
  - Zwracać `{ success: boolean, error?: string }`

- [ ] **2.2** Przebudować formularz w `kontakt/page.tsx` (rozmiar: M)
  - Wydzielić `ContactForm` client component (lub użyć `useActionState`)
  - Podpiąć server action do `<form action={...}>`
  - Dodać walidację inline (required, email format)
  - Dodać stany: idle, pending (disabled button + spinner), success (zielony komunikat), error (czerwony komunikat)
  - Dodać `aria-live="polite"` na kontener komunikatów
  - Dodać `role="alert"` na komunikaty błędów
  - Dodać pole honeypot (`<input type="text" name="website" class="hidden" tabIndex={-1}>`)

**Weryfikacja Fazy 2:**
- [ ] Formularz z poprawnymi danymi → email przychodzi
- [ ] Formularz z pustymi polami → inline error messages
- [ ] Formularz z błędnym email → inline error
- [ ] Pending state → button disabled, spinner/text "Wysyłanie..."
- [ ] Success state → zielony komunikat, formularz wyczyszczony
- [ ] Error state (API fail) → czerwony komunikat z instrukcją
- [ ] Screen reader czyta komunikaty sukcesu/błędu

---

## FAZA 3: Poprawa wizualna i konwersji (~6-8h)

- [ ] **3.1** Dodać font Oswald dla nagłówków w `layout.tsx` (rozmiar: M)
  - Importować `Oswald` z `next/font/google` (wagi: 500, 600, 700)
  - Zastąpić `latoHeading` nową deklaracją Oswald
  - Dostosować `letter-spacing` w `globals.css:68` (Oswald jest naturalnie kondensowany)
  - QA wizualne na KAŻDEJ stronie (10 stron)

- [ ] **3.2** Uprościć hero z karuzeli na single hero w `HeroSlider.tsx` (rozmiar: M)
  - Wybrać najlepsze zdjęcie (Grupa-6.jpg lub Grupa-7.jpg)
  - Usunąć state management (useState, useEffect, setInterval)
  - Jeden główny CTA: "Zobacz najbliższy mecz" (czerwony, duży)
  - Drugi CTA zdegradowany do text-linka: "Poznaj klub →"
  - Dodać social proof bar: "24+ Partnerów | 2M+ wyświetleń | Darmowe wejście"
  - Naprawić 3 instancje `transition-all` w tym pliku

- [ ] **3.3** Dodać custom `:focus-visible` w `globals.css` (rozmiar: S)
  - Globalny: `outline: 2px solid var(--red); outline-offset: 2px`
  - Na ciemnych tłach: `outline-color: white`
  - Test: Tab-through na każdej stronie, focus widoczny wszędzie

**Weryfikacja Fazy 3:**
- [ ] Nagłówki w Oswald, body w Lato — widoczna różnica
- [ ] Hero: statyczny, jeden CTA dominujący, social proof widoczny
- [ ] Focus ring widoczny na białym tle (czerwony) i ciemnym tle (biały)
- [ ] Wizualna inspekcja: 375px, 768px, 1024px, 1440px — brak regresji

---

## FAZA 4: SEO zaawansowane + wydajność (~7-8h)

- [ ] **4.1** Dodać JSON-LD structured data (rozmiar: M)
  - `layout.tsx`: Schema `Organization` + `SportsTeam` (nazwa, logo, social links, adres)
  - `mecze/[id]/page.tsx`: Schema `SportsEvent` (data, lokalizacja, drużyny)
  - `mecenasi/page.tsx`: Schema `FAQPage` (z istniejących faqItems)
  - Walidacja: Google Rich Results Test

- [ ] **4.2** Keyboard navigation w dropdown w `Navbar.tsx` (rozmiar: M)
  - Trigger: Enter/Space → toggle, ArrowDown → open + focus first
  - Dzieci: ArrowUp/ArrowDown → nawigacja, Escape → close + return focus, Tab → close
  - Dodać `role="menu"` na container, `role="menuitem"` na dzieci
  - Refs do zarządzania focusem
  - Naprawić 3 instancje `transition-all` przy okazji

- [ ] **4.3** Zamienić raw `<img>` na Next.js `<Image>` (rozmiar: M)
  - `Navbar.tsx:221` — logo klubu (1 img)
  - `Footer.tsx:27` — logo klubu (1 img)
  - `SponsorsBar.tsx:126,153,260` — loga sponsorów (3 img patterns)
  - `sponsorzy/page.tsx:359,373,388,404,428` — loga sponsorów (5 img patterns)
  - `mecenasi/page.tsx:260` — loga partnerów (1 img pattern)
  - Wymierzyć wymiary PRZED migracją (unikanie CLS)

- [ ] **4.4** Naprawić pozostałe `transition-all` we wszystkich komponentach (rozmiar: S-M)
  - `kontakt/page.tsx`: 4 instancje → `transition-[border-color,box-shadow]`
  - `mecenasi/page.tsx`: 9 instancji → per kontekst
  - `sponsorzy/page.tsx`: 5 instancji → per kontekst
  - `page.tsx`: 2 instancje → `transition-colors`

**Weryfikacja Fazy 4:**
- [ ] Google Rich Results Test → brak błędów na każdej stronie z JSON-LD
- [ ] Dropdown: Tab → Enter opens → ArrowDown navigates → Escape closes
- [ ] Zero `<img` tagów w codebase (Grep: `<img ` = 0 wyników)
- [ ] Zero `transition-all` w codebase (Grep: `transition-all` = 0 wyników, `transition: all` = 0)
- [ ] Lighthouse Performance >= 90
- [ ] `npm run build` przechodzi

---

## FAZA 5: Architektura i utrzymywalność (~5-30h)

- [ ] **5.1** Konsolidacja danych sponsorów do `src/data/sponsors.ts` (rozmiar: S-M)
  - Zdefiniować typy: `SponsorTier`, `Sponsor`, `SponsorData`
  - Wyeksportować obiekt z tierami: tytularny, strategiczny, zloty, srebrny, brazowy, partnerzy
  - Refaktor `SponsorsBar.tsx` → import z `sponsors.ts`
  - Refaktor `mecenasi/page.tsx` → import z `sponsors.ts`
  - Refaktor `sponsorzy/page.tsx` → import z `sponsors.ts`
  - Sprawdzić spójność danych między plikami

- [ ] **5.2** Dodać analitykę (rozmiar: S)
  - Zainstalować `@vercel/analytics` lub alternatywę
  - Dodać `<Analytics />` w `layout.tsx`
  - Zweryfikować dane w dashboardzie

- [ ] **5.3** Error handling dla API ZPRP w `page.tsx` (rozmiar: M)
  - Dodać try/catch z fallback UI ("Tabela chwilowo niedostępna")
  - Cache ostatniego sukcesu (filesystem lub KV)
  - Timeout na fetch (5s max)
  - Loading skeleton

- [ ] **5.4** Integracja Headless CMS (rozmiar: XL)
  - Wybór: Sanity / Payload CMS
  - Schema: matches, news, team, sponsors
  - Migracja danych z JSON
  - Refaktor komponentów na dynamiczne fetch

- [ ] **5.5** Dark mode (rozmiar: L)
  - Zdefiniować ciemną paletę kolorów
  - `@media (prefers-color-scheme: dark)` lub toggle
  - Przetestować na wszystkich stronach

**Weryfikacja Fazy 5:**
- [ ] `sponsors.ts` jest jedynym źródłem danych sponsorów
- [ ] Dashboard analityki pokazuje dane
- [ ] Gdy API ZPRP nie odpowiada → fallback UI zamiast pustego miejsca
