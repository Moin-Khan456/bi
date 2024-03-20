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
  enableBtn = false,
  image,
  alt,
  developmentImage,
  type,
  unique,
  appDev = false,
  webDev = false,
}) {
  const card = [
    "100% resource replacement",
    "Flexible hiring models",
    "100% NDA-protected contract",
    "100% refund policy",
  ];
  const webCard = [
    "Transform your vision into a dynamic web platform",
    "Industry Expert Developers | Tailored Business Solutions",
    "Future-Ready Web Apps",
    "Custom Integration and Development",
  ];
  const mobCard = [
    "We build dynamic apps tailored to your business needs.",
    "Expert developers | Post-Launch support",
    "Timely delivery | Client Satisfaction",
    "Intuitive and High Performance",
  ];

  return (
    <main className="container padding-left-all-section-1 pt-20 lg:py-32   min-h-full">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-52`}>
        <section className="w-full">
          <section className="ml-4 lg:ml-0">
            <span className="text-2xl Gilroy-Bold lg:whitespace-normal">
              {heading}
            </span>
            <h1 className="text-5xl lg:text-[5rem] Gilroy-Bold mt-4 whitespace-nowrap max-sm:whitespace-break-spaces">
              {title}
              {unique === "design" ? (
                <span className="text-developer text-5xl lg:text-[5.3rem] Gilroy-Bold font-extrabold">
                  <br />
                  Designers
                </span>
              ) : unique === "Company" ? (
                <span className="text-developer text-5xl lg:text-[5.3rem] Gilroy-Bold font-extrabold">
                  <br />
                  Company
                </span>
              ) : unique === "Service" ? (
                <span className="text-developer text-5xl lg:text-[5.3rem] Gilroy-Bold font-extrabold">
                  <br />
                  Service
                </span>
              ) : unique === "analyst" ? (
                <span className="text-developer text-5xl lg:text-[5.3rem] Gilroy-Bold font-extrabold">
                  <br />
                  Analyst
                </span>
              ) : unique === "integration" ? (
                <span className="text-developer text-5xl lg:text-[5.3rem] Gilroy-Bold font-extrabold">
                  <br />
                  Integration
                </span>
              ) : developmentImage ? (
                <>
                  <span className="text-developer text-5xl lg:text-[5.3rem] Gilroy-Bold font-extrabold">
                    <br />
                    Development
                  </span>
                </>
              ) : (
                <>
                  <span className="text-developer text-5xl lg:text-[5.3rem] Gilroy-Bold font-extrabold">
                    <br />
                    Developers
                  </span>
                </>
              )}
            </h1>
            <h2 className="text-xl Gilroy-Bold my-4">{subhead}</h2>
            <h2 className="lg:text-5xl text-4xl Gilroy-Bold mb-4">
              {subtitle}
            </h2>
          </section>

          <section className="bg-banner-sot rounded-xl p-6 mt-20 mb-10 lg:m-0 m-6">
            <p className="Gilroy-Light text-lg">{content}</p>
          </section>
          {enableBtn && (
            <a href="#talk">
              <section className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl my-8 pr-20   lg:ml-0  mx-auto">
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
          )}
        </section>
        <section>
          {appDev ? (
            <section className="lg:ml-20 lg:mr-20 ml-4 mr-4 lg:mb-0 mb-6 mx-auto">
              <section className="started-subcription">
                <p className="Gilroy-Bold text-lg">Get Started Within</p>
                <h2 className="Gilroy-Bold text-5xl">
                  2 Business <span className="text-lg">Days</span>
                </h2>
              </section>
              <section className="p-8 bg-line">
                <ul className="list-subcription">
                  {appCard.map((ele, index) => (
                    <li key={index} className="flex items-center">
                      <BiCheckCircle className="text-2xl mb-2" />
                      {ele}
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          ) : webDev ? (
            <section className=" ml-4 mr-4 lg:mb-0 mb-6">
              <section className="started-subcription">
                <p className="Gilroy-Bold text-lg">Get Started Within</p>
                <h2 className="Gilroy-Bold text-5xl">
                  2 Business <span className="text-lg">Days</span>
                </h2>
              </section>
              <section className="p-8 bg-line">
                <ul className="list-subcription">
                  {webCard.map((ele, index) => (
                    <li key={index} className="flex items-center">
                      <BiCheckCircle className="text-2xl mb-2" />
                      {ele}
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          ) : unique === "developer" || unique === "Company" ||
            unique === "analyst" ||
            unique === "design" ? (
            <section className="lg:ml-20 lg:mr-20 ml-4 mr-4 lg:mb-0 mb-6">
              <section className="started-subcription">
                <p className="Gilroy-Bold text-lg">Get Started Within</p>
                <h2 className="Gilroy-Bold text-5xl">
                  2 Business <span className="text-lg">Days</span>
                </h2>
              </section>
              <section className="p-8 bg-line">
                <ul className="list-subcription">
                  {card &&
                    card.map((ele, index) => (
                      <li
                        key={index}
                        className="flex items-center whitespace-nowrap"
                      >
                        <BiCheckCircle className="text-2xl mb-2" />
                        {ele}
                      </li>
                    ))}
                </ul>
              </section>
            </section>
          ) 
          // : (
          //   <section
          //     className={` mx-14 lg:mb-0 mb-6 bg-none max-w-[500px] my-4 ${
          //       type?.match("php") && "drop-shadow-image"
          //     }`}
          //   >
          //     <Image
          //       src={image}
          //       className={`rounded-2xl ${
          //         type === "hire" ? "w-[700px]" : "w-[100%]"
          //       }`}
          //       blurDataURL="/loader.jpg"
          //       placeholder="blur"
          //       fetchPriority="high"
          //       width={900}
          //       height={900}
          //       alt={alt}
          //     />
          //   </section>
          // )
          }
          {/* {unique === "developer" ||
          unique === "analyst" ||
          unique === "design" ? (
            <section className="lg:ml-20 lg:mr-20 ml-4 mr-4 lg:mb-0 mb-6">
              <section className="started-subcription">
                <p className="Gilroy-Bold text-lg">Get Started Within</p>
                <h2 className="Gilroy-Bold text-5xl">
                  2 Business <span className="text-lg">Days</span>
                </h2>
              </section>
              <section className="p-8 bg-line">
                <ul className="list-subcription">
                  {card &&
                    card.map((ele, index) => (
                      <li key={index} className="flex items-center">
                        <BiCheckCircle className="text-2xl mb-2" />
                        {ele}
                      </li>
                    ))}
                </ul>
              </section>
            </section>
          ) : (
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
                blurDataURL="/loader.jpg"
                placeholder="blur"
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
