import React from "react";

const SectionThree = ({
  title,
  sectionDesc,
  pointers,
  sectionThreeCards,
  tableFooter,
}) => {
  return (
    <div className="container padding-left-all-section-1 px-4">
      <div className="container lg:block">
        <h3 className="text-3xl font-Satoshi font-bold">{title}</h3>
        <p className="text-sm py-6 opacity-50">{sectionDesc}</p>
      </div>
      <div className="container bg-secondaryBg p-2 lg:p-8 !mb-8">
        <h2 className="text-3xl font-Satoshi py-4">
          {sectionThreeCards[0].head}
        </h2>
        <p className="font-Satoshi font-semibold text-sm opacity-50">
          {sectionThreeCards[0].content}
        </p>
        <ul className="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
          {sectionThreeCards[0].points?.map((item, index) => (
            <li className="font-semibold py-2 font-Satoshi" key={index}>
              {typeof item === "string" ? (
                <>
                  {item.split("%")[0]}{" "}
                  <span className="opacity-50">{item.split("%")[1]}</span>
                </>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="container bg-secondaryBg py-8 px-2 lg:px-[3rem] mt-4 ">
        <h2 className="text-3xl font-Satoshi py-2">
          {sectionThreeCards[1].head}
        </h2>
        <p className="font-Satoshi font-semibold text-sm opacity-50">
          {sectionThreeCards[1].content}
        </p>
      </div>
      <leble
        className={`container block mx-auto bg-secondaryBg ${
          pointers ? "lg:px-12 pt-4 pb-4" : "p-4 lg:p-12"
        }`}
      >
        {pointers ? (
          <ul className="px-[2rem]">
            {sectionThreeCards[1].tableContent.map((ele) => (
              <li className="list-disc py-2" key={ele}>
                {ele}
              </li>
            ))}
          </ul>
        ) : (
          <table className="w-full px-12">
            <thead className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-2 lg:px-12 ">
              <tr>
                {sectionThreeCards[1].tableHead.map((ele, index) => (
                  <th
                    key={index}
                    className="border border-1 font-Satoshi font-bold py-4 border-secondaryTx text-left px-1 lg:px-12"
                  >
                    {ele}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className=" font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 ">
              {sectionThreeCards[1].tableContent.map((ele, index) => (
                <tr
                  key={index}
                  className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 "
                >
                  <td className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 ">
                    {ele[0]}
                  </td>
                  <td className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 ">
                    {ele[1]}
                  </td>
                  {ele.length > 2 && (
                    <td className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 ">
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
