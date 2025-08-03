import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ImmobilieItem from "../../general-components/ImmobilieItem.js";
import IslandGraphic from "../components/IslandGraphic.js";

import useGetImmos from "../../util/useGetImmos.js";
import { useState } from "react";
import RelevanteThemen from "../components/RelevanteThemen.js";

import { useNavigate } from "react-router-dom";

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

    console.log(weitereImmos);

    const handleClick = (e, objectnr) => {
        navigate('/immobilien/'+objectnr, { state: {weitereImmos} });
    }
    
    return(
    <>
        {useGetImmos(setImmosData)}
        <Navbar></Navbar>
        <center><h1 className="firstHeading">Aktuelle Immobilien & Projekte in Nordzypern</h1></center>
        {immosData && 
        immosData.map((immo) => {
            return(
                <ImmobilieItem immo={immo} handleClick={handleClick}></ImmobilieItem>
            )
        })}
        <IslandGraphic></IslandGraphic>
        <RelevanteThemen></RelevanteThemen>
        <Footer></Footer>
    </>
    )
}

export default Immobilien;