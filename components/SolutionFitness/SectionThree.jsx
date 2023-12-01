import React from "react";

const SectionThree = ({
  title,
  sectionDesc,
  pointers,
  setionThreeCards,
  tableFooter,
}) => {
  return (
    <div className="px-4">
      <div className="container lg:block">
        <h1 className="text-3xl font-Satoshi font-bold">{title}</h1>
        <p className="text-sm py-6 text-slate-400">{sectionDesc}</p>
      </div>
      <div className="container bg-[#121212] p-2 lg:p-8 !mb-8">
        <h2 className="text-3xl font-Satoshi py-4">
          {setionThreeCards[0].head}
        </h2>
        <p className="font-Satoshi font-semibold text-sm text-slate-400">
          {setionThreeCards[0].content}
        </p>
        <ul className="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
          {setionThreeCards[0].points?.map((item, index) => (
            <li className="font-semibold py-2 font-Satoshi" key={index}>
              {item.split("%")[0]}{" "}
              <span className="text-slate-400">{item.split("%")[1]}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="container bg-[#121212] py-8 px-2 lg:px-[3rem] mt-4 ">
        <h2 className="text-3xl font-Satoshi py-2">
          {setionThreeCards[1].head}
        </h2>
        <p className="font-Satoshi font-semibold text-sm text-slate-400">
          {setionThreeCards[1].content}
        </p>
      </div>

      <leble
        className={`container block mx-auto bg-[#121212] ${
          pointers ? "lg:px-12 pt-4 pb-4" : "p-4 lg:p-12"
        }`}
      >
        {pointers ? (
          <ul className="px-[2rem]">
            {setionThreeCards[1].tableContent.map((ele) => (
              <li className="list-disc py-2" key={ele}>
                {ele}
              </li>
            ))}
          </ul>
        ) : (
          <table className="w-full px-12">
            <thead className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">
              <tr>
                {setionThreeCards[1].tableHead.map((ele, index) => (
                  <th
                    key={index}
                    className="border border-1 font-Satoshi font-bold py-4 border-slate-300 text-left px-1 lg:px-12"
                  >
                    {ele}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className=" font-Satoshi font-semibold py-4 border-slate-300 px-1 lg:px-12 ">
              {setionThreeCards[1].tableContent.map((ele, index) => (
                <tr
                  key={index}
                  className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-1 lg:px-12 "
                >
                  <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-1 lg:px-12 ">
                    {ele[0]}
                  </td>
                  <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-1 lg:px-12 ">
                    {ele[1]}
                  </td>
                  {ele.length > 2 && (
                    <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-1 lg:px-12 ">
                      {ele[2]}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
            <p className="py-4">{tableFooter ?? ""}</p>
          </table>
        )}
      </leble>
    </div>
  );
};

export default SectionThree;
