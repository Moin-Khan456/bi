
function contactBanner() {
  return (
    <div className="flex justify-center align-center">
      <div className="lg:h-[80vh] xl:[80vh] 2xl:[60vh] max-w-[90rem]  bg-gradient-1 flex items-center relative">
      <div className="lg:w-[60%] w-full h-full  relative">
          <div className=" 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <h3 className="2xl:text-4xl xl:text-4xl text-3xl text-primaryBg ">
            lets do some great things together!
            </h3>

            <h1 className="text-5xl text-primaryBg Gilroy-Bold">
            Contact Us for Website and App Development | Staff Augmentation
            </h1>

            <div className="flex flex-col lg:w-[80%]">
              <div className=" text-xl text-primaryBg">
              While we are good at sign language, there are various other simpler ways to connect with us. Talk to us in person.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactBanner;
