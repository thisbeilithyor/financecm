import { useTranslation } from "react-i18next";

const Infrastruktur = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold pb-1">{t("ueberzypern.infrastruktur.heading")}</h2>
            <div className="w-[85vw] m-auto">
            {
                Array.from( {length: 6} ).map((_, i) => (
                    <p className="text-md md:text-lg text-[#093B3F] text-justify">{t(`ueberzypern.infrastruktur.paragraphs.${i}`)}</p>
                ))
            }
            </div>
        </>
    )
}

export default Infrastruktur;