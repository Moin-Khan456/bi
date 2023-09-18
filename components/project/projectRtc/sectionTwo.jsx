import Image from "next/image";
import React from "react";
const Index = () => {
  return (
    <div className="container">
      <div className="py-8 relative flex flex-col items-center justify-center bg-[#000]">
        <h1 className="text-3xl lg:text-6xl text-center flex items-center font-bold text-white">
          What is{" "}
          <Image
            src="https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group+6516.png"
            alt=""
            width={500}
            height={500}
            className="h-12 lg:h-32 mx-4"
          />{" "}
          CRM?
        </h1>
        <div className="px-2 lg:px-48 py-4">
          <p className="font-bold text-white py-4 text-center leading-5 lg:leading-[3rem] text-sm lg:text-2xl opacity-50">
            Revolution Travel CRM (RTC) is a complete Travel planning platform
            with the capability to plan travel from across the world using its
            rich API integrations. Admin, Travel Agent and Customer are the
            three main user roles in this application. With intuitive
            subscription packages, the travel agent can use the platform for
            creating and executing a complete travel plan for their customers.
            As since the platform is dealing with multiple data types and large
            amounts of details, we have used smart layouts to represent the data
            in the form of graphs, charts, KPI&apos;s. Admin and Travel agents
            can also modify the parameters and see the data they want to see
            over the charts. It is fully customisable which helps to focus on
            the main parameters which are important for the travel industry
            business and saves time in analyzing the details. To make it
            user-friendly for the customers (travellers) we have added a mobile
            app so that they can receive timely notification and updates for all
            their travel plans and itineraries.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Index;
