import { useTranslation } from "react-i18next";

const QandA = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-10 md:mt-10">{t("ueberzypern.QandA.heading")}</h2>
            { 
                Array.from( {length: 10 }).map((_, i) => (
                    <details key={i} className="ml-50 mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] md:mb-5">
                        <summary className="font-bold text-2xl">{t(`ueberzypern.QandA.faqs.${i}.question`)}</summary>
                        <p className="text-black text-lg mt-5">{t(`ueberzypern.QandA.faqs.${i}.answer`)}</p>
                    </details>
                ))
            }
        </>
    )
}

export default QandA;