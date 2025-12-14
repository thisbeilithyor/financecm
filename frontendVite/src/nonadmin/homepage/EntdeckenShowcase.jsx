import ImageCarousel from "./ImageCarousel.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EntdeckenShowcase = () => {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();
    const language = i18n.language;
    
    useEffect(() => {
        const reqRandomImages = async () => {
            const res = await fetch(`/api/immo/getCarouselImages?language=${language}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            const resJ = await res.json();

            const imagePaths = resJ.map((entry) => {
                console.log(entry.titleImagePath);
                return entry.titleImagePath;
            });
            setImages(imagePaths);
        }
        reqRandomImages();
    }, []);


    return (
        <section className="pt-3 md:pt-15 bg-[#f1f1f1] pb-5 md:pb-15 w-[100vw]">
            <center><h2 className="text-2xl md:text-4xl text-[#093B3F] font-bold pb-3 md:pb-10">{t("homepage.entdeckenShowcase.headline")}</h2></center>
            <ImageCarousel images={images}></ImageCarousel>

            <center><button className="text-xs md:text-lg h-8 md:h-10 mt-8 md:mt-10 bg-[#093B3F] text-white w-auto rounded-full pl-10 pr-10" onClick={() => navigate('/immobilien')}>{t("homepage.entdeckenShowcase.weitere")}</button></center>
        </section>
    );
}

export default EntdeckenShowcase;