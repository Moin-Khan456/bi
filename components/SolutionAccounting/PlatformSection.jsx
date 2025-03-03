import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Slider({ data, subhead, head, description }) {
  const page = "BLOCKCHAIN APP DEVELOPMENT";
  const isTrue = page === head;

  return (
    <>
      <div className="container my-12 py-6 sm:py-0">
        <div
          className={`text-center flex flex-col items-center ${
            isTrue ? "sm:pb-12" : "sm:py-12"
          } pb-12 sm:mt-[90px] ${isTrue ? "mt-[12rem]" : "mt-[17rem]"}`}
        >
          <h5 className="text-md font-bold MonumentBold tracking-wide">
            {subhead}
          </h5>
          <h3 className="text-2xl lg:text-5xl MonumentBold sm:w-[65%] py-4 uppercase">
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
        <div className="lg:w-[95%] w-[100%] px-4 md:m-auto block lg:hidden">
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
