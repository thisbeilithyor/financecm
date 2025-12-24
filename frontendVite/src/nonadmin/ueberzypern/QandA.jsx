import { useTranslation } from "react-i18next";

const QandA = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <h2 className="text-xl md:text-4xl pt-2 pb-1 text-center text-[#093B3F] font-bold md:mb-3 md:mt-10">{t("ueberzypern.QandA.heading")}</h2>
            <div className="w-[85vw] m-auto pb-1">
            { 
                Array.from( {length: 10 }).map((_, i) => (
                    <details key={i} className="text-[#093B3F] mb-2">
                        <summary className="text-md md:text-lg lg:text-lg font-bold text-justify">{t(`ueberzypern.QandA.faqs.${i}.question`)}</summary>
                        <p className="text-black text-md md:text-lg mt-0.25 text-justify">{t(`ueberzypern.QandA.faqs.${i}.answer`)}</p>
                    </details>
                ))
            }
            </div>
        </>
    )
}

export default QandA;