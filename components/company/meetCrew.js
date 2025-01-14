import React from "react";
import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import ranjit from "../../public/assets/company-assets/ranjeet.webp";
import aqsa from "../../public/assets/company-assets/aqsa.webp";
import jaydeep from "../../public/assets/company-assets/jaydeep.webp";
import hussain from "../../public/assets/company-assets/hussain.webp";

const meeting = [
  {
    image: ranjit,
    title: "Ranjit Chouhan",
    designation: "Front-End Developer",
  },
  {
    image: aqsa,
    title: "Aqsa Shaikh",
    designation: "Talent Recruiter",
  },
  {
    image: jaydeep,
    title: "Jaydeep Deshmukh",
    designation: "Javascript Developer",
  },
  {
    image: hussain,
    title: "Hussain Pithawala",
    designation: "Sr. Javascript Developer",
  },
  {
    image: ranjit,
    title: "Ranjit Chouhan",
    designation: "Front-End Developer",
  },
  {
    image: aqsa,
    title: "Aqsa Shaikh",
    designation: "Talent Recruiter",
  },
  {
    image: jaydeep,
    title: "Jaydeep Deshmukh",
    designation: "Javascript Developer",
  },
  {
    image: hussain,
    title: "Hussain Pithawala",
    designation: "Sr. Javascript Developer",
  },
  {
    image: ranjit,
    title: "Ranjit Chouhan",
    designation: "Front-End Developer",
  },
  {
    image: aqsa,
    title: "Aqsa Shaikh",
    designation: "Talent Recruiter",
  },
  {
    image: jaydeep,
    title: "Jaydeep Deshmukh",
    designation: "Javascript Developer",
  },
  {
    image: hussain,
    title: "Hussain Pithawala",
    designation: "Sr. Javascript Developer",
  },
];

function meetCrew() {
  return (
    <div className="container flex2xl:p-10 p-8 2xl:space-y-8 space-y-6 pt-24 pb-24 ">
      <div className="lg:grid lg:grid-cols-1 gap-4">
        <div className="flex self-center pr-6 pl-8">
          <div className="my-12 lg:my-0">
            <h2 className="text-black Gilroy-Bold text-5xl">
              Meet the People behind Brain Inventory
            </h2>
            <p className="Gilroy-light text-black text-lg mt-6 mb-4">
              Meet our exceptional team of technology advisors, growth
              facilitators and subject matter experts with proven Industry
              experiences.
            </p>
          </div>
        </div>
        <div className="col-span-2 p-8 flex justify-center items-center">
          <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
            {meeting.map((el) => (
              <div key={el}>
                <div className="w-[261px] h-[260px] mr-2 relative rounded-full bg-secondaryBg object-cover">
                  <Image
                    srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
                    sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
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
        <div className="flex justify-center items-center">
          <HomeButton>
            <span className="text-sm text-black">
              Scroll here to know everyone
            </span>
          </HomeButton>
        </div>
      </div>
    </div>
  );
}

export default meetCrew;
