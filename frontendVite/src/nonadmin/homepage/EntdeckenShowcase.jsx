import ImageCarousel from "./ImageCarousel.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const EntdeckenShowcase = () => {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const reqRandomImages = async () => {
            const res = await fetch('/api/immo/getCarouselImages', {
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
        <section className="bg-[#f1f1f1] pt-15 pb-15">
            <center><h2 className="text-[#093B3F] font-bold text-4xl pb-10">Entdecke aktuelle Projekte</h2></center>
            <ImageCarousel images={images}></ImageCarousel>

            <center><button className="bg-[#093B3F] text-white w-auto h-10 rounded-full text-lg pl-10 pr-10 mt-10" onClick={() => navigate('/immobilien')}>JETZT WEITERE ENTDECKEN</button></center>
        </section>
    );
}

export default EntdeckenShowcase;