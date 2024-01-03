import Contact from "./Contact";
import Image from "next/image";
import { FaRegWindowMinimize } from "react-icons/fa";
import "animate.css";
import { useState, useRef, useEffect } from "react";

const HireDedicatedCard = ({ setLocal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      // Add a delay before removing the component to allow time for the closing animation
      const timeoutId = setTimeout(() => {
        setLocal(false);
      }, 500); // Adjust the delay as needed

      // Clear the timeout on component unmount to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, setLocal]);
  return (
    <>
       <div
        ref={animationRef}
        className={`relative animate__animated ${
          isOpen ? "animate__bounceInRight" : "animate__bounceOutRight"
        } max-w-[70vw] lg:w-[400px] lg:min-w-[400px] lg:max-w-[300px] lg:mt-12 p-4 bg-gradient-to-b from-[#6302dd] to-[#4601a1] max-h-[750px] rounded-md`}
      >
        <h2 className="text-lg font-bold">
          Hire Dedicated Remote Developers From Brain Inventory
        </h2>
        <span className="flex justify-end absolute top-1 right-4 text-white">
          <FaRegWindowMinimize
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-white cursor-pointer"
          />
        </span>
        <h3 className="text-xs font-semibold flex items-start my-2">
          {" "}
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/correct.svg"
            alt="Custom Software Services"
            width={25}
            height={25}
            className="pr-2"
          />{" "}
          Onboard dedicated remote developers to your project as quickly as in 2
          days.
        </h3>
        <h3 className="text-xs font-semibold flex items-start my-2">
          {" "}
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/correct.svg"
            alt="Custom Software Services"
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
