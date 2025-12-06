import { useTranslation } from "react-i18next";

const Infrastruktur = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-10 md:mt-10">{t("ueberzypern.infrastruktur.heading")}</h2>
            {
                Array.from( {length: 6} ).map((_, i) => (
                    <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">{t(`ueberzypern.infrastruktur.paragraphs.${i}`)}</p>
                ))
            }
        </>
    )
}

export default Infrastruktur;