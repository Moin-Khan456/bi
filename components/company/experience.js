import React from "react";
import Image from "next/image";

function experience({experienceValue}) {
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
