import IslandGraphic from "../components/IslandGraphic.jsx";
import RelevanteThemen from "../components/RelevanteThemen.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Ansprechpartner from "../components/Ansprechpartner.jsx";
import Natur from "./Natur.jsx";
import Aktivitaet from "./Aktivitaet.jsx";
import Nachleben from "./Nachtleben.jsx";
import Infrastruktur from "./Infrastruktur.jsx";
import Immobilieninvestitionen from "./Immobilieninvestitionen.jsx";
import QandA from "./QandA.jsx";
import HeaderRelevanteThemen from "../components/HeaderRelevanteThemen.jsx";
import { useTranslation } from "react-i18next";

const UeberZypern = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navbar></Navbar>
            <HeaderRelevanteThemen url="./bgueberzypern.webp" head1={t("ueberzypern.ueberZypern.head1")} head2={t("ueberzypern.ueberZypern.head2")}></HeaderRelevanteThemen>

            <div className="relative bg-[#f1f1f1] md:mt-10 md:pt-10">            


            <Natur></Natur>   

            <Aktivitaet></Aktivitaet>  

            <div className="flex justify-center items-center px-4 pt-5 md:pt-10 pb-10">
                <img className="min-w-[350px] h-[350px] object-cover mx-2 !border-0 !border-transparent !rounded-2xl" src="relImg3.webp"></img>     
                <img className="min-w-[350px] h-[350px] object-cover mx-2 !border-0 !border-transparent !rounded-2xl" src="showImg1.webp"></img>
                <img className="min-w-[350px] h-[350px] object-cover mx-2 !border-0 !border-transparent !rounded-2xl" src="boat.webp"></img>
            </div>

           <Nachleben/>


            <IslandGraphic></IslandGraphic>
            <RelevanteThemen></RelevanteThemen>
            <IslandGraphic></IslandGraphic>

            <Infrastruktur/>

            <Immobilieninvestitionen/>

            <QandA/>
                  
            </div>

            <Ansprechpartner></Ansprechpartner>    
            <Footer></Footer>  
        </>
    )
}

export default UeberZypern;