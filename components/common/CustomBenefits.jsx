import Image from "next/image";
import React from "react";

export default function KeySkill({ type, subhead, benefitsList }) {
  return (
    <main>
      <section className="container padding-left-all-section-1 pb-28">
        <section className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10 text-primaryBg">
            Benefits of Custom
            <span className="text-primaryBg">{type} Development</span>
          </h2>
          <h3 className="xl:text-xl text-lg opacity-80 text-primaryBg Gilroy-Light mb-8 leading-10">
            {subhead}
          </h3>
          <section className="">
            <section>
              <ul className="team-list">
                {benefitsList?.map((ele, index) => (
                  <li key={index} className="text-primaryBg">
                    <Image
                      src="https://braininventory.s3.us-east-2.amazonaws.com/images/right-arrow.svg"
                      width={20}
                      height={20}
                      alt="Arrow Forward"
                    />
                    &nbsp;
                    {ele}
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
