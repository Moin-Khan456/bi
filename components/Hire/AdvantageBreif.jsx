import React from "react";

export default function Advantage({ title, advantages }) {
  return (
    <div>
      <div className="container">
        <div className="lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            Advantages to Hiring a{" "}
            <span className="text-primaryTx">{title}</span>
          </h2>
          {advantages?.map((ele, index) => (
            <p className="Gilroy-Light pb-6 !text-secondaryTx" key={index}>
              {ele}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
