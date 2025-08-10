import { useState } from "react";
import Navbar from "../components/Navbar.jsx";


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
            
            <div className="bg-[#093B3F] mt-0 py-8">
            <h1 className="text-white text-3xl font-bold text-center mb-8">Immobilie Checklist</h1>

            <form className="space-y-6 w-[60vw] m-auto">
                {/* 1. Persönliche Daten */}
                <h2 className="text-white text-xl font-semibold">1. Persönliche Daten</h2>

                <label className="block text-white mb-1">Vor- und Nachname</label>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"
                />

                <label className="block text-white mb-1">Telefonnummer</label>
                <input
                type="text"
                name="phonenumber"
                value={form.phonenumber}
                onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"
                />

                <label className="block text-white mb-1">E-Mail-Adresse</label>
                <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"
                />

                {/* 2. Angaben zur Immobilie */}
                <h2 className="text-white text-xl font-semibold">2. Angaben zur Immobilie</h2>
                <div className="space-y-2">
                {immo_options.map((option) => (
                    <label key={option} className="flex items-center space-x-2 text-white">
                    <input
                        type="radio"
                        name="immobilientyp"
                        value={option}
                        checked={form.immobilientyp === option}
                        onChange={handleChange}
                        className="accent-[#093B3F] w-5 h-5"
                    />
                    <span>{option}</span>
                    </label>
                ))}
                </div>

                {/* 3. Geplanter Kaufzeitraum */}
                <h2 className="text-white text-xl font-semibold">3. Geplanter Kaufzeitraum</h2>
                <div className="space-y-2">
                {kaufzeitraum_options.map((option) => (
                    <label key={option} className="flex items-center space-x-2 text-white">
                    <input
                        type="radio"
                        name="kaufzeitraum"
                        value={option}
                        checked={form.kaufzeitraum === option}
                        onChange={handleChange}
                        className="accent-[#093B3F] w-5 h-5"
                    />
                    <span>{option}</span>
                    </label>
                ))}
                </div>

                <button
                type="button"
                onClick={handleSave}
                className="w-full border border-white rounded-full px-3 py-2 text-[#093B3F] bg-white text-lg font-semibold hover:bg-gray-100 transition"
                >
                Anfrage Absenden
                </button>
            </form>
            </div>

        </>
    )
}

export default Checklist;