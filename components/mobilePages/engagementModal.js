import Link from "next/link";
import React from "react";
import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import checkImg from "../../public/assets/how-we-work-assets/Vector.webp";

function EngagementModal({listEngagement}) {
  return (
    <div className="lg:p-14 p-8 space-y-6 bg-primaryBg">
      <h2 className="Gilroy-Bold lg:text-4xl text-3xl text-secondaryTx pt-4 pb-4">
        Engagement Models
      </h2>
      <p className="Gilroy-SemiBold lg:text-xl text-lg text-secondaryTx pb-8">
        Whatever the field or platform, we make it happen
      </p>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {listEngagement.map((engagement, index) => (
          <div
            key={index}
            className="bg-primaryBg border-4 border-primaryTx shadow-md rounded-lg p-6 relative flex flex-col justify-between overflow-hidden max-w-full"
          >
            <div className="min-h-[80px] flex items-center justify-center">
              <h3 className="text-center text-2xl lg:text-3xl Gilroy-Bold">
                {engagement.title}
              </h3>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="bg-secondaryBg p-4 rounded-md">
                <p className="text-base mb-2 Gilroy-SemiBold">
                  {engagement.questions[0]}
                </p>
                <p className="text-base Gilroy-SemiBold">
                  {engagement.questions[1]}
                </p>
              </div>

              <ul className="list-disc list-inside space-y-3">
                {engagement.answers.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Image
                      src={checkImg}
                      alt="Check"
                      width={18}
                      height={18}
                      className="shrink-0"
                    />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Link href="/contact">
                <HomeButton className="w-full">Enquire Now</HomeButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EngagementModal;
