import { useTranslation } from "react-i18next";

const Ansprechpartner = () => {

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="bg-[#093B3F] lg:flex pt-3 md:pt-10 pb-3 md:pb-5">
                <div className="max-md:pb-3 w-[85vw] lg:w-[50vw] m-auto flex flex-col">
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-3">{t("components.ansprechpartner.headline")}</h2>
                    <p className="text-white text-md md:text-lg text-justify">{t("components.ansprechpartner.description")}</p>
                </div>
                <div className="w-[85vw] lg:w-[50vw] m-auto flex">
                    <div className="mr-5 w-[210%]">
                        <img className="rounded md:rounded-[15px] sm:w-md md:w-sm lg:w-sm" src='/geschaeftsfuehrer.webp'></img>
                    </div>
                    <div className="text-white">
                        <h3 className="text-xl font-bold">{t("components.ansprechpartner.name")}</h3>
                        <span className="text-md font-bold">{t("components.ansprechpartner.title")}</span>
                        <div>
                            <p className="text-sm mt-3 text-justify">{t("components.ansprechpartner.titledes")}</p>
                            <p className="max-md:hidden text-md text-[#E9D3AD] mt-3">E-Mail: meier-finanz@gmx.de</p>
                            <p className="max-md:hidden text-md text-[#E9D3AD] mt-1">Tel.: +49 (0) 841 - 98 17 858</p>
                            <p className="max-md:hidden text-md text-[#E9D3AD] mt-1">Tel.: +49 (0) 172 - 77 45 656</p>
                        </div>
                    </div>

                </div>
                <center><div className="md:hidden m-auto w-[85vw]">
                    <p className="text-md text-[#E9D3AD] mt-3">E-Mail: meier-finanz@gmx.de</p>
                    <p className="text-md text-[#E9D3AD] mt-1">Tel.: +49 (0) 841 - 98 17 858</p>
                    <p className="text-md text-[#E9D3AD] mt-1">Tel.: +49 (0) 172 - 77 45 656</p>
                </div></center>
            </div>
        </>
    )
}

export default Ansprechpartner;