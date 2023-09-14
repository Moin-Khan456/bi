import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import "aos/dist/aos.css";
import { BiCheckCircle } from "react-icons/bi"
export default function HireBanner({
    heading,
    title,
    subtitle,
    content,
    card,
    btn,
    image,
    alt,
    developmentImage,
    type
}) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const AOS = require("aos");
            require("aos/dist/aos.css");
            AOS.init({
            });
        }
    });
    return (
        <main className="container padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-24">
            <section className={`grid lg:grid-cols-2 grid-cols-1 gap-x-52`}>
                <section>
                    <section
                        className="ml-4 lg:ml-0"
                        data-aos="zoom-in"
                        data-aos-delay="1500"
                    >
                        <h1 className="text-2xl Gilroy-Bold">{heading}</h1>
                        <h2 className="text-5xl lg:text-[3.5rem] Gilroy-Bold mt-4">{title}</h2>
                        <section className="container lg:m-0 lg:ml-[-1rem] w-72 lg:w-96">
                            {developmentImage ? <Image
                                src={developmentImage}
                                width={700}
                                height={300}
                                alt={alt}
                            /> : <Image
                                src="https://d1u4arv5y5eda6.cloudfront.net/images/development-12.png"
                                width={700}
                                height={300}
                                alt={alt}
                            />}
                        </section>
                        <h2 className="lg:text-5xl text-4xl Gilroy-Bold mb-4">
                            {subtitle}
                        </h2>
                    </section>

                    <section
                        className="bg-banner-sot rounded-xl p-6 mt-16 mb-10 lg:m-0 m-6"
                        data-aos="zoom-in"
                        data-aos-delay="1500"
                    >
                        <p className="Gilroy-Light text-lg">{content}</p>
                    </section>
                    {!card && (
                        <a href="#talk">
                            <section className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-4 pr-20 ml-12 lg:ml-0">
                                <button
                                    className="flex flex-col justify-center Gilroy"
                                >
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
                        <section
                            className="lg:ml-20 lg:mr-20 ml-4 mr-4 lg:mb-0 mb-6"
                            data-aos="zoom-in"
                            data-aos-delay="1500"
                        >
                            <section className="started-subcription">
                                <p className="Gilroy-Bold text-lg">Get Started Within</p>
                                <h2 className="Gilroy-Bold text-5xl">
                                    2 Business <span className="text-lg">Days</span>
                                </h2>
                                <form className="mt-3">
                                    <label className="Gilroy-Bold text-lg block">
                                        Hire Us Now
                                    </label>
                                    <input
                                        type="text"
                                        className="h-14 w-full px-4 bg-black opacity-60 mt-2"
                                        placeholder="Enter your Email Address"
                                    />
                                </form>
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
                        <section className={` mx-14 lg:mb-0 mb-6 bg-none max-w-[500px] ${type?.match("php") && "drop-shadow-image"}`} data-aos="zoom-in"
                            data-aos-delay="1500">
                            <Image
                                src={image} alt="Custom Web Development"
                                className={`rounded-2xl ${type === 'hire' ? 'w-[700px]' : 'w-[100%]'}`}
                                fetchPriority="high"
                                width={900}
                                height={900}
                            />
                        </section>
                    )}
                </section>
            </section>
        </main>
    );
}