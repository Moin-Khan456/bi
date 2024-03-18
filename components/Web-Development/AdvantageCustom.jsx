import React from 'react';

export default function AdvantageCustom({ title, reasons, subhead }) {
  return (
    <div className="container px-4 lg:px-16">
      <section>
        <h1 className="text-4xl lg:text-5xl Gilroy-Bold w-fit lg:pl-10">
          {title}
        </h1>
        <p className="opacity-50 Gilroy lg:pl-10 py-4">{subhead}</p>
      </section>

      <section className='mx-8'>
        {reasons?.map((ele, index) => (
          <div className="container flex flex-col items-end" key={index}>
            <div className="bg-customer p-8 lg:py-8 advantage-para my-6 flex flex-col lg:flex-row items-center justify-evenly w-full lg:w-full">
              <h5 className="text-2xl font-bold text-shadow lg:w-[15%]">
                {ele?.head}
              </h5>
              <p className="Gilroy-Light text-sm tracking-wide leading-8 pb-6 lg:w-[70%]">
                {ele?.content}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
