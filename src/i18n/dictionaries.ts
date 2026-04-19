export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About Us",
      contact: "Contact us",
    },
    hero: {
      title: "Commercial & Industrial Solutions",
      subtitle: "Massive scale systems for laundry, filtration, HVAC, elevators, and more.",
      cta: "Jump in the Call Right now"
    },
    products: {
      title: "Our Products & Services",
      laundry: "Commercial Laundry",
      laundryDesc: "Washing, Drying, Hydro Extractor, Press Systems",
      filtration: "Filtration & Well Digging",
      filtrationDesc: "Commercial & Home Filtration, Groundwater",
      fire: "Fire Fighter Systems",
      fireDesc: "Advanced Fire & Safety Systems",
      custom: "Custom Made Equipment",
      customDesc: "Available in Mass Industrial Scale",
      hvac: "HVAC AC Systems",
      hvacDesc: "For the Entire Building",
      elevator: "Elevator Systems",
      elevatorDesc: "Building Elevator Installations",
      waste: "Waste Treatment Systems",
      wasteDesc: "Industrial waste management",
    },
    contact: {
      title: "Request a Quotation",
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      send: "Send Request",
      whatsapp: "Contact on WhatsApp",
    }
  },
  np: {
    nav: {
      home: "गृह पृष्ठ",
      products: "उत्पादनहरू",
      about: "हाम्रो बारेमा",
      contact: "सम्पर्क गर्नुहोस्",
    },
    hero: {
      title: "व्यावसायिक र औद्योगिक समाधान",
      subtitle: "लन्ड्री, निस्पंदन, HVAC, लिफ्ट र अधिकका लागि ठूलो मात्रामा प्रणालीहरू।",
      cta: "अहिले कलमा जोडिनुहोस्"
    },
    products: {
      title: "हाम्रा उत्पादनहरू र सेवाहरू",
      laundry: "व्यावसायिक लन्ड्री",
      laundryDesc: "धुने, सुकाउने, हाइड्रो एक्सट्रक्टर, प्रेस प्रणाली",
      filtration: "निस्पंदन र इनार खन्ने",
      filtrationDesc: "व्यावसायिक र घर निस्पंदन, भूमिगत पानी",
      fire: "फायर फाइटर प्रणाली",
      fireDesc: "उन्नत आगो र सुरक्षा प्रणाली",
      custom: "अनुकूलित उपकरणहरू",
      customDesc: "ठूलो औद्योगिक स्तरमा उपलब्ध",
      hvac: "HVAC एसी प्रणाली",
      hvacDesc: "सम्पूर्ण भवनको लागि",
      elevator: "लिफ्ट प्रणाली",
      elevatorDesc: "भवन लिफ्ट स्थापनाहरू",
      waste: "फोहोर उपचार प्रणाली",
      wasteDesc: "औद्योगिक फोहोर व्यवस्थापन",
    },
    contact: {
      title: "उद्धरण अनुरोध गर्नुहोस्",
      name: "तपाईंको नाम",
      email: "तपाईंको इमेल",
      message: "सन्देश",
      send: "अनुरोध पठाउनुहोस्",
      whatsapp: "ह्वाट्सएपमा सम्पर्क गर्नुहोस्",
    }
  }
};

export type Language = 'en' | 'np';
export type Dictionary = typeof dictionaries['en'];
