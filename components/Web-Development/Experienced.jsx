import Image from "next/image";
import React from "react";
const Index = ({
  para1,
  para2,
  para3,
  title,
  image,
  card,
  type,
  alt,
  hideImage = false,
  blueSolution = false,
  changeText = false,
}) => {
  return (
    <main className="container px-4 lg:px-24 pt-28 lg:pt-4 lg:pb-8">
      <section>
        <section>
          {type === "why" ? (
            <h2 className="text-4xl lg:text-5xl Gilroy-Bold lg:w-fit">
              Why you may need a{" "}
              <span className="text-primaryTx"> {title}</span>{" "}
              {!blueSolution ? (
                <>solution?</>
              ) : (
                <span className="text-primaryTx"> Solution?</span>
              )}
            </h2>
          ) : type === "services" ? (
            <h2 className="text-4xl lg:text-5xl Gilroy-Bold lg:w-fit">
              <span className="text-primaryTx"> {title}</span> Services That We
              Offer
            </h2>
          ) : (
            <h2 className="text-4xl lg:text-5xl Gilroy-Bold lg:w-fit">
              {changeText ? changeText : "Hire an Experienced"}{" "}
              <span className="text-primaryTx"> {title}</span> to Upscale Your
              Development{" "}
            </h2>
          )}
        </section>
        <section
          className={`grid xs:grid-rows-1 lg:grid-cols-${
            hideImage ? 1 : 2
          } pt-8 w-full `}
        >
          {!hideImage && (
            <Image
              src={image}
              alt={alt}
              width={700}
              height={700}
              className="rounded-2xl lg:w-[75%] py-4"
            />
          )}
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
            <div className="container flex flex-col items-end" key={index}>
              <div className="bg-customer  hover:scale-[1.01] transition-all p-8 lg:py-8 advantage-para my-6 flex flex-col lg:flex-row items-center justify-evenly w-full lg:w-full">
                <h5 className="text-2xl font-bold text-primaryBg text-shadow lg:w-[15%]">
                  {ele?.head}
                </h5>
                <p className="Gilroy-Light text-sm text-primaryBg tracking-wide leading-8 pb-6 lg:w-[70%]">
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
