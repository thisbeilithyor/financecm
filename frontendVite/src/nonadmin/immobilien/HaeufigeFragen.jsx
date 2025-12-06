import { useTranslation } from "react-i18next";

const HaeufigeFragen = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
        <div className="bg-[#f1f1f1]">
            <h2 className="text-4xl text-center text-[#093B3F] font-bold md:mb-10 md:pt-10">{t("immobilien.haeufigeFragen.heading")}</h2>
            {
                Array.from({ length: 9 }).map((_, i) => (
                    <details key={i} className="ml-50 mr-50 max-md:ml-10 max-md:mr-10 text-[#093B3F] md:mb-5">
                        <summary className="font-bold text-2xl">{t(`immobilien.haeufigeFragen.faq.${i}.question`)}</summary>
                        <p className="text-black text-lg mt-5">{t(`immobilien.haeufigeFragen.faq.${i}.answer`)}</p>
                    </details>
            ))
            }
        </div>
        </>
    )
}

export default HaeufigeFragen;