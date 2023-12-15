import Contact from "./Contact";
import axios from "axios";
import * as Yup from "yup";
import Image from "next/image";
import { FaRegWindowMinimize } from "react-icons/fa";
import "animate.css";
import { useRef } from "react";

const HireDedicatedCard = ({ setLocal }) => {
  const animationRef = useRef(null);
  return (
    <>
      <div
        ref={animationRef}
        className="relative animate__animated animate__bounceInRight max-w-[70vw] lg:w-[400px] lg:min-w-[400px] lg:max-w-[300px] lg:mt-12 p-4 bg-gradient-to-b from-[#6302dd] to-[#4601a1] max-h-[750px] rounded-md"
      >
        <h2 className="text-lg font-bold">
          Hire Dedicated Remote Developers From Brain Inventory
        </h2>
        <span className="flex justify-end absolute top-1 right-4 text-white">
          <FaRegWindowMinimize
            onClick={() => {
              setLocal(false);
            }}
            className="text-white cursor-pointer"
          />
        </span>
        <h3 className="text-xs font-semibold flex items-start my-2">
          {" "}
          <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/correct.svg"
            alt=""
            width={25}
            height={25}
            className="pr-2"
          />{" "}
          Onboard dedicated remote developers to your project as quickly as in 2
          days.
        </h3>
        <h3 className="text-xs font-semibold flex items-start my-2">
          {" "}
          <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/correct.svg"
            alt=""
            width={25}
            height={25}
            className="pr-2"
          />{" "}
          Resources are thoroughly matched based on your particular skills and
          requirements.
        </h3>

        <h2 className="text-xl font-bold my-1">Contact Us!</h2>
        <Contact />
      </div>
    </>
  );
};

export default HireDedicatedCard;
