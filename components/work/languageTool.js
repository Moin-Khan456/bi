import React, { Component } from "react";
const technologies = [
  {
    title: "Design",
    technology: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Abode XD",
      "After Effects",
      "Invision",
    ],
    rightBorder: true,
  },
  {
    title: "Mobile",
    technology: [
      "Kotlin",
      "Swift",
      "Java",
      "React Native",
      "Flutter",
      "Objective C",
    ],
    rightBorder: true,
  },
  {
    title: "Technologies",
    technology: [
      "Docker",
      "Blockchain",
      "Ruby on Rails",
      "Ardunio",
      "NLP",
      "Data Mining",
    ],
    rightBorder: true,
  },
  {
    title: "Server Side",
    technology: ["LAMP", "Node js", "Mongo", "Redis"],
    rightBorder: false,
  },
];
const LanguageTool = () => {
  return (
    <main className="p-4 mt-16 lg:p-14 2xl:space-y-8 space-y-6 bg-secondaryBg">
      <section className="container">
        <div>
          <h2 className="Gilroy-Bold lg:text-4xl text-3xl text-secondaryTx pt-8">
            Languages, Tools and Frameworks
          </h2>
          <p className=" pb-8 pt-2">
            Whatever the field or platform, we make it happen{" "}
          </p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 ">
        {technologies.map((data, index) => (
            <div
              className={`border-4 ${
                data.rightBorder ? "lg:border-r-0" : ""
              } border-primaryTx`}
              key={index}
            >
              <h2 className="p-4 text-xl Gilroy-Bold">{data.title}</h2>
              <ul className={`px-4 py-2 Gilroy-SemiBold bg-primaryBg ${data.rightBorder ? "":"h-[160px]"}`}>
                {data.technology.map((value, i) => (
                  <li key={i}>{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
export default LanguageTool;
