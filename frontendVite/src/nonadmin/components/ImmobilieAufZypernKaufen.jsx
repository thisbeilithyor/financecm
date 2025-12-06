import { useTranslation } from "react-i18next";

const ImmobilieAufZypernKaufen = () => {
    const { t, i18n } = useTranslation();

    return ( 
        <>
        <div className="bg-[#f1f1f1]">
            <h2 className="text-[#093B3F] font-bold text-4xl pb-10 max-md:text-xl max-md:pl-1 max-md:pr-1 pt-5 text-center">{t("components.immobilieAufZypernKaufen.heading")}</h2>
            {
                Array.from( {length: 8} ).map((_, i) => (
                    <p className="w-[75vw] text-lg text-black text-justify m-auto pt-5">{t(`components.immobilieAufZypernKaufen.texts.${i}`)}</p>
                ))
            }
        </div>
        </>
    )
}

export default ImmobilieAufZypernKaufen;