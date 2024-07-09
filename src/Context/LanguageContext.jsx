// src/Context/LanguageContext.js
import React, { createContext, useState } from "react";
import translations from "../translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    console.log(`Toggling language to: ${newLanguage}`);
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
