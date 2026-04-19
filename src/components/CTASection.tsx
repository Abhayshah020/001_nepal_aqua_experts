"use client";

import Link from "next/link";
import "./CTASection.css";
import { Phone } from "lucide-react";

export default function CTASection({ language = "en" }) {
    return (
        <section className="ctaSection">
            <div className="ctaSection__container">
                <h2 className="ctaSection__title">
                    {language === "en"
                        ? "Ready to Upgrade Your Business Equipment?"
                        : "तपाईंको व्यवसायिक उपकरण अपग्रेड गर्न तयार हुनुहुन्छ?"}
                </h2>

                <p className="ctaSection__subtitle">
                    {language === "en"
                        ? "Call us now for a free consultation and no-obligation quote."
                        : "निःशुल्क परामर्श र उद्धरणको लागि अहिले नै हामीलाई कल गर्नुहोस्।"}
                </p>

                <div className="ctaSection__actions">
                    <Link href="tel:+9779841370260" className="ctaSection__btn ctaSection__btnPrimary">
                        <Phone size={18} />
                        +977 9841370260
                    </Link>

                    <Link
                        href="https://wa.me/9779841370260"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ctaSection__btn ctaSection__btnSecondary"
                    >
                        WhatsApp
                    </Link>
                </div>
            </div>
        </section>
    );
}