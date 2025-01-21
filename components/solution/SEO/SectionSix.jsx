import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Index = ({
  title,
  btn,
  head,
  src,
  className,
  headAbove,
  subheadAbove,
  customClasses,
  classText,
  alt,
}) => {
  const router = useRouter();
  return (
    <div className="container rounded-md my-8 px-4">
      <div className="container padding-left-all-section ">
        <h2 className={`MonumentRegular text-[1.5625rem] ${classText}`}>
          {headAbove}
        </h2>
        <p className="text-slate-400 py-4">{subheadAbove}</p>
        <div className="lg:grid lg:grid-cols-2 gap-0 h-[450px] bg-primaryTx text-primaryBg rounded-2xl relative section-six-card">
          <div className="p-12">
            <h2 className={`font-bold MonumentRegular !text-2xl ${classText}`}>
              {title}
            </h2>
            <button
              className="flex items-center font-Satoshi font-bold text-xs rounded-full border-secondaryTx border-[1px] px-8
                             py-4 my-12"
              onClick={() => {
                router.push(
                  "/mobile-development/custom-mobile-app-development-company"
                );
              }}
            >
              {btn}
              <GoArrowUpRight className="font-extrabold text-3xl ml-4 p-2 rounded-full" />
            </button>
            <p className="lg:w-[235px] relative top-11">{head}</p>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src={src}
              width={2800}
              height={2800}
              alt={alt}
              className={`m-auto block absolute bottom-0 right-10 max-w-[450px] ${customClasses}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
