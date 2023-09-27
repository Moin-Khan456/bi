import React from "react";

const SectionThree = () => {
  return (
    <div className="container py-12 px-4">
      <h1 className="text-3xl font-Satoshi font-bold">Fitness Industry Insights</h1>
      <p className="text-sm py-6 text-slate-400">
        Fitness is an ever-evolving realm that is rapidly embracing
        technological advancements. Here are some captivating insights about the
        fitness industry:
      </p>
      <div className="bg-[#121212] p-8">
        <h2 className="text-3xl font-Satoshi py-4">
          The Current Fitness Landscape
        </h2>
        <p className="font-Satoshi font-semibold text-sm text-slate-400">
          Fitness has always been significant, but recent years have seen an
          unprecedented surge in its digitization. With the rise of various web
          and mobile solutions, the fitness sector is undergoing a remarkable
          transformation. Here are some statistics to support this trend:
        </p>
        <ul class="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
          <li className="font-semibold py-2 font-Satoshi">
            Global Market Value:{" "}
            <span className="text-slate-400">
              The fitness industry had a global market value of $100 billion in
              2019.
            </span>
          </li>
          <li className="font-semibold py-2 font-Satoshi">
            Average Gym Membership Cost:{" "}
            <span className="text-slate-400">
              The average cost of a gym membership is $58 per month.
            </span>
          </li>
          <li className="font-semibold py-2 font-Satoshi">
            Online Fitness Users:{" "}
            <span className="text-slate-400">
              There were over 90 million online fitness users in 2020.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-[#121212] p-8 my-6">
        <h2 className="text-3xl font-Satoshi py-4">
          The Impact of Online Platforms on Fitness Goals
        </h2>
        <p className="font-Satoshi font-semibold text-sm text-slate-400">
          As our world becomes increasingly digital, more people are turning to
          online platforms to help them achieve their fitness goals. These
          platforms offer a wide range of resources, from workout routines to
          dietary plans, providing users with the tools they need to reach their
          desired health and fitness level. But the question remains - just how
          impactful are these platforms? <br /> <br /> Let&apos;s take a look at
          some statistics:
        </p>
        <table className="w-full my-12">
          <thead className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">
            <tr className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">
              <th className="border border-1 font-Satoshi font-bold py-4 border-slate-300 text-left px-2 lg:px-12 w-[66%]">Statistic</th>
              <th className="border border-1 font-Satoshi font-bold py-4 border-slate-300 text-left px-2 lg:px-12">Source</th>
            </tr>
          </thead>
          <tbody className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">
            <tr className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">
              <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">Over 75% of people use health and fitness solutions more than once a week.</td>
              <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">Flurry Analytics</td>
            </tr>
            <tr className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">
              <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">Health and fitness solutions usage grew by over 330% in just three years.</td>
              <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">Flurry Analytics</td>
            </tr>
            <tr className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">
              <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">59% of users say that they are more active due to their use of fitness solutions.</td>
              <td className="border border-1 font-Satoshi font-semibold py-4 border-slate-300 px-2 lg:px-12 ">Flurry Analytics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionThree;
