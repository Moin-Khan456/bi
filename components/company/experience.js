import React from "react";
import Image from "next/image";
import moralImage from "../../public/assets/company-assets/morally.webp";
import findYourselfImg from "../../public/assets/company-assets/find-yourself.webp";

const experienceValue = [
  {
    image: "a-1.png",
    title: "01. Communicate clearly:",
    description:
      "Just do it. Communicate. Whether we are right or wrong. Whether it’s the hard difficult situation or a compromising one, at Brain Inventory we communicate clearly",
  },
  {
    image: moralImage,
    title: "02. Doing things morally right:",
    description:
      "Morals are above everything, above the company, above the founders, above the profits. Our Morals define us.",
  },
  {
    image: "a-3.png",
    title: "03. Dream it, Do it:",
    description:
      "We are insanely positive towards anything and everything we believe in. That’s got us this far. That’s also a core of the Brain Inventory experience - Optimism and never give up attitude.",
  },
  {
    image: "a-4.png",
    title: "04. Add logic to your life:",
    description:
      "If it logically doesn’t make sense, what’s the point of it anyway. One thing unique to the Brain Inventory experience is we apply logic to everything.",
  },
  {
    image: "a-5.png",
    title: "05. Be that fool:",
    description:
      "The fool did not know it was impossible, so he did it. “Be that fool” this is Krishna’s personal approach to life. And that makes us gutsy. Bold. and fearless.",
  },
  {
    image: findYourselfImg,
    title: "06. “Find yourself” at BI",
    description:
      "This is an experience we want our team members and our client’s to have, always. Just by releasing ourselves of preset definitions we open up a whole new world of opportunities for everyone to and themselves.",
  },
  {
    image: "a-7.png",
    title: "07. Our efforts drive us:",
    description:
      "A part of the journey is the end, but most of it is the journey itself. Krishna’s personal motto has always been to keep doing things with the utmost care and love. The result does matter, but a large part of the result is what you put in.",
  },
  {
    image: "a-8.png",
    title: "08. Brand’s objective is the GOAL:",
    description:
      "Everything we do is to help brands reach and communicate with all their stakeholders creatively and impactfully. We decide the path, but the end goal is meeting the brand's objectives",
  },
  {
    image: "a-9.png",
    title: "09. Staying young at heart:",
    description:
      "There is something good about being Young and no matter how old we grow we will always be young at heart.",
  },
];

function experience() {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 ">
      <div className="container padding-left-all-section">
        <h3 className="text-4xl mb-2 Gilroy-Bold">
          The Brain Inventory experience
        </h3>
        <p className="pb-8 Gilroy-light text-secondryTx">
          We are driven by strong fundamentals or values that drive everthing we
          do at Moshi; from our hiring. to <br /> the way we deal with our
          customers, and how we do our business and plan our growth
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {experienceValue.map((el) => (
            <div key={el} className="mb-8">
              <div className="relative center block m-auto">
                {/* //       srcSet="/image-320w.jpg 320w,
            //   /image-480w.jpg 480w,
            //   /image-800w.jpg 800w"
            //       sizes="(max-width: 320px) 280px,
            //  (max-width: 480px) 440px,
            //  800px" */}
                <Image
                  width={386}
                  height={290}
                  src={
                    typeof el.image === "string" && el.image.includes(".png")
                      ? "https://braininventory.s3.us-east-2.amazonaws.com/images/" +
                        el.image
                      : el.image
                  }
                  alt="Brain Inventory"
                />
              </div>
              <div className="pt-4">
                <h2 className="text-left Gilroy-Bold">{el.title}</h2>
                <p className="text-left text-sm Gilroy-SemiBold text-secondryTx">
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
