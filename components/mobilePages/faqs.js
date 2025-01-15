import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

function Faqs({ faq }) {
  const collapsed = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("collapse-open");
  };

  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <h2 className="text-4xl pb-8 Gilroy-Bold">faq&rsquo;s</h2>
        <div>
          {faq?.map((el) => {
            return (
              <div key={el.id} className="collapse bg-secondaryBg mb-6">
                <label htmlFor="faq-checkbox" />
                <input type="checkbox" id="faq-checkbox" />
                <div className="collapse-title text-xl font-medium">
                  <div className="md:flex block justify-between items-center">
                    <div>
                      <h2 className="text-2xl text-secondaryTx Gilroy-Bold">
                        {el.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => collapsed(el.id)}
                      className="flex items-center justify-center"
                    >
                      <div className="flex justify-center items-center w-10 h-10 bg-primaryTx rounded-full">
                        <IoIosArrowDown className="text-white text-lg" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="collapse-content flex">
                  <div>
                    <p>{el.description}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Faqs;
