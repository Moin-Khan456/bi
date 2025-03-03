import React from "react";

const Approach = ({ title, desc, points }) => {
  return (
    <div className="container px-6">
      <h3 className="font-Satoshi font-bold text-4xl">{title}</h3>
      <h6 className="text-lg py-6 text-slate-300">{desc}</h6>
      <div className="bg-technology py-12 px-8">
        <h2 className="text-3xl Gilroy-SemiBold">{points.heading1}</h2>
        <p className="opacity-50 py-4">{points.subhead1}</p>
        <div
          className={`grid grid-cols-1 lg:grid-cols-${points.colsPerGrid1}  pb-12 `}
        >
          {points.list1.map((ele, index) => (
            <h3 key={index} className="text-lg Gilroy-Light py-2 text-slate-300">
              {ele}
            </h3>
          ))}
        </div>

        <h2 className="text-3xl Gilroy-SemiBold">{points.heading2}</h2>
        <p className="opacity-50 py-4 ">{points.subhead2}</p>
        <div
          className={`grid grid-cols-1 lg:grid-cols-${points.colsPerGrid2}  pb-12 `}
        >
          {points.list2.map((ele, index) => (
            <h3 key={index} className="text-lg Gilroy-Light py-2 text-slate-300">
              {ele}
            </h3>
          ))}
        </div>

        <h2 className="text-3xl Gilroy-SemiBold">{points.heading3}</h2>
        <p className="opacity-50 py-4 ">{points.subhead3}</p>
        <div
          className={`grid grid-cols-1 lg:grid-cols-${points.colsPerGrid3}  pb-12 `}
        >
          {points.list3.map((ele, index) => (
            <h3 key={index} className="text-lg Gilroy-Light py-2 text-slate-300">
              {ele}
            </h3>
          ))}
        </div>

        <h2 className="text-3xl Gilroy-SemiBold">{points.heading4}</h2>
        <p className="opacity-50 py-4">{points.subhead4}</p>
        <div
          className={`grid grid-cols-1 lg:grid-cols-${points.colsPerGrid4}  pb-12 `}
        >
          {points.list4.map((ele, index) => (
            <h3 key={index} className="text-lg Gilroy-Light py-2 text-slate-300">
              {ele}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
