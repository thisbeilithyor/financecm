import { useTranslation } from "react-i18next";

const VorteileEinerImmobilie = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="bg-[#f1f1f1]">
            <center><h2 className="text-xl md:text-4xl text-[#093B3F] font-bold pb-10 pl-1 pr-1 pt-1">{t("components.vorteileEinerImmobilie.heading")}</h2></center>
            <div className="flex flex-wrap justify-center gap-x-10 md:gap-x-20">
                <div className="flex flex-col w-[19%] md:w-[8vw]">
                    <center><img src="tax.webp"></img></center>
                    <center><p className="text-[#093B3F] m-auto text-center text-xs">{t("components.vorteileEinerImmobilie.icons.0.label")}</p></center>
                </div>
                <div className="flex flex-col w-[19%] md:w-[8vw]">
                    <center><img src="loc.webp"></img></center>
                    <center><p className="text-[#093B3F] m-auto text-center text-xs">{t("components.vorteileEinerImmobilie.icons.1.label")}</p></center>
                </div>
                <div className="flex flex-col w-[19%] md:w-[8vw]">
                    <center><img src="rights.webp"></img></center>
                    <center><p className="text-[#093B3F] m-auto text-center text-xs">{t("components.vorteileEinerImmobilie.icons.2.label")}</p></center>
                </div>
                <div className="flex flex-col w-[19%] md:w-[8vw]">
                    <center><img src="economy.webp"></img></center>
                    <center><p className="text-[#093B3F] m-auto text-center text-xs">{t("components.vorteileEinerImmobilie.icons.3.label")}</p></center>
                </div>
                <div className="flex flex-col w-[19%] md:w-[8vw]">
                    <center><img src="diversity.webp"></img></center>
                    <center><p className="text-[#093B3F] m-auto text-center text-xs">{t("components.vorteileEinerImmobilie.icons.4.label")}</p></center>
                </div>
            </div>
            {
                Array.from({ length: 3 }).map((_, i) => (
                    <p className="w-[85vw] text-md md:text-lg text-black text-justify m-auto pt-5">{t(`components.vorteileEinerImmobilie.texts.${i}`)}</p>
                ))
            }
            </div>
        </>
    )
}

export default VorteileEinerImmobilie;