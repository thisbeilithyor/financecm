import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import ImmobilieItem from "../../ImmobilieItem.js";

import useGetImmos from "../../util/useGetImmos.js";
import { useState } from "react";

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
        <h1>Aktuelle Immobilien & Projekte in Nordzypern</h1>
        {immosData && 
        immosData.map((immo) => {
            return(
                <ImmobilieItem immo={immo} handleClick={handleClick}></ImmobilieItem>
            )
        })}
        <Footer></Footer>
    </>
    )
}

export default Immobilien;