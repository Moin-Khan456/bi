import React from "react";
import Image from "next/image";

const missionType = [
  {
    image: "1.svg",
    title: "Our Vision",
    description:
      "Pioneering software for a future that anticipates tomorrow’s needs, expands possibilities and ensures universal tech accessibility for all.",
  },
  {
    image: "2.svg",
    title: "Our Mission",
    description:
      "Deliver top-notch software empowering success in the digital era. We commit to excellence, ethics, collaboration, and attracting talent to meet evolving client needs, with a global positive impact.",
  },
];
function mission() {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <div className="lg:flex justify-between">
          {missionType.map((el) => (
            <div key={el.id} className="flex justify-between mb-8">
              <div className="w-48 mr-2 relative">
                <Image
                  src={
                    "https://d1u4arv5y5eda6.cloudfront.net/images/" + el.image
                  }
                  layout="fill"
                  alt=""
                />
              </div>
              <div className="w-96">
                <h2 className="2xl:text-xl xl:text-lg text-xl Gilroy-Bold">
                  {el.title}
                </h2>
                <p className="2xl:text-base xl:text-base text-lg Gilroy-Light">
                  {el.description}
                </p>
              </div>
            </div>
          ))}
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mission;
