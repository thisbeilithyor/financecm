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

            <div className="bg-[#f1f1f1] pt-20">
                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t(`inspektionsreise.inspektionsreise.heading1`)}</h2>
                {
                    Array.from({length:5}).map((_, i) => (
                        <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">{t(`inspektionsreise.inspektionsreise.paragraphs.${i}`)}</p>
                    ))
                }

                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t(`inspektionsreise.inspektionsreise.listheading1`)}</h2>
                {
                    Array.from({length:5}).map((_, i) => (
                        <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">{t(`inspektionsreise.inspektionsreise.listitems1.${i}`)}</p>
                    ))
                }

                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">{t(`inspektionsreise.inspektionsreise.listheading2`)}</h2>
                {
                    Array.from({length:3}).map((_, i) => (
                        <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">{t(`inspektionsreise.inspektionsreise.listitems2.${i}`)}</p>
                    ))
                }

                {
                    Array.from({length:3}).map((_, i) => (
                        <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">{t(`inspektionsreise.inspektionsreise.paragraphs2.${i}`)}</p>
                    ))
                }
            </div>
        
            <Ansprechpartner></Ansprechpartner>
            <Footer></Footer>
        </>
    )
}

export default Inspektionsreise;