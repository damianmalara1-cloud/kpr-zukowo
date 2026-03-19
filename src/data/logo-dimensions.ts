/**
 * Wymiary logo sponsorów — do użycia z Next.js Image component.
 * Zmierzone automatycznie 2026-03-19.
 */

export interface LogoDimension {
  src: string;
  width: number;
  height: number;
}

export const logoDimensions: Record<string, LogoDimension> = {
  // === Logo główne ===
  fitdietaa: { src: "/images/logo/fitdietaa.png", width: 1073, height: 420 },
  gmina_zukowo: { src: "/images/logo/gmina_zukowo.png", width: 2526, height: 1786 },
  kpr_zukowo: { src: "/images/logo/kpr_zukowo_beztla.png", width: 2339, height: 2334 },

  // === Mecenasi ===
  aste: { src: "/images/logo/mecenasi/aste.png", width: 428, height: 432 },
  biznes_po_kaszubsku: { src: "/images/logo/mecenasi/biznes_po_kaszubsku.png", width: 992, height: 210 },
  boterm: { src: "/images/logo/mecenasi/BOTERM.png", width: 3508, height: 1059 },
  budmax: { src: "/images/logo/mecenasi/budmax.png", width: 1838, height: 624 },
  cwp: { src: "/images/logo/mecenasi/cwp.png", width: 966, height: 518 },
  deka2: { src: "/images/logo/mecenasi/deka2.png", width: 1181, height: 370 },
  elektromajster: { src: "/images/logo/mecenasi/ELEKTROMAJSTER.png", width: 11808, height: 3146 },
  first_stop: { src: "/images/logo/mecenasi/first_stop.png", width: 3390, height: 951 },
  gosz: { src: "/images/logo/mecenasi/GOSZ.png", width: 2892, height: 1504 },
  gryf: { src: "/images/logo/mecenasi/gryf.png", width: 310, height: 109 },
  herb_powiat_kartuski: { src: "/images/logo/mecenasi/herb-powiat kartuski.png", width: 2098, height: 2444 },
  justgym: { src: "/images/logo/mecenasi/JUSTGYM.png", width: 2017, height: 1739 },
  kia: { src: "/images/logo/mecenasi/KIA.png", width: 1692, height: 1036 },
  lamel: { src: "/images/logo/mecenasi/lamel.png", width: 254, height: 162 },
  motion_clinic: { src: "/images/logo/mecenasi/MOTION-CLINIC.png", width: 2000, height: 998 },
  nata: { src: "/images/logo/mecenasi/nata.png", width: 2479, height: 1112 },
  okis: { src: "/images/logo/mecenasi/okis.png", width: 2858, height: 1054 },
  ox_system: { src: "/images/logo/mecenasi/ox_system.png", width: 1725, height: 356 },
  pastelowa: { src: "/images/logo/mecenasi/pastelowa.png", width: 1168, height: 678 },
  pbs: { src: "/images/logo/mecenasi/pbs.png", width: 588, height: 456 },
  repinski: { src: "/images/logo/mecenasi/Repiński.png", width: 1775, height: 1102 },
  tnt: { src: "/images/logo/mecenasi/T.N.T.png", width: 2480, height: 2509 },
  u_michala: { src: "/images/logo/mecenasi/U Micha_a.png", width: 2676, height: 2668 },
  wantrans: { src: "/images/logo/mecenasi/wantrans.png", width: 1312, height: 370 },
  swiat_reklamy: { src: "/images/logo/mecenasi/świat reklamy.png", width: 2830, height: 935 },
};
