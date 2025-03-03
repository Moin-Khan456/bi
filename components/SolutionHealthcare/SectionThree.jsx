import React from "react";

const SectionThree = ({
  title,
  sectionDesc,
  sectionThreeCards,
  tableFooter,
}) => {
  return (
    <div className="px-4">
      <div className="container">
        <h3 className="text-3xl font-Satoshi font-bold">{title}</h3>
        <p className="text-sm py-6 opacity-50">{sectionDesc}</p>
      </div>
      <div className="container bg-primaryBg p-8 mt-4">
        <h2 className="text-3xl font-Satoshi py-4">
          {sectionThreeCards[0]?.head}
        </h2>
        <p className="font-Satoshi font-semibold text-sm opacity-50">
          {sectionThreeCards[0]?.content}
        </p>
      </div>

      <leble className="container block mx-auto bg-primaryBg p-12">
        <table className="w-full px-12">
          <thead className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-2 lg:px-12 ">
            <tr>
              {sectionThreeCards[0]?.tableHead.map((ele, index) => (
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
            {sectionThreeCards[0]?.tableContent.map((ele, index) => (
              <tr
                key={index}
                className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 "
              >
                <td className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 opacity-70">
                  {ele[0]}
                </td>
                <td className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 opacity-70">
                  {ele[1]}
                </td>
                {ele.length > 2 && (
                  <td className="border border-1 font-Satoshi font-semibold py-4 border-secondaryTx px-1 lg:px-12 opacity-70">
                    {ele[2]}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
          <p className="py-4">{tableFooter ?? ""}</p>
        </table>
      </leble>
    </div>
  );
};

export default SectionThree;
