import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const ImageCarousel = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <>
        <div className="carouselContainer w-[80vw] m-auto">
            <Slider {...settings}>
                {images.map((url, index) => {
                    return (
                        
                        <div key={index}>
                            <img className="w-[30vw] m-auto rounded-2xl" src={'/api/images/'+url}></img>
                        </div>
                    )})}
            </Slider>
        </div>
        </>
    )
}

export default ImageCarousel;