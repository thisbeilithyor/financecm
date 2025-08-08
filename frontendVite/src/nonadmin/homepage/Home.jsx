import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Ansprechpartner from "../components/Ansprechpartner.jsx";
import IslandGraphic from "../components/IslandGraphic.jsx";
import EntdeckenShowcase from "./EntdeckenShowcase.jsx";
import RelevanteThemen from "../components/RelevanteThemen.jsx";
import Einstieg from "./Einstieg.jsx";
import ZweiBilder from "./ZweiBilder.jsx";
import Bewertungen from "./Bewertungen.jsx";


const Home = () => {
    return(
        <>
        <Navbar></Navbar>
        <Einstieg></Einstieg>
        <EntdeckenShowcase></EntdeckenShowcase>
        <RelevanteThemen></RelevanteThemen>
        <IslandGraphic></IslandGraphic>


        <ZweiBilder></ZweiBilder>
        <Bewertungen></Bewertungen>
        

        <Ansprechpartner></Ansprechpartner>

        <Footer></Footer> 
        </>
    )
}

export default Home;