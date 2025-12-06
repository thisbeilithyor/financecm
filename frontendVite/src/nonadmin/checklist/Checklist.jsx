import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useTranslation } from "react-i18next";

const Checklist = () => {

    const { t, i18n } = useTranslation();

    const initalForm = {
        name: "",
        phonenumber: "",
        email: "",
        immobilientyp: "",
        kaufzeitraum: ""
    }
    const immo_options = Array.from({ length: 6 }, (_, i) =>
        t(`checklist.checklist.immo_options.${i}`)
    );

    const kaufzeitraum_options = Array.from({ length: 3 }, (_, i) => 
        t(`checklist.checklist.kaufzeitraum_options.${i}`)  
    );

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
            <h1 className="text-white text-3xl font-bold text-center mb-8">{t("checklist.checklist.heading")}</h1>

            <form className="space-y-6 w-[60vw] m-auto">
                {/* 1. Persönliche Daten */}
                <h2 className="text-white text-xl font-semibold">{t("checklist.checklist.sections.0.title")}</h2>

                <label className="block text-white mb-1">{t("checklist.checklist.sections.0.fields.0.label")}</label>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"
                />

                <label className="block text-white mb-1">{t("checklist.checklist.sections.0.fields.1.label")}</label>
                <input
                type="text"
                name="phonenumber"
                value={form.phonenumber}
                onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"
                />

                <label className="block text-white mb-1">{t("checklist.checklist.sections.0.fields.2.label")}</label>
                <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"
                />

                {/* 2. Angaben zur Immobilie */}
                <h2 className="text-white text-xl font-semibold">{t("checklist.checklist.sections.1.title")}</h2>
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
                <h2 className="text-white text-xl font-semibold">{t("checklist.checklist.sections.2.title")}</h2>
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
                {t("checklist.checklist.button")}
                </button>
            </form>
            </div>

        </>
    )
}

export default Checklist;