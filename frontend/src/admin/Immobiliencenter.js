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

    const blobToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            if (file){
                const reader = new FileReader();

                reader.addEventListener("load", () => {
                    resolve(reader.result);
                })

                reader.addEventListener("error", (error) => {
                    reject(error);
                })

                reader.readAsDataURL(file);
            }
        })

    }

    const [imageUploadData, setImageUploadData] = useState({
        mapImage: null,
        titleImage: null,
        furtherImages: null
    })

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

    const convertImgURLToBase64 = async (fileURL) => {
        if(fileURL) return await blobToBase64(await (await fetch(fileURL)).blob());
    }

    const handleSave = async (e) => {
        const token = window.localStorage.getItem("token");

        let titleImage64, mapImage64, furtherImages64 = [];
        if(imageUploadData.titleImage) {
            titleImage64 = await convertImgURLToBase64(imageUploadData.titleImage[0]);
        }
        if(imageUploadData.mapImage){
            mapImage64 = await convertImgURLToBase64(imageUploadData.mapImage[0]);
        }

        if(imageUploadData.furtherImages){
            for (const value of imageUploadData.furtherImages){
                furtherImages64.push(await convertImgURLToBase64(value));
            }
        }

        try{
            const request = await fetch('/api/admin/saveNewImmoForm', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ titleImage64, mapImage64, furtherImages64, formData })
            })
            const res = await request.json();
            console.log(res.message);

        }catch(err){
            console.log(err);
        }
    }

    if(formActive){
        return (
            <>
                <h1>Immobiliencenter</h1>

                <h2>Objekte hinzufügen</h2>

                <AddImmoForm formData={formData} handleChange={handleChange} handleImageChange={handleImageChange} imageUploadData={imageUploadData}/>

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