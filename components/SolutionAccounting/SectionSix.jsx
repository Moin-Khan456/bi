import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Index = ({
  title,
  btn,
  head,
  src,
  headAbove,
  subheadAbove,
  customClasses,
  classText,
  titleClass,
}) => {
  const router = useRouter();
  return (
    <div className="padding-left-all-section-1 rounded-md sm:my-8 mb-8 sm:py-10 pb-10 px-4">
      <div className="container padding-left-all-section-1">
        <h2 className={`MonumentRegular text-[1.5625rem] ${classText}`}>
          {headAbove}
        </h2>
        <p className="text-slate-400 py-4">{subheadAbove}</p>
        <div className="lg:grid lg:grid-cols-2 gap-0 h-auto bg-primaryTx text-primaryBg overflow-y-hidden rounded-3xl relative section-six-card">
          <div className="p-4 lg:p-12">
            <h3
              className={`font-bold lg:text-3xl MonumentRegular ${titleClass} ${classText}`}
            >
              {title}
            </h3>
            <p className="lg:w-[235px] relative top-11 lg:opacity-0 opacity-100">{head}</p>

            <button
              className="flex items-center font-Satoshi font-bold text-xs rounded-full border-gray-50 border-[1px] px-8 py-4 sm:my-12 mt-20"
              onClick={() => {
                router.push(
                  "/mobile-development/custom-mobile-app-development-company"
                );
              }}
            >
              {btn}
              <GoArrowUpRight className="font-extrabold text-3xl ml-4 p-2 rounded-full " />
            </button>
            <p className="lg:w-[235px] relative top-11 opacity-0 lg:opacity-100">{head}</p>
          </div>
          <div className="relative hidden lg:block">
            {src && (
              <Image
                src={src}
                width={1800}
                height={1800}
                alt="Custom Software Development Company | Application Development Company"
                className={`m-auto block absolute bottom-0 right-10 max-w-[550px] w-[500px] ${customClasses}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
