// TestimonialsSection.tsx
"use client";

import "./TestimonialsSection.css";
import { Star } from "lucide-react";

export default function TestimonialsSection({ language = "en" }) {
  const testimonials = [
    {
      name: "Ramesh Sharma",
      role: "Hotel Owner, Kathmandu",
      rating: 5,
      textEn:
        "Their industrial laundry system completely transformed our hotel operations. Before installation, we struggled with delays and inconsistent cleaning quality. Now everything runs smoothly, and we’ve reduced operational costs significantly while improving guest satisfaction.",
      textNp:
        "उनीहरूको लन्ड्री प्रणालीले हाम्रो होटल सञ्चालन पूर्ण रूपमा परिवर्तन गर्‍यो। पहिले ढिलाइ र असमान गुणस्तर थियो, अहिले सबै सहज रूपमा चल्छ।",
    },
    {
      name: "Sanjay Khatri",
      role: "Factory Manager, Biratnagar",
      rating: 4,
      textEn:
        "Excellent",
      textNp:
        "उत्कृष्ट",
    },
    {
      name: "Anita Joshi",
      role: "Hospital Director, Lalitpur",
      rating: 5,
      textEn:
        "The fire safety and HVAC systems gave us complete peace of mind. The installation team was professional and the system performance has been extremely reliable over the past year.",
      textNp:
        "आगो सुरक्षा र HVAC प्रणालीले हामीलाई पूर्ण ढुक्क बनायो।",
    },
    {
      name: "Dipak Gurung",
      role: "Restaurant Owner, Pokhara",
      rating: 4,
      textEn:
        "Very good service and fast installation. The equipment works as expected and support is responsive whenever needed.",
      textNp:
        "धेरै राम्रो सेवा।",
    },
    {
      name: "Sunita Rai",
      role: "Reseller, Itahari",
      rating: 5,
      textEn:
        "As a reseller, working with Advance National has been very profitable. Their product quality and after-sales support help us maintain strong client trust.",
      textNp:
        "रिसेलरको रूपमा काम गर्दा धेरै राम्रो अनुभव भयो।",
    },
    {
      name: "Prakash Adhikari",
      role: "Contractor, Kathmandu",
      rating: 4,
      textEn:
        "We have used their systems in multiple commercial projects. Consistent quality, timely delivery, and strong technical support make them a reliable partner.",
      textNp:
        "धेरै भरपर्दो साझेदार।",
    },
    {
      name: "Mohan Thapa",
      role: "Building Owner, Chitwan",
      rating: 4,
      textEn:
        "Good overall experience. The water and safety systems improved building efficiency and tenant satisfaction.",
      textNp:
        "राम्रो अनुभव।",
    },
    {
      name: "Kiran Shrestha",
      role: "Business Owner, Kathmandu",
      rating: 5,
      textEn:
        "The automation systems helped us scale our business operations smoothly. Highly recommended for any growing company.",
      textNp:
        "धेरै सिफारिस योग्य।",
    },
    {
      name: "Nabin Lama",
      role: "Hotel Manager, Bhaktapur",
      rating: 5,
      textEn:
        "Professional team and reliable systems. Our maintenance costs have reduced significantly after installation.",
      textNp:
        "व्यावसायिक टोली।",
    },
    {
      name: "Rupa KC",
      role: "Clinic Owner, Butwal",
      rating: 4,
      textEn:
        "Good service and dependable equipment. Installation was smooth and support is helpful.",
      textNp:
        "भरपर्दो सेवा।",
    },
    {
      name: "Suresh Bhandari",
      role: "Industrial Engineer, Hetauda",
      rating: 5,
      textEn:
        "Their engineering solutions are well-designed and scalable. We’ve implemented multiple systems across our facilities with great results.",
      textNp:
        "उत्कृष्ट इन्जिनियरिङ समाधान।",
    },
    {
      name: "Deepa Shrestha",
      role: "Retail Store Owner, Kathmandu",
      rating: 4,
      textEn:
        "Amazing",
      textNp:
        "अद्भुत",
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__bgGrid" />
      <div className="testimonials__bgGlow" />

      <div className="testimonials__container">
        <div className="testimonials__header">
          <p className="testimonials__badge">
            {language === "en" ? "Client Feedback" : "ग्राहक प्रतिक्रिया"}
          </p>

          <h2 className="testimonials__title">
            {language === "en"
              ? "What Our Clients Say"
              : "हाम्रा ग्राहकहरू के भन्छन्"}
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonials__card">
              <div className="testimonials__stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  idx + 1 <= t.rating ? (
                    <Star key={idx} size={16} fill="orange" color="orange" />
                  ) : (
                    <Star key={idx} size={16} />
                  )
                ))}
              </div>

              <p className="testimonials__text">
                {language === "en" ? t.textEn : t.textNp}
              </p>

              <div className="testimonials__name">{t.name}</div>
              <div className="testimonials__role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
