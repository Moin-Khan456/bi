import React from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function KeySkill({ breif, points }) {
  return (
    <main>
      <section className="container padding-left-all-section-1 lg:pb-28">
        <section className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            Our Key Skill Set
          </h2>
          <p className="Gilroy-Light !text-xl !leading-8 pb-6">{breif}</p>
          <section className="hidden lg:flex justify-between items-center">
            <section>
              <ul className="team-list grid grid-cols-3 justify-start">
                {points?.map((ele, index) => (
                  <li key={index + 1} className="grid grid-cols-2">
                    <IoMdArrowForward className="w-[3rem] text-xl" /> <span className="pt-2 ">{ele}</span>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
