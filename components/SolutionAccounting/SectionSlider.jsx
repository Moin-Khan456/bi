import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CenterMode({head, subhead, description, data})  {
    return (
      <div className="container flex items-center">
        <div className="text-center flex flex-col items-center py-12">
          <h5 className="text-md font-bold MonumentBold tracking-wide">
            {subhead}
          </h5>
          <h1 className="lg:text-5xl MonumentBold w-[65%] py-4">{head}</h1>
          <p className="font-Satoshi text-slate-500 text-sm">{description}</p>
        </div>
        <div className="snap-x w-full overflow-x-scroll h-[700px] flex no-scrollbar">
          {data.map((item, index) => (
            <div
              className="snap-center  text-center block mx-4 min-w-[450px]"
              key={index}
            >
              <div className="bg-technology px-12 py-6 h-[600px]">
                <h1 className="text-3xl font-semibold py-6">{item.head}</h1>
                <p className="text-xl opacity-50">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
