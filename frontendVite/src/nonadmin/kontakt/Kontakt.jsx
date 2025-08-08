import Navbar from "../components/Navbar.jsx";
import IslandGraphic from "../components/IslandGraphic.jsx";
import Ansprechpartner from "../components/Ansprechpartner.jsx";
import Footer from "../components/Footer.jsx";
import KontaktForm from "./KontaktForm.jsx";


import { useState } from "react";

const Kontakt = () => {
    const initialFormData = {
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    }

    const [form, setForm] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSave = async () => {
        try{
            console.log(form);
            const request = await fetch('/api/customerRequest/createCustomerRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            const res = await request.json();
            if(res.status === 200){
                setErrorMessage("");
                setSuccessMessage(res.message);
            }else{
                setErrorMessage(res.message);
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <Navbar></Navbar>

            <div
                className="fixed inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                style={{ backgroundImage: "url('bgkontakt.webp')" }}
            ></div>
            <div className="relative flex flex-col items-center justify-center h-100 row bg-[rgba(0,0,0,0.4)]">
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">Wir freuen uns von Ihnen zu hören</h1>
                <h3 className="text-2xl text-center text-white font-bold mt-3">Kontakt für Immobilien in Nordzypern</h3>
            </div>

            <div className="flex justify-center bg-[#093B3F] pt-40 space-x-8">
                <div className="flex flex-col w-[10vw]">
                    <center><img className="!border-none" src="phone.svg"></img></center>
                    <center><p className="text-white text-lg">+49 172 77 45656</p></center>
                </div>
                <div className="flex flex-col w-[10vw]">
                    <center><img className="!border-none" src="location.svg"></img></center>
                    <center><p className="text-white text-lg">Manchingerstr. 10, 85053 Ingolstadt</p></center>
                </div>
                <div className="flex flex-col w-[10vw]">
                    <center><img className="!border-none" src="mail.svg"></img></center> 
                    <center><p className="text-white text-lg">meier-finanz@gmx.de</p></center>
                </div>
            </div>
            

            <IslandGraphic isWhite={true}></IslandGraphic>

            <div className="bg-[#093B3F]">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">Interesse geweckt?</h2>
                <h3 className="text-2xl text-center text-white font-bold mt-3">Melden Sie sich bei uns!</h3>
            </div>
        
            <KontaktForm form={form} handleChange={handleChange} handleSave={handleSave}></KontaktForm>

            <div className="bg-[#093B3F]">
                {successMessage && <p className="text-white">{successMessage}</p>}
                {errorMessage && <p className="text-white">{errorMessage}</p>}
            </div>
            <Ansprechpartner></Ansprechpartner>

            <Footer></Footer>
        </>
    )
}

export default Kontakt;