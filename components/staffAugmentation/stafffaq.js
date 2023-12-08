import React, { Component } from "react";
import { useState } from "react/cjs/react.production.min";


function StafFaq() {
    const collapsed =(id) =>{
      const element = document.getElementById(id);
      element.classList.toggle('collapse-open');
    }
    return (
      <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container padding-left-all-section">
          <h2 className="text-base Gilroy-Bold">FAQ&rsquo;s</h2>
          <h2 className="text-4xl pb-8 Gilroy-Bold">Do you have a Question for us?</h2>
          <div>
            {faqdetails.map((el) => {
              return (
                // collapse-arrow
                <div key={el.id} className="collapse  bg-opening mb-6">
                                  <input type="checkbox" /> 

                  <div className="collapse-title text-xl font-medium">
                    <div className="md:flex block justify-between items-center">
                      <div>
                        <h2 className="text-xl text-white Gilroy-Bold">
                          {el.title}
                        </h2>
                      </div>
                      <div className="flex md:block my-4 md:my-0">
                        <button
                        //   onClick={() => collapsed(el.id)}
                          onClick={() => collapsed(el.title)} 
                          className=""
                        >
                          <img
                            src="/images/faq-arrow.svg"
                            className="cursor-pointer"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-content flex">
                    <div>
                      <p className="Gilroy-Light text-lg">
                        {el.description}
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>

                // <div className='mb-6  border-color-purple border-b-2 pb-6 flex justify-between items-center'>
                //     <h2 className='text-xl text-white Gilroy-Bold '>{el.title}</h2>
                //     <img src='/images/faq-arrow.svg' className='cursor-pointer' />
                // </div>
              );
            })}
            
          </div>
        </div>
      </div>
    );
}
export default StafFaq;
