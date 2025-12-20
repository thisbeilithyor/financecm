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
import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import Filter from "./Filter.jsx";
import { FilterState } from "./FilterState.js";


const Immobilien = () =>{
    const [immosData, setImmosData] = useState([]);
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const [filterState, setFilterState] = useState(FilterState);
    const [invokeAPIRequest, setInvokeAPIRequest] = useState(false);

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

    const applyFilter = () => {
        setInvokeAPIRequest(!invokeAPIRequest);
    }
    
    return(
    <>
        {useGetImmos(setImmosData, i18n.language, filterState, invokeAPIRequest)}
        
        <Navbar></Navbar>
        <div className="bg-[#f1f1f1] pt-2">
        <Filter setFilterState={setFilterState} filterState={filterState} applyFilter={applyFilter}></Filter>
        <center><h1 className="text-xl md:text-4xl text-[#093B3F] font-bold pb-4 md:pb-10 pl-1 pr-1 pt-3">{t("immobilien.immobilien.heading")}</h1></center>
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