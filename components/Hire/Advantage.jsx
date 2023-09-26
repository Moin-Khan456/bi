import React from "react";

export default function Advantage({ title, advantages }) {
  return (
    <div>
      <div className="container padding-left-all-section-1">
        <div className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            Advantages to Hiring &nbsp; {title}
          </h2>
          {
            advantages?.map((ele, index) => (
                <p className="Gilroy-Light pb-6" key={index}>{ele}</p>
            ))
          }
          <a href="#talk">
            <button className="rounded-xl bg-contact-c py-6 w-full px-4">
              <p className="p-0 pb-0 text-xs">Got a project in mind?</p>
              <p className="p-0 Gilroy-Bold text-white !opacity-100 text-xl pt-3">
                Contact Us!
              </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}