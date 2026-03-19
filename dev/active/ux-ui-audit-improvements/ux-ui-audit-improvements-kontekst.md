# Kontekst: Wdrożenie rekomendacji audytu UX/UI

**Branch:** `feature/ux-ui-audit-improvements`
**Ostatnia aktualizacja:** 2026-03-19

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

| Plik | Linia | Kontekst | Zamiana na |
|------|-------|----------|-----------|
| `globals.css` | 216 | `button, .btn { transition: all }` | `transition: color, background-color, border-color, transform, box-shadow` |
| `Navbar.tsx` | 114 | Desktop dropdown container | `transition-[opacity,transform,visibility]` |
| `Navbar.tsx` | 176 | Mobile dropdown overflow | `transition-[max-height,opacity]` |
| `Navbar.tsx` | 274 | Mobile menu container | `transition-[max-height,opacity]` |
| `HeroSlider.tsx` | 70 | Primary CTA button | `transition-colors` |
| `HeroSlider.tsx` | 76 | Secondary CTA button | `transition-colors` |
| `HeroSlider.tsx` | 89 | Slide indicator | `transition-colors` |
| `SponsorsBar.tsx` | 124 | Sponsor card hover | `transition-[transform,box-shadow]` |
| `SponsorsBar.tsx` | 151 | Tytularny card | `transition-[transform,box-shadow]` |
| `SponsorsBar.tsx` | 193 | CTA button | `transition-colors` |
| `SponsorsBar.tsx` | 258 | Partner logo card | `transition-[transform,box-shadow]` |
| `kontakt/page.tsx` | 110,114,118,122 | Topic cards | `transition-[border-color,box-shadow]` |
| `mecenasi/page.tsx` | 135,141 | CTA buttons | `transition-colors` |
| `mecenasi/page.tsx` | 258 | Partner logo card | `transition-[transform,box-shadow]` |
| `mecenasi/page.tsx` | 274 | CTA button | `transition-colors` |
| `mecenasi/page.tsx` | 297,304,311 | How-it-works tiles | `transition-colors` |
| `mecenasi/page.tsx` | 334 | Package card | `transition-[transform,box-shadow]` |
| `mecenasi/page.tsx` | 402 | CTA button | `transition-colors` |
| `mecenasi/page.tsx` | 465 | FAQ chevron | `transition-transform` |
| `sponsorzy/page.tsx` | 119 | Benefit card | `transition-colors` |
| `sponsorzy/page.tsx` | 234 | CTA button | `transition-colors` |
| `sponsorzy/page.tsx` | 292 | Emocji CTA | `transition-colors` |
| `sponsorzy/page.tsx` | 340 | Sezonu CTA | `transition-colors` |
| `sponsorzy/page.tsx` | 454 | Contact CTA | `transition-colors` |
| `page.tsx` | 270 | Home CTA | `transition-colors` |
| `page.tsx` | 322 | Community CTA | `transition-colors` |

---

## Szczegółowa mapa raw `<img>` (do zamiany na Next.js Image)

| Plik | Linia | Element | Uwagi |
|------|-------|---------|-------|
| `Navbar.tsx` | 221 | Logo klubu (16h) | Znane wymiary, priority |
| `Footer.tsx` | 27 | Logo klubu | Znane wymiary |
| `SponsorsBar.tsx` | 126 | Logo sponsora w SponsorTier | Dynamiczne, potrzebne wymiary per tier |
| `SponsorsBar.tsx` | 153 | Logo tytularnego (Fit Dieta) | h-24/h-36 |
| `SponsorsBar.tsx` | 260 | Logo partnera | h-6/h-9 |
| `sponsorzy/page.tsx` | 359 | Logo Fit Dieta (powtórzone) | h-24 |
| `sponsorzy/page.tsx` | 373 | Logo strategiczny (loop) | h-16 |
| `sponsorzy/page.tsx` | 388 | Logo złoty (loop) | h-12 |
| `sponsorzy/page.tsx` | 404 | Logo srebrny (loop) | h-10 |
| `sponsorzy/page.tsx` | 428 | Logo brązowy (loop) | h-7 |
| `mecenasi/page.tsx` | 260 | Logo partnera (loop) | h-10 |

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
