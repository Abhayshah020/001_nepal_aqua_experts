import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Elevator & Lift Systems Nepal | Passenger, Goods Lifts – Advance National",
  description: "Supply and installation of passenger elevators, goods lifts, service elevators, and escalators for commercial and residential buildings in Nepal.",
  keywords: "elevator Nepal, lift Nepal, passenger elevator Nepal, goods lift Nepal, escalator Nepal, building elevator Nepal",
};
export default function ElevatorLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
