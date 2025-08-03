import Navbar from "../components/Navbar.js";
import IslandGraphic from "../components/IslandGraphic.js";
import Ansprechpartner from "../components/Ansprechpartner.js";
import Footer from "../components/Footer.js";
import KontaktForm from "./KontaktForm.js";


import { useState } from "react";

const Kontakt = () => {
    let initialFormData = {
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    }

    const [form, setForm] = useState(initialFormData);

    const handleChange = (e) => {

    }

    return (
        <>
            <Navbar></Navbar>
            <img src="bgkontakt.webp"></img>
            <h1>Wir freuen uns von Ihnen zu hören</h1>
            <h3>Kontakt für Immobilien in Nordzypern</h3>

            <img src="phone.svg"></img>
            <p>+49 172 77 45656</p>
            <img src="location.svg"></img>
            <p>Manchingerstr. 10, 85053 Ingolstadt</p>
            <img src="mail.svg"></img>   
            <p>meier-finanz@gmx.de</p>

            <IslandGraphic></IslandGraphic>

            <h2>Interesse geweckt?</h2>
            <h3>Melden Sie sich bei uns!</h3>

            <KontaktForm form={form} handleChange={handleChange}></KontaktForm>

            <Ansprechpartner></Ansprechpartner>

            <Footer></Footer>
        </>
    )
}

export default Kontakt;