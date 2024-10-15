import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider({ data, subhead, head, description }) {
  return (
    <>
      <div className="container my-12">
        <div className="text-center flex flex-col items-center py-12">
          <h5 className="text-md font-bold MonumentBold tracking-wide">
            {subhead}
          </h5>
          <h3 className="text-2xl lg:text-5xl MonumentBold w-[65%] py-4 uppercase">
            {head}
          </h3>
          <p className="font-Satoshi text-slate-500 text-sm w-[90%]">
            {description}
          </p>
        </div>
        <div className="h-[700px] px-4 md:m-auto hidden lg:block">
          <Swiper
            grabCursor={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={-5}
            className="mySwiper h-[700px]"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-technology p-6 lg:h-[500px] max-w-[400px] m-2">
                  <h3 className="text-3xl font-semibold py-6">{item.head}</h3>
                  <p className="text-xl opacity-50">{item.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-[95%] px-4 md:m-auto block lg:hidden">
          {data.map((item, index) => (
            <div
              className="bg-technology p-6 lg:h-[600px] lg:w-[400px] my-4"
              key={index}
            >
              <h3 className="text-3xl font-semibold py-6">{item.head}</h3>
              <p className="text-xl opacity-50">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
