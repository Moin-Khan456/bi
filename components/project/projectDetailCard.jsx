import React from "react";

const Index = ({ challenge, solution }) => {
  return (
    <main className="container">
      <div className="max-w-full flex flex-col items-center">
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
          <h3 className="text-3xl lg:text-5xl py-8 Gilroy-SemiBold">
            Challenges
          </h3>
          <p className="opacity-50 text-lg">{challenge}</p>
        </div>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
          <h3 className="text-3xl lg:text-5xl py-8 Gilroy-SemiBold">
            Solution
          </h3>
          <p className="opacity-50 text-lg">{solution}</p>
        </div>
      </div>
    </main>
  );
};

export default Index;
