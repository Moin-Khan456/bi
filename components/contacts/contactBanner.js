import React from "react";
import HomeButton from "../buttons/HomeButton";

function contactBanner() {
  return (
    <div>
      <div className="h-screen bg-gradient-1 flex items-center relative">
        <div className="lg:w-1/2 w-full  h-full  relative">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
           
            <h1 class="text-5xl lg:text-[5rem] Gilroy-Bold mt-4 max-sm:whitespace-break-spaces">
            Contact Brain Inventory
            </h1>
            <h1 className="2xl:text-5xl xl:text-5xl mt-20 text-4xl stroke-text-3 Gilroy-Bold">
              lets do some great <br /> things together!
            </h1>
            <div className="flex flex-col">
              <div className="Gilroy-Light text-xl text-gray-50">
                While we are good at sign language, there are various other
                simpler ways to connect with us. Talk to us in person.
              </div>
            </div>
            <div className="md:flex block">
              <a href="tel:+91-810-956-1401">
                <HomeButton>
                  <span className="text-base">call us now!</span>
                </HomeButton>
              </a>
              <a className="btn-contact md:ml-8 ml-0" href="#contact">
                Drop an email
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg-2 w-1/2 h-full lg:block hidden" />
        <span
          id="circle"
          className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default contactBanner;
