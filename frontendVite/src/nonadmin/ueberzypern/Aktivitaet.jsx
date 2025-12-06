import { useTranslation } from "react-i18next";

const Aktivitaet = () => {
    const { t, i18n } = useTranslation();

    return ( 
        <>
            <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-10 md:mt-10">{t("ueberzypern.aktivitaet.heading")}</h2>
            {
                Array.from( {length: 5} ).map((_, i) => (
                    <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">{t(`ueberzypern.aktivitaet.paragraphs.${i}`)}</p>
                ))
            }
        </>
    )
}

export default Aktivitaet;