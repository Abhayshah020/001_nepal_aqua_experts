import Link from "next/link";
import "./HeroSection.css";

export default function HeroSection({ language = "en" }: { language?: "en" | "np" }) {
  return (
    <section className="hero">
      {/* GRID + GRADIENT BACKGROUND */}
      <div className="grid-bg" />
      <div className="gradient-overlay" />

      <div className="container">
        {/* LEFT */}
        <div className="content">
          <span className="badge">
            {language === "en"
              ? "Industrial & Commercial Solutions"
              : "औद्योगिक र व्यावसायिक समाधान"}
          </span>

          <h1>
            {language === "en" ? "Powering Nepal’s" : "नेपालको"}
            <br />
            <span>
              {language === "en" ? "Industrial Future" : "औद्योगिक भविष्य"}
            </span>
          </h1>

          <p>
            {language === "en"
              ? "From commercial laundry to HVAC, elevators, fire safety & water solutions — Advance National delivers high-performance industrial systems across Nepal."
              : "व्यावसायिक लन्ड्रीदेखि HVAC, लिफ्ट, आगो सुरक्षा र पानी समाधानसम्म — एड्भान्स नेशनलले नेपालभर उच्च गुणस्तरका औद्योगिक प्रणाली प्रदान गर्दछ।"}
          </p>

          <div className="cta">
            <Link href="#" className="btn">
              {language === "en" ? "Get Free Quote →" : "निःशुल्क कोट लिनुहोस्"}
            </Link>
            <Link href="#" className="btn">
              {language === "en" ? "Jump on a Call →" : "हामीसँग कल गर्नुहोस्"}
            </Link>
          </div>

          <div className="review">
            {language === "en"
              ? "⭐ 4.2 rating from 360+ clients"
              : "⭐ ४.२ रेटिङ (३६०+ ग्राहक)"}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="visual">
          <img
            src="/washing_machine-min-min.png"
            className="img main"
            alt="industrial"
          />
          <img
            src="/Ro_filter.webp"
            className="img small"
            alt="construction"
          />
        </div>
      </div>
    </section>
  );
}
