import Navbar from "../components/Navbar";
import HeaderRelevanteThemen from "../components/HeaderRelevanteThemen";
import Ansprechpartner from "../components/Ansprechpartner";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Zitat from "./Zitat";

import { useTranslation } from "react-i18next";

const WohnungenNordzypern = () => {
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();
    return (
        <>
            <Navbar></Navbar>
            <HeaderRelevanteThemen url='../bgwohnungen.webp' head1={t("relevantethemen.wohnungenNordzypern.header.head1")} head2={t("relevantethemen.wohnungenNordzypern.header.head2")}></HeaderRelevanteThemen>

            <div className="bg-[#f1f1f1] pt-20">
                <div className="w-[85vw] m-auto">
                <h2 className="text-2xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.wohnungenNordzypern.section1.title1")}</h2>
                <h3 className="text-xl md:text-3xl text-center text-[#093B3F] font-bold md:mb-10">{t("relevantethemen.wohnungenNordzypern.section1.title2")}</h3>
                {
                    Array.from({length: 4}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.wohnungenNordzypern.section1.paragraphs.${i}`)}</p>
                    ))
                }
                <center><button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg mt-5 mb-5" onClick={() => navigate('/immobilien')}>{t("relevantethemen.wohnungenNordzypern.section1.button")}</button></center>


                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.wohnungenNordzypern.section2.title")}</h2>
                {
                    Array.from({length:4}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.wohnungenNordzypern.section1.paragraphs.${i}`)}</p>
                    ))
                }


                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.wohnungenNordzypern.section3.title")}</h2>
                {
                    Array.from({length:4}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.wohnungenNordzypern.section3.paragraphs.${i}`)}</p>
                    ))
                }
                <center><button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg mt-5 mb-5" onClick={() => navigate('/uberzypern')}>{t("relevantethemen.wohnungenNordzypern.section3.button")}</button></center>


                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.wohnungenNordzypern.section4.title")}</h2>
                {
                    Array.from({length:5}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.wohnungenNordzypern.section4.paragraphs.${i}`)}</p>
                    ))
                }

                <Zitat></Zitat>

                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.wohnungenNordzypern.section5.title")}</h2>
                {
                    Array.from({length:4}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.wohnungenNordzypern.section5.paragraphs.${i}`)}</p>
                    ))
                }
                </div>
            </div>  
            <Ansprechpartner />
            <Footer />
        </>
    )
}

export default WohnungenNordzypern;