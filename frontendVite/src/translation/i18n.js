import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deEinstieg from "./de/homepage/Einstieg.json";
import deEntdeckenShowcase from "./de/homepage/EntdeckenShowcase.json";
import deBewertungen from "./de/homepage/Bewertungen.json";

import enEinstieg from "./en/homepage/Einstieg.json";
import enEntdeckenShowcase from "./en/homepage/EntdeckenShowcase.json";
import enBewertungen from "./en/homepage/Bewertungen.json";


i18n.use(initReactI18next).init(
    {
        fallbackLng: 'de',
        debug: true,
        resources: {
            de: {
                translation:{
                    homepage: {
                        einstieg: deEinstieg,
                        entdeckenShowcase: deEntdeckenShowcase,
                        bewertungen: deBewertungen
                    }
                }
                
            },
            en: {
                translation: {
                    homepage: {
                        einstieg: enEinstieg,
                        entdeckenShowcase: enEntdeckenShowcase,
                        bewertungen: enBewertungen
                    }
                }
            }
        },

        interpolation: {
            escapeValue: false,
        }
    }
)

export default i18n;