import type { ReactNode } from "react";

interface BannerStripeProps {
  variant?: "red" | "navy" | "white" | "black";
  children: ReactNode;
  size?: "md" | "lg" | "xl";
}

const variants = {
  red: "bg-red text-white",
  navy: "bg-navy text-white",
  white: "bg-white text-navy",
  black: "bg-black text-white",
};

const sizes = {
  md: "py-12 md:py-16",
  lg: "py-20 md:py-28",
  xl: "py-28 md:py-40",
};

/**
 * Pełnoszerokościowy bandowy section z mocnym kolorem i wielką typografią.
 * FIFA WC26 vibe — solid blocks of color jako visual rhythm.
 */
export default function BannerStripe({
  variant = "red",
  children,
  size = "lg",
}: BannerStripeProps) {
  return (
    <section className={`relative overflow-hidden ${variants[variant]} ${sizes[size]}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
