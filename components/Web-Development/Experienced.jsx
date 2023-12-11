import Image from "next/image";
import React from "react";
const Index = ({ para1, para2, para3, title, image, card, type, alt }) => {
  return (
    <main className="container px-4 lg:px-24 pt-28 lg:pt-32 lg:pb-20">
      <section>
        <section>
          {type === "why" ? (
            <h2 className="text-4xl lg:text-5xl Gilroy-Bold lg:w-fit">
              Why you may need a{" "}
              <span className="text-[#7600EB]"> {title}</span> solution?
            </h2>
          ) : (
            <h2 className="text-4xl lg:text-5xl Gilroy-Bold lg:w-fit">
              Hire an Experienced{" "}
              <span className="text-[#7600EB]"> {title}</span> to Upscale Your
              Development{" "}
            </h2>
          )}
        </section>
        <section className="grid xs:grid-rows-1 lg:grid-cols-2 pt-8 w-full ">
            <Image
              src={image}
              alt={alt}
              width={700}
              height={700}
              className="rounded-2xl w-[75%]"
            />
            <p className="Gilroy-Light leading-8 font-[10] text-lg opacity-60 w-full">
              {para1}
              <br />
              {para2}
              <br />
              {para3}
            </p>
        </section>
        <section>
          {card?.map((ele, index) => (
            <div
              className="container flex flex-col items-end"
              key={index}
            >
              <div className="bg-customer p-8 lg:py-8 advantage-para my-6 flex flex-col lg:flex-row items-center justify-evenly w-full lg:w-full">
                <h5 className="text-2xl font-bold text-shadow lg:w-[15%]">
                  {ele?.head}
                </h5>
                <p className="Gilroy-Light text-sm tracking-wide leading-8 pb-6 lg:w-[70%]">
                  {ele?.content}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Index;
