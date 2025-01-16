import Link from "next/link";
import React from "react";

const WhyWork = ({info}) => {
  return (
    <main className="py-14 bg-secondaryBg">
      <section className="container 2xl:px-18 xl:px-16 px-10">
        <div className="">
          <h2 className="Gilroy-Bold lg:text-3xl text-2xl text-secondaryTx">
          {info.title}
          </h2>
          <p className="pt-2 text-secondaryTx text-base lg:w-8/12">
            {info.content[0]}
          </p>
          <p className="pt-8 text-secondaryTx text-base lg:w-8/12">
            {info.content[1]}
          </p>
        </div>
      </section>
    </main>
  );
};

export default WhyWork;
