import React from "react";

const WhyMean = ({ type, meanReasons }) => {
  return (
    <main className="container lg:px-24">
      <section>
        <h3 className="text-3xl text-center lg:text-start lg:text-5xl sm:pl-8">
          Why you may need a &nbsp;
          <span className="text-primaryTx">{type} Development</span> services?
        </h3>
        <aside className="flex flex-row gap-4 w-full">
          <ol className="sm:text-xl text-lg w-full p-4 font-Satoshi">
            {meanReasons?.map((ele, index) => (
              <p
                className="bg-technology lg:px-4 mr-4 my-4 p-4 lg:py-6 lg:my-4 w-auto text-center lg:h-[150px] sm:h-[200px]"
                key={index}
              >
                <span className="opacity-70 Gilroy-Light">{ele}</span>
              </p>
            ))}
          </ol>
        </aside>
      </section>
    </main>
  );
};

export default WhyMean;
