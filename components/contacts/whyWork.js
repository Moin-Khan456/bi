import Link from "next/link";
import React from "react";

const WhyWork = () => {
  return (
    <main className="my-20">
      <section className="container 2xl:px-18 xl:px-16 px-10">
        <div className="">
          <h2 className="Gilroy-Bold lg:text-6xl text-3xl text-white">
            why work with <br /> brain inventory?
          </h2>
          <p className="pt-8 text-gray-300 text-base lg:w-8/12">
            When you join <Link href="/" className="text-[#2186ff]">Brain Inventory</Link>, you join a thriving company and
            become a part of a diverse collection of free- thinkers and industry
            experts who are all driven to use technology to reimagine what’s
            possible. At Brain Inventory, you explore new challenges, get
            skillful learning at every project, and have a team of like-minded
            people where you can be your best self.
          </p>
          <p className="pt-8 text-gray-300 text-base lg:w-8/12">
            Life at Brain Inventory is brimming with a dynamic and fun
            environment, where people not only ace at their field of expertise
            but also give meaning to their passion. We provide opportunities to
            grow and excel in your career and beyond. Along with creating an
            impact on technology, you also have the chance to unleash your full
            potential at every stage of your career with Brain Inventory.
          </p>
        </div>
      </section>
    </main>
  );
};

export default WhyWork;
