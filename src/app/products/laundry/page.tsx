"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import "./LaundryPage.css";
import CTASection from "@/components/CTASection";

interface ProductItem {
  name: string;
  npName: string;
  desc: string;
  npDesc: string;
  img: string;
  features: string[];
  npFeatures: string[];
}

const laundryProducts: ProductItem[] = [
  {
    name: "Commercial Washing Machines",
    npName: "व्यावसायिक धुने मेसिन",
    desc: "Heavy-duty washing machines for hotels, hospitals, laundromats.",
    npDesc: "होटेल, अस्पताल र लन्ड्रोम्याटका लागि भारी-कर्तव्य धुने मेसिन।",
    img: "/washing_machine-min-min.png",
    features: ["15–150kg capacity", "Energy efficient", "Auto cycles", "Free 1 year AMC & 2 years warranty", "304 Stainless Steel"],
    npFeatures: ["१०–१५० kg क्षमता", "ऊर्जा दक्ष", "स्वचालित चक्र", "१ वर्षको मुफ्त AMC र २ वर्षको वारन्टी", "३०४ स्टेनलेस स्टील"],
  },
  {
    name: "Commercial Dryers",
    npName: "सुकाउने मेसिन",
    desc: "Industrial dryers for continuous high-volume laundry operations.",
    npDesc: "निरन्तर उच्च-भोल्युम लन्ड्री सञ्चालनका लागि औद्योगिक ड्रायरहरू।",
    img: "/dryer-removebg-preview-min-min.png",
    features: ["Gas & electric", "Fast drying", "Low shrinkage", "Smart sensors", "Free 1 year AMC & 2 years warranty", "304 Stainless Steel"],
    npFeatures: ["ग्यास र बिजुली", "छिटो सुकाउने", "कम संकुचन", "स्मार्ट सेन्सर",  "१ वर्षको मुफ्त AMC र २ वर्षको वारन्टी", "३०४ स्टेनलेस स्टील"],
  },
  {
    name: "Hydro Extractors",
    npName: "हाइड्रो एक्सट्रक्टर",
    desc: "High-speed water removal systems for faster drying.",
    npDesc: "छिटो सुकाउनका लागि उच्च-गतिको पानी निकाल्ने प्रणाली।",
    img: "/hydro_machine-min-min.png",
    features: ["95% water removal", "High RPM", "Stainless steel", "Low vibration", "Free 1 year AMC & 2 years warranty", "304 Stainless Steel"],
    npFeatures: ["९५% पानी हटाउने", "उच्च RPM", "स्टेनलेस स्टील", "कम कम्पन",  "१ वर्षको मुफ्त AMC र २ वर्षको वारन्टी", "३०४ स्टेनलेस स्टील"],
  },
];

export default function LaundryPage() {
  const { language } = useLanguage();

  return (
    <div className="laundryPage">

      <section className="hvacPage__hero">
        <div className="hvacPage__overlay" />

        <div className="hvacPage__heroContent">
          <p className="hvacPage__badge">Advance National Pvt Ltd</p>

          <h1>{language === "en"
              ? "Commercial Laundry Systems"
              : "व्यावसायिक लन्ड्री प्रणाली"}</h1>

          <p>
            {language === "en"
              ? "Complete industrial laundry solutions for hotels, hospitals & factories"
              : "होटेल, अस्पताल र कारखानाका लागि सम्पूर्ण लन्ड्री समाधान"}
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="laundryPage__content">

        {laundryProducts.map((p, i) => (
          <div key={i} className="laundryPage__card">

            <div className={`laundryPage__image ${i % 2 === 1 ? "reverse" : ""}`}>
              <img src={p.img} alt={p.name} />
            </div>

            <div className={`laundryPage__text ${i % 2 === 1 ? "reverse" : ""}`}>

              <h2>{language === "en" ? p.name : p.npName}</h2>

              <p>{language === "en" ? p.desc : p.npDesc}</p>

              <div className="laundryPage__features">
                {(language === "en" ? p.features : p.npFeatures).map((f, j) => (
                  <span key={j}>
                    <CheckCircle size={14} />
                    {f}
                  </span>
                ))}
              </div>

              <div className="laundryPage__actions">
                <a href="tel:+9779841370260" className="btnPrimary">
                  <Phone size={16} />
                  {language === "en" ? "Get Quote" : "उद्धरण"}
                </a>

                <Link href="/contact" className="btnSecondary">
                  {language === "en" ? "Contact" : "सम्पर्क"}
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>

          </div>
        ))}
      </section>

      {/* GLOBAL CTA */}
      <CTASection language={language} />

    </div>
  );
}