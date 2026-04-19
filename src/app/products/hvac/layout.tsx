import { Metadata } from "next";
export const metadata: Metadata = {
  title: "HVAC & Central AC Systems Nepal | VRF, Ducted Cooling – Advance National",
  description: "Supply and installation of HVAC systems, central air conditioning, VRF/VRV systems, ventilation, and air purification for entire buildings in Nepal.",
  keywords: "HVAC Nepal, central AC Nepal, VRF system Nepal, commercial air conditioning Nepal, building ventilation Nepal, ducted AC Nepal",
};
export default function HvacLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
