import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Setup and initialize i18next
  i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // This will log debug messages to the console. Set to false in production.
    lng: "en", // Default language. Can be overridden by user preference.
    resources: {
      en: {
        translation: {
          logo: "SCATCH",
          home: "Home",
          cart: "Cart",
          cartItems: "CART ITEMS",
        },
      },
      fr: {
        translation: {
          logo: "SCATCH",
          home: "Accueil",
          cart: "Panier",
          cartItems: "ARTICLES DANS LE PANIER",
        },
      },
      hi: {
        translation: {
          logo: "SCATCH",
          home: "मुख्य पृष्ठ",
          cart: "कार्ट",
          cartItems: "कार्ट आइटम्स",
        },
      },
    },
  });

export default i18next;