import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Custom Industrial Equipment Nepal | Mass Scale Fabrication – Advance National",
  description: "Custom-made industrial equipment fabrication at mass scale for any sector. Advance National builds bespoke machines for Nepal's commercial and industrial needs.",
  keywords: "custom industrial equipment Nepal, custom fabrication Nepal, bespoke machinery Nepal, industrial scale equipment Nepal",
};
export default function CustomLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
