import { useTranslation } from "react-i18next";

const Zitat = () => {
    const {t, i18n} = useTranslation();
    
    return (
        <>
            <div className="flex w-[80vw] m-auto">
                <div className="flex flex-col justify-center w-[60%] mr-20">
                    <p className="text-2xl italic font-light">{t("relevantethemen.zitat.quote")}</p>
                    <p className="font-bold text-3xl pt-5">{t("relevantethemen.zitat.name")}</p>
                </div>
                <img className="rounded-4xl w-[30%]" src="../geschaeftsfuehrer.webp"></img>
            </div>
        </>
    )
}

export default Zitat;