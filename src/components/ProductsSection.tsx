// ProductsSection.tsx
"use client";

import { Building2, Droplets, Flame, Recycle, Settings, Wind, Wrench } from "lucide-react";
import Link from "next/link";
import "./ProductsSection.css";

const products = [
    {
        icon: Wrench,
        href: "/products/laundry",
        img: "/washing_machine-min-min.png",
        color: "from-blue-500 to-blue-700",
        enTitle: "Commercial Laundry",
        npTitle: "व्यावसायिक लन्ड्री",
        enDesc: "Industrial washing, drying, hydro extractors & press systems",
        npDesc: "औद्योगिक धुने, सुकाउने, हाइड्रो एक्सट्रक्टर र प्रेस प्रणाली",
    },
    {
        icon: Droplets,
        href: "/products/filtration",
        img: "/water_filter-min-min.png",
        color: "from-cyan-500 to-cyan-700",
        enTitle: "Filtration & Well Digging",
        npTitle: "निस्पंदन र इनार खन्ने",
        enDesc: "Commercial & home water filtration, RO plants, groundwater",
        npDesc: "व्यावसायिक र घर पानी निस्पंदन, RO प्लान्ट, भूमिगत पानी",
    },
    {
        icon: Flame,
        href: "/products/fire-safety",
        img: "/Fire-Hydrant-System.webp",
        color: "from-red-500 to-red-700",
        enTitle: "Fire Fighter Systems",
        npTitle: "फायर फाइटर प्रणाली",
        enDesc: "Sprinklers, hydrants, alarms & complete fire safety solutions",
        npDesc: "स्प्रिंकलर, हाइड्रेन्ट, अलार्म र पूर्ण आगो सुरक्षा समाधान",
    },
    {
        icon: Settings,
        href: "/products/custom-equipment",
        img: "/custom_building.jpg",
        color: "from-amber-500 to-orange-600",
        enTitle: "Custom Made Equipment",
        npTitle: "अनुकूलित उपकरणहरू",
        enDesc: "Mass industrial-scale custom fabrication for any industry",
        npDesc: "कुनै पनि उद्योगको लागि ठूलो मात्रामा अनुकूलित निर्माण",
    },
    {
        icon: Wind,
        href: "/products/hvac",
        img: "/central_air_conditioner.jpg",
        color: "from-teal-500 to-teal-700",
        enTitle: "HVAC AC Systems",
        npTitle: "HVAC एसी प्रणाली",
        enDesc: "Central AC, VRF/VRV systems & ventilation for entire buildings",
        npDesc: "केन्द्रीय AC, VRF/VRV प्रणाली र सम्पूर्ण भवनको लागि भेन्टिलेसन",
    },
    {
        icon: Building2,
        href: "/products/elevator",
        img: "/Passenger-Elevator.jpg",
        color: "from-indigo-500 to-indigo-700",
        enTitle: "Elevator Systems",
        npTitle: "लिफ्ट प्रणाली",
        enDesc: "Passenger, goods & service elevators for commercial buildings",
        npDesc: "व्यावसायिक भवनहरूको लागि यात्री, सामान र सेवा लिफ्टहरू",
    },
    {
        icon: Recycle,
        href: "/products/waste-treatment",
        img: "/erp.jpg",
        color: "from-green-500 to-green-700",
        enTitle: "Waste Treatment Systems",
        npTitle: "फोहोर उपचार प्रणाली",
        enDesc: "Sewage & effluent treatment plants, biogas systems",
        npDesc: "ढल र प्रवाह उपचार संयन्त्र, बायोग्यास प्रणाली",
    },
];

export default function ProductsSection({ language = "en" }) {
    return (
        <section className="products-section">
            <div className="container-products">
                
                {/* HEADER */}
                <div className="header">
                    <p className="badge">
                        {language === "en" ? "What We Offer" : "हामी के प्रदान गर्छौं"}
                    </p>

                    <h2>
                        {language === "en"
                            ? "Our Products & Services"
                            : "हाम्रा उत्पादनहरू र सेवाहरू"}
                    </h2>

                    <p className="subtext">
                        {language === "en"
                            ? "Complete industrial and commercial equipment solutions under one roof."
                            : "एउटै छत मुनि सम्पूर्ण औद्योगिक र व्यावसायिक उपकरण समाधान।"}
                    </p>
                </div>

                {/* GRID */}
                <div className="grid">
                    {products.map((p) => {
                        const Icon = p.icon;

                        return (
                            <Link key={p.href} href={p.href} className="card">
                                <div className="image-wrapper">
                                    <img src={p.img} alt={p.enTitle} />

                                    <div className="overlay" />

                                    <div className="icon-box">
                                        <Icon size={18} />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3>
                                        {language === "en" ? p.enTitle : p.npTitle}
                                    </h3>

                                    <p>
                                        {language === "en" ? p.enDesc : p.npDesc}
                                    </p>

                                    <span className="link">
                                        {language === "en" ? "Learn More" : "थप जान्नुहोस्"}{" "}
                                        →
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
