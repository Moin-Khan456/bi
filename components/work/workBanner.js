import React from "react";

const WorkBanner = () => {
  return (
    <div className="h-screen min-h-[100vh] items-center relative">
      <h2 className="2xl:px-14 xl:px-12 px-10 pt-32 text-4xl stroke-text-mobile Gilroy-Bold"></h2>
      <div className="md:flex block relative">
        <div className="lg:w-[40%] w-full  md:h-full">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <h1 className="2xl:text-4xl lg:text-4xl pt-32 text-4xl Gilroy-Bold text-white">
              We turn ideas into
            </h1>
            <div className="flex flex-col">
              <div className="color-gray text-sm Gilroy-Bold">
                reality by getting involved with customers to create the best
                product. All steps from Ideation to Deployment/Maintenance are
                our forte in software development.
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full  md:h-full mt-14 md:mt-0">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 ">
            <div className="">
              <video
                muted
                loop
                autoPlay={true}
                controls={false}
                poster="https://d1u4arv5y5eda6.cloudfront.net/images/work-v-thumbnail.png"
              >
                <source
                  src="https://d1u4arv5y5eda6.cloudfront.net/images/AppDevelopment.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkBanner;
