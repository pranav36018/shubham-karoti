import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      story: "Our Story",
      philosophy: "Our Philosophy",
      education: "Education & Activities",
      life: "Life at Gurukula",
      journey: "Child Journey",
      gallery: "Gallery",
      support: "Support Our Mission",
      contact: "Contact",
      donateBtn: "Support Our Mission",
      admissions: "Admissions Open",
    },
    hero: {
      tag: "Ancient Wisdom. Timeless Values. Limitless Possibilities.",
      headline: "Rooted in Tradition. Growing Towards Tomorrow.",
      description: "An inspiring environment where ancient Indian wisdom, modern education, and holistic development come together to nurture confident, knowledgeable, and culturally rooted young women.",
      discoverBtn: "Discover Our Story",
      exploreBtn: "Explore Gurukula Life",
    },
    promise: {
      title: "Our Uncompromised Promise",
      subtitle: "A Sacred Vow of Total Free Education & Selfless Service",
      freeTitle: "100% Free Education",
      freeDesc: "From 6th standard through 2nd PUC with zero tuition or hidden fees.",
      foodTitle: "Pure Sattvic Nutrition",
      foodDesc: "Hygienic, wholesome breakfast, lunch, and dinner provided daily.",
      boardingTitle: "Secure Campus Home",
      boardingDesc: "Comfortable, safe residential living in a 12-acre serene sanctuary.",
      sanskritTitle: "Spoken Sanskrit Living Language",
      sanskritDesc: "Conversational Sanskrit spoken fluently in daily campus interactions.",
    },
    footer: {
      tagline: "Empowering young women through Vedic wisdom, classical fine arts, and modern intellectual mastery.",
      quickLinks: "Quick Navigation",
      contactUs: "Reach Out to Us",
      affiliations: "Three Examination Bodies: Karnataka State Board, Karnataka Sanskrit University, and Gurukula Council.",
      rights: "Shubham Karoti Maitreyi Gurukula. All Rights Reserved.",
      designedFor: "Dedicated to the noble cause of free girls' education in Bharat."
    }
  },
  kn: {
    nav: {
      home: "ಮುಖಪುಟ",
      story: "ನಮ್ಮ ಕಥೆ",
      philosophy: "ನಮ್ಮ ತತ್ವಜ್ಞಾನ",
      education: "ಶಿಕ್ಷಣ ಮತ್ತು ಚಟುವಟಿಕೆಗಳು",
      life: "ಗುರುಕುಲ ಜೀವನ",
      journey: "ಮಗುವಿನ ವಿಕಾಸ ಯಾತ್ರೆ",
      gallery: "ಚಿತ್ರಶಾಲೆ",
      support: "ನಮ್ಮ ಧ್ಯೇಯಕ್ಕೆ ಬೆಂಬಲಿಸಿ",
      contact: "ಸಂಪರ್ಕಿಸಿ",
      donateBtn: "ಸಹಾಯ ಹಸ್ತ ಚಾಚಿ",
      admissions: "ದಾಖಲಾತಿಗಳು ಮುಕ್ತವಾಗಿವೆ",
    },
    hero: {
      tag: "ಪ್ರಾಚೀನ ಜ್ಞಾನ. ಕಾಲಾತೀತ ಮೌಲ್ಯಗಳು. ಅಪರಿಮಿತ ಸಾಧ್ಯತೆಗಳು.",
      headline: "ಸಂಪ್ರದಾಯದಲ್ಲಿ ಬೇರೂರಿ. ಮುನ್ನಡೆಯತ್ತ ಬೆಳೆದು.",
      description: "ಪ್ರಾಚೀನ ಭಾರತೀಯ ಜ್ಞಾನ, ಆಧುನಿಕ ಶಿಕ್ಷಣ ಮತ್ತು ಸಮಗ್ರ ವ್ಯಕ್ತಿತ್ವ ವಿಕಾಸ ಒಗ್ಗೂಡಿ ಸ್ವಾಭಿಮಾನಿ, ಸುಸಂಸ್ಕೃತ ಹೆಣ್ಣು ಮಕ್ಕಳನ್ನು ರೂಪಿಸುವ ಪವಿತ್ರ ತಾಣ.",
      discoverBtn: "ನಮ್ಮ ಕಥೆಯನ್ನು ಅರಿಯಿರಿ",
      exploreBtn: "ಗುರುಕುಲ ಜೀವನವನ್ನು ನೋಡಿ",
    },
    promise: {
      title: "ನಮ್ಮ ಪವಿತ್ರ ಸಂಕಲ್ಪ",
      subtitle: "ಸಂಪೂರ್ಣ ಉಚಿತ ಶಿಕ್ಷಣ ಹಾಗೂ ನಿಸ್ವಾರ್ಥ ಸಮಾಜ ಸೇವೆ",
      freeTitle: "೧೦೦% ಉಚಿತ ಶಿಕ್ಷಣ",
      freeDesc: "೬ನೇ ತರಗತಿಯಿಂದ ೨ನೇ ಪಿಯುಸಿವರೆಗೆ ಯಾವುದೇ ಶುಲ್ಕವಿಲ್ಲದೆ ಉಚಿತ ಶಿಕ್ಷಣ.",
      foodTitle: "ಪೌಷ್ಟಿಕ ಸಾತ್ವಿಕ ಆಹಾರ",
      foodDesc: "ಪ್ರತಿದಿನ ಶುದ್ಧ, ಸಾತ್ವಿಕ ಮತ್ತು ಪೌಷ್ಟಿಕ ಆಹಾರ ಮತ್ತು ವಸತಿ ವ್ಯವಸ್ಥೆ.",
      boardingTitle: "ಸುರಕ್ಷಿತ ವಸತಿ ನಿಲಯ",
      boardingDesc: "೧೨ ಎಕರೆ ಪ್ರಶಾಂತ ಹಸಿರು ಆವರಣದಲ್ಲಿ ಸುಸಜ್ಜಿತ ವಸತಿ ಸೌಕರ್ಯ.",
      sanskritTitle: "ವ್ಯವಹಾರಿಕ ಸಂಸ್ಕೃತ ಭಾಷೆ",
      sanskritDesc: "ಪ್ರತಿದಿನ ಸಹಜವಾಗಿ ಸಂಭಾಷಣಾ ಮಾಧ್ಯಮವಾಗಿ ಸಂಸ್ಕೃತದ ಬಳಕೆ.",
    },
    footer: {
      tagline: "ವೇದ ಪರಂಪರೆ, ಶಾಸ್ತ್ರೀಯ ಕಲೆಗಳು ಮತ್ತು ಆಧುನಿಕ ಶಿಕ್ಷಣದ ಮೂಲಕ ಹೆಣ್ಣು ಮಕ್ಕಳ ಸಬಲೀಕರಣ.",
      quickLinks: "ಮುಖ್ಯ ಕೊಂಡಿಗಳು",
      contactUs: "ಸಂಪರ್ಕ ವಿವರಗಳು",
      affiliations: "ಮೂರು ಪರೀಕ್ಷಾ ವ್ಯವಸ್ಥೆ: ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಂಡಳಿ, ಕರ್ನಾಟಕ ಸಂಸ್ಕೃತ ವಿಶ್ವವಿದ್ಯಾಲಯ ಹಾಗೂ ಗುರುಕುಲ ಆಂತರಿಕ ಮಂಡಳಿ.",
      rights: "ಶುಭಂ ಕರೋತಿ ಮೈತ್ರೇಯೀ ಗುರುಕುಲ. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      designedFor: "ಭಾರತೀಯ ಹೆಣ್ಣು ಮಕ್ಕಳ ಉಚಿತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಸಮರ್ಪಿತ."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('gurukula_lang') || 'en';
  });

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'kn' : 'en';
    setLang(nextLang);
    localStorage.setItem('gurukula_lang', nextLang);
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
