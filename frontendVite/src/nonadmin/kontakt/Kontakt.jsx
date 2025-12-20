import Navbar from "../components/Navbar.jsx";
import IslandGraphic from "../components/IslandGraphic.jsx";
import Ansprechpartner from "../components/Ansprechpartner.jsx";
import Footer from "../components/Footer.jsx";
import KontaktForm from "./KontaktForm.jsx";


import { useState } from "react";
import { useTranslation } from "react-i18next";

const Kontakt = () => {
    const { t, i18n } = useTranslation();

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
            <div className="relative flex flex-col items-center justify-center h-100 md:h-150 row bg-[rgba(0,0,0,0.4)]">
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">{t("contact.kontakt.mainHeading")}</h1>
                <h3 className="text-2xl text-center text-white font-bold mt-3">{t("contact.kontakt.subHeading")}</h3>
            </div>

            <div className="md:flex justify-between md:justify-center bg-[#093B3F] pt-5 md:pt-40 md:space-x-10">
                <a href="https://wa.me/491727745656" target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-center items-center md:flex-col md:w-[25vw]">
                        <center><img className="!border-none w-[10vw] md:w-[8vw] mr-5 " src="phone.svg"></img></center>
                        <center><p className="text-white text-s md:text-lg">+49 172 77 45656</p></center>
                    </div>
                </a>
                <div className="flex justify-center items-center md:flex-col md:w-[25vw] mt-3">
                    <center><img className="!border-none w-[10vw] md:w-[8vw] mr-1" src="location.svg"></img></center>
                    <center><p className="text-white text-s md:text-lg">Manchingerstr. 10, 85053 Ingolstadt</p></center>
                </div>
                <a href="mailto:meier-finanz@gmx.de">
                <div className="flex justify-center items-center md:flex-col md:w-[25vw] mt-3">
                        <center><img className="!border-none w-[10vw] md:w-[8vw] mr-2" src="mail.svg"></img></center> 
                        <center><p className="text-white text-x md:text-lg">meier-finanz@gmx.de</p></center>
                </div>
                </a>
            </div>
            

            <IslandGraphic isWhite={true}></IslandGraphic>

            <div className="bg-[#093B3F]">
                <h2 className="text-white text-2xl md:text-4xl font-bold text-center drop-shadow-lg">{t("contact.kontakt.interestHeading")}</h2>
                <h3 className="text-xl md:text-2xl text-center text-white font-bold mt-3">{t("contact.kontakt.interestSubHeading")}</h3>
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