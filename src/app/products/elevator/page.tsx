"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import "./ElevatorPage.css";
import CTASection from "@/components/CTASection";

export default function ElevatorPage() {
  const { language: lang } = useLanguage();
  const t = (en: string, np: string) => (lang === "en" ? en : np);

  const items = [
    {
      name: t("Passenger Elevators", "यात्री लिफ्टहरू"),
      desc: t(
        "Modern gearless and geared passenger elevators for hotels, offices, apartments, and hospitals. Load capacity from 480kg to 3000kg.",
        "होटेल, कार्यालय, अपार्टमेन्ट र अस्पतालहरूको लागि आधुनिक गियरलेस र गियर्ड यात्री लिफ्टहरू। ४८०kg देखि ३०००kg भार क्षमता।"
      ),
      img: "/Passenger-Elevator.jpg",
      features: [
        t("Gearless motor", "गियरलेस मोटर"),
        t("Up to 2.5 m/s speed", "२.५ m/s सम्म गति"),
        t("Smooth ride quality", "सहज सवारी गुणस्तर"),
        t("Energy regeneration", "ऊर्जा पुनर्जनन"),
      ],
    },
    {
      name: t("Goods & Service Lifts", "सामान र सेवा लिफ्टहरू"),
      desc: t(
        "Heavy-duty goods lifts and service elevators for warehouses, factories, hospitals, and restaurants.",
        "गोदाम, कारखाना, अस्पताल र रेस्टुरेन्टहरूको लागि भारी-सेवा सामान लिफ्ट।"
      ),
      img: "/service-goods-lifts-mobile.webp",
      features: [
        t("500–10,000kg capacity", "५००–१०,०००kg"),
        t("Heavy-duty structure", "भारी संरचना"),
        t("Auto-leveling", "स्वत: समतलीकरण"),
        t("Stainless interior", "स्टेनलेस इन्टेरियर"),
      ],
    },
    {
      name: t("MRL Elevators", "MRL लिफ्ट"),
      desc: t(
        "Machine-room-less elevators with modern compact drive systems.",
        "मेसिन रुम बिना आधुनिक कम्प्याक्ट ड्राइभ प्रणाली।"
      ),
      img: "/MRL-Elevator.webp",
      features: [
        t("No machine room", "मेसिन रुम छैन"),
        t("Space saving design", "ठाउँ बचत"),
        t("Energy efficient", "ऊर्जा दक्ष"),
        t("Modern cabin", "आधुनिक केबिन"),
      ],
    },
    {
      name: t("Escalators", "एस्केलेटर"),
      desc: t(
        "Commercial escalators for malls, airports, and stations.",
        "मल, विमानस्थल र स्टेशनका लागि एस्केलेटर।"
      ),
      img: "/realistic-escalator.jpg",
      features: [
        t("Smooth motion", "सहज गति"),
        t("High durability", "बलियो संरचना"),
        t("Indoor/outdoor", "इनडोर/आउटडोर"),
        t("Safety sensors", "सेफ्टी सेन्सर"),
      ],
    },
  ];

  return (
    <div className="elevatorPage">

      {/* HERO */}

      <section className="hvacPage__hero">
        <div className="hvacPage__overlay" />

        <div className="hvacPage__heroContent">
          <p className="hvacPage__badge">Advance National Pvt Ltd</p>

          <h1>{t("Elevator & Lift Systems", "लिफ्ट र एस्केलेटर प्रणाली")}</h1>

          <p>
            {t(
              "Premium vertical transportation systems for modern buildings.",
              "आधुनिक भवनहरूको लागि प्रिमियम ठाडो यातायात प्रणाली।"
            )}
          </p>
        </div>
      </section>

      {/* ITEMS */}
      <section className="elevatorPage__section">
        {items.map((item, i) => (
          <div key={i} className="elevatorPage__card">

            <div className="elevatorPage__imageWrap">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="elevatorPage__content">
              <h2>{item.name}</h2>
              <p>{item.desc}</p>

              <div className="elevatorPage__features">
                {item.features.map((f, j) => (
                  <div key={j} className="elevatorPage__feature">
                    <CheckCircle size={14} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="elevatorPage__actions">
                <a href="tel:+9779841370260" className="elevatorPage__btnPrimary">
                  <Phone size={14} /> Call
                </a>

                <Link href="/contact" className="elevatorPage__btnSecondary">
                  Get Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </section>

      <CTASection language={lang} />

    </div>
  );
}