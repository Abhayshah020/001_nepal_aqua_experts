"use client";

import { useEffect, useState } from "react";
import "./ContactPage.css";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2, Bot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PRODUCTS = [
  "Commercial Washing Machines",
  "Commercial Dryers",
  "Hydro Extractors",
  "Press / Ironer Systems",
  "Water Filtration / RO Plants",
  "HVAC / AC Systems",
  "Fire Safety Systems",
  "Elevators / Lifts",
  "Waste Treatment Systems",
  "Custom Equipment",
  "Other",
];

export default function ContactPage() {
  const { language, setOpenAiChat } = useLanguage();

  const t = (en: string, np: string) => (language === "en" ? en : np);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    otherProduct: "",
    message: "",
  });
  const [isLocked, setIsLocked] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const sent = sessionStorage.getItem("contact_form_sent");
    if (sent === "true") {
      setStatus("sent");
      setIsLocked(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const finalProduct =
      form.product === "Other" ? form.otherProduct : form.product;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Quotation Request – ${finalProduct}`,
          message: `${finalProduct}\n\n${form.message}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        setIsLocked(true);
        sessionStorage.setItem("contact_form_sent", "true");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contactPage">

      {/* BACKGROUND LAYERS */}
      <div className="contactPage__bgGrid" />
      <div className="contactPage__bgGlow" />

      {/* HEADER */}
      <section className="contactPage__hero">
        <div className="contactPage__heroContainer">
          <h1>{t("Contact & Get Quote", "सम्पर्क गर्नुहोस्")}</h1>

          <p className="contactPage__heroSub">
            {t(
              "Get expert consultation for industrial & commercial equipment.",
              "औद्योगिक तथा व्यावसायिक उपकरणका लागि विशेषज्ञ परामर्श लिनुहोस्।"
            )}
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="contactPage__grid">

        {/* LEFT: FORM */}
        <div className="contactPage__formCard">

          <h2>{t("Request a Quotation", "उद्धरण अनुरोध")}</h2>

          {status === "sent" ? (
            <div className="contactPage__successCard">
              <div className="contactPage__successIcon">
                <CheckCircle size={34} />
              </div>

              <h3>
                {t("Request Successfully Sent!", "अनुरोध सफलतापूर्वक पठाइयो!")}
              </h3>

              <p>
                {t(
                  "Thank you! Our team will contact you within 2 hours.",
                  "धन्यवाद! हाम्रो टोलीले २ घण्टाभित्र सम्पर्क गर्नेछ।"
                )}
              </p>

              <div className="contactPage__successActions">
                <a href="tel:+9779841370260">📞 Call Now</a>
                <a href="https://wa.me/9779841370260" target="_blank">💬 WhatsApp</a>
              </div>

              <span className="contactPage__successNote">
                {t(
                  "To prevent duplicate requests, form is temporarily locked.",
                  "दोहोरो अनुरोध रोक्न फारम अस्थायी रूपमा लक गरिएको छ।"
                )}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contactPage__form" >

              <input disabled={isLocked} name="name" placeholder="Full Name *" required onChange={handleChange} />
              <input disabled={isLocked} name="phone" placeholder="Phone *" required onChange={handleChange} />
              <input disabled={isLocked} name="email" placeholder="Email" onChange={handleChange} />

              <select disabled={isLocked} name="product" required onChange={handleChange}>
                <option value="">{t("Select Product", "उत्पादन छान्नुहोस्")}</option>
                {PRODUCTS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>

              {form.product === "Other" && (
                <input
                  disabled={isLocked}
                  name="otherProduct"
                  required
                  placeholder={t("Specify Product", "उत्पादन उल्लेख गर्नुहोस्")}
                  onChange={handleChange}
                  className="contactPage__other"
                />
              )}

              <textarea
                disabled={isLocked}
                name="message"
                rows={4}
                placeholder={t("Describe your requirement...", "आफ्नो आवश्यकताहरू लेख्नुहोस्...")}
                onChange={handleChange}
              />

              <button disabled={status === "loading" || isLocked} type="submit" >
                {status === "loading" ? <Loader2 className="spin" /> : <Send />}
                {t("Send Request", "अनुरोध पठाउनुहोस्")}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="contactPage__side">

          {/* AI REMINDER CARD */}
          <div className="contactPage__aiCard">
            <Bot />
            <h3>{t("Need Help Choosing Equipment?", "उपकरण छान्न मद्दत चाहिन्छ?")}</h3>
            <p>
              {t(
                "Use our AI Chat Assistant to compare, understand and select the right industrial solution instantly.",
                "उपयुक्त औद्योगिक समाधान छान्न AI च्याट प्रयोग गर्नुहोस्।"
              )}
            </p>
            <button className="btn_ai_chat" onClick={() => setOpenAiChat(true)}>{t("Open AI Chat", "AI च्याट खोल्नुहोस्")}</button>
          </div>

          {/* CONTACT INFO */}
          <div className="contactPage__infoCard">
            <h3>{t("Contact Info", "सम्पर्क विवरण")}</h3>

            <div className="contactItem"><Phone /> +977 9841370260</div>
            <div className="contactItem"><Mail /> advancenational@gmail.com</div>
            <div className="contactItem"><MapPin /> Kathmandu, Nepal</div>
          </div>

          {/* QUICK NOTE */}
          <div className="contactPage__note">
            ⚡ {t(
              "We usually respond within 2 hours during business time.",
              "हामी सामान्यतया २ घण्टाभित्र जवाफ दिन्छौं।"
            )}
          </div>

        </div>
      </section>
    </div>
  );
}