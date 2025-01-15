import React from "react";

const Culture = () => {
  const categories = [
    "Learning & Development",
    "Mindful Personal Guidance",
    "Constructive Feedback",
    "Constructive Feedback",
    "Innovation & Quality First",
    "Proactive Implementation",
    "Best & Global Opportunities",
    "Work with Latest Technology",
  ];
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div>
        <div>
          <h2 className="Gilroy-Bold lg:text-4xl pb-8 text-3xl text-primaryBg pt-8">
            work culture at its best
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-4 gap-6">
          {categories.map((ele, index) => (
            <div key={index} className="bg-development-simply mb-4 lg-mb-0">
              <h2>{ele}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
