import Navbar from "../components/Navbar";
import HeaderRelevanteThemen from "../components/HeaderRelevanteThemen";
import Ansprechpartner from "../components/Ansprechpartner";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Zitat from "./Zitat";
import { useTranslation } from "react-i18next";

const HausNordzypern = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navbar></Navbar>
            <HeaderRelevanteThemen url='../relImg3.webp' head1={t("relevantethemen.hausNordzypern.header.head1")} head2={t("relevantethemen.hausNordzypern.header.head2")}></HeaderRelevanteThemen>

            <div className="bg-[#f1f1f1] pt-3 md:pt-20">
                <div className="w-[85vw] m-auto">
                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.hausNordzypern.sections.0.title")}</h2>
                {
                    Array.from( {length: 4} ).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.hausNordzypern.sections.0.paragraphs.${i}`)}</p>
                    ))
                }

                <center><button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg mt-5 mb-5" onClick={() => navigate('/immobilien')}>{t("relevantethemen.hausNordzypern.sections.0.button")}</button></center>

                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.hausNordzypern.sections.1.title")}</h2>
                {
                    Array.from( {length: 5} ).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.hausNordzypern.sections.1.paragraphs.${i}`)}</p>
                    ))
                }

                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.hausNordzypern.sections.2.title")}</h2>
                {
                    Array.from( {length: 5} ).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.hausNordzypern.sections.2.paragraphs.${i}`)}</p>
                    ))
                }
                <center><button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg mt-5 mb-5" onClick={() => navigate('/uberzypern')}>{t(`relevantethemen.hausNordzypern.sections.2.button`)}</button></center>

                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.hausNordzypern.sections.3.title")}</h2>
                {
                    Array.from( {length: 4} ).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.hausNordzypern.sections.3.paragraphs.${i}`)}</p>
                    ))
                }

                <Zitat></Zitat>

                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.hausNordzypern.sections.4.title")}</h2>
                {
                    Array.from( {length: 5} ).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.hausNordzypern.sections.4.paragraphs.${i}`)}</p>
                    ))
                }
                </div>
            </div>

            <Ansprechpartner></Ansprechpartner>
            <Footer></Footer>
        </>
    )
}

export default HausNordzypern;