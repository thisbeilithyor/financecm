import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Ansprechpartner from "./Ansprechpartner.js";
import IslandGraphic from "./IslandGraphic.js";
import "./index.css";

const Home = () => {
    return(
        <>
        <Navbar></Navbar>
        <Ansprechpartner></Ansprechpartner>
        <p>this is home</p>
        <IslandGraphic></IslandGraphic>
        <Footer></Footer> 
        </>
    )
}

export default Home;