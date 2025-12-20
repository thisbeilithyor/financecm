import { useTranslation } from "react-i18next";

const HaeufigeFragen = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
        <div className="bg-[#f1f1f1]">
            <h2 className="text-xl md:text-4xl text-center text-[#093B3F] font-bold md:mb-10 md:pt-10">{t("immobilien.haeufigeFragen.heading")}</h2>
            <div className="w-[85vw] m-auto pb-1">
            {
                Array.from({ length: 9 }).map((_, i) => (
                    <details key={i} className="text-[#093B3F] mb-2 md:mb-5">
                        <summary className="text-md md:text-lg lg:text-xl font-bold text-justify">{t(`immobilien.haeufigeFragen.faq.${i}.question`)}</summary>
                        <p className="text-md md:text-lg text-black mt-0.1 text-justify">{t(`immobilien.haeufigeFragen.faq.${i}.answer`)}</p>
                    </details>
            ))
            }
            </div>
        </div>
        </>
    )
}

export default HaeufigeFragen;