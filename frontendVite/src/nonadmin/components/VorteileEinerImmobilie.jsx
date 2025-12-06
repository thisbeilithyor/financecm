import { useTranslation } from "react-i18next";

const VorteileEinerImmobilie = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="bg-[#f1f1f1]">
            <center><h2 className="text-[#093B3F] font-bold text-4xl pb-10 max-md:text-xl max-md:pl-1 max-md:pr-1 pt-5">{t("components.vorteileEinerImmobilie.heading")}</h2></center>
            <div className="flex justify-center gap-x-20">
                <div className="flex flex-col w-[6vw]">
                    <img src="tax.webp"></img>
                    <p className="text-[#093B3F] m-auto text-center">{t("components.vorteileEinerImmobilie.icons.0.label")}</p>
                </div>
                <div className="flex flex-col w-[6vw]">
                    <img src="loc.webp"></img>
                    <p className="text-[#093B3F] m-auto text-center">{t("components.vorteileEinerImmobilie.icons.1.label")}</p>
                </div>
                <div className="flex flex-col w-[6vw]">
                    <img src="rights.webp"></img>
                    <p className="text-[#093B3F] m-auto text-center">{t("components.vorteileEinerImmobilie.icons.2.label")}</p>
                </div>
                <div className="flex flex-col w-[6vw]">
                    <img src="economy.webp"></img>
                    <p className="text-[#093B3F] text-center">{t("components.vorteileEinerImmobilie.icons.3.label")}</p>
                </div>
                <div className="flex flex-col w-[6vw]">
                    <img src="diversity.webp"></img>
                    <p className="text-[#093B3F] text-center">{t("components.vorteileEinerImmobilie.icons.4.label")}</p>
                </div>
            </div>
            {
                Array.from({ length: 3 }).map((_, i) => (
                    <p className="w-[75vw] text-lg text-black text-justify m-auto pt-5">{t(`components.vorteileEinerImmobilie.texts.${i}`)}</p>
                ))
            }
            </div>
        </>
    )
}

export default VorteileEinerImmobilie;