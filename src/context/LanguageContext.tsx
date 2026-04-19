"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionaries, Dictionary, Language } from '@/i18n/dictionaries';

interface LanguageContextProps {
  setOpenAiChat: (open: boolean) => void;
  isAiChatOpen: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isAiChatOpen, setOpenAiChat] = useState(false);

  // Try to load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'np')) {
      setLanguage(savedLang);
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const value = {
    isAiChatOpen,
    setOpenAiChat,
    language,
    setLanguage,
    dict: dictionaries[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
