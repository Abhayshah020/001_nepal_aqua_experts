"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import "./FiltrationPage.css";
import CTASection from "@/components/CTASection";

export default function FiltrationPage() {
  const { language: lang } = useLanguage();
  const t = (en: string, np: string) => (lang === "en" ? en : np);

  const items = [
    {
      name: t("Reverse Osmosis (RO) Plants", "रिभर्स ओस्मोसिस (RO) प्लान्ट"),
      desc: t(
        "Industrial-grade RO systems for purifying drinking water for hotels, factories, and communities. Capacity from 500 LPH to 50,000 LPH.",
        "होटेल, कारखाना र समुदायहरूको लागि पिउने पानी शुद्ध गर्न औद्योगिक-ग्रेड RO प्रणाली। ५०० LPH देखि ५०,००० LPH क्षमता।"
      ),
      img: "/water_filter-min-min.png",
      features: [
        t("1000–50,000 LPH", "१००० – ५०,००० LPH"),
        t("99% TDS removal", "९९% TDS हटाउँछ"),
        t("Automated system", "स्वचालित प्रणाली"),
        t("NSF certified", "NSF प्रमाणित"),
      ],
    },
    {
      name: t("Home & Commercial Filters", "घर र व्यावसायिक फिल्टर"),
      desc: t(
        "Multi-stage filtration systems for safe drinking water in homes and offices.",
        "घर र कार्यालयहरूको सुरक्षित पिउने पानीका लागि बहु-स्तरीय फिल्ट्रेसन प्रणाली।"
      ),
      img: "/Ro_filter.webp",
      features: [
        t("5-stage filtration", "५-चरण फिल्टर"),
        t("UV sterilization", "UV स्टेरिलाइजेसन"),
        t("Heavy metal removal", "भारी धातु हटाउने"),
        t("Low maintenance", "कम मर्मत"),
      ],
    },
    {
      name: t("Well Digging Services", "इनार खन्ने सेवा"),
      desc: t(
        "Professional borewell drilling and groundwater extraction across Nepal.",
        "नेपालभर व्यावसायिक बोरवेल ड्रिलिङ र भूमिगत पानी निकाल्ने सेवा।"
      ),
      img: "/well_digging.webp",
      features: [
        t("Up to 500ft depth", "५०० फिट गहिराई"),
        t("Site survey", "साइट सर्वे"),
        t("Pump installation", "पम्प स्थापना"),
        t("Water testing", "पानी परीक्षण"),
      ],
    },
    {
      name: t("Water Softeners Systems", "पानी सफ्टनर प्रणाली"),
      desc: t(
        "Industrial water softening systems for factories, hospitals, and laundries.",
        "कारखाना, अस्पताल र लन्ड्रीका लागि औद्योगिक पानी सफ्टनर प्रणाली।"
      ),
      img: "/water_softner.webp",
      features: [
        t("Ion exchange tech", "आयन एक्सचेन्ज"),
        t("Auto regeneration", "स्वचालित पुनर्जनन"),
        t("Scale prevention", "स्केल रोकथाम"),
        t("Industrial grade", "औद्योगिक स्तर"),
      ],
    },
  ];

  return (
    <div className="filtrationPage">

      <section className="hvacPage__hero">
        <div className="hvacPage__overlay" />

        <div className="hvacPage__heroContent">
          <p className="hvacPage__badge">Advance National Pvt Ltd</p>

          <h1>{t("Water Filtration & Treatment Systems", "पानी निस्पंदन प्रणाली")}</h1>

          <p>
            {t(
              "Complete clean water solutions for industries, homes, and communities across Nepal.",
              "नेपालभर उद्योग, घर र समुदायका लागि पूर्ण सफा पानी समाधान।"
            )}
          </p>
        </div>
      </section>


      {/* CONTENT */}
      <section className="filtrationPage__content">
        {items.map((item, i) => (
          <div key={i} className="filtrationPage__card">

            <div className={`filtrationPage__imgWrap ${i % 2 === 1 ? "reverse" : ""}`}>
              <img src={item.img} alt={item.name} />
            </div>

            <div className={`filtrationPage__text ${i % 2 === 1 ? "reverse" : ""}`}>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>

              <div className="filtrationPage__features">
                {item.features.map((f, j) => (
                  <span key={j}>
                    <CheckCircle size={14} />
                    {f}
                  </span>
                ))}
              </div>

              <div className="filtrationPage__actions">
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