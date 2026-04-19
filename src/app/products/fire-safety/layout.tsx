import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fire Fighter & Safety Systems Nepal | Sprinklers, Hydrants – Advance National",
  description: "Complete fire safety systems including sprinklers, fire hydrants, alarm panels, CO2 suppression, and fire safety consultancy in Nepal.",
  keywords: "fire fighting system Nepal, fire sprinkler Nepal, fire hydrant Nepal, fire alarm Nepal, fire safety Nepal, CO2 suppression Nepal",
};
export default function FireLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
