import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

export default function BusinessPathways({
  heading,
  subhead,
  EngageOptions = null,
}) {
  return (
    <main>
      <section className="container padding-left-all-section-1 lg:pb-28">
        <section className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10 text-primaryBg">
            {heading ? (
              heading.split(/(%.*?%)/).map((part, index) => {
                // Check if part is between '%' symbols
                if (part.startsWith('%') && part.endsWith('%')) {
                  return (
                    <span key={index} className="text-primaryTx">
                      {part.slice(1, -1)}
                    </span>
                  );
                } else {
                  return <span key={index}>{part}</span>;
                }
              })
            ) : (
              <span>Our Key Skill Set</span>
            )}
          </h2>

          <p className="Gilroy-Light !text-l !leading-8 pb-6">{subhead}</p>

          <section className="hidden lg:flex justify-between lg:pr-72"></section>

          {EngageOptions && <div className="grid lg:grid-row-3 md:grid-row-2 grid-row-1 gap-6">
            {EngageOptions.map((option, index) => (
              <div key={index} className="p-0 advantage-para m-0">
                <h2 className="text-2xl Gilroy-Bold mb-1 leading-8 text-primaryBg">
                  {option.head}
                </h2>

                <p className="Gilroy-Light text-base leading-8 pb-4">
                  {option.content}
                </p>
              </div>
            ))}
          </div>}
        </section>
      </section>
    </main>
  );
}
