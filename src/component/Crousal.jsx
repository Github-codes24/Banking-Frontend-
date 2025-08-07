// components/Carousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crousal = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white h-[158px] w-full md:h-[400px] flex items-center justify-center">
      <div className="w-full h-full">
        <Slider {...settings}>
          <div className="h-[150px] w-full md:h-[400px]">
            <img
              src="/slider-1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[150px] w-full md:h-[400px]">
            <img
              src="/slider-2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[150px] w-full md:h-[400px]">
            <img
              src="/slider-3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Crousal;
