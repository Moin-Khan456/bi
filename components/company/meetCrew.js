import React, { useState, useEffect } from "react";
import HomeButton from "../buttons/HomeButton";
import Image from "next/image";

function MeetCrew({ meeting }) {
  const [showAll, setShowAll] = useState(false);
  const [initialCardsToShow, setInitialCardsToShow] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      setInitialCardsToShow(window.innerWidth < 768 ? 6 : 8);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container flex flex-col 2xl:p-10 p-8 2xl:space-y-8 space-y-6 pt-24 pb-24">
      <div className="lg:grid lg:grid-cols-1 gap-4">
        <div className="flex self-center pr-6 pl-8">
          <div className="my-12 lg:my-0">
            <h2 className="text-black Gilroy-Bold text-5xl">
              Meet the People behind Brain Inventory
            </h2>
            <p className="Gilroy-light text-black text-lg mt-6 mb-4">
              Meet our exceptional team of technology advisors, growth
              facilitators, and subject matter experts with proven industry
              experiences.
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div className="col-span-2 py-8 flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {meeting.map((el, index) => (
              <div
                key={index}
                className={`flex flex-col items-center transition-all ${
                  showAll || index < initialCardsToShow ? "card" : "card hidden"
                }`}
              >
                <div className="w-[161px] h-[160px] sm:w-[261px] sm:h-[260px] relative rounded-full bg-secondaryBg overflow-hidden">
                  <Image
                    width={261}
                    height={260}
                    src={el.image}
                    className="rounded-full"
                    alt={`${el.title} | ${el.designation}`}
                  />
                </div>
                <h2 className="text-black Gilroy-Bold pt-2 text-center">
                  {el.title}
                </h2>
                <p className="text-black text-sm Gilroy-Light text-center">
                  {el.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center items-center">
          <button onClick={() => setShowAll(!showAll)}>
            <HomeButton>
              <span className="text-sm text-black">
                {showAll ? "Show Less" : "Click here to know everyone"}
              </span>
            </HomeButton>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetCrew;