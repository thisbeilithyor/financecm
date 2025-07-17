import ImageCarousel from "./ImageCarousel";
import { useEffect, useState } from "react";


const EntdeckenShowcase = () => {
    const [images, setImages] = useState([]);

    
    useEffect(() => {
        const reqRandomImages = async () => {
            const res = await fetch('/api/getCarouselImages', {
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
        <section class="mySection">
            <center><h2 className="darkText">Entdecke aktuelle Projekte</h2></center>
            <ImageCarousel images={images}></ImageCarousel>
        </section>
    );
}

export default EntdeckenShowcase;