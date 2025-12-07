import { useTranslation } from "react-i18next";

export const Sprachauswahl = () => {
    const { i18n } = useTranslation();

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <>
            <select
                onChange={handleChange}
                defaultValue={i18n.language}
                className="border px-3 py-1 rounded-md"
            >
                <option value="de">Deutsch</option>
                <option value="en">English</option>
                <option value="ru">Русский</option>
            </select>
        </>
    )
}

export default Sprachauswahl;