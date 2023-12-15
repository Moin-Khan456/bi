import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";
export default function HireBanner({
  heading,
  subhead,
  title,
  subtitle,
  content,
  card,
  btn,
  image,
  alt,
  developmentImage,
  type,
  unique,
}) {
  return (
    <main className="container padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-24">
      <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-52`}>
        <section className="w-full">
          <section className="ml-4 lg:ml-0">
            <span className="text-2xl Gilroy-Bold ">{heading}</span>
            <h1 className="text-5xl lg:text-[3.5rem] Gilroy-Bold mt-4">
              {title}
              {unique === "design" ? (
                <span className="text-developer text-5xl lg:text-[4.5rem] Gilroy-Bold font-extrabold">
                  <br />
                  Designers
                </span>
              ) : unique === "Company" ? (
                <span className="text-developer text-5xl lg:text-[4.5rem] Gilroy-Bold font-extrabold">
                  <br />
                  Company
                </span>
              ) : unique === "Service" ? (
                <span className="text-developer text-5xl lg:text-[4.5rem] Gilroy-Bold font-extrabold">
                  <br />
                  Service
                </span>
              ) : unique === "analyst" ? (
                <span className="text-developer text-5xl lg:text-[4.5rem] Gilroy-Bold font-extrabold">
                  <br />
                  Analyst
                </span>
              ) : unique === "integration" ? (
                <span className="text-developer text-5xl lg:text-[4.5rem] Gilroy-Bold font-extrabold">
                  <br />
                  Integration
                </span>
              ) : developmentImage ? (
                <>
                  <span className="text-developer text-5xl lg:text-[4.5rem] Gilroy-Bold font-extrabold">
                    <br />
                    Development
                  </span>
                </>
              ) : (
                <>
                  <span className="text-developer text-5xl lg:text-[4.5rem] Gilroy-Bold font-extrabold">
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

          <section className="bg-banner-sot rounded-xl p-6 mt-16 mb-10 lg:m-0 m-6">
            <p className="Gilroy-Light text-lg">{content}</p>
          </section>
          {!card && (
            <a href="#talk">
              <section className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-4 pr-20 ml-12 lg:ml-0">
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
          {card ? (
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
              <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
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
          )}
        </section>
      </section>
    </main>
  );
}
