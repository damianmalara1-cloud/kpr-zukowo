# Plan: Wdrożenie rekomendacji audytu UX/UI

**Branch:** `feature/ux-ui-audit-improvements`
**Ostatnia aktualizacja:** 2026-03-19
**Status:** Planowanie

---

## Podsumowanie wykonawcze

Audyt UX/UI strony KPR Fit Dieta Żukowo ujawnił **2 problemy krytyczne** (niedziałający formularz kontaktowy, zablokowane zaznaczanie tekstu), **6 szybkich poprawek** dostępności i SEO, oraz **9 ulepszeń średnio- i długoterminowych**. Plan obejmuje 5 faz wdrożeniowych, od natychmiastowych fix-ów a11y po transformacje architektoniczne.

**Strona pełni rolę:** centralnego huba wizerunkowo-biznesowego klubu (nie sklepu, nie portalu newsowego). Główne konwersje: pozyskanie sponsorów/mecenasów, zaangażowanie kibiców.

---

## Analiza obecnego stanu

### Co działa dobrze
- Silna identyfikacja marki (navy #1e3a5f + red #dc2626)
- 24+ logo sponsorów/partnerów jako social proof
- Responsywny layout mobile-first (Tailwind v4)
- Poprawna semantyka HTML (nagłówki, `<main>`, `<nav>`, `<footer>`)
- Optymalizacja obrazów hero (Next.js Image, priority, quality=85)
- Emocjonalny copywriting ("Tu zaczyna się historia")
- Rozbudowana oferta sponsorska z przejrzystym tierowaniem

### Co wymaga naprawy

| Problem | Wpływ | Plik źródłowy |
|---------|-------|---------------|
| `user-select: none` na body | Blokuje kopiowanie CAŁEGO tekstu | `globals.css:44-47` |
| Formularz kontaktowy bez backendu | Główny funnel konwersji = martwy | `kontakt/page.tsx:134` |
| Brak `og:image` | Social sharing bez grafiki | `layout.tsx:27-32` |
| Brak robots.txt + sitemap | SEO nie indeksuje optymalnie | Brak plików |
| Brak `prefers-reduced-motion` | A11y dla wrażliwych na ruch | `globals.css` |
| Brak skip-to-content | Keyboard nav wymaga przejścia 7+ linków | `layout.tsx` |
| 32 instancje `transition-all` | Monitorowanie WSZYSTKICH właściwości CSS | Rozproszone |
| 17 raw `<img>` tagów | Brak optymalizacji WebP/lazy loading | Navbar, Footer, SponsorsBar, sponsorzy, mecenasi |
| 1 font (Lato) dla nagłówków i body | Brak kontrastu typograficznego | `layout.tsx:8-20` |
| Karuzela hero (2 slajdy) | Niski engagement, konkurujące CTA | `HeroSlider.tsx` |
| Brak JSON-LD schema | Brak rich snippetów Google | Wszystkie strony |
| Dane sponsorów w 3 plikach | Rozsynchronizowanie kwestią czasu | SponsorsBar, mecenasi, sponsorzy |
| Brak analityki | Brak raportów dla sponsorów | Brak integracji |
| Dropdown menu = mouse only | Keyboard users nie mogą nawigować | `Navbar.tsx` |

---

## Stan docelowy

Po wdrożeniu planu strona będzie:
1. **W pełni dostępna** (WCAG AA): skip-link, focus-visible, keyboard nav, reduced-motion
2. **Konwertująca**: działający formularz z walidacją, jeden wyraźny CTA w hero, social proof above-the-fold
3. **Zoptymalizowana SEO**: OG image, sitemap, robots.txt, JSON-LD (SportsTeam, SportsEvent, FAQPage)
4. **Wydajna**: Next.js Image na wszystkich obrazkach, brak `transition-all`, `prefers-reduced-motion`
5. **Typograficznie wyrazista**: Oswald na nagłówkach + Lato na body = sportowy charakter
6. **Utrzymywalna**: sponsorzy w jednym źródle danych, analityka do raportowania

---

## Fazy wdrożenia

### FAZA 1: Krytyczne poprawki a11y + SEO (~2h)
**Cel:** Naprawić naruszenia dostępności i fundamenty SEO.
**Zakres:** Zadania 1.1-1.6

| Zadanie | Rozmiar | Zależności |
|---------|---------|------------|
| 1.1 Usunięcie user-select: none | S | Brak |
| 1.2 prefers-reduced-motion | S | Brak |
| 1.3 Skip-to-content link | S | Brak |
| 1.4 OG image + meta tagi | S | Wymaga przygotowania grafiki |
| 1.5 robots.txt + sitemap | S | Brak |
| 1.6 Naprawa transition: all | S | Brak |

**Kryteria akceptacji:**
- Tekst można zaznaczać i kopiować na wszystkich stronach
- Lighthouse Accessibility score >= 95
- `npm run build` bez błędów
- OG image widoczny w Facebook Debugger
- robots.txt i sitemap.xml dostępne pod /robots.txt i /sitemap.xml

---

### FAZA 2: Formularz kontaktowy (~4h)
**Cel:** Uruchomić główny funnel konwersji.
**Zakres:** Zadanie 2.1

| Zadanie | Rozmiar | Zależności |
|---------|---------|------------|
| 2.1 Server action + walidacja + email | M | Wymaga klucza API Resend lub konfiguracji SMTP |

**Kryteria akceptacji:**
- Formularz wysyła email na adres klubu po wypełnieniu
- Walidacja inline: wymagane pola, format email
- Stan sukcesu: komunikat potwierdzający z `aria-live="polite"`
- Stan błędu: komunikat z instrukcją, `role="alert"`
- Pole honeypot ukryte (antyspam)
- Przycisk wyłączony podczas wysyłania (pending state)

---

### FAZA 3: Poprawa wizualna i konwersji (~6-8h)
**Cel:** Wzmocnić identyfikację wizualną i konwersję.
**Zakres:** Zadania 3.1-3.3

| Zadanie | Rozmiar | Zależności |
|---------|---------|------------|
| 3.1 Font nagłówkowy (Oswald) | M | Wymaga QA na WSZYSTKICH stronach |
| 3.2 Uproszczenie hero | M | Opcjonalnie po 3.1 (font wpływa na hero) |
| 3.3 focus-visible styling | S | Brak |

**Kryteria akceptacji:**
- Nagłówki w Oswald, body w Lato — widoczny kontrast
- Hero: jedno zdjęcie, jeden główny CTA, social proof bar
- Focus ring widoczny na WSZYSTKICH tłach (biały na navy, czerwony na białym)
- Wizualna inspekcja na 375px, 768px, 1024px, 1440px bez regresji

---

### FAZA 4: SEO zaawansowane + wydajność (~7-8h)
**Cel:** Rich snippety w Google, optymalizacja obrazów.
**Zakres:** Zadania 4.1-4.3

| Zadanie | Rozmiar | Zależności |
|---------|---------|------------|
| 4.1 JSON-LD structured data | M | Brak |
| 4.2 Keyboard nav dropdown | M | Brak |
| 4.3 Next.js Image na wszystkich img | M | Wymaga wymiarów wszystkich logo |

**Kryteria akceptacji:**
- Google Rich Results Test przechodzi bez błędów
- Dropdown menu w pełni obsługiwane klawiaturą (Enter, Space, Arrows, Escape)
- Zero raw `<img>` tagów w codebase
- Lighthouse Performance score >= 90

---

### FAZA 5: Architektura i utrzymywalność (~5-30h)
**Cel:** Przygotowanie na skalowanie.
**Zakres:** Zadania 5.1-5.5

| Zadanie | Rozmiar | Zależności |
|---------|---------|------------|
| 5.1 Konsolidacja danych sponsorów | S-M | Brak |
| 5.2 Analityka (Vercel/Plausible) | S | Wymaga konta/konfiguracji |
| 5.3 Error handling API ZPRP | M | Brak |
| 5.4 Headless CMS | XL | Wymaga wyboru CMS, migracji danych |
| 5.5 Dark mode | L | Po konsolidacji kolorów |

**Kryteria akceptacji:**
- Sponsor data w jednym pliku, importowany w 3 komponentach
- Dashboard analityki z danymi o ruchu
- Fallback UI gdy API ZPRP nie odpowiada
- (CMS) Treści edytowalne bez deploymentu

---

## Ocena ryzyka

| Ryzyko | Prawdopodobieństwo | Wpływ | Mitygacja |
|--------|-------------------|-------|-----------|
| Zmiana fontu nagłówkowego łamie layout | Średnie | Średni | QA na każdej stronie, porównanie wizualne przed/po |
| Resend/email API wymaga weryfikacji domeny | Wysokie | Wysoki | Przygotować fallback (mailto: link) na czas konfiguracji DNS |
| Usunięcie karuzeli hero — klient chce zostawić | Niskie | Niski | Przygotować wariant z 1 slajdem jako opcję A/B |
| Logo sponsorów bez znanych wymiarów → CLS | Średnie | Średni | Zmierzyć wymiary każdego logo przed migracją na Image |
| API ZPRP zmieni strukturę HTML | Wysokie | Wysoki | Faza 5.3 — cache + fallback UI |
| Brak klucza SMTP/Resend do testowania formularza | Średnie | Krytyczny | Ustalić z klientem sposób wysyłki emaili PRZED fazą 2 |

---

## Mierniki sukcesu

| Miernik | Obecna wartość | Cel |
|---------|---------------|-----|
| Lighthouse Accessibility | ~70-75 (est.) | >= 95 |
| Lighthouse Performance | ~80 (est.) | >= 90 |
| Lighthouse SEO | ~70 (est.) | >= 95 |
| Formularz kontaktowy | Nie działa | 100% dostarczalność |
| Raw `<img>` tags | 17 | 0 |
| `transition-all` instances | 32 | 0 |
| Fonty nagłówkowe | 1 (Lato) | 2 (Oswald + Lato) |
| JSON-LD schemas | 0 | 4 (Organization, SportsTeam, SportsEvent, FAQPage) |
| OG image | Brak | 1200x630 branded |

---

## Wymagane zasoby i zależności

### Zewnętrzne
- **Resend API key** lub konfiguracja SMTP do wysyłki emaili (Faza 2)
- **OG image 1200x630** — do przygotowania ze zdjęć drużynowych (Faza 1)
- **Wymiary logo sponsorów** — do zmierzenia przed migracją na Image (Faza 4)
- **(Opcjonalnie) Konto Vercel Analytics / Plausible** (Faza 5)

### Wewnętrzne
- Dostęp do repozytorium (jest)
- Node.js + npm (jest)
- Przeglądarka do testowania responsywności (jest)
