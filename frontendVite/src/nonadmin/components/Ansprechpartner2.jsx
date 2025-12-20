import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Ansprechpartner2 = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className='flex flex-col justify-center bg-[#093B3F] rounded-4xl w-[35vw] pt-15 pb-15'>
                <h2 className="text-white text-center text-3xl font-bold pb-2 pt-1">{t("components.ansprechpartner2.heading")}</h2>
                <img className="w-[45%] m-auto rounded-xl mt-4" src='/geschaeftsfuehrer.webp'></img>
                <p className="text-white text-center font-bold text-2xl mt-4">Alexander Meier</p>
                <p className="text-md text-[#E9D3AD] mt-6 text-center">E-Mail: meier-finanz@gmx.de</p>
                <p className="text-md text-[#E9D3AD] mt-3 text-center">Tel.: +49 (0) 172 - 77 45 656</p>
                <Link to="/kontakt" className="bg-white text-[#093B3F] w-55 h-10 rounded-full text-lg m-auto mt-3 items-center flex justify-center">{t("components.ansprechpartner2.button")}</Link>
            </div>
        </>
    )
}

export default Ansprechpartner2;