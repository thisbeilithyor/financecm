import { useState } from "react";
import AddImmoForm from "./AddImmoForm";

const Immobiliencenter = () => {
    const [formActive, setFormActive] = useState(false);
   
    const [formData, setFormData] = useState({
        objectnr: 0,
        city: "",
        description: "",
        house: true,
        price: 0,
        squareMeters: 0,
        bathroom: true,
        supermarket: true,
        electricity: true,
        water: true,
        pool: true,
        garden: true,
        atOcean: true,
        paymentDuration: 0,
        buildingFinished: "01.2026",
        uberDasProjekt: "",
        uberStandort: ""
    });

    const [mapImage, setMapImage] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSave = (e) => {
        const token = window.localStorage.getItem("token");
        try{
            fetch('/api/saveNewImmoForm', {
                method: 'POST',
                headers: {
                    'Authentification': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then((rawRes) => {
                console.log(rawRes);
            })
        }catch(err){
            console.log(err);
        }
    }

    if(formActive){
        return (
            <>
                <h1>Immobiliencenter</h1>

                <h2>Objekte hinzufügen</h2>

                <AddImmoForm formData={formData} handleChange={handleChange} setMapImage={setMapImage}/>

                <button onClick={() => setFormActive(false)}>Abbruch</button>
                <button onClick={handleSave}>Speichern</button>
            </>
        )
    }

    return (
        <>
        <h1>Immobiliencenter</h1>

        <button onClick={() => setFormActive(true)}>Neues Objekt hinzufügen</button>
        </>
    )
}

export default Immobiliencenter;