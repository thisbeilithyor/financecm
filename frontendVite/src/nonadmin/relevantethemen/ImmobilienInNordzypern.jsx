import HeaderRelevanteThemen from "../components/HeaderRelevanteThemen";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ansprechpartner from "../components/Ansprechpartner";
import Zitat from "./Zitat";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ImmobilienInNordzypern = () => {
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    return (
        <>
            <Navbar></Navbar>
            <HeaderRelevanteThemen url='../bgueberzypern.webp' head1={t("relevantethemen.immobilienInNordzypern.header.head1")} head2={t("relevantethemen.immobilienInNordzypern.header.head2")}></HeaderRelevanteThemen>

            <div className="bg-[#f1f1f1] pt-20">
                <div className="w-[85vw] m-auto">
                <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.immobilienInNordzypern.section1.title1")}</h2>
                <h3 className="text-lg md:text-3xl text-center text-[#093B3F] font-bold md:mb-10">{t("relevantethemen.immobilienInNordzypern.section1.title2")}</h3>

                {
                    Array.from({length:4}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`relevantethemen.immobilienInNordzypern.section1.paragraphs.${i}`)}</p>
                    ))
                }

                <center><button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg mt-5 mb-5" onClick={() => navigate('/immobilien')}>{t("relevantethemen.immobilienInNordzypern.section1.button")}</button></center>


                {
                    /*
                    <>
                    <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.immobilienInNordzypern.section2.title")}</h2>
                    

                    <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.immobilienInNordzypern.section3.title")}</h2>

                    <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t("relevantethemen.immobilienInNordzypern.section4.title")}</h2>
                    </>
                    */
                }
                
                <Zitat></Zitat>

                </div>
            </div>
                
            <Ansprechpartner></Ansprechpartner>
            <Footer></Footer>
        </>
    )
}

export default ImmobilienInNordzypern;