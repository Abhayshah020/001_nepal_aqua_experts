import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Waste Treatment Systems Nepal | STP, ETP, Biogas – Advance National",
  description: "Industrial sewage treatment plants (STP), effluent treatment plants (ETP), and biogas systems for commercial and industrial facilities in Nepal.",
  keywords: "waste treatment Nepal, STP Nepal, ETP Nepal, sewage treatment Nepal, effluent treatment Nepal, biogas plant Nepal",
};
export default function WasteLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
