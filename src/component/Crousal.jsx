// components/Carousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

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

  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/admin/get`
        );
        if (res.data.success) {
          setBanners(res.data.data.banners); // adjust key based on backend response
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="bg-white h-[158px] w-full md:h-[400px] flex items-center justify-center">
      <div className="w-full h-full">
        <Slider {...settings}>{
          banners.length > 0 && banners.map((item, index) => {
            return (
              <div key={index} className="h-[150px] w-full md:h-[400px]">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )
          })


        }

          {/* <div className="h-[150px] w-full md:h-[400px]">
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
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Crousal;
