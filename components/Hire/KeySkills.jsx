import React from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function KeySkill({
  brief,
  points = null,
  gridCol = 4,
  heading = false,
}) {
  return (
    <main>
      <section className="container padding-left-all-section-1 lg:pb-28">
        <section className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10 text-primaryBg">
            {heading
              ? heading.split("%").map((head, index) => {
                  return (
                    <>
                      {index === 0 ? (
                        <span className="!text-primaryBg">{head}</span>
                      ) : (
                        head
                      )}
                    </>
                  );
                })
              : "Our Key Skill Set"}
          </h2>
          <p className="Gilroy-Light !text-xl !leading-8 pb-6">{brief}</p>
          {points && (
            <section className=" ">
              <ul className={`grid lg:grid-cols-${gridCol} md:grid-cols-2 grid-cols-1  gap-6`}>
                {points.map((ele, index) => (
                  <li
                    key={index + 1}
                    className="flex gap-4 h-auto font-light opacity-80  items-start"
                  >
                    <span>
                      <IoMdArrowForward className="text-xl mt-1 text-primaryBg" />
                    </span>
                    <span className="col-span-4 text-primaryBg ">{ele}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </section>
    </main>
  );
}
