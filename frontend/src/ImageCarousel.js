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
        <div className="carouselContainer">
            <Slider {...settings}>
                {images.map((url, index) => {
                    console.log(url);
                    return (
                        
                        <div key={index}>
                            <img style={{ width: '100% !important'}} src={'/api/images/'+url}></img>
                        </div>
                    )})}
            </Slider>
        </div>
        </>
    )
}

export default ImageCarousel;