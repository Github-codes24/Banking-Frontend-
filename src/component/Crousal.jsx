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
      <div className="w-full ">
        <Slider {...settings}>
          <div className="h-[150px] md:h-[400px] bg-gray-100 flex items-center justify-center">
            <img
              src="/slider-1.jpg"
              alt=""
            />
          </div>
          <div className="h-[150px] md:h-[400px] bg-gray-200 flex items-center justify-center">
            <img
              src="/slider-2.jpg"
              alt=""
            />
          </div>
          <div className="h-[150px]md:h-[400px] bg-gray-300 flex items-center justify-center">
            <img
              src="/slider-3.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Crousal;
