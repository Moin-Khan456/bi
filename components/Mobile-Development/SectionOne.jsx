import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
import "aos/dist/aos.css";

export default function HireBanner({
  heading,
  subhead,
  title,
  subtitle,
  content,
  btn,
  image,
  alt,
  developmentImage,
  type,
  unique,
}) {
  const card = [
    "Turn disruptive ideas into market-ready products",
    "Enter new market with unique digital product",
    "Get full-cycle support for custom products",
    "Focus on competencies, leave tech worries to us",
  ];
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");

      AOS.init({});
    }
  });
  return (
    <main className="container h-full py-20 sm:px-10 px-5">
      <section
        className={`grid lg:grid-cols-2 grid-cols-1 px-4 lg:px-12 lg:gap-x-32 items-center justify-between`}
      >
        <section className="w-full">
          <section className="ml-4 lg:ml-0">
            <span className="text-2xl Gilroy-Bold lg:whitespace-nowrap">
              {heading}
            </span>
            <h1 className="text-5xl lg:text-[5rem] Gilroy-Bold mt-4">
              {title}
              <span className="text-developer text-5xl lg:text-[4.5rem] Gilroy-Bold font-extrabold">
                <br />
                {unique === "brain inventory"
                  ? "Brain Inventory"
                  : unique === "integration"
                  ? "Integration"
                  : "Development"}
              </span>
            </h1>
            <h2 className="text-xl Gilroy-Bold my-4">{subhead}</h2>
            <h2 className="lg:text-5xl text-4xl Gilroy-Bold mb-4">
              {subtitle}
            </h2>
          </section>

          <section className="bg-banner-sot rounded-xl p-6 lg:mt-20 mb-10 lg:m-0 m-6 text-primaryBg">
            <p className="Gilroy-Light text-lg">{content}</p>
          </section>
          {/* {!card && (
            <a href="#talk">
              <section className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-8 pr-20 ml-12 lg:ml-0">
                <button className="flex flex-col justify-center Gilroy">
                  <span className="text-xs font-thin text-slate-400 pb-1">
                    Got a project in mind?
                  </span>
                  <span className="flex items-center justify-between w-full">
                    {btn} <BsArrowRight />
                  </span>
                </button>
              </section>
            </a>
          )} */}
        </section>
        <section className="flex sm:justify-end">
          <section className="lg:mb-0 mb-6 px-5 lg:px-0 sm:w-[80%]">
            <section className="started-subcription">
              <p className="Gilroy-Bold text-lg">Get Started Within</p>
              <h2 className="Gilroy-Bold text-5xl">
                2 Business <span className="text-lg">Days</span>
              </h2>
            </section>
            <section className="p-4 lg:p-8 bg-line">
              <ul className="">
                {card &&
                  card.map((ele, index) => (
                    <li key={index} className="py-3 flex">
                      <BiCheckCircle className="text-2xl mb-1" />
                      <span className="pl-2  text-[1.1rem] Gilroy-Bold">{ele}</span>
                    </li>
                  ))}
              </ul>
            </section>
          </section>
          {/* ) : (
            <section
              className={` mx-14 lg:mb-0 mb-6 bg-none max-w-[500px] my-4 ${
                type?.match("php") && "drop-shadow-image"
              }`}
            >
              <Image
                src={image}
                className={`rounded-2xl ${
                  type === "hire" ? "w-[700px]" : "w-[100%]"
                }`}
                fetchPriority="high"
                width={900}
                height={900}
                alt={alt}
              />
            </section>
          )} */}
        </section>
      </section>
    </main>
  );
}
