import { useTranslation } from "react-i18next";

const KontaktForm = ({form, handleChange, handleSave}) => {
    const { t, i18n } = useTranslation();

    return ( 
        <>
            <div className="bg-[#093B3F] mt-0">
            <form className="space-y-4 w-[85vw] md:w-[60vw] m-auto">
                <label className="block text-white mb-1">{t("contact.kontaktForm.labels.name")}</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"></input>

                <label className="block text-white mb-1">{t("contact.kontaktForm.labels.email")}</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} 
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"></input>

                <label className="block text-white mb-1">{t("contact.kontaktForm.labels.phoneNumber")}</label>
                <input type="text" name="phonenumber" value={form.phonenumber} onChange={handleChange}
                className="w-full border border-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"></input>

                <label className="block text-white mb-1">{t("contact.kontaktForm.labels.message")}</label>
                <textarea type="" name="message" value={form.message} onChange={handleChange}
                className="w-full h-40 border border-white rounded-[2vw] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-white"></textarea>

                <button className="w-full border border-white rounded-full px-3 py-2 text-[#093B3F] bg-white text-lg" type="button" onClick={handleSave}>{t("contact.kontaktForm.button")}</button>
            </form>

           <hr className="md:hidden mt-5 border-white"></hr>
            </div>
        </>
    )
}

export default KontaktForm;