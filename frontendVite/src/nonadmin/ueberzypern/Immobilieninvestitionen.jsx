import { useTranslation } from "react-i18next";

const Immobilieninvestitionen = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold pt-3 pb-1">{t("ueberzypern.immobilieninvestitionen.heading")}</h2>
            <div className="w-[85vw] m-auto">
            {
                Array.from( {length: 5 }).map((_, i) => (
                    <p className="text-md md:text-lg text-[#093B3F] text-justify">{t(`ueberzypern.immobilieninvestitionen.paragraphs.${i}`)}</p>
                ))
            }
            </div>
        </>
    )
}

export default Immobilieninvestitionen;