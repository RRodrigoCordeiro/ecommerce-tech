import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

const Carousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  const data = [
    // { id: '1', image: '/images/banner01.png' },
    { id: "2", image: "/images/banners/banner-notebook-and-computer.png" },
    { id: "3", image: "/images/banners/banner-offers.png" },
    { id: "4", image: "/images/banners/banner-notebook-and-computer.png" },
  ];


  return (
    <div className="max-w-[1270px] mx-auto lg:w-full md:w-full md:mt-20  ">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt="Slider"
              className="w-full h-39 md:h-[300px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
