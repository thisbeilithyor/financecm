import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ImmobilieItem from "../../general-components/ImmobilieItem.jsx";
import IslandGraphic from "../components/IslandGraphic.jsx";
import VorteileEinerImmobilie from "../components/VorteileEinerImmobilie.jsx";
import ImmobilieAufZypernKaufen from "../components/ImmobilieAufZypernKaufen.jsx";
import HaeufigeFragen from "./HaeufigeFragen.jsx";

import useGetImmos from "../../util/useGetImmos.js";
import { useState } from "react";
import RelevanteThemen from "../components/RelevanteThemen.jsx";
import { useNavigate } from "react-router-dom";
import Ansprechpartner from "../components/Ansprechpartner.jsx";

const Immobilien = () =>{
    const [immosData, setImmosData] = useState([]);
    const navigate = useNavigate();


    let weitereImmos = [];
    let counter = 0;
    for(const immo of immosData){
        weitereImmos.push(immo);
        counter++;
        if(counter >= 3) {
            break;
        }
    }

    const handleClick = (e, objectnr) => {
        navigate('/immobilien/'+objectnr, { state: {weitereImmos} });
    }
    
    return(
    <>
        {useGetImmos(setImmosData)}
        <Navbar></Navbar>
        <div className="bg-[#f1f1f1]">
        <center><h1 className="text-[#093B3F] font-bold text-4xl pb-10 max-md:text-xl max-md:pl-1 max-md:pr-1 pt-5">Aktuelle Immobilien & Projekte in Nordzypern</h1></center>
        {immosData && 
        immosData.map((immo) => {
            return(
                <ImmobilieItem immo={immo} handleClick={handleClick}></ImmobilieItem>
            )
        })}
        </div>
        <IslandGraphic></IslandGraphic>
        <VorteileEinerImmobilie></VorteileEinerImmobilie>

        <IslandGraphic></IslandGraphic>

        <ImmobilieAufZypernKaufen></ImmobilieAufZypernKaufen>

        <HaeufigeFragen></HaeufigeFragen>

        <IslandGraphic></IslandGraphic>

        <RelevanteThemen></RelevanteThemen>

        <Ansprechpartner />
        <Footer></Footer>
    </>
    )
}

export default Immobilien;