import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function HireBanner({
  heading,
  subtitle,
  content,
  btn,
  image,
  appDev = false,
}) {
  const card = [
    "Transform your vision into a dynamic web platform",
    "Industry Expert Developers | Tailored Business Services",
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
    <main className="container padding-left-all-section-1 lg:pb-28">
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <section className="">
          <section className="ml-4 lg:ml-0 flex flex-col items-center lg:items-start">
            <h1 className="text-5xl Gilroy-Bold	drop-shadow-2xl-[#fff] mean_stack_development_text_shadow">
              {heading} <br />
              <span className="development-text rotate-3 lg:text-[10rem] leading-[10rem] text-8xl">
                Development
              </span>
              <br /> Company
            </h1>
            <h2 className="lg:text-5xl text-4xl Gilroy-Bold mb-4 text-center lg:text-start">
              {subtitle}
            </h2>
          </section>
          <section className="rounded-xl py-6 mt-16 mb-10 lg:m-0 m-6">
            <p className="Gilroy-Light text-sm w-full lg:w-[70%] leading-6 text-center lg:text-start">
              {content}
            </p>
          </section>
          <a href="#talk" className="flex justify-center lg:block">
            <section className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-4 pr-12 ">
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
        </section>
        <section>
          {appDev ? (
            <section className="lg:ml-20 lg:mr-20 ml-4 mr-4 lg:mb-0 mb-6">
              <section className="started-subcription">
                <p className="Gilroy-Bold text-lg">Get Started Within</p>
                <h2 className="Gilroy-Bold text-5xl">
                  2 Business <span className="text-lg">Days</span>
                </h2>
              </section>
              <section className="p-8 bg-line">
                <ul className="list-subcription">
                  {mobCard &&
                    mobCard.map((ele, index) => (
                      <li key={index} className="flex">
                        {ele}
                      </li>
                    ))}
                </ul>
              </section>
            </section>
          ) : (
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
                      <li key={index} className="flex">
                        {ele}
                      </li>
                    ))}
                </ul>
              </section>
            </section>
          )}
        </section>
      </section>
    </main>
  );
}
