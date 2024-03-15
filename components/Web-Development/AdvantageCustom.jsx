import React from 'react';

export default function Advantage({ title, reasons, subhead }) {
  return (
    <div className="container px-4 lg:px-16">
      <h1 className="text-4xl lg:text-5xl Gilroy-Bold w-fit lg:pl-10">
        {title} That We Offer
      </h1>
      <p className="opacity-50 Gilroy lg:pl-10 py-4">{subhead}</p>
      <div className="grid grid-rows-12 gap-8 my-8 h-auto">
        {reasons?.map((ele, index) => (
          <div
            key={index}
            className="bg-customer px-6 py-10 text-start text-slate-400 my-2 lg:w-full"
          >
            <div className="grid grid-cols-12">
              <h2 className="text-2xl font-bold mr-4 text-left leading-none tracking-wider text-white col-span-2">
                {ele.head}
              </h2>
              <p className="col-span-10">{ele.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}