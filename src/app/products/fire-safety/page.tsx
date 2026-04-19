"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, ShieldAlert } from "lucide-react";
import "./FireSafetyPage.css";
import CTASection from "@/components/CTASection";

export default function FireSafetyPage() {
  const { language: lang } = useLanguage();
  const t = (en: string, np: string) => (lang === "en" ? en : np);

  const items = [
    {
      name: t("Automatic Sprinkler Systems", "स्वचालित स्प्रिंकलर प्रणाली"),
      desc: t(
        "NFPA-compliant wet, dry, and pre-action sprinkler systems for commercial buildings, warehouses, and factories.",
        "NFPA-अनुपालित भिजेको, सुक्खा र पूर्व-कार्य स्प्रिंकलर प्रणाली व्यावसायिक भवन, गोदाम र कारखानाहरूको लागि।"
      ),
      img: "/sprinkler.webp",
      features: [
        t("NFPA 13 compliant", "NFPA 13 अनुपालित"),
        t("Wet & dry systems", "भिजेको र सुक्खा"),
        t("Quick response", "द्रुत प्रतिक्रिया"),
        t("Full design support", "पूर्ण डिजाइन समर्थन"),
      ],
    },
    {
      name: t("Fire Hydrant Systems", "फायर हाइड्रेन्ट प्रणाली"),
      desc: t(
        "Complete hydrant network with pumps, valves, hose reels and underground storage systems.",
        "पम्प, भल्भ, होज रिल र भूमिगत ट्यांक सहित सम्पूर्ण हाइड्रेन्ट नेटवर्क।"
      ),
      img: "/Fire-Hydrant-System.webp",
      features: [
        t("Jockey pump system", "जकी पम्प प्रणाली"),
        t("Dual pump setup", "डुअल पम्प सेटअप"),
        t("Underground tanks", "भूमिगत ट्यांक"),
        t("IS/EN standards", "IS/EN मानक"),
      ],
    },
    {
      name: t("Fire Alarm Systems", "फायर अलार्म प्रणाली"),
      desc: t(
        "Advanced smoke, heat, and flame detection with addressable control panels.",
        "उन्नत धुवाँ, ताप र आगो पत्ता लगाउने प्रणाली।"
      ),
      img: "/fire-alarm-system.webp",
      features: [
        t("Addressable system", "ठेगान योग्य प्रणाली"),
        t("Multi-zone coverage", "बहु-जोन कभरेज"),
        t("24/7 monitoring", "२४/७ निगरानी"),
        t("Voice alerts", "आवाज चेतावनी"),
      ],
    },
    {
      name: t("CO2 Suppression Systems", "CO2 दमन प्रणाली"),
      desc: t(
        "Gas-based fire suppression for server rooms and sensitive environments.",
        "सर्भर र संवेदनशील स्थानका लागि ग्यास आधारित दमन प्रणाली।"
      ),
      img: "/High-Pressure-CO2.jpg",
      features: [
        t("FM-200 / CO2", "FM-200 / CO2"),
        t("Zero water damage", "पानी क्षति छैन"),
        t("Fast discharge", "द्रुत डिस्चार्ज"),
        t("Clean suppression", "सफा दमन"),
      ],
    },
  ];

  return (
    <div className="fireSafetyPage">

      {/* HERO */}

      <section className="hvacPage__hero">
        <div className="hvacPage__overlay" />

        <div className="hvacPage__heroContent">
          <p className="hvacPage__badge">Advance National Pvt Ltd</p>

          <h1>{t("Fire Safety & Protection Systems", "आगो सुरक्षा प्रणाली")}</h1>

          <p>
            {t(
              "Protecting lives and infrastructure with certified fire safety engineering solutions.",
              "प्रमाणित आगो सुरक्षा इन्जिनियरिङ समाधानद्वारा जीवन र संरचना सुरक्षा।"
            )}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="fireSafetyPage__content">
        {items.map((item, i) => (
          <div key={i} className="fireSafetyPage__card">

            <div className={`fireSafetyPage__img ${i % 2 === 1 ? "reverse" : ""}`}>
              <img src={item.img} alt={item.name} />
            </div>

            <div className={`fireSafetyPage__text ${i % 2 === 1 ? "reverse" : ""}`}>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>

              <div className="fireSafetyPage__features">
                {item.features.map((f, j) => (
                  <span key={j}>
                    <CheckCircle size={14} />
                    {f}
                  </span>
                ))}
              </div>

              <div className="fireSafetyPage__actions">
                <a href="tel:+9779841370260" className="btnPrimary">
                  <Phone size={16} /> {t("Call Now", "कल गर्नुहोस्")}
                </a>

                <Link href="/contact" className="btnSecondary">
                  {t("Get Quote", "उद्धरण")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </section>


      {/* GLOBAL CTA */}
      <CTASection language={lang} />

    </div>
  );
}