"use client";

import { usePathname } from "next/navigation";
import SponsorsBar from "@/components/SponsorsBar";

const HIDDEN_PATHS = ["/mecenasi", "/sponsorzy"];

export default function ConditionalSponsorsBar() {
  const pathname = usePathname();
  if (HIDDEN_PATHS.includes(pathname)) return null;
  return <SponsorsBar />;
}
