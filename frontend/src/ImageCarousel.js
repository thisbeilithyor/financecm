import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import { useEffect } from "react";

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    const images = [
        "/logo512.png",
        "/logo192.png",
        "/logo-dunkel.webp"
    ];

    useEffect(() => {
        const reqRandomImages = async () => {
            
        }
    }, []);

    return (
        <div className="carouselContainer">
            <Slider {...settings}>
                {images.map((url, index) => (
                    <div key={index}>
                        <img src={url}></img>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageCarousel;