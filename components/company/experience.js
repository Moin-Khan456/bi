import React from "react";
import Image from "next/image";

const experienceValue = [
  {
    image: "a-1.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: "a-2.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: "a-3.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: "a-4.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: "a-5.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: "a-6.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: "a-7.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: "a-8.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    image: "a-9.png",
    title: "0.1 Communicate clearly",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

function experience() {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 ">
      <div className="container padding-left-all-section">
        <h1 className="text-4xl mb-2 Gilroy-Bold">
          the brain inventory experience
        </h1>
        <p className="pb-8 Gilroy-light text-gray-400">
          We are driven by strong fundamentals or values that drive everthing we
          do at Moshi; from our hiring. to <br /> the way we deal with our
          customers, and how we do our business and plan our growth
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {experienceValue.map((el) => (
            <div key={el} className="mb-8">
              <div className="relative w-60 h-60  center block m-auto">
                <Image
                  src={
                    "https://d1u4arv5y5eda6.cloudfront.net/images/" + el.image
                  }
                  layout="fill"
                  alt=""
                />
              </div>
              <div className="pt-4 pl-12 pr-12">
                <h2 className="text-center Gilroy-Bold">{el.title}</h2>
                <p className="text-center text-base Gilroy-light  text-gray-400">
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default experience;
