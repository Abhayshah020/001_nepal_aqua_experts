"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Inline SVG icons — no external icon library needed
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const products = (language: string) => [
  ["/products/laundry", language === "en" ? "Commercial Laundry" : "व्यावसायिक लन्ड्री"],
  ["/products/filtration", language === "en" ? "Filtration & Well Digging" : "निस्पंदन र इनार"],
  ["/products/fire-safety", language === "en" ? "Fire Fighter Systems" : "फायर फाइटर"],
  ["/products/hvac", language === "en" ? "HVAC Systems" : "HVAC प्रणाली"],
  ["/products/elevator", language === "en" ? "Elevator Systems" : "लिफ्ट प्रणाली"],
  ["/products/waste-treatment", language === "en" ? "Waste Treatment" : "फोहोर उपचार"],
  ["/products/custom-equipment", language === "en" ? "Custom Equipment" : "अनुकूलित उपकरण"],
];

const socials = [
  { href: "https://www.facebook.com/nepalaquaexperts", icon: <FacebookIcon />, label: "Facebook" },
  { href: "https://www.instagram.com/nepalaquaexperts/", icon: <InstagramIcon />, label: "Instagram" },
  { href: "https://www.youtube.com/@nepalaquaexperts", icon: <YouTubeIcon />, label: "YouTube" },
];

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(160deg, #001428 0%, #001F3F 45%, #002a54 100%)",
        fontFamily: "'Outfit', 'DM Sans', sans-serif",
      }}
    >
      {/* Decorative top accent line */}
      <div style={{
        height: "3px",
        background: "linear-gradient(90deg, transparent 0%, #FFC107 30%, #FFD54F 60%, transparent 100%)",
      }} />

      {/* Subtle grid texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,193,7,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,193,7,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow bottom-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: "-80px", right: "-80px",
          width: "420px", height: "420px",
          background: "radial-gradient(circle, rgba(255,193,7,0.07) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }}
      />

      {/* ── Main grid ── */}
      <div
        style={{
          paddingTop: "64px",
          paddingBottom: "56px",
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '50px 24px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* ── Brand ── */}
          <div>
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-5">
              <div style={{
                width: 48, height: 48,
                background: "linear-gradient(135deg, #FFC107, #FF8F00)",
                borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: 18, color: "#001428",
                boxShadow: "0 4px 16px rgba(255,193,7,0.35)",
                letterSpacing: "-0.5px",
              }}>AN</div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.2, color: "#fff" }}>
                  Advance National
                </p>
                <p style={{ fontSize: 10, letterSpacing: "0.18em", color: "#FFC107", textTransform: "uppercase", marginTop: 2 }}>
                  Pvt Ltd
                </p>
              </div>
            </div>

            <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "rgba(255,255,255,0.5)" }}>
              {language === "en"
                ? "Nepal's trusted supplier of commercial and industrial equipment. Quality guaranteed, service excellence."
                : "नेपालको विश्वसनीय व्यावसायिक र औद्योगिक उपकरण आपूर्तिकर्ता। गुणस्तर ग्यारेन्टी, उत्कृष्ट सेवा।"}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 38, height: 38,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,193,7,0.15)";
                    el.style.borderColor = "rgba(255,193,7,0.5)";
                    el.style.color = "#FFC107";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.6)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Products ── */}
          <div>
            <h3 style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#FFC107", marginBottom: 20,
            }}>
              {language === "en" ? "Products" : "उत्पादनहरू"}
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {products(language).map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontSize: 13.5, color: "rgba(255,255,255,0.55)",
                      textDecoration: "none", transition: "color 0.2s ease",
                      display: "flex", alignItems: "center", gap: 7,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#FFC107")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    <span style={{
                      width: 4, height: 4, borderRadius: "50%",
                      background: "rgba(255,193,7,0.5)", flexShrink: 0,
                      display: "inline-block",
                    }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#FFC107", marginBottom: 20,
            }}>
              {language === "en" ? "Contact" : "सम्पर्क"}
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Phone */}
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{
                  color: "#FFC107", marginTop: 2, flexShrink: 0,
                  width: 28, height: 28, borderRadius: 8,
                  background: "rgba(255,193,7,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <PhoneIcon />
                </span>
                <div>
                  <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                    +977 9841370260
                  </p>
                  <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                    {language === "en" ? "Mon–Sat, 9am–6pm" : "सोम–शनि, बिहान ९–साँझ ६"}
                  </p>
                </div>
              </li>

              {/* Address */}
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{
                  color: "#FFC107", marginTop: 2, flexShrink: 0,
                  width: 28, height: 28, borderRadius: 8,
                  background: "rgba(255,193,7,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <MapPinIcon />
                </span>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                  Kathmandu, Nepal
                </p>
              </li>
            </ul>
          </div>

          {/* ── CTA ── */}
          <div>
            <h3 style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#FFC107", marginBottom: 20,
            }}>
              {language === "en" ? "Get a Free Quote" : "निशुल्क उद्धरण"}
            </h3>

            {/* Card */}
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,193,7,0.15)",
              borderRadius: 16, padding: "20px",
              backdropFilter: "blur(8px)",
            }}>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
                {language === "en"
                  ? "Contact us today for a free, no-obligation quotation on any equipment."
                  : "कुनै पनि उपकरणको लागि आजै निःशुल्क उद्धरणको लागि हामीलाई सम्पर्क गर्नुहोस्।"}
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "linear-gradient(135deg, #FFC107, #FF8F00)",
                  color: "#001428",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "10px 20px",
                  borderRadius: 50,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(255,193,7,0.3)",
                  transition: "all 0.25s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(255,193,7,0.45)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(255,193,7,0.3)";
                }}
              >
                {language === "en" ? "Request Quotation" : "उद्धरण अनुरोध"}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative", zIndex: 1,
      }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
          © {new Date().getFullYear()} Advance National Pvt Ltd.{" "}
          {language === "en" ? "All rights reserved." : "सर्वाधिकार सुरक्षित।"}
        </p>
      </div>
    </footer>
  );
}