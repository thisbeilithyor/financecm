import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deEinstieg from "./de/homepage/Einstieg.json";
import deEntdeckenShowcase from "./de/homepage/EntdeckenShowcase.json";
import deBewertungen from "./de/homepage/Bewertungen.json";
import deNavbar from "./de/components/Navbar.json";
import deRelevanteThemen from "./de/components/RelevanteThemen.json";
import deAnsprechpartner from "./de/components/Ansprechpartner.json";
import deFooter from "./de/components/Footer.json";
import deImmobilien from "./de/immobilien/Immobilien.json";
import deHaeufigeFragen from "./de/immobilien/HaeufigeFragen.json";
import deVorteileEinerImmobilie from "./de/components/VorteileEinerImmobilie.json";
import deImmobilieAufZypernkaufen from "./de/components/ImmobilieAufZypernKaufen.json";
import deImmoElement from "./de/immobilien/specific_item/ImmoElement.json";
import deUntereInfos from "./de/immobilien/specific_item/UntereInfos.json";


import enEinstieg from "./en/homepage/Einstieg.json";
import enEntdeckenShowcase from "./en/homepage/EntdeckenShowcase.json";
import enBewertungen from "./en/homepage/Bewertungen.json";
import enNavbar from "./en/components/Navbar.json";
import enRelevanteThemen from "./en/components/RelevanteThemen.json";
import enAnsprechpartner from "./en/components/Ansprechpartner.json";
import enFooter from "./en/components/Footer.json";
import enImmobilien from "./en/immobilien/Immobilien.json";
import enHaeufigeFragen from "./en/immobilien/HaeufigeFragen.json";
import enVorteileEinerImmobilie from "./en/components/VorteileEinerImmobilie.json";
import enImmobilieAufZypernkaufen from "./en/components/ImmobilieAufZypernKaufen.json";
import enImmoElement from "./en/immobilien/specific_item/ImmoElement.json";
import enUntereInfos from "./en/immobilien/specific_item/UntereInfos.json";



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
                        bewertungen: deBewertungen,
                        footer: deFooter,
                    },
                    components: {
                        navbar: deNavbar,
                        relevantethemen: deRelevanteThemen,
                        ansprechpartner: deAnsprechpartner,
                        footer: deFooter,
                        vorteileEinerImmobilie: deVorteileEinerImmobilie,
                        immobilieAufZypernKaufen: deImmobilieAufZypernkaufen,
                    },
                    immobilien: {
                        immobilien: deImmobilien,
                        haeufigeFragen: deHaeufigeFragen,
                        specific_item: {
                            immoElement: deImmoElement,
                            untereInfos: deUntereInfos,
                        }
                    }
                }
                
            },
            en: {
                translation: {
                    homepage: {
                        einstieg: enEinstieg,
                        entdeckenShowcase: enEntdeckenShowcase,
                        bewertungen: enBewertungen
                    },
                    components: {
                        navbar: enNavbar,
                        relevantethemen: enRelevanteThemen,
                        ansprechpartner: enAnsprechpartner,
                        footer: enFooter,
                        vorteileEinerImmobilie: enVorteileEinerImmobilie,
                        immobilieAufZypernKaufen: enImmobilieAufZypernkaufen,
                    },
                    immobilien: {
                        immobilien: enImmobilien,
                        haeufigeFragen: enHaeufigeFragen,
                        specific_item: {
                            immoElement: enImmoElement,
                            untereInfos: enUntereInfos,
                        }
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