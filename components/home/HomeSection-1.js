import Image from "next/image";

export default function HomeSectionOne({}) {
  return (
    <div className="h-full flex items-center justify-center relative lg:pt-0">
      <div className="md:flex block items-center relative">
        <div className="w-full md:h-full">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-[60vh] md:h-[70vh]">
            <h1 className="2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-[1.5rem] leading-7  Gilroy-SemiBold text-white mt-[2rem] lg:mt-0 flex flex-col text-center">
              <span>Custom Software Development Company</span>
              <span>and Staff Augmentation Services</span>
            </h1>
            <div className="flex flex-col w-full px-4 lg:px-12 py-4">
              <h2 className="2xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs text-center flex flex-col gap-1">
                <span>A digital production company focusing heavily</span>
                <span>on design & development based in indore.</span>
                <span>
                  We create products that make people say,{" "}
                  <span className="text-[#6302DD] italic font-bold">
                    oh damn!
                  </span>
                </span>
              </h2>
            </div>
          </div>
          <div className="mt-[-3rem] hidden md:block">
            <Image
              priority
              fetchPriority="high"
              src={
                "https://braininventory.s3.us-east-2.amazonaws.com/images/homeBanner.webp"
              }
              alt="custom software development solutions"
              width={1500}
              height={1500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
