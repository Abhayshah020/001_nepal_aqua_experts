"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, CheckCircle, Star, Users, Award, Globe } from "lucide-react";
import "./AboutPage.css";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const { language: lang } = useLanguage();
  const t = (en: string, np: string) => (lang === "en" ? en : np);

  const values = [
    {
      icon: Star,
      en: "Quality Excellence",
      np: "गुणस्तर उत्कृष्टता",
      desc: t(
        "We supply only certified, genuine equipment from global manufacturers.",
        "हामी विश्वव्यापी निर्माताहरूबाट प्रमाणित, वास्तविक उपकरण मात्र आपूर्ति गर्छौं।"
      ),
    },
    {
      icon: Users,
      en: "Customer First",
      np: "ग्राहक पहिलो",
      desc: t(
        "Every project is tailored to meet our customer's exact needs and budget.",
        "प्रत्येक परियोजना हाम्रा ग्राहकको सटीक आवश्यकता र बजेट पूरा गर्न अनुकूलित छ।"
      ),
    },
    {
      icon: Award,
      en: "Certified Engineers",
      np: "प्रमाणित इन्जिनियरहरू",
      desc: t(
        "Our engineers ensure safe, precise and long-lasting installations.",
        "हाम्रा इन्जिनियरहरूले सुरक्षित, सटीक र दीर्घकालीन स्थापना सुनिश्चित गर्छन्।"
      ),
    },
    {
      icon: Globe,
      en: "Pan Nepal Reach",
      np: "नेपालभर पहुँच",
      desc: t(
        "We deliver and install equipment across all regions of Nepal.",
        "हामी नेपालको सबै क्षेत्रमा उपकरण डेलिभरी र स्थापना गर्छौं।"
      ),
    },
  ];

  return (
    <div className="aboutPage">

      {/* HERO */}
      <section className="aboutPage__hero">
        <div className="aboutPage__heroContainer">
          <p className="aboutPage__badge">Est. 2010</p>
          <h1>{t("About Advance National", "Advance National बारे")}</h1>
          <p>
            {t(
              "Nepal's most trusted industrial equipment provider.",
              "नेपालको सबैभन्दा विश्वसनीय औद्योगिक उपकरण प्रदायक।"
            )}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="aboutPage__story">
        <div className="aboutPage__grid">
          <div className="aboutPage__storyText">
            <h2>{t("15+ Years of Industrial Excellence", "१५+ वर्षको औद्योगिक उत्कृष्टता")}</h2>

            <p>
              {t(
                "Advance National Pvt. Ltd. is one of Nepal’s leading industrial and commercial equipment solution providers, specializing in end-to-end systems for modern infrastructure development.",
                "Advance National Pvt. Ltd. नेपालका प्रमुख औद्योगिक र व्यावसायिक उपकरण समाधान प्रदायक कम्पनीहरू मध्ये एक हो।"
              )}
            </p>

            <p>
              {t(
                "Founded with a vision to modernize Nepal’s industrial backbone, the company has grown from a small trading operation into a full-scale engineering and systems integration company serving nationwide clients.",
                "नेपालको औद्योगिक संरचना आधुनिकीकरण गर्ने उद्देश्यले स्थापना गरिएको यो कम्पनी सानो व्यापारबाट सुरु भएर आज देशव्यापी सेवा दिने पूर्ण इन्जिनियरिङ कम्पनी बनेको छ।"
              )}
            </p>

            <p>
              {t(
                "We specialize in commercial laundry systems, HVAC and climate control solutions, elevator systems, fire safety installations, water treatment plants, and custom industrial machinery.",
                "हामी व्यावसायिक लन्ड्री प्रणाली, HVAC, लिफ्ट प्रणाली, आगो सुरक्षा, पानी प्रशोधन प्लान्ट र कस्टम औद्योगिक उपकरणमा विशेषज्ञ छौं।"
              )}
            </p>

            <p>
              {t(
                "Under the leadership of CEO Binod Shah, Advance National has successfully delivered projects across hotels, hospitals, factories, government institutions, and private infrastructure developments throughout Nepal.",
                "CEO बिनोद शाहको नेतृत्वमा Advance National ले नेपालभर होटल, अस्पताल, कारखाना, सरकारी संस्था र निजी परियोजनाहरूमा सफल परियोजनाहरू सम्पन्न गरेको छ।"
              )}
            </p>

            <p>
              {t(
                "Today, with over 500+ satisfied clients, we continue to focus on quality engineering, reliable after-sales service, and long-term industrial partnerships.",
                "आज ५००+ सन्तुष्ट ग्राहकहरूसँग हामी गुणस्तरीय इन्जिनियरिङ, भरपर्दो बिक्रीपश्चात सेवा र दीर्घकालीन साझेदारीमा केन्द्रित छौं।"
              )}
            </p>
          </div>

          <div className="aboutPage__storyImageWrap">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              className="aboutPage__storyImage"
            />

            <div className="aboutPage__floatingStat">
              <span>500+</span>
              <p>{t("Happy Clients", "खुशी ग्राहकहरू")}</p>
            </div>
          </div>

        </div>
      </section>

      <section className="aboutPage__highlights">
        <div className="aboutPage__highlightsGrid">

          <div className="aboutPage__highlightCard">
            <h3>500+</h3>
            <p>{t("Completed Projects", "सम्पन्न परियोजनाहरू")}</p>
          </div>

          <div className="aboutPage__highlightCard">
            <h3>15+</h3>
            <p>{t("Years Experience", "वर्ष अनुभव")}</p>
          </div>

          <div className="aboutPage__highlightCard">
            <h3>100%</h3>
            <p>{t("Installation Support", "स्थापना सहयोग")}</p>
          </div>

          <div className="aboutPage__highlightCard">
            <h3>24/7</h3>
            <p>{t("Service Support", "सेवा समर्थन")}</p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="aboutPage__values">

        <div className="aboutPage__valuesHeader">
          <h2>{t("Our Core Values", "हाम्रा मूल मूल्यहरू")}</h2>
          <p>
            {t(
              "The principles that define how we build, deliver, and support every industrial solution.",
              "हामी प्रत्येक समाधान निर्माण, डेलिभरी र समर्थन गर्ने आधारभूत सिद्धान्तहरू।"
            )}
          </p>
        </div>

        <div className="aboutPage__valuesGrid">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="aboutPage__valueCard">

                <div className="aboutPage__valueTop">
                  <div className="aboutPage__iconWrap">
                    <Icon size={22} />
                  </div>
                  <div className="aboutPage__valueNumber">
                    0{i + 1}
                  </div>
                </div>

                <h3>{lang === "en" ? v.en : v.np}</h3>

                <p>{v.desc}</p>

                <div className="aboutPage__valueGlow" />
              </div>
            );
          })}
        </div>

      </section>

      {/* SECTORS */}
      <section className="aboutPage__sectors">

        <div className="aboutPage__sectorsHeader">
          <h2>{t("Sectors We Serve", "हामी सेवा गर्ने क्षेत्रहरू")}</h2>
          <p>
            {t(
              "We deliver industrial systems across Nepal’s key economic sectors.",
              "हामी नेपालको प्रमुख आर्थिक क्षेत्रहरूमा औद्योगिक प्रणालीहरू आपूर्ति गर्छौं।"
            )}
          </p>
        </div>

        <div className="aboutPage__sectorGrid">

          {[
            ["Hotels", "🏨"],
            ["Hospitals", "🏥"],
            ["Factories", "🏭"],
            ["Pharma", "🧪"],
            ["Construction", "🏗️"],
            ["Commercial", "🏢"],
            ["Schools", "🎓"],
            ["Agriculture", "🌾"],
            ["Power", "⚡"],
            ["Restaurants", "🍽️"],
            ["Resorts", "🏝️"],
            ["Government", "🏛️"],
          ].map(([item, icon]) => (
            <div key={item} className="aboutPage__sectorCard">

              <div className="aboutPage__sectorIcon">
                {icon}
              </div>

              <div className="aboutPage__sectorName">
                {item}
              </div>

              <div className="aboutPage__sectorGlow" />

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <CTASection language={lang} />

    </div>
  );
}