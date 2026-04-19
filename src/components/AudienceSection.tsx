"use client";

import "./AudienceSection.css";

export default function AudienceSection({ language = "en" }) {
  const items = [
    {
      titleEn: "Home Owners",
      titleNp: "घरधनीहरू",
      descEn: "Clean water, safety & comfort systems for homes.",
      descNp: "घरका लागि सफा पानी, सुरक्षा र आराम प्रणाली।",
    },
    {
      titleEn: "Business Owners",
      titleNp: "व्यवसायिक मालिकहरू",
      descEn: "Smart commercial systems to improve efficiency.",
      descNp: "कार्य दक्षता बढाउन स्मार्ट व्यावसायिक प्रणाली।",
    },
    {
      titleEn: "Industries",
      titleNp: "उद्योगहरू",
      descEn: "Large-scale HVAC, fire safety & infrastructure solutions.",
      descNp: "ठूला स्तरका HVAC, आगो सुरक्षा र पूर्वाधार समाधान।",
    },
    {
      titleEn: "Retailers",
      titleNp: "खुद्रा विक्रेता",
      descEn: "Reliable equipment supply for retail businesses.",
      descNp: "खुद्रा व्यवसायका लागि भरपर्दो उपकरण आपूर्ति।",
    },
    {
      titleEn: "Resellers / Distributors",
      titleNp: "पुनर्विक्रेता / वितरक",
      descEn: "Partner with us for equipment distribution.",
      descNp: "उपकरण वितरणका लागि हामीसँग साझेदारी गर्नुहोस्।",
    },
    {
      titleEn: "Contractors & Builders",
      titleNp: "ठेकेदार र निर्माण व्यवसायी",
      descEn: "Project-based industrial system integration support.",
      descNp: "परियोजना आधारित औद्योगिक प्रणाली एकीकरण सहयोग।",
    },
  ];

  return (
    <section className="audienceX">
      <div className="audienceX__container">
        <div className="audienceX__header">
          <p className="audienceX__badge">
            {language === "en" ? "Who We Serve" : "हामी कसलाई सेवा दिन्छौं"}
          </p>

          <h2 className="audienceX__title">
            {language === "en"
              ? "Complete Industrial Ecosystem Coverage"
              : "पूर्ण औद्योगिक इकोसिस्टम सेवा"}
          </h2>
        </div>

        <div className="audienceX__grid">
          {items.map((item, i) => (
            <div key={i} className="audienceX__card">
              <h3 className="audienceX__cardTitle">
                {language === "en" ? item.titleEn : item.titleNp}
              </h3>

              <p className="audienceX__cardDesc">
                {language === "en" ? item.descEn : item.descNp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}