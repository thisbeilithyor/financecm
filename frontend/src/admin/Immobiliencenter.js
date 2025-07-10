import { useState } from "react";
import AddImmoForm from "./AddImmoForm";

const Immobiliencenter = () => {
    const [formActive, setFormActive] = useState(false);
    
    const initalFormState = {
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
    }
    const [formData, setFormData] = useState(initalFormState);

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const initalImageState = {
        mapImage: null,
        titleImage: null,
        furtherImages: null
    }

    const [imageUploadData, setImageUploadData] = useState(initalImageState);

    const handleImageChange = (e) => {
        const { name, value, type } = e.target;
        let images_to_add = [];
        for(let i=0; i<e.target.files.length; i++){
            images_to_add.push(URL.createObjectURL(e.target.files[i]));
        }

        setImageUploadData((prev) => ({
            ...prev,
            [name]: images_to_add
        }))
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const convertImgURLToBlob = async (fileURL) => {
        if(fileURL) return await (await fetch(fileURL)).blob();
    }

    const handleSave = async (e) => {
        const token = window.localStorage.getItem("token");

        const formDataContainer = new FormData();
        

        let titleImage, mapImage, furtherImages = [];
        if(imageUploadData.titleImage) {
            titleImage = await convertImgURLToBlob(imageUploadData.titleImage[0]);
            formDataContainer.append("titleImage", titleImage);
        }
        if(imageUploadData.mapImage){
            mapImage = await convertImgURLToBlob(imageUploadData.mapImage[0]);
            formDataContainer.append("mapImage", mapImage);
        }

        if(imageUploadData.furtherImages){
            for (const value of imageUploadData.furtherImages){
                const a = await convertImgURLToBlob(value);
                formDataContainer.append('furtherImages', a);
            }
        }

        formDataContainer.append('formData', JSON.stringify(formData));

        try{
        const request = await fetch('/api/admin/saveTitleImage', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formDataContainer
        })
        const res = await request.json();
        if(res.success){
            setFormData(initalFormState);
            setImageUploadData(initalImageState);
            setFormActive(false);
            setErrorMessage("");
            setSuccessMessage(res.message);
        }else{
            setErrorMessage(res.message);
        }
        }catch(err){
            console.log(err);
        }
    }

    if(formActive){
        return (
            <>
                <h1>Immobiliencenter</h1>

                <h2>Objekte hinzufügen</h2>
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}

                <AddImmoForm formData={formData} handleChange={handleChange} handleImageChange={handleImageChange} imageUploadData={imageUploadData}/>

                <button onClick={() => setFormActive(false)}>Abbruch</button>
                <button onClick={() => {setFormData(initalFormState); setImageUploadData(initalImageState)}}>Reset Formulareingaben</button>
                <button onClick={handleSave}>Speichern</button>
            </>
        )
    }
//TODO: Im frontend anzeigen (Achtung: am besten so, dass für User und Admin gleiche Funktionen benutzt werden)
//TODO: Bearbeiten von Datensätzen
//TODO: Löschen von Datensätzen
//TODO: Löschen einzelner Bilder während Formulareingabe möglich
    return (
        <>
        <h1>Immobiliencenter</h1>

        <button onClick={() => setFormActive(true)}>Neues Objekt hinzufügen</button>
        {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
        </>
    )
}

export default Immobiliencenter;