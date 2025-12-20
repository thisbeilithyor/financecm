import { useTranslation } from "react-i18next";

const Natur = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h2 className="text-xl md:text-4xl pt-3 pb-1 text-center text-[#093B3F] font-bold md:mb-10">{t("ueberzypern.natur.heading")}</h2>
            <div className="w-[85vw] m-auto">
            {
                Array.from( {length: 7 }).map((_, i) => (
                    <p className="text-md md:text-lg text-[#093B3F] text-justify ">{t(`ueberzypern.natur.paragraphs.${i}`)}</p>
                ))
            }
            </div>
        </>
    )
}

export default Natur;