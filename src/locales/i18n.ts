"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { initReactI18next } from "react-i18next/initReactI18next";
import en from "@/locales/en.json";
import de from "@/locales/de.json";

i18n.use(initReactI18next).init({
  resources: {
    en_US: { translation: en },
    de_DE: { translation: de },
  },
  lng: "de_DE",
  fallbackLng: "de_DE",
  interpolation: { escapeValue: false },
});

export default i18n;
