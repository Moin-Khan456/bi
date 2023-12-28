import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "animate.css";
const Index = ({
  oneName,
  oneVideo,
  oneLink,
  oneImage,
  twoName,
  twoVideo,
  twoImage,
  twoLink,
  alt,
}) => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  return (
    <div className="padding-left-all-section-1 rounded-md pb-24">
      <div className="container padding-left-all-section-1 relative">
        <div className="lg:mb-80 mb-[36rem]">
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Group+7062.png"
            alt="Our Work"
            width={900}
            height={400}
            className="m-auto"
          ></Image>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-8 absolute lg:top-80 top-32">
          {!oneLink ? (
            <div className="m-6 lg:m-0 cursor-pointer" onClick={()=> setOne(true)}>
              <video
                className="rounded-3xl"
                muted
                loop
                autoPlay={true}
                controls={false}
                preload="metadata"
              >
                <source src={oneVideo} type="video/mp4" />
              </video>
              <h3 className="monument text-white text-3xl mt-4">{oneName}</h3>
              {/* <p className="">
              When examining solutions for the social industry, it&apos;s
              essential to first conduct a thorough scope analysis. Here&apos;s
              a brief rundown of the process:
            </p> */}
            </div>
          ) : (
            <Link href={oneLink}>
              <div className="m-6 lg:m-0">
                <video
                  className="rounded-3xl"
                  muted
                  loop
                  autoPlay={true}
                  controls={false}
                  preload="metadata"
                >
                  <source src={oneVideo} type="video/mp4" />
                </video>
                <h3 className="monument text-white text-3xl mt-4">{oneName}</h3>
                {/* <p className="">
              When examining solutions for the social industry, it&apos;s
              essential to first conduct a thorough scope analysis. Here&apos;s
              a brief rundown of the process:
            </p> */}
              </div>
            </Link>
          )}
          {!twoLink ? (
            <div className="lg:mt-24 m-6 lg:m-0 cursor-pointer" onClick={() => setTwo(!two)}>
              <video
                className="rounded-3xl"
                muted
                loop
                autoPlay={true}
                controls={false}
                preload="metadata"
              >
                <source src={twoVideo} type="video/mp4" />
              </video>
              <h3 className="monument text-white text-3xl mt-4">{twoName}</h3>
              {/* <p className="">
              When examining solutions for the social industry, it&apos;s
              essential to first conduct a thorough scope analysis. Here&apos;s
              a brief rundown of the process:
            </p> */}
            </div>
          ) : (
            <Link href={twoLink}>
              <div className="lg:mt-24 m-6 lg:m-0">
                <video
                  className="rounded-3xl"
                  muted
                  loop
                  autoPlay={true}
                  controls={false}
                  preload="metadata"
                >
                  <source src={twoVideo} type="video/mp4" />
                </video>
                <h3 className="monument text-white text-3xl mt-4">{twoName}</h3>
                {/* <p className="">
              When examining solutions for the social industry, it&apos;s
              essential to first conduct a thorough scope analysis. Here&apos;s
              a brief rundown of the process:
            </p> */}
              </div>
            </Link>
          )}
        </div>
      </div>
      {one && <DialogBox image={oneImage} setClose={setOne} />}
      {two && <DialogBox image={twoImage} setClose={setTwo} />}
    </div>
  );
};
export default Index;

const DialogBox = ({ setClose, image }) => {
  return (
    <div
      className=" bg-[#000000d2] flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-[999999]"
     cursor-pointer  onClick={() => setClose(false)}
    >
      <Image
        src={image}
        alt=""
        width={800}
        height={600}
        className="animate__animated animate__zoomIn rounded-2xl"
      />
    </div>
  );
};
