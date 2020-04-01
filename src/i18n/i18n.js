import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import React from "react";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        en: {
            translations: {
                "Andrii Pilat": "Andrii Pilat",
                Gallery: "Gallery",
                Archive: "Archive",
                Contact: "Contact",
                Previous: "Previous",
                Next: "Next",
                "picture of": "picture of",
                "Artist's studio": "Artist's studio",
                "Ukraine, Chernivtsi": "Ukraine, Chernivtsi",
                "plastic bags LDPE4/HDPE2": "plastic bags LDPE4/HDPE2",
                "cm": "cm"
            }
        },
        uk: {
            translations: {
                "Andrii Pilat": "Андрій Пілат",
                Gallery: "Галерея",
                Archive: "Архів",
                Contact: "Контакти",
                Previous: "Попередня",
                Next: "Наступна",
                "picture of": "картина з",
                "Artist's studio": "Студія художника",
                "Ukraine, Chernivtsi": "Україна, Чернівці",
                "plastic bags LDPE4/HDPE2": "пластикові пакети LDPE4/HDPE2",
                "cm": "см"
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

i18n.changeLanguage("en");

export default i18n;