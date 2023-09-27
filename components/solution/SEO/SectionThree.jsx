import React from "react";

const SectionThree = () => {
  return (
    <div className="container padding-left-all-section pb-12 lg:p-0 p-6">
      <h1 className="text-3xl Gilroy-Bold">Social Media Industry Insights</h1>
      <p className="text-sm py-6 Gilroy-Medium">
      In the fast-paced world of social media, staying ahead of the curve is crucial. Here, we present some of the latest industry insights sourced from the reputable data aggregator, Statista.
      </p>
      <div className="bg-[#121212] p-8">
        <h2 className="text-3xl Gilroy-Bold py-4">
        The Current Landscape of Social Media
        </h2>
        <p className="Gilroy-Medium font-semibold text-sm text-slate-500">
        Social media has grown exponentially in the past decade. Today, it’s a significant part of our lives, shaping both personal interactions and business strategies. Let’s delve into the specifics.
        </p>
        <ul class="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
          <li className="font-semibold py-2 Gilroy-Medium">
          As of 2021, there are approximately 4.48 billion active social media users worldwide.
          
          </li>
          <li className="font-semibold py-2 Gilroy-Medium">
          Facebook is the leading social network, with over 2.8 billion active users.
          </li>
          <li className="font-semibold py-2 Gilroy-Medium">
          Instagram reached 1 billion monthly active users in 2020.
          </li>
        </ul>
      </div>

      <div className="bg-[#121212] p-8 my-6">
        <h2 className="text-3xl Gilroy-Bold py-4">
        Impact of Social Media on Business
        </h2>
        <p className="Gilroy-Medium font-semibold text-sm text-slate-500">
        In the modern business landscape, social media is a powerful tool for reaching new customers and strengthening brand identity. Here are some key findings that illustrate this impact.
        </p>
        <ul class="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
          <li className="font-semibold py-2 Gilroy-Medium">
          Approximately 90.4% of Millennials, 77.5% of Generation X, and 48.2% of Baby Boomers are active social media users.
          
          </li>
          <li className="font-semibold py-2 Gilroy-Medium">
          54% of social browsers use social media to research products.
          </li>
          <li className="font-semibold py-2 Gilroy-Medium">
          73% of marketers believe that their efforts through social media marketing have been ‘somewhat effective’ or ‘very effective’ for their business.
          </li>
        </ul>
      </div>
      <p className="text-sm py-6 Gilroy-Medium">These insights underscore the expanding role of social media in our lives and businesses. Stay aware, stay informed, and leverage the power of social media for your success.</p>
    </div>
  );
};

export default SectionThree;