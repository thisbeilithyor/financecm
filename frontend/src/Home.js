import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Ansprechpartner from "./Ansprechpartner.js";
import IslandGraphic from "./IslandGraphic.js";
import EntdeckenShowcase from "./EntdeckenShowcase.js";
import RelevanteThemen from "./RelevanteThemen.js";

import "./index.css";

const Home = () => {
    return(
        <>
        <Navbar></Navbar>
        <Ansprechpartner></Ansprechpartner>
        <EntdeckenShowcase></EntdeckenShowcase>
        <RelevanteThemen></RelevanteThemen>
        <IslandGraphic></IslandGraphic>
        <Footer></Footer> 
        </>
    )
}

export default Home;