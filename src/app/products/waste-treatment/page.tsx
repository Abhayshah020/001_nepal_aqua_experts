"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import "./WastePage.css";
import CTASection from "@/components/CTASection";

export default function WastePage() {
  const { language: lang } = useLanguage();
  const t = (en: string, np: string) => (lang === "en" ? en : np);

  const items = [
    {
      name: t("Sewage Treatment Plants (STP)", "ढल उपचार संयन्त्र (STP)"),
      desc: t(
        "Complete STP design and installation for residential, hotel, hospital and commercial buildings.",
        "आवासीय, होटेल, अस्पताल र व्यावसायिक भवनहरूको लागि STP डिजाइन र स्थापना।"
      ),
      img: "/sewage-treatment-plant-stp.jpg",
      features: [
        t("MBR technology", "MBR प्रविधि"),
        t("5–500 KLD capacity", "५–५०० KLD"),
        t("Automated system", "स्वचालित प्रणाली"),
        t("Water reuse", "पानी पुन: प्रयोग"),
      ],
    },
    {
      name: t("Effluent Treatment Plants (ETP)", "ETP प्रणाली"),
      desc: t(
        "Industrial wastewater treatment for factories, textile plants and food industries.",
        "कारखाना, कपडा उद्योग र खाद्य उद्योगहरूको लागि औद्योगिक फोहोर पानी उपचार।"
      ),
      img: "/erp.jpg",
      features: [
        t("Chemical treatment", "रासायनिक उपचार"),
        t("pH balancing", "pH सन्तुलन"),
        t("Sludge control", "स्लज नियन्त्रण"),
        t("Compliance ready", "नियम पालना योग्य"),
      ],
    },
  ];

  return (
    <div className="wastePage">

      {/* HERO */}
      <section className="wastePage__hero">
        <div className="wastePage__overlay" />

        <div className="wastePage__heroContent">
          <p className="wastePage__badge">Advance National Pvt Ltd</p>

          <h1>{t("Waste Treatment Systems", "फोहोर उपचार प्रणाली")}</h1>

          <p>
            {t(
              "Sustainable and compliant waste management solutions for industries and communities.",
              "उद्योग र समुदायहरूको लागि दिगो र नियमअनुसार फोहोर व्यवस्थापन समाधान।"
            )}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="wastePage__content">

        {items.map((item, i) => (
          <div key={i} className="wastePage__card">

            <div className={`wastePage__img ${i % 2 === 1 ? "reverse" : ""}`}>
              <img src={item.img} alt={item.name} />
            </div>

            <div className={`wastePage__text ${i % 2 === 1 ? "reverse" : ""}`}>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>

              <div className="wastePage__features">
                {item.features.map((f, j) => (
                  <span key={j}>
                    <CheckCircle size={14} />
                    {f}
                  </span>
                ))}
              </div>

              <div className="wastePage__actions">
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