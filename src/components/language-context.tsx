"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en" | "fr" | "it" | "de" | "pt" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es");
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const loadTranslations = async (lang: Language) => {
    setLoading(true);
    try {
      const res = await fetch(`/locales/${lang}.json`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setTranslations(data);
    } catch (err) {
      console.error(`Failed to load locales for [${lang}]:`, err);
    } finally {
      setLoading(false);
    }
  };

  // Load preferred language on mount
  useEffect(() => {
    const saved = (localStorage.getItem("preferred-language") as Language) || "es";
    setLanguageState(saved);
    loadTranslations(saved);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred-language", lang);
    document.documentElement.lang = lang;
    loadTranslations(lang);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  // Render a minimal premium loader while the initial dictionary is loading to prevent layout flashes
  if (loading && Object.keys(translations).length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-foreground flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
