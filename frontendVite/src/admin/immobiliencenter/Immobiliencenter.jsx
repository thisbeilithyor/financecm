import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AddImmoForm from "./AddImmoForm.jsx";
import { inital_admin_newImmoFormData, initial_admin_newImmoFormImages } from "../../initalFormStates/initalFormStates.js";
import { convertImgURLToBlob } from "../../util/convertImgURLToBlob.js";
import ImmobilieItem from "../../general-components/ImmobilieItem.jsx";
import "./immobiliencenter.css";

const Immobiliencenter = () => {
    const [formActive, setFormActive] = useState(false);
    const [formData, setFormData] = useState(inital_admin_newImmoFormData);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [imageUploadData, setImageUploadData] = useState(initial_admin_newImmoFormImages);
    const [immoRedirect, setImmoRedirect] = useState(false);
    const [immoRedirectONr, setImmoRedirectONr] = useState(0);

    const [immosData, setImmosData] = useState([]);

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

    const handleSave = async (e) => {
        const token = window.localStorage.getItem("token");
        const formDataContainer = new FormData();
        
        if(imageUploadData.titleImage) {
            const titleImage = await convertImgURLToBlob(imageUploadData.titleImage[0]);
            formDataContainer.append("titleImage", titleImage);
        }
        if(imageUploadData.mapImage){
            const mapImage = await convertImgURLToBlob(imageUploadData.mapImage[0]);
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
            const request = await fetch('/api/immo/createImmo', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataContainer
            })
            const res = await request.json();
            if(res.success){
                setFormData(inital_admin_newImmoFormData);
                setImageUploadData(initial_admin_newImmoFormImages);
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

    useEffect(() => {
        const request = async () => {
            const response = await fetch('/api/immo/getImmos',  {
                method: 'GET',
                headers: {
                    'Accept-Content': 'application/json'
                }
            })
            const res = await response.json();
            setImmosData(res);
        }
        request();
    }, [formActive]);

    //handleClick of a immoItem
    const handleClick = (e, objectnr) =>{
        setImmoRedirectONr(objectnr);
        setImmoRedirect(true)
    }

    if(immoRedirect){
        return (
            <Navigate to={`/admin/immobiliencenter/${immoRedirectONr}`} />
        )
    }

    if(formActive){
        return (
            <>
                <h1 className="text-2xl text-center text-[#093B3F] font-bold md:mb-5">Immobiliencenter</h1>

                <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-5">Objekte hinzufügen</h2>
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}

                <AddImmoForm formData={formData} handleChange={handleChange} handleImageChange={handleImageChange} imageUploadData={imageUploadData}/>

                <div id="flex justify-center gap-x-4 w-[60vw] m-auto pt-3">
                    <button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg" onClick={handleSave}>Speichern</button>
                    <button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg" onClick={() => setFormActive(false)}>Abbruch</button>
                    <button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg" onClick={() => {setFormData(inital_admin_newImmoFormData); setImageUploadData(initial_admin_newImmoFormImages)}}>Reset Formulareingaben</button>
                </div>
            </>
        )
    }
//TODO: Bearbeiten von Datensätzen
//TODO: Löschen von Datensätzen
//TODO: Löschen einzelner Bilder während Formulareingabe möglich
    return (
        <>
        <h1 className="text-2xl text-center text-[#093B3F] font-bold md:mb-5">Immobiliencenter</h1>

        <center><button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg" onClick={() => setFormActive(true)}>Neues Objekt hinzufügen</button></center>
        {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}

        {immosData &&
        immosData.map((immo) => {
            return (
                <ImmobilieItem immo={immo} handleClick={handleClick}/>
            )
        })
        }
        </>
    )
}

export default Immobiliencenter;