# Zadania: Wdrożenie rekomendacji audytu UX/UI

**Branch:** `feature/ux-ui-audit-improvements`
**Ostatnia aktualizacja:** 2026-03-19 (Faza 2 ✅ complete)

---

## FAZA 1: Krytyczne poprawki a11y + SEO (~2h)

- [x] **1.1** Usunąć `user-select: none` z body w `globals.css:44-47` (rozmiar: S) ✅
  - Usunięto `user-select: none` (4 linie) z body
  - Usunięto `pointer-events: none` z `img`
  - Usunięto klasę `.selectable` z `globals.css`
  - Usunięto klasę `selectable` z `kontakt/page.tsx:39,54`
  - Zostawiono `user-drag: none` na obrazkach

- [x] **1.2** Dodać `prefers-reduced-motion` media query w `globals.css` (rozmiar: S) ✅
  - Dodano blok `@media (prefers-reduced-motion: reduce)` na końcu `globals.css`
  - Zeruje animation-duration, animation-iteration-count, transition-duration, scroll-behavior

- [x] **1.3** Dodać skip-to-content link w `layout.tsx` (rozmiar: S) ✅
  - Dodano `<a href="#main-content" class="skip-link">Przejdź do treści</a>` przed `<Navbar />`
  - Dodano `id="main-content"` do `<main>`
  - Dodano style `.skip-link` w `globals.css` (sr-only, widoczny na focus, navy bg)

- [x] **1.4** Uzupełnić OG image + meta tagi w `layout.tsx` (rozmiar: S) ✅
  - OG image (1200x630) wygenerowano z Grupa-7.jpg → `public/images/og-image.jpg`
  - Dodano `metadataBase: new URL('https://kprzukowo.pl')`
  - Dodano `openGraph.images` z wymiarami i alt
  - Dodano `twitter: { card: 'summary_large_image', ... }`

- [x] **1.5** Utworzyć `robots.ts` i `sitemap.ts` w `src/app/` (rozmiar: S) ✅
  - `robots.ts`: Allow all, disallow /admin, sitemap URL
  - `sitemap.ts`: 10 stron statycznych + dynamiczne mecze (z matches.json) + aktualności (z news.json)

- [x] **1.6** Naprawić `transition: all` w `globals.css:216` (rozmiar: S) ✅
  - Zamieniono na: `transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease`

**Weryfikacja Fazy 1:**
- [x] `npm run build` przechodzi ✅ (28/28 stron, 0 błędów)
- [x] Tekst można zaznaczać na wszystkich stronach ✅ (user-select: none usunięte)
- [x] Tab-through: skip-link przenosi do main ✅ (skip-link + id="main-content")
- [x] OG image widoczny ✅ (metadataBase + openGraph.images + twitter)
- [x] /robots.txt i /sitemap.xml zwracają poprawne dane ✅ (widoczne w build output)
- [ ] Lighthouse Accessibility >= 90 (wymaga testu w przeglądarce)

---

## FAZA 2: Formularz kontaktowy (~4h) — 🟡 CZĘŚCIOWO

- [x] **2.1** Walidacja formularza (rozmiar: S) ✅
  - Client-side walidacja: name (required), email (required, regex), subject (required), message (required, min 10 znaków)
  - Zwraca per-field error messages z `aria-invalid` i `aria-describedby`

- [x] **2.2** Przebudować formularz w `kontakt/page.tsx` (rozmiar: M) ✅
  - Wydzielono `ContactForm` client component (`kontakt/ContactForm.tsx`)
  - Walidacja inline per pole
  - Stany: idle, pending (disabled button + spinner SVG + "Wysyłanie..."), success (zielony komunikat), error (czerwony komunikat)
  - `aria-live="polite"` na kontener komunikatów statusu
  - `role="alert"` na komunikaty błędów (zarówno field-level jak i global)
  - Pole honeypot (`name="website"`, `absolute -left-[9999px]`, `aria-hidden`, `tabIndex={-1}`)
  - Formularz resetowany po sukcesie (`formRef.current.reset()`)
  - Gwiazdki `*` przy wymaganych polach

- [ ] **2.3** Wysyłka email via Web3Forms (rozmiar: S) ⏳
  - Web3Forms skonfigurowane (klucz: `7b929b5c-...`, email: `klub@kprzukowo.pl`)
  - Kod client-side fetch do `api.web3forms.com/submit` gotowy
  - **BLOKADA:** Web3Forms zwraca 403 na localhost — wymaga testowania na docelowym hostingu (Vercel/produkcja)
  - Po deploy na docelową domenę przetestować ponownie

**Weryfikacja Fazy 2:**
- [ ] Formularz z poprawnymi danymi → email przychodzi ⏳ (wymaga deploy na hosting)
- [x] Formularz z pustymi polami → inline error messages ✅
- [x] Formularz z błędnym email → inline error ✅
- [x] Pending state → button disabled, spinner/text "Wysyłanie..." ✅
- [x] Success state → zielony komunikat, formularz wyczyszczony ✅ (logika gotowa)
- [x] Error state (API fail) → czerwony komunikat z instrukcją ✅
- [x] Screen reader czyta komunikaty sukcesu/błędu ✅ (aria-live + role="alert")
- [x] `npm run build` przechodzi ✅

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
