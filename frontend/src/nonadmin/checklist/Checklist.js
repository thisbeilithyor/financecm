import { useState } from "react";
import Navbar from "../components/Navbar.js";


const Checklist = () => {
    const initalForm = {
        name: "",
        phonenumber: "",
        email: "",
        immobilientyp: "",
        kaufzeitraum: ""
    }

    const immo_options = [
        "Wohnung",
        "Villa",
        "Reihenhaus",
        "Haus",
        "Grundstück",
        "Gewerbeimmobilie (Büro, Geschäft etc.)"
    ]

    const kaufzeitraum_options = [
        "Dringend (innerhalb der nächsten 1-3 Monate)",
        "Innerhalb von 6 Monaten",
        "Langfristig (1 Jahr oder mehr)"
    ]

    const [form, setForm] = useState(initalForm);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSave = async() => {
        const res = await fetch('/api/checklist/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        console.log(await res.json());
    }


    return ( 
        <>
            <Navbar></Navbar>
            <h1>Immobilie Checklist</h1>

            <form>
                <h2>1. Persönliche Daten</h2>
                <label>Vor- und Nachname</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}></input>

                <label>Telefonnummer</label>
                <input type="text" name="phonenumber" value={form.phonenumber} onChange={handleChange}></input>

                <label>E-Mail-Adresse</label>
                <input type="text" name="email" value={form.email} onChange={handleChange}></input>

                <h2>2. Angaben zur Immobilie</h2>
                {immo_options.map((option) => (
                    <label key={option} style={{ display: "block", margin: "8px 0" }}>
                    <input
                        type="radio"
                        name="immobilientyp"
                        value={option}
                        checked={form.immobilientyp === option}
                        onChange={handleChange}
                    />
                    {option}
                    </label>
                ))}


                <h2>3. Geplanter Kaufzeitraum</h2>
                {kaufzeitraum_options.map((option) => (
                    <label key={option} style={{ display: "block", margin: "8px 0" }}>
                    <input
                        type="radio"
                        name="kaufzeitraum"
                        value={option}
                        checked={form.kaufzeitraum === option}
                        onChange={handleChange}
                    />
                    {option}
                    </label>
                ))}

                <button type="button" onClick={handleSave}>Anfrage Absenden</button>
            </form>
        </>
    )
}

export default Checklist;