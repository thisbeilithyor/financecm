import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Ansprechpartner from "./Ansprechpartner.js";
import IslandGraphic from "./IslandGraphic.js";
import EntdeckenShowcase from "./EntdeckenShowcase.js";
import RelevanteThemen from "./RelevanteThemen.js";
import Einstieg from "./Einstieg.js";

import "./index.css";

const Home = () => {
    return(
        <>
        <Navbar></Navbar>
        <Einstieg></Einstieg>
        <EntdeckenShowcase></EntdeckenShowcase>
        <RelevanteThemen></RelevanteThemen>
        <Ansprechpartner></Ansprechpartner>

        <IslandGraphic></IslandGraphic>
        <Footer></Footer> 
        </>
    )
}

export default Home;