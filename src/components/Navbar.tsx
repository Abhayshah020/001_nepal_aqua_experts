"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, ChevronDown, Phone } from "lucide-react";

const productLinks = [
  { href: "/products/laundry", labelKey: "laundry" },
  { href: "/products/filtration", labelKey: "filtration" },
  { href: "/products/fire-safety", labelKey: "fire" },
  { href: "/products/custom-equipment", labelKey: "custom" },
  { href: "/products/hvac", labelKey: "hvac" },
  { href: "/products/elevator", labelKey: "elevator" },
  { href: "/products/waste-treatment", labelKey: "waste" },
];

export default function Navbar() {
  const { language, setLanguage, dict } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap');

        .an-nav * {
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        /* ── Top bar ── */
        .an-topbar {
          background: linear-gradient(90deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%);
          background-size: 200% 100%;
          animation: topbar-shimmer 4s ease-in-out infinite;
          padding: 6px 16px;
          text-align: center;
          color: #001F3F;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.01em;
          display: none;
        }

        @media (min-width: 768px) { .an-topbar { display: block; } }

        @keyframes topbar-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }

        /* ── Nav wrapper ── */
        .an-navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: linear-gradient(180deg, #001F3F 0%, #002952 100%);
          border-bottom: 1px solid rgba(255,193,7,0.15);
          box-shadow: 0 4px 24px rgba(0,0,0,0.25), 0 1px 0 rgba(255,193,7,0.08);
        }

        .an-navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        /* ── Logo ── */
        .an-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .an-logo-mark {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #FFC107 0%, #FFB300 100%);
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #001F3F;
          box-shadow: 0 4px 12px rgba(255,193,7,0.35);
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s;
          flex-shrink: 0;
        }

        .an-logo:hover .an-logo-mark {
          transform: scale(1.08) rotate(-3deg);
          box-shadow: 0 6px 18px rgba(255,193,7,0.45);
        }

        .an-logo-name {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: 0.01em;
        }

        .an-logo-sub {
          font-size: 9.5px;
          font-weight: 600;
          color: #FFC107;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.85;
        }

        /* ── Desktop links ── */
        .an-desktop-links {
          display: none;
          align-items: center;
          gap: 4px;
        }

        @media (min-width: 768px) { .an-desktop-links { display: flex; } }

        .an-nav-link {
          position: relative;
          padding: 7px 12px;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          border-radius: 9px;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }

        .an-nav-link::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 12px;
          right: 12px;
          height: 1.5px;
          background: #FFC107;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.22s cubic-bezier(0.34,1.4,0.64,1);
          transform-origin: left;
        }

        .an-nav-link:hover {
          color: #FFC107;
          background: rgba(255,193,7,0.07);
        }

        .an-nav-link:hover::after {
          transform: scaleX(1);
        }

        /* ── Dropdown trigger ── */
        .an-dropdown-wrap {
          position: relative;
        }

        .an-dropdown-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 7px 12px;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          background: transparent;
          border: none;
          border-radius: 9px;
          cursor: pointer;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }

        .an-dropdown-btn:hover,
        .an-dropdown-btn.open {
          color: #FFC107;
          background: rgba(255,193,7,0.07);
        }

        .an-chevron {
          transition: transform 0.22s ease;
          opacity: 0.7;
        }

        .an-chevron.open { transform: rotate(180deg); opacity: 1; }

        /* ── Dropdown panel ── */
        .an-dropdown-panel {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          width: 220px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow:
            0 20px 48px rgba(0,31,63,0.2),
            0 0 0 1px rgba(0,31,63,0.06);
          padding: 6px;
          z-index: 99;
          animation: dropdown-in 0.22s cubic-bezier(0.34,1.4,0.64,1) forwards;
        }

        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }

        .an-dropdown-item {
          display: block;
          padding: 9px 13px;
          font-size: 13px;
          font-weight: 500;
          color: #1a2535;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.15s, color 0.15s, padding-left 0.15s;
        }

        .an-dropdown-item:hover {
          background: #FFF8E1;
          color: #001F3F;
          padding-left: 18px;
        }

        /* ── Language toggle ── */
        .an-lang-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          border: 1.5px solid rgba(255,193,7,0.5);
          color: #FFC107;
          background: transparent;
          padding: 6px 13px;
          border-radius: 99px;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border-color 0.18s, box-shadow 0.18s;
          white-space: nowrap;
        }

        .an-lang-btn:hover {
          background: #FFC107;
          color: #001F3F;
          border-color: #FFC107;
          box-shadow: 0 4px 12px rgba(255,193,7,0.3);
        }

        /* ── CTA phone button ── */
        .an-cta-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #FFC107 0%, #FFB300 100%);
          color: #001F3F;
          font-size: 13px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          padding: 8px 18px;
          border-radius: 99px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(255,193,7,0.35);
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
          white-space: nowrap;
        }

        .an-cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(255,193,7,0.48);
        }

        .an-cta-btn:active { transform: scale(0.97); }

        /* ── Mobile toggle ── */
        .an-mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          cursor: pointer;
          transition: background 0.18s;
        }

        .an-mobile-toggle:hover { background: rgba(255,255,255,0.12); }

        @media (min-width: 768px) { .an-mobile-toggle { display: none; } }

        /* ── Mobile menu ── */
        .an-mobile-menu {
          background: #001a36;
          border-top: 1px solid rgba(255,193,7,0.1);
          padding: 16px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: mobile-in 0.25s ease forwards;
        }

        @media (min-width: 768px) { .an-mobile-menu { display: none !important; } }

        @keyframes mobile-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .an-mobile-link {
          display: block;
          padding: 11px 12px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.15s, color 0.15s;
        }

        .an-mobile-link:hover {
          background: rgba(255,193,7,0.08);
          color: #FFC107;
        }

        .an-mobile-products-label {
          font-size: 10px;
          font-weight: 700;
          color: #FFC107;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 10px 12px 4px;
          opacity: 0.8;
        }

        .an-mobile-sub-link {
          display: block;
          padding: 8px 12px 8px 20px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          border-radius: 8px;
          transition: color 0.15s, background 0.15s;
        }

        .an-mobile-sub-link:hover {
          color: #FFC107;
          background: rgba(255,193,7,0.06);
        }

        .an-mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 8px 0;
        }

        .an-mobile-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 6px;
        }
      `}</style>

      <div className="an-nav" onMouseLeave={() => setProductsOpen(false)}>
        {/* Top bar */}
        <div className="an-topbar">
          📞 {language === "en" ? "Call us now:" : "अहिले कल गर्नुहोस्:"} +977 9841370260 &nbsp;·&nbsp; WhatsApp: +977 9841370260
        </div>

        {/* Main navbar */}
        <nav className="an-navbar">
          <div className="an-navbar-inner">
            {/* Logo */}
            <Link href="/" className="an-logo">
              <div className="an-logo-mark">AN</div>
              <div>
                <div className="an-logo-name">Advance National</div>
                <div className="an-logo-sub">Pvt Ltd</div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="an-desktop-links" >
              <Link href="/" className="an-nav-link">{dict.nav.home}</Link>

              {/* Products dropdown */}
              <div
                className="an-dropdown-wrap"
                onClick={() => setProductsOpen((prev)=> !prev)}
              >
                <button className={`an-dropdown-btn${productsOpen ? " open" : ""}`}>
                  {dict.nav.products}
                  <ChevronDown size={13} className={`an-chevron${productsOpen ? " open" : ""}`} />
                </button>
                {productsOpen && (
                  <div className="an-dropdown-panel">
                    {productLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="an-dropdown-item"
                        onClick={() => setProductsOpen(false)}
                      >
                        {dict.products[item.labelKey as keyof typeof dict.products]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="an-nav-link">{dict.nav.about}</Link>
              <Link href="/contact" className="an-nav-link">{dict.nav.contact}</Link>

              {/* Separator */}
              <div style={{ width: 1, height: 22, background: "rgba(255,255,255,0.1)", margin: "0 6px" }} />

              {/* Language toggle */}
              <button
                onClick={() => setLanguage(language === "en" ? "np" : "en")}
                className="an-lang-btn"
              >
                <Globe size={12} />
                {language === "en" ? "नेपाली" : "English"}
              </button>

              {/* CTA */}
              <a href="tel:+9779841370260" className="an-cta-btn">
                <Phone size={13} />
                {language === "en" ? "Call Now" : "कल गर्नुहोस्"}
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="an-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="an-mobile-menu">
              <Link href="/" className="an-mobile-link" onClick={() => setMobileOpen(false)}>{dict.nav.home}</Link>

              <div>
                <div className="an-mobile-products-label">{dict.nav.products}</div>
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="an-mobile-sub-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {dict.products[item.labelKey as keyof typeof dict.products]}
                  </Link>
                ))}
              </div>

              <div className="an-mobile-divider" />

              <Link href="/about" className="an-mobile-link" onClick={() => setMobileOpen(false)}>{dict.nav.about}</Link>
              <Link href="/contact" className="an-mobile-link" onClick={() => setMobileOpen(false)}>{dict.nav.contact}</Link>

              <div className="an-mobile-divider" />

              <div className="an-mobile-actions">
                <button
                  onClick={() => setLanguage(language === "en" ? "np" : "en")}
                  className="an-lang-btn"
                >
                  <Globe size={12} />
                  {language === "en" ? "नेपाली" : "English"}
                </button>
                <a href="tel:+9779841370260" className="an-cta-btn">
                  <Phone size={13} />
                  {language === "en" ? "Call Now" : "कल गर्नुहोस्"}
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}