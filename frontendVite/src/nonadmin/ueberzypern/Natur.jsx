import { useTranslation } from "react-i18next";

const Natur = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-10">{t("ueberzypern.natur.heading")}</h2>
            {
                Array.from( {length: 7 }).map((_, i) => (
                    <p className="md:ml-50 md:mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] text-justify text-lg">{t(`ueberzypern.natur.paragraphs.${i}`)}</p>
                ))
            }
        </>
    )
}

export default Natur;