import { useTranslation } from "react-i18next";

const Zitat = () => {
    const {t, i18n} = useTranslation();
    
    return (
        <>
            <div className="md:flex justify-between items-center pb-5 pt-5">
                <div className="flex flex-col md:w-[60%]">
                    <p className="text-md md:text-2xl text-justify italic font-light">{t("relevantethemen.zitat.quote")}</p>
                    <p className="font-bold text-sm md:text-3xl pt-5">{t("relevantethemen.zitat.name")}</p>
                </div>
                <img className="max-md:hidden md:rounded-4xl md:w-[30%]" src="../geschaeftsfuehrer.webp"></img>
            </div>
        </>
    )
}

export default Zitat;