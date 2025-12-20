import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RelevanteThemen = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <section className="bg-[#f1f1f1] pt-0 md:pt-15 pb-2 md:pb-15">
            <center><h2 className="text-xl md:text-4xl pr-2 pl-2 pb-3 md:pb-10 text-[#093B3F] font-bold">
                {t("components.relevantethemen.headline")}
            </h2></center>

            
            <div className="md:flex md:gap-x-5 md:justify-center w-[80vw] m-auto">
                <Link to="/weitere/immobilie-nordzypern" className="md:w-[40vw] text-center">
                    <img className="rounded-xl" src='relImg1.webp'></img>
                    <p className="text-sm md:text-lg m-auto font-bold mt-0.3 mb-2">{t("components.relevantethemen.q1")}</p>
                </Link>
                <Link to="/weitere/wohnungen-nordzypern" className="md:w-[40vw] max-md:m-auto text-center">
                    <img className="rounded-xl" src='relImg2.webp'></img>
                    <p className="text-sm md:text-lg m-auto font-bold mt-0.3 mb-2">{t("components.relevantethemen.q2")}</p>
                </Link>
                <Link to="/weitere/haus-nordzypern" className="md:w-[40vw] max-md:m-auto text-center">
                    <img className="rounded-xl" src='relImg3.webp'></img>
                    <p className="text-sm md:text-lg m-auto font-bold mt-0.3">{t("components.relevantethemen.q3")}</p>
                </Link>
            </div>
            
            </section>
        </>
    )
}

export default RelevanteThemen;