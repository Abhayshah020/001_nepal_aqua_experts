"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import "./HvacPage.css";
import CTASection from "@/components/CTASection";

export default function HvacPage() {
  const { language: lang } = useLanguage();
  const t = (en: string, np: string) => (lang === "en" ? en : np);

  const items = [
    {
      name: t("Central Air Conditioning", "केन्द्रीय एयर कन्डिशनिङ"),
      desc: t(
        "Complete central AC systems for hotels, hospitals, malls, and office buildings.",
        "होटेल, अस्पताल, मल र कार्यालय भवनहरूको लागि सम्पूर्ण केन्द्रीय AC प्रणाली।"
      ),
      img: "/central_air_conditioner.jpg",
      features: [
        t("VRF/VRV systems", "VRF/VRV प्रणाली"),
        t("Chiller plants", "चिलर प्लान्ट"),
        t("Energy efficient", "ऊर्जा दक्ष"),
        t("BMS integration", "BMS एकीकरण"),
      ],
    },
    {
      name: t("Split & Ducted AC Systems", "स्प्लिट र डक्टेड AC प्रणाली"),
      desc: t(
        "High efficiency AC systems for rooms and zoned cooling solutions.",
        "कोठा र जोन-आधारित कूलिङका लागि उच्च दक्षता AC प्रणाली।"
      ),
      img: "/ducted-ac.jpg",
      features: [
        t("Inverter tech", "इन्भर्टर प्रविधि"),
        t("Zone control", "जोन नियन्त्रण"),
        t("Low noise", "कम आवाज"),
        t("AMC support", "AMC समर्थन"),
      ],
    },
    {
      name: t("Ventilation & AHU Systems", "भेन्टिलेसन र AHU प्रणाली"),
      desc: t(
        "Fresh air and ventilation systems for industrial and commercial spaces.",
        "औद्योगिक र व्यावसायिक स्थानहरूको लागि ताजा हावा र भेन्टिलेसन प्रणाली।"
      ),
      img: "/Rooftop-AHU.jpg",
      features: [
        t("AHU/FCU units", "AHU/FCU युनिट"),
        t("Heat recovery", "ताप पुनर्प्राप्ति"),
        t("CO2 control", "CO2 नियन्त्रण"),
        t("Basement ventilation", "बेसमेन्ट भेन्टिलेसन"),
      ],
    },
    {
      name: t("Clean Room Systems", "क्लिन रुम प्रणाली"),
      desc: t(
        "HEPA-grade clean air systems for hospitals, pharma, and labs.",
        "अस्पताल, फार्मा र प्रयोगशालाका लागि HEPA-ग्रेड स्वच्छ हावा प्रणाली।"
      ),
      img: "/hepa_grade_clean.jpg",
      features: [
        t("HEPA filtration", "HEPA फिल्ट्रेसन"),
        t("Positive pressure", "सकारात्मक दबाव"),
        t("ISO standards", "ISO मानक"),
        t("GMP compliant", "GMP अनुपालित"),
      ],
    },
  ];

  return (
    <div className="hvacPage">

      {/* HERO */}
      <section className="hvacPage__hero">
        <div className="hvacPage__overlay" />

        <div className="hvacPage__heroContent">
          <p className="hvacPage__badge">Advance National Pvt Ltd</p>

          <h1>{t("HVAC & Air Conditioning Systems", "HVAC र एयर कन्डिशनिङ प्रणाली")}</h1>

          <p>
            {t(
              "Complete climate control solutions for modern buildings.",
              "आधुनिक भवनहरूको लागि पूर्ण क्लाइमेट नियन्त्रण समाधान।"
            )}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="hvacPage__content">
        {items.map((item, i) => (
          <div key={i} className="hvacPage__card">

            <div className={`hvacPage__image ${i % 2 === 1 ? "reverse" : ""}`}>
              <img src={item.img} alt={item.name} />
            </div>

            <div className={`hvacPage__text ${i % 2 === 1 ? "reverse" : ""}`}>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>

              <div className="hvacPage__features">
                {item.features.map((f, j) => (
                  <span key={j}>
                    <CheckCircle size={14} />
                    {f}
                  </span>
                ))}
              </div>

              <div className="hvacPage__actions">
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