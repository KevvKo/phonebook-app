import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import commonDe from '../assets/tranlations/de/common';
import commonEn from '../assets/tranlations/en/common';

const resources = {
    en: {
        common: commonEn
    },
    de: {
        common: commonDe
    }
};

i18next
    .use(initReactI18next)
    .use(detector)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
    });

export default i18next;