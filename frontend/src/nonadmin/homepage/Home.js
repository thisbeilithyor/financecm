import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Ansprechpartner from "../components/Ansprechpartner.js";
import IslandGraphic from "../components/IslandGraphic.js";
import EntdeckenShowcase from "./EntdeckenShowcase.js";
import RelevanteThemen from "../components/RelevanteThemen.js";
import Einstieg from "./Einstieg.js";
import ZweiBilder from "./ZweiBilder.js";

import "../index.css";

const Home = () => {
    return(
        <>
        <Navbar></Navbar>
        <Einstieg></Einstieg>
        <EntdeckenShowcase></EntdeckenShowcase>
        <RelevanteThemen></RelevanteThemen>
        <IslandGraphic></IslandGraphic>

        <ZweiBilder></ZweiBilder>

        <Ansprechpartner></Ansprechpartner>

        <Footer></Footer> 
        </>
    )
}

export default Home;