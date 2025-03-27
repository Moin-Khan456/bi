import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Faqs({ faq }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <h2 className="text-4xl pb-8 Gilroy-Bold">FAQ&rsquo;s</h2>
        <div>
          {faq?.map((el) => (
            <div
              key={el.id}
              className="bg-secondaryBg mb-6 p-4 rounded-lg shadow-md"
            >
              <div
                className="flex justify-between flex-1 cursor-pointer sm:flex-row flex-col gap-4 sm:gap-0"
                onClick={() => toggleFaq(el.id)}
              >
                <h2 className="text-2xl flex-1 text-secondaryTx Gilroy-Bold">
                  {el.title}
                </h2>
                <div
                  className={`flex  justify-center items-center w-10 h-10 bg-primaryTx rounded-full transform transition-transform duration-300 ${
                    openFaq === el.id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <IoIosArrowDown className="text-primaryBg text-lg" />
                </div>
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openFaq === el.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                 {typeof el.description === "string" ? (
                  <p className="mt-3 text-lg text-gray-700">{el.description}</p>
                ) : (
                  <div className="mt-3 text-lg text-gray-700">{el.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
