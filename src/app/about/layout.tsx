import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Advance National Pvt Ltd | Industrial Equipment Supplier Nepal",
  description: "Learn about Advance National Pvt Ltd, Nepal's leading supplier of commercial laundry, HVAC, filtration, elevator, fire safety and waste treatment systems since 2010.",
  keywords: "about Advance National, Nepal industrial supplier, commercial equipment company Nepal",
};
export default function AboutLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
