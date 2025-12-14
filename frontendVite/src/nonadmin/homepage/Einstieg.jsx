import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Einstieg = () => {
    //not muted in prod build!
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="w-[100vw]">
                <video className="w-full fixed z-[-1] bg-center bg-cover" autoPlay muted loop playsInline> 
                    <source src='/backgroundvideo.mp4' type='video/mp4'></source>
                </video>
            </div>
            <div className="h-50 sm:h-150 relative flex flex-col items-center justify-center row w-[100vw]">
                    <div className="text-xl md:text-4xl px-5 md:px-0 text-white font-bold text-center drop-shadow-lg">
                        <h1>{t("homepage.einstieg.headline")}</h1>
                    </div>
                    <div className="text-lg md:text-3xl text-center text-white font-bold mt-3">
                        <h2>{t("homepage.einstieg.subheadline")}</h2>
                    </div>
                    <div className="max-md:hidden flex justify-center gap-x-3 md:gap-x-20 pt-2 md:pt-15">
                        <button className="w-30 md:w-55 text-xs md:text-lg bg-[#093B3F] text-white h-10 rounded-full" onClick={() => navigate('/immobilien')}>{t("homepage.einstieg.buttonLeft")}</button>
                        <button className="w-25 md:w-55 text-xs md:text-lg bg-[#093B3F] text-white h-10 rounded-full" onClick={() => navigate('/immobilien')}>{t("homepage.einstieg.buttonMid")}</button>
                        <button className="w-25 md:w-55 text-xs md:text-lg bg-[#093B3F] text-white h-10 rounded-full" onClick={() => navigate('/immobilien')}>{t("homepage.einstieg.buttonRight")}</button>
                    </div>
            </div>
        </>
    )
}

export default Einstieg;