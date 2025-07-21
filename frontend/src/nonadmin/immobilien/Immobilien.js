import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import ImmobilieItem from "../../ImmobilieItem.js";
import IslandGraphic from "../components/IslandGraphic.js";

import useGetImmos from "../../util/useGetImmos.js";
import { useState } from "react";
import RelevanteThemen from "../components/RelevanteThemen.js";

const Immobilien = () =>{
    const [immosData, setImmosData] = useState([]);

    const handleClick = () => {
        console.log("yeezy");
    }

    return(
    <>
        {useGetImmos(setImmosData)}
        {console.log(immosData)}
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