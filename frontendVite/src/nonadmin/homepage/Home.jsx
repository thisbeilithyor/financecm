import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Ansprechpartner from "../components/Ansprechpartner.jsx";
import IslandGraphic from "../components/IslandGraphic.jsx";
import EntdeckenShowcase from "./EntdeckenShowcase.jsx";
import RelevanteThemen from "../components/RelevanteThemen.jsx";
import Einstieg from "./Einstieg.jsx";
import ZweiBilder from "./ZweiBilder.jsx";
import Checkliste from "../components/Checkliste.jsx";
import Bewertungen from "./Bewertungen.jsx";

import SocialMediaAnbindung from "../components/SocialMediaAnbindung.jsx";

const Home = () => {
    return(
        <>
        <Navbar></Navbar>
        <Einstieg></Einstieg>
        <EntdeckenShowcase></EntdeckenShowcase>
        <RelevanteThemen></RelevanteThemen>
        <Bewertungen></Bewertungen>
        <IslandGraphic></IslandGraphic>

        <ZweiBilder></ZweiBilder>

        <Ansprechpartner></Ansprechpartner>
        <Checkliste></Checkliste>
        <SocialMediaAnbindung></SocialMediaAnbindung>

        <Footer></Footer> 
        </>
    )
}

export default Home;