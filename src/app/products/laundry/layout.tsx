import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Laundry Equipment Nepal | Washing, Drying, Hydro Extractor – Advance National",
  description: "Buy commercial washing machines, industrial dryers, hydro extractors, flatwork ironers, and press systems in Nepal. Best prices. Advance National Pvt Ltd.",
  keywords: "commercial washing machine Nepal, industrial dryer Nepal, hydro extractor Nepal, laundry press Nepal, flatwork ironer Nepal, laundry equipment Nepal",
};

export default function LaundryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
