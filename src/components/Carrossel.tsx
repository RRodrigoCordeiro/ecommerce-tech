import React, {useState, useEffect} from 'react'

import '../App.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'


const Carrossel = () => {

    const [slidesPerView, setSlidesPerView] = useState(1)

    const data = [
        // {id: '1', image: '/images/banner01.png'},
        {id: '2', image: '/images/banner02.png'},
        {id: '3', image: '/images/banner03.png'},
        {id: '4', image: '/images/banner02.png'},
    ]

    // useEffect(() => { 

    //     function handleResize(){
    //         if(window.innerWidth < 720){
    //             setSlidesPerView(1);
    //         }else{
    //             setSlidesPerView(2);
    //         }
    //     }

    //     handleResize();

    //     window.addEventListener("resize", handleResize)

    //     return () => {
    //         window.removeEventListener("resize",handleResize)
    //     }

    // }, [])

  return (
    // md:w-full
    <div className=" max-w-[1270px]  mx-auto lg:w-full md:w-[765px]  md:mt-20 ">
      

        <Swiper
            modules={[EffectFade]}
            effect='fade'
            slidesPerView={1}
            pagination={{ clickable: true}}
            navigation
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <img
                        src={item.image}
                        alt='Slider'
                        className='w-full h-39 md:h-[300px]  object-cover'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carrossel