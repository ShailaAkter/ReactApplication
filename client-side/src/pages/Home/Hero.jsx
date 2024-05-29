import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => 
{

    const slideSettings = 
    {
        dots: false, 
        arrows: false,
        infinite: true, 
        speed: 1000,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        cssEase: 'ease-in-out',
        pauseOnHover: false, 
        pauseOnFocus: true
    };
  return ( 
    <div className="py-10">
        <div className="w-full bg-red-200">
            <Slider {...slideSettings}>

                <div className="w-full">
                    
                </div>

                <div className="w-full">
                    <h3>2</h3>
                </div>

                <div className="w-full">
                    <h3>3</h3>
                </div>

            </Slider>
        </div>
    </div>
  )
}

export default Hero