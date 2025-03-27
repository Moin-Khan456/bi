import React from "react";

const Approach = ({ title, desc, points }) => {

  return (
    <div className={`container padding-left-all-section-1 p-8 sm:px-6  !mt-[10rem]`}>
      <h3 className="font-Satoshi text-4xl font-bold">{title}</h3>
      <h6 className="py-6 text-sm text-secondaryTx opacity-80">{desc}</h6>
      
      <div className="bg-technology px-8 py-12">
        {points.map((ele, index) => (
          <div className="py-4" key={ele.id || index}>
            <h3 className="font-Satoshi text-2xl font-semibold py-2">
              {ele.head}
            </h3>
            <p className="text-sm text-slate-300">{ele.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;