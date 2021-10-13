import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
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
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        },
    });

export default i18next;