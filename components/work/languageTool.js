import React, { Component } from "react";

const LanguageTool = () => {
  return (
    <main className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <section className="container">
        <div>
          <h2 className="Gilroy-Bold lg:text-4xl text-3xl text-white pt-8">
            languages, tools and frameworks
          </h2>
          <p className=" pb-8 pt-2">
            Whatever the field or platform, we make it happen
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1">
          <div className="bg-stack lg:mb-0 mb-4">
            <h2>Design</h2>
            <ul className="text-center">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Abode XD</li>
              <li>After Effects</li>
              <li>Sketch</li>
              <li>Invision</li>
            </ul>
          </div>

          <div className="bg-stack lg:mb-0 mb-4">
            <h2>Mobile</h2>
            <ul className="text-center">
              <li>Kotlin</li>
              <li>Swift</li>
              <li>Java</li>
              <li>React Native</li>
              <li>Flutter</li>
              <li>Objective C</li>
            </ul>
          </div>
          <div className="bg-stack lg:mb-0 mb-4">
            <h2>Technologies</h2>
            <ul className="text-center">
              <li>Docker</li>
              <li>Blockchain</li>
              <li>Ruby on Rails</li>
              <li>Ardunio</li>
              <li>NLP</li>
              <li>Data Mining</li>
            </ul>
          </div>
          <div className="bg-stack lg:mb-0 mb-4">
            <h2>Server Side</h2>
            <ul className="text-center">
              <li>LAMP</li>
              <li>Node js</li>
              <li>Mongo</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
export default LanguageTool;
