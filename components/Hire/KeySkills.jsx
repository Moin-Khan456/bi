import React from "react";
import {IoMdArrowForward} from "react-icons/io"

export default function KeySkill({ breif, points }) {
  const point1 = points.slice(0, points.length / 2);
  const point2 = points.slice(points.length / 2, points.length);
  return (
    <main>
      <section className="container padding-left-all-section-1 lg:pb-28">
        <section className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            Our Key Skill Set
          </h2>
          <p className="Gilroy-Light !text-xl !leading-8 pb-6">{breif}</p>
          <section className="hidden lg:flex justify-between lg:pr-72">
            <section>
              <ul className="team-list">
                {point1.map((ele) => (
                  <>
                    <br />
                    <li>
                    <IoMdArrowForward/>{" "}
                      {ele}
                    </li>
                  </>
                ))}
              </ul>
            </section>
            <section>
              <ul className="team-list">
                {point2.map(
                  (ele) =>
                    (
                      <>
                        <br />
                        <li>
                          {" "}<IoMdArrowForward/>{" "}
                          {ele}
                        </li>
                      </>
                    )
                )}
              </ul>
            </section>
          </section>

          <section className="grid grid-cols-1 lg:hidden">
            <section>
              <ul className="team-list">
                {points.map((ele) => (
                  <>
                    <br />
                    <li>
                      {" "}
                      <IoMdArrowForward/>{" "}
                      {ele}
                    </li>
                  </>
                ))}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
