# Kontekst projektu: Strona KPR Fitdieta Żukowo

## Informacje ogólne

**Nazwa projektu:** kpr-zukovo
**Typ:** Strona internetowa klubu piłki ręcznej
**Framework:** Next.js 16.1.4 (App Router, Turbopack)
**Styling:** Tailwind CSS
**Język:** TypeScript

---

## Struktura projektu

```
src/
├── app/
│   ├── page.tsx              # Strona główna
│   ├── layout.tsx            # Layout główny
│   ├── globals.css           # Style globalne + animacje
│   ├── aktualnosci/page.tsx  # Aktualności
│   ├── druzyna/page.tsx      # Drużyna i sztab
│   ├── kibice/page.tsx       # Kibice & Społeczność
│   ├── kontakt/page.tsx      # Kontakt + formularz
│   ├── mecenasi/page.tsx     # Mecenasi KPR
│   ├── mecze/
│   │   ├── page.tsx          # Terminarz meczów
│   │   └── [id]/page.tsx     # Szczegóły meczu
│   ├── o-klubie/page.tsx     # O klubie + Zarząd
│   └── sponsorzy/page.tsx    # Oferta sponsorska
├── components/
│   ├── Navbar.tsx            # Nawigacja z dropdown
│   ├── Footer.tsx            # Stopka
│   ├── HeroSlider.tsx        # Slider zdjęć na stronie głównej
│   ├── MatchCountdown.tsx    # Licznik do meczu
│   └── Icons.tsx             # Ikony SVG
└── data/
    ├── matches.json          # Terminarz meczów
    ├── team.json             # Zawodnicy i sztab
    └── news.json             # Aktualności
```

---

## Kolory klubowe

```css
--navy: #1e3a5f        /* Główny granatowy */
--navy-dark: #152d4a   /* Ciemniejszy granat */
--navy-light: #2a4a73  /* Jaśniejszy granat */
--red: #dc2626         /* Czerwony akcent */
--red-dark: #b91c1c    /* Ciemniejszy czerwony */
--red-light: #ef4444   /* Jaśniejszy czerwony */
```

---

## Nawigacja (menu)

| Pozycja | Typ | Zawiera |
|---------|-----|---------|
| Strona główna | Link | / |
| Mecze | Link | /mecze |
| Klub | Dropdown | O klubie, Drużyna |
| Kibice | Link | /kibice |
| Współpraca | Dropdown | Mecenasi KPR, Sponsorzy |
| Aktualności | Link | /aktualnosci |
| Kontakt | Link | /kontakt |

---

## Komponenty

### HeroSlider
- Automatyczne przełączanie zdjęć co 5 sekund
- Zdjęcia: Grupa-1.jpg, Grupa-2.jpg, Grupa-4.jpg, Grupa-6.jpg, Grupa-7.jpg
- Overlay gradient dla czytelności tekstu
- Wskaźniki slajdów na dole

### MatchCountdown
- Odlicza dni/godziny/minuty/sekundy do meczu
- Client component z useEffect + setInterval
- Aktualizacja co sekundę

### Navbar
- Sticky na górze strony
- Dropdown z 150ms delay przed zamknięciem
- Responsywny - menu hamburger na mobile
- Animowane rozwijanie na mobile

### Icons
Dostępne ikony SVG:
- TrophyIcon, UsersIcon, SeedlingIcon, HeartIcon
- HandshakeIcon, ChartIcon, HomeIcon, LocationIcon
- MailIcon, PhoneIcon, TicketIcon, FlameIcon
- CalendarIcon, ClockIcon, EyeIcon, ShareIcon
- TargetIcon, StarIcon, UserIcon, CheckCircleIcon

---

## Terminarz meczów (sezon 2024/2025)

| Data | Przeciwnik | Miejsce |
|------|------------|---------|
| 07.02 | AZS UKW Bydgoszcz | Wyjazd |
| 14.02 | Szczypiorniak Olsztyn | Dom |
| 21.02 | Wybrzeże Gdańsk II | Dom |
| 28.02 | Tytani Wejherowo | Dom |
| 07.03 | UKS Jedynka KODO Morąg | Wyjazd |
| 14.03 | Sparta Oborniki | Dom |
| 28.03 | Olsztyn | Dom |
| 11.04 | MKS Grudziądz | Wyjazd |
| 18.04 | Sambor Tczew | Dom |
| 25.04 | SMS Kwidzyn | Wyjazd |
| 02.05 | MKS Handball Czersk | Dom |
| 09.05 | Jeziorak Iława | Wyjazd |

---

## Zarząd klubu

| Imię i nazwisko | Stanowisko | Opis |
|-----------------|------------|------|
| Jan Kowalski | Prezes klubu | Od ponad 10 lat związany z klubem. Pasjonat piłki ręcznej i lokalnej społeczności. Odpowiada za strategiczny rozwój KPR Żukowo oraz relacje z partnerami i sponsorami. |
| Anna Nowak | Wiceprezes | Koordynuje codzienne działania klubu i współpracę z samorządem. Dba o rozwój sekcji młodzieżowych oraz organizację wydarzeń klubowych. |

*Dane placeholder - do uzupełnienia prawdziwymi danymi*

---

## Animacje CSS

### Keyframes
- `fade-in` - pojawienie z przesunięciem w górę
- `fade-in-up` - silniejsze pojawienie z przesunięciem
- `slide-in-left` - wjazd z lewej
- `slide-in-right` - wjazd z prawej
- `scale-in` - pojawienie ze skalowaniem
- `pulse-subtle` - delikatne pulsowanie

### Klasy animacji
- `.animate-fade-in`
- `.animate-fade-in-up`
- `.animate-slide-in-left`
- `.animate-slide-in-right`
- `.animate-scale-in`
- `.animate-pulse-subtle`

### Delay
- `.animate-delay-100` do `.animate-delay-500`

### Efekty hover
- `.hover-lift` - uniesienie + cień
- `.hover-glow` - czerwona poświata

---

## Pakiety mecenatu

| Pakiet | Cena | Opis |
|--------|------|------|
| Sympatyk KPR | 199 zł/mies. | Symboliczne wsparcie |
| Mecenas Lokalny KPR | 499 zł/mies. | Rekomendowany |
| Mecenas Główny | 1200 zł/mies. | Prestiżowy, limitowany |

---

## Pakiety sponsorskie

1. **Sponsor Meczu** - widoczność podczas jednego meczu
2. **Sponsor Emocji** - obecność przy najważniejszych momentach
3. **Partner Sezonu** - kompleksowa współpraca przez cały sezon

---

## Social media

- Facebook: https://www.facebook.com/kprzukovo
- Instagram: https://www.instagram.com/kprzukovo
- Email: kontakt@kprzukovo.pl

---

## Hala

**Nazwa:** Hala Widowiskowo-Sportowa w Żukowie
**Adres:** ul. Sportowa, 83-330 Żukowo
**Wstęp:** Wolny na wszystkie mecze domowe

---

## Zdjęcia

Dostępne w `/public/images/`:
- Grupa-1.jpg
- Grupa-2.jpg
- Grupa-4.jpg
- Grupa-6.jpg
- Grupa-7.jpg

---

## Komendy

```bash
npm run dev    # Uruchomienie serwera deweloperskiego
npm run build  # Build produkcyjny
npm run start  # Uruchomienie buildu
npm run lint   # Sprawdzenie lintingu
```

---

## Ostatnie zmiany

### 26.01.2026 (aktualizacja 2)
- Dodano osobną sekcję countdown nad "Nasza filozofia" na stronie głównej
- Przebudowano sekcję Zarząd klubu - tylko Prezes i Wiceprezes z opisami
- Nowy układ kart zarządu (większe zdjęcie + opis po prawej)

### 26.01.2026
- Uproszczono nawigację (dropdown dla Klub i Współpraca)
- Dodano HeroSlider z automatycznym przełączaniem zdjęć
- Dodano MatchCountdown - licznik do najbliższego meczu
- Zamieniono emotikony na profesjonalne ikony SVG
- Dodano sekcję Zarząd klubu na stronie O klubie
- Dodano animacje i efekty hover
- Zaktualizowano terminarz meczów
- Usunięto stronę Akademia

---

## Struktura strony głównej

1. HeroSlider (zdjęcia + CTA)
2. Sekcja "Najbliższy mecz" (szczegóły + countdown)
3. **Sekcja Countdown** (granatowe tło, sam licznik + przeciwnik)
4. Sekcja "Nasza filozofia"
5. Sekcja "Mecenasi & Sponsorzy"
6. Sekcja "Kibice & Społeczność"

---

## Do zrobienia (potencjalne)

- [ ] Dodać prawdziwe dane zarządu klubu
- [ ] Dodać logotypy przeciwników
- [ ] Dodać zdjęcia zawodników
- [ ] Implementacja formularza kontaktowego (backend)
- [ ] Dodać sekcję aktualności z prawdziwymi wpisami
- [ ] SEO - meta tagi, Open Graph
- [ ] Dodać mapę do strony kontakt
