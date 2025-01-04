import i18n from "i18next";
import { initReactI18next  } from "react-i18next";
import en from '../locales/en.json'
import sv from '../locales/sv.json'

export const languageResources = { 
    en: { translation: en},
    sv: { translation: sv }
}

i18n.use(initReactI18next).init({
    resources: languageResources,
    lng: 'sv',
    fallbackLng: 'en', // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
})

export default i18n;