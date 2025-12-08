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
import deZahlungsinformationen from "./de/immobilien/specific_item/Zahlungsinformationen.json";
import deAnpsrechpartner2 from "./de/components/Ansprechpartner2.json";
import deUeberZypern from "./de/ueberzypern/UeberZypern.json";
import deNatur from "./de/ueberzypern/Natur.json";
import deAktivitaet from "./de/ueberzypern/Aktivitaet.json";
import deNachtleben from "./de/ueberzypern/Nachtleben.json";
import deInfrastruktur from "./de/ueberzypern/Infrastruktur.json";
import deImmobilieninvestionen from "./de/ueberzypern/Immobilieninvestitionen.json";
import deQandA from "./de/ueberzypern/QandA.json";
import deKontakt from "./de/contact/Kontakt.json";
import deKontaktForm from "./de/contact/KontaktForm.json";
import deChecklist from "./de/checklist/Checklist.json";
import deHausNordzypern from "./de/relevanteThemen/HausNordzypern.json";
import deZitat from "./de/relevanteThemen/Zitat.json";
import deWohnungenNordzypern from "./de/relevanteThemen/WohnungenNordzypern.json";
import deImmobilienInNordzypern from "./de/relevanteThemen/ImmobilienInNordzypern.json";
import deImpressum from "./de/impressum/Impressum.json";
import deFilter from "./de/immobilien/Filter.json";


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
import enZahlungsinformationen from "./en/immobilien/specific_item/Zahlungsinformationen.json";
import enAnpsrechpartner2 from "./en/components/Ansprechpartner2.json";
import enUeberZypern from "./en/ueberzypern/UeberZypern.json";
import enNatur from "./en/ueberzypern/Natur.json";
import enAktivitaet from "./en/ueberzypern/Aktivitaet.json";
import enNachtleben from "./en/ueberzypern/Nachtleben.json";
import enInfrastruktur from "./en/ueberzypern/Infrastruktur.json";
import enImmobilieninvestionen from "./en/ueberzypern/Immobilieninvestitionen.json";
import enQandA from "./en/ueberzypern/QandA.json";
import enKontakt from "./en/contact/Kontakt.json";
import enKontaktForm from "./en/contact/KontaktForm.json";
import enChecklist from "./en/checklist/Checklist.json";
import enHausNordzypern from "./en/relevanteThemen/HausNordzypern.json";
import enZitat from "./en/relevanteThemen/Zitat.json";
import enWohnungenNordzypern from "./en/relevanteThemen/WohnungenNordzypern.json";
import enImmobilienInNordzypern from "./en/relevanteThemen/ImmobilienInNordzypern.json";
import enImpressum from "./en/impressum/Impressum.json";
import enFilter from "./en/immobilien/Filter.json";


import ruEinstieg from "./ru/homepage/Einstieg.json";
import ruEntdeckenShowcase from "./ru/homepage/EntdeckenShowcase.json";
import ruBewertungen from "./ru/homepage/Bewertungen.json";
import ruNavbar from "./ru/components/Navbar.json";
import ruRelevanteThemen from "./ru/components/RelevanteThemen.json";
import ruAnsprechpartner from "./ru/components/Ansprechpartner.json";
import ruFooter from "./ru/components/Footer.json";
import ruImmobilien from "./ru/immobilien/Immobilien.json";
import ruHaeufigeFragen from "./ru/immobilien/HaeufigeFragen.json";
import ruVorteileEinerImmobilie from "./ru/components/VorteileEinerImmobilie.json";
import ruImmobilieAufZypernkaufen from "./ru/components/ImmobilieAufZypernKaufen.json";
import ruImmoElement from "./ru/immobilien/specific_item/ImmoElement.json";
import ruUntereInfos from "./ru/immobilien/specific_item/UntereInfos.json";
import ruZahlungsinformationen from "./ru/immobilien/specific_item/Zahlungsinformationen.json";
import ruAnpsrechpartner2 from "./ru/components/Ansprechpartner2.json";
import ruUeberZypern from "./ru/ueberzypern/UeberZypern.json";
import ruNatur from "./ru/ueberzypern/Natur.json";
import ruAktivitaet from "./ru/ueberzypern/Aktivitaet.json";
import ruNachtleben from "./ru/ueberzypern/Nachtleben.json";
import ruInfrastruktur from "./ru/ueberzypern/Infrastruktur.json";
import ruImmobilieninvestionen from "./ru/ueberzypern/Immobilieninvestitionen.json";
import ruQandA from "./ru/ueberzypern/QandA.json";
import ruKontakt from "./ru/contact/Kontakt.json";
import ruKontaktForm from "./ru/contact/KontaktForm.json";
import ruChecklist from "./ru/checklist/Checklist.json";
import ruHausNordzypern from "./ru/relevanteThemen/HausNordzypern.json";
import ruZitat from "./ru/relevanteThemen/Zitat.json";
import ruWohnungenNordzypern from "./ru/relevanteThemen/WohnungenNordzypern.json";
import ruImmobilienInNordzypern from "./ru/relevanteThemen/ImmobilienInNordzypern.json";
import ruImpressum from "./ru/impressum/Impressum.json";
import ruFilter from "./ru/immobilien/Filter.json";


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
                        ansprechpartner2: deAnpsrechpartner2,
                    },
                    immobilien: {
                        immobilien: deImmobilien,
                        haeufigeFragen: deHaeufigeFragen,
                        filter: deFilter,
                        specific_item: {
                            immoElement: deImmoElement,
                            untereInfos: deUntereInfos,
                            zahlungsinformationen: deZahlungsinformationen,
                        }
                    },
                    ueberzypern: {
                        ueberZypern: deUeberZypern,
                        natur: deNatur,
                        aktivitaet: deAktivitaet,
                        nachtleben: deNachtleben,
                        infrastruktur: deInfrastruktur,
                        immobilieninvestitionen: deImmobilieninvestionen,
                        QandA: deQandA,
                    },
                    contact: {
                        kontakt: deKontakt,
                        kontaktForm: deKontaktForm,
                    },
                    checklist: {
                        checklist: deChecklist
                    },
                    relevantethemen: {
                        hausNordzypern: deHausNordzypern,
                        zitat: deZitat,
                        wohnungenNordzypern: deWohnungenNordzypern,
                        immobilienInNordzypern: deImmobilienInNordzypern
                    },
                    impressum: {
                        impressum: deImpressum
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
                        ansprechpartner2: enAnpsrechpartner2,
                    },
                    immobilien: {
                        immobilien: enImmobilien,
                        haeufigeFragen: enHaeufigeFragen,
                        filter: enFilter,
                        specific_item: {
                            immoElement: enImmoElement,
                            untereInfos: enUntereInfos,
                            zahlungsinformationen: enZahlungsinformationen,
                        }
                    },
                    ueberzypern: {
                        ueberZypern: enUeberZypern,
                        natur: enNatur,
                        aktivitaet: enAktivitaet,
                        nachtleben: enNachtleben,
                        infrastruktur: enInfrastruktur,
                        immobilieninvestitionen: enImmobilieninvestionen,
                        QandA: enQandA,
                    },
                    contact: {
                        kontakt: enKontakt,
                        kontaktForm: enKontaktForm,
                    },
                    checklist: {
                        checklist: enChecklist
                    },
                    relevantethemen: {
                        hausNordzypern: enHausNordzypern,
                        zitat: enZitat,
                        wohnungenNordzypern: enWohnungenNordzypern,
                        immobilienInNordzypern: enImmobilienInNordzypern
                    },
                    impressum: {
                        impressum: enImpressum
                    }
                }
            },
            ru: {
                translation:{
                    homepage: {
                        einstieg: ruEinstieg,
                        entdeckenShowcase: ruEntdeckenShowcase,
                        bewertungen: ruBewertungen,
                        footer: ruFooter,
                    },
                    components: {
                        navbar: ruNavbar,
                        relevantethemen: ruRelevanteThemen,
                        ansprechpartner: ruAnsprechpartner,
                        footer: ruFooter,
                        vorteileEinerImmobilie: ruVorteileEinerImmobilie,
                        immobilieAufZypernKaufen: ruImmobilieAufZypernkaufen,
                        ansprechpartner2: ruAnpsrechpartner2,
                    },
                    immobilien: {
                        immobilien: ruImmobilien,
                        haeufigeFragen: ruHaeufigeFragen,
                        filter: ruFilter,
                        specific_item: {
                            immoElement: ruImmoElement,
                            untereInfos: ruUntereInfos,
                            zahlungsinformationen: ruZahlungsinformationen,
                        }
                    },
                    ueberzypern: {
                        ueberZypern: ruUeberZypern,
                        natur: ruNatur,
                        aktivitaet: ruAktivitaet,
                        nachtleben: ruNachtleben,
                        infrastruktur: ruInfrastruktur,
                        immobilieninvestitionen: ruImmobilieninvestionen,
                        QandA: ruQandA,
                    },
                    contact: {
                        kontakt: ruKontakt,
                        kontaktForm: ruKontaktForm,
                    },
                    checklist: {
                        checklist: ruChecklist
                    },
                    relevantethemen: {
                        hausNordzypern: ruHausNordzypern,
                        zitat: ruZitat,
                        wohnungenNordzypern: ruWohnungenNordzypern,
                        immobilienInNordzypern: ruImmobilienInNordzypern
                    },
                    impressum: {
                        impressum: ruImpressum
                    }
                }    
            },
        },
        interpolation: {
            escapeValue: false,
        }
    }
)

export default i18n;