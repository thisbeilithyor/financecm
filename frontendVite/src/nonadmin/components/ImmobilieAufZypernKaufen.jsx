import { useTranslation } from "react-i18next";

const ImmobilieAufZypernKaufen = () => {
    const { t, i18n } = useTranslation();

    return ( 
        <>
        <div className="bg-[#f1f1f1]">
            <h2 className="text-[#093B3F] font-bold text-xl md:text-4xl pb-5 pl-1 pr-1 text-center">{t("components.immobilieAufZypernKaufen.heading")}</h2>
            {
                Array.from( {length: 8} ).map((_, i) => (
                    <p className="w-[85vw] text-md md:text-lg text-black text-justify m-auto pt-1">{t(`components.immobilieAufZypernKaufen.texts.${i}`)}</p>
                ))
            }
        </div>
        </>
    )
}

export default ImmobilieAufZypernKaufen;