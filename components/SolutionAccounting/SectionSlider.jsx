import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: null,
      prevArrow: null,
    };
    return (
      <div className="container my-12">
        <div className="text-center flex flex-col items-center py-12">
          <h5 className="text-md font-bold MonumentBold tracking-wide">
            {this.props.subhead}
          </h5>
          <h1 className="text-2xl lg:text-5xl MonumentBold w-[65%] py-4 uppercase">{this.props.head}</h1>
          <p className="font-Satoshi text-slate-500 text-sm">{this.props.description}</p>
        </div>
        <div className="w-[95%] h-[700px] px-4 md:m-auto hidden lg:block">
          <Slider {...settings}>
            {this.props.data.map((item, index) => (
              <div
                className="bg-technology p-6 lg:h-[600px] lg:w-[400px]"
                key={index}
              >
                <h1 className="text-3xl font-semibold py-6">{item.head}</h1>
                <p className="text-xl opacity-50">{item.content}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[95%] px-4 md:m-auto block lg:hidden">
            {this.props.data.map((item, index) => (
              <div
                className="bg-technology p-6 lg:h-[600px] lg:w-[400px] my-4"
                key={index}
              >
                <h1 className="text-3xl font-semibold py-6">{item.head}</h1>
                <p className="text-xl opacity-50">{item.content}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
