"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, CheckCircle, Cog } from "lucide-react";
import "./CustomEquipmentPage.css";
import CTASection from "@/components/CTASection";

export default function CustomEquipmentPage() {
  const { language: lang } = useLanguage();
  const t = (en: string, np: string) => (lang === "en" ? en : np);

  const capabilities = [
    t("Industrial stainless steel fabrication", "औद्योगिक स्टेनलेस स्टील निर्माण"),
    t("Custom machinery & automation systems", "अनुकूलित मेसिनरी र अटोमेसन प्रणाली"),
    t("Pressure vessels & storage tanks", "दबाव भाँडाहरू र ट्याङ्कीहरू"),
    t("Conveyor & material handling systems", "कन्भेयर र सामग्री ह्यान्डलिङ प्रणाली"),
    t("Industrial filtration systems", "औद्योगिक फिल्ट्रेसन प्रणाली"),
    t("Structural steel & modular units", "संरचनात्मक स्टील र मोड्युलर संरचना"),
    t("R&D prototyping support", "R&D प्रोटोटाइप समर्थन"),
    t("OEM mass production solutions", "OEM ठूलो उत्पादन समाधान"),
  ];

  const process = [
    { step: "01", en: "Consultation", np: "परामर्श", desc: t("We define exact requirements and feasibility.", "हामी सटीक आवश्यकता र सम्भाव्यता निर्धारण गर्छौं।") },
    { step: "02", en: "Design", np: "डिजाइन", desc: t("Engineering CAD models and system planning.", "इन्जिनियरिङ CAD मोडेल र प्रणाली योजना।") },
    { step: "03", en: "Fabrication", np: "निर्माण", desc: t("Precision manufacturing with strict QC.", "कडा गुणस्तर नियन्त्रणसहित सटीक निर्माण।") },
    { step: "04", en: "Delivery", np: "डेलिभरी", desc: t("Installation, testing & commissioning nationwide.", "देशभर स्थापना, परीक्षण र सञ्चालन।") },
  ];

  return (
    <div className="customEquip">

      {/* HERO */}
      <section className="hvacPage__hero">
        <div className="hvacPage__overlay" />

        <div className="hvacPage__heroContent">
          <p className="hvacPage__badge">Advance National Pvt Ltd</p>

          <h1>{t("Custom Industrial Fabrication", "अनुकूलित औद्योगिक निर्माण")}</h1>

          <p>
            {t(
              "Precision-built industrial systems engineered for your exact requirements.",
              "तपाईंको सटीक आवश्यकता अनुसार बनाइएका उच्च-प्रिसिजन औद्योगिक प्रणालीहरू।"
            )}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="customEquip__content">

        {/* LEFT */}
        <div className="customEquip__left">
          <h2>{t("What We Build", "हामी के बनाउँछौं")}</h2>

          <p>
            {t(
              "We design and manufacture industrial-grade systems for factories, hotels, hospitals and infrastructure projects across Nepal.",
              "हामी नेपालभरका कारखाना, होटल, अस्पताल र पूर्वाधार परियोजनाका लागि औद्योगिक प्रणाली डिजाइन र निर्माण गर्छौं।"
            )}
          </p>

          <div className="customEquip__capGrid">
            {capabilities.map((c, i) => (
              <div key={i} className="customEquip__capItem">
                <CheckCircle size={14} />
                <span>{c}</span>
              </div>
            ))}
          </div>

          {/* <div className="customEquip__ctaRow">
            <a href="tel:+9779841370260" className="customEquip__btnPrimary">
              <Phone size={16} /> Call Expert
            </a>

            <Link href="/contact" className="customEquip__btnSecondary">
              Get Quote
            </Link>
          </div> */}
        </div>

        {/* RIGHT */}
        <div className="customEquip__right">

          <img
            src="/custom_building.jpg"
            className="customEquip__sideImg"
          />

          <div className="customEquip__industryBox">
            <h3>{t("Industries", "उद्योगहरू")}</h3>

            <div className="customEquip__tags">
              {["Hotels", "Hospitals", "Factories", "Pharma", "Food", "Government"].map(tg => (
                <span key={tg}>{tg}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="customEquip__process">

        <h2>{t("Engineering Process", "इन्जिनियरिङ प्रक्रिया")}</h2>

        <div className="customEquip__processGrid">
          {process.map((p, i) => (
            <div key={i} className="customEquip__processCard">
              <div className="customEquip__step">{p.step}</div>
              <h3>{lang === "en" ? p.en : p.np}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

      </section>

      <CTASection language={lang} />
    </div>
  );
}