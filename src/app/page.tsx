"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Star, Wrench, Droplets, Flame, Settings, Wind, Building2, Recycle, ChevronRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";

const products = [
  {
    icon: Wrench,
    href: "/products/laundry",
    img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
    color: "from-blue-500 to-blue-700",
    enTitle: "Commercial Laundry",
    npTitle: "व्यावसायिक लन्ड्री",
    enDesc: "Industrial washing, drying, hydro extractors & press systems",
    npDesc: "औद्योगिक धुने, सुकाउने, हाइड्रो एक्सट्रक्टर र प्रेस प्रणाली",
  },
  {
    icon: Droplets,
    href: "/products/filtration",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    color: "from-cyan-500 to-cyan-700",
    enTitle: "Filtration & Well Digging",
    npTitle: "निस्पंदन र इनार खन्ने",
    enDesc: "Commercial & home water filtration, RO plants, groundwater",
    npDesc: "व्यावसायिक र घर पानी निस्पंदन, RO प्लान्ट, भूमिगत पानी",
  },
  {
    icon: Flame,
    href: "/products/fire-safety",
    img: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=600&q=80",
    color: "from-red-500 to-red-700",
    enTitle: "Fire Fighter Systems",
    npTitle: "फायर फाइटर प्रणाली",
    enDesc: "Sprinklers, hydrants, alarms & complete fire safety solutions",
    npDesc: "स्प्रिंकलर, हाइड्रेन्ट, अलार्म र पूर्ण आगो सुरक्षा समाधान",
  },
  {
    icon: Settings,
    href: "/products/custom-equipment",
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    color: "from-amber-500 to-orange-600",
    enTitle: "Custom Made Equipment",
    npTitle: "अनुकूलित उपकरणहरू",
    enDesc: "Mass industrial-scale custom fabrication for any industry",
    npDesc: "कुनै पनि उद्योगको लागि ठूलो मात्रामा अनुकूलित निर्माण",
  },
  {
    icon: Wind,
    href: "/products/hvac",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    color: "from-teal-500 to-teal-700",
    enTitle: "HVAC AC Systems",
    npTitle: "HVAC एसी प्रणाली",
    enDesc: "Central AC, VRF/VRV systems & ventilation for entire buildings",
    npDesc: "केन्द्रीय AC, VRF/VRV प्रणाली र सम्पूर्ण भवनको लागि भेन्टिलेसन",
  },
  {
    icon: Building2,
    href: "/products/elevator",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    color: "from-indigo-500 to-indigo-700",
    enTitle: "Elevator Systems",
    npTitle: "लिफ्ट प्रणाली",
    enDesc: "Passenger, goods & service elevators for commercial buildings",
    npDesc: "व्यावसायिक भवनहरूको लागि यात्री, सामान र सेवा लिफ्टहरू",
  },
  {
    icon: Recycle,
    href: "/products/waste-treatment",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
    color: "from-green-500 to-green-700",
    enTitle: "Waste Treatment Systems",
    npTitle: "फोहोर उपचार प्रणाली",
    enDesc: "Sewage & effluent treatment plants, biogas systems",
    npDesc: "ढल र प्रवाह उपचार संयन्त्र, बायोग्यास प्रणाली",
  },
];

const stats = [
  { en: "500+", np: "५००+", labelEn: "Projects Completed", labelNp: "परियोजनाहरू" },
  { en: "15+", np: "१५+", labelEn: "Years Experience", labelNp: "वर्षको अनुभव" },
  { en: "50+", np: "५०+", labelEn: "Industry Partners", labelNp: "उद्योग साझेदार" },
  { en: "24/7", np: "२४/७", labelEn: "Support & Service", labelNp: "सेवा र समर्थन" },
];

const whyUs = [
  { en: "Certified & genuine equipment only", np: "प्रमाणित र वास्तविक उपकरणहरू मात्र" },
  { en: "End-to-end installation & AMC service", np: "पूर्ण स्थापना र AMC सेवा" },
  { en: "Affordable financing options available", np: "किफायती वित्तपोषण विकल्पहरू उपलब्ध" },
  { en: "Pan Nepal delivery & onsite support", np: "सम्पूर्ण नेपाल डेलिभरी र साइट समर्थन" },
  { en: "Custom fabrication at industrial scale", np: "औद्योगिक स्तरमा अनुकूलित निर्माण" },
  { en: "Free technical consultation", np: "निःशुल्क प्राविधिक परामर्श" },
];

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <main >
      
      {/* ─── HERO ─── */}
      <HeroSection language={language} />
      {/* ─── STATS ─── */}
      <section className="stats-section">
        <div className="stats-container">

          <div className="stats-grid">
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <p className="stat-value">
                  {language === "en" ? s.en : s.np}
                </p>

                <p className="stat-label">
                  {language === "en" ? s.labelEn : s.labelNp}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <ProductsSection language={language} />

      {/* ─── WHY CHOOSE US ─── */}

      <AudienceSection />

      {/* ─── TESTIMONIALS ─── */}
      <TestimonialsSection language={language} />
      {/* ─── CTA STRIP ─── */}
      <CTASection language={language} />
      {/* <section className="py-16 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 text-center"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#001F3F] mb-4">
            {language === "en"
              ? "Ready to Upgrade Your Business Equipment?"
              : "तपाईंको व्यवसायिक उपकरण अपग्रेड गर्न तयार हुनुहुन्छ?"}
          </h2>
          <p className="text-[#001F3F] text-lg mb-8 opacity-80">
            {language === "en"
              ? "Call us now for a free consultation and no-obligation quote."
              : "निःशुल्क परामर्श र उद्धरणको लागि अहिले नै हामीलाई कल गर्नुहोस्।"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+9779841370260"
              className="flex items-center gap-3 bg-[#001F3F] hover:bg-[#003366] text-white font-black text-lg px-8 py-4 rounded-2xl transition-all shadow-xl"
            >
              <Phone size={20} /> +977 9841370260
            </a>
            <a
              href="https://wa.me/9779841370260"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all shadow-xl"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}
