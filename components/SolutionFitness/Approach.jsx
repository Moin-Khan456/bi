import React from "react";

const Approach = ({ title, desc, points }) => {
  return (
    <div className="padding-left-all-section-1 container px-6">
      <h3 className="font-Satoshi font-bold text-4xl">{title}</h3>
      <h6 className="text-sm py-6 text-slate-300">{desc}</h6>
      <div className="bg-technology py-12 px-8">
        {points.map((ele, index) => (
          <div className="py-4" key={index}>
            <h3 className="text-2xl font-Satoshi py-2 font-Satoshi font-semibold">
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
