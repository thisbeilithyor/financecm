import Navbar from "../components/Navbar.jsx";
import HeaderRelevanteThemen from "../components/HeaderRelevanteThemen.jsx";
import Footer from "../components/Footer";
import Ansprechpartner from "../components/Ansprechpartner";

import { useTranslation } from "react-i18next";

const Inspektionsreise = () => {
    const { t, i18n } = useTranslation();

    return ( 
        <>
            <Navbar></Navbar>
            <HeaderRelevanteThemen url="./bgueberzypern.webp" head1={t("inspektionsreise.inspektionsreise.head1")} head2={t("inspektionsreise.inspektionsreise.head2")}></HeaderRelevanteThemen>

            <div className="bg-[#f1f1f1] pt-5 md:pt-20">
                <h2 className="text-xl md:text-4xl pb-1 text-center text-[#093B3F] font-bold">{t(`inspektionsreise.inspektionsreise.heading1`)}</h2>
                <div className="w-[85vw] m-auto">
                {
                    Array.from({length:5}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`inspektionsreise.inspektionsreise.paragraphs.${i}`)}</p>
                    ))
                }
                </div>

                <h2 className="text-xl md:text-4xl pb-1 pt-2 text-center text-[#093B3F] font-bold md:mb-5">{t(`inspektionsreise.inspektionsreise.listheading1`)}</h2>
                <ul role="list" className="list-disc pl-5 space-y-2">
                {
                    Array.from({length:5}).map((_, i) => (
                        <li key={i} className="text-[#093B3F] text-justify text-md md:text-lg"> • {t(`inspektionsreise.inspektionsreise.listitems1.${i}`)}</li>
                    ))
                    
                }
                <br></br>
                </ul>

                <h2 className="text-xl md:text-4xl pb-1 pt-2 text-center text-[#093B3F] font-bold md:mb-5">{t(`inspektionsreise.inspektionsreise.listheading2`)}</h2>
                <div className="w-[85vw] m-auto">
                {
                    Array.from({length:3}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`inspektionsreise.inspektionsreise.listitems2.${i}`)}</p>
                    ))
                }
                </div>

                <div className="w-[85vw] m-auto pb-2">
                {
                    Array.from({length:3}).map((_, i) => (
                        <p className="text-[#093B3F] text-justify text-md md:text-lg">{t(`inspektionsreise.inspektionsreise.paragraphs2.${i}`)}</p>
                    ))
                }
                </div>
            </div>
        
            <Ansprechpartner></Ansprechpartner>
            <Footer></Footer>
        </>
    )
}

export default Inspektionsreise;