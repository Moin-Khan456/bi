import React from "react";

const SectionThree = () => {
  return (
    <div className="container padding-left-all-section pb-12 lg:p-0 p-6">
      <h3 className="text-3xl Gilroy-Bold">Social Media Industry Insights</h3>
      <p className="text-sm py-6 Gilroy-Bold opacity-50 tracking-wider ">
        In the fast-paced world of social media solutions, staying ahead of the
        curve is crucial. Here, we present some of the latest industry insights
        sourced from the reputable data aggregator, Statista.
      </p>
      <div className="bg-[#121212] p-8">
        <h2 className="text-3xl Gilroy-Bold py-4">
          The Current Landscape of Social Media
        </h2>
        <p className="Gilroy-Medium font-semibold text-sm opacity-50">
          Social media has grown exponentially in the past decade. Today,
          it&apos;s a significant part of our lives, shaping both personal
          interactions and business strategies. Let&apos;s delve into the
          specifics.
        </p>
        <ul class="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
          <li className="font-semibold py-2 Gilroy-Medium">
            <span className="opacity-50">
              As of 2021, there are approximately 4.48 billion active social
              media users worldwide
            </span>
          </li>
          <li className="font-semibold py-2 Gilroy-Medium">
            <span className="opacity-50">
              Facebook is the leading social network, with over 2.8 billion
              active users
            </span>
          </li>
          <li className="font-semibold py-2 Gilroy-Medium">
            <span className="opacity-50">
              Instagram reached 1 billion monthly active users in 2020.{" "}
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-[#121212] p-8 my-6">
        <h2 className="text-3xl Gilroy-Bold py-4">
          Impact of Social Media on Business
        </h2>
        <p className="Gilroy-Medium font-semibold text-sm opacity-50">
          In the modern business landscape, social media is a powerful tool for
          reaching new customers and strengthening brand identity. Here are some
          key findings that illustrate this impact.
        </p>
        <ul class="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
          <li className="font-semibold py-2 Gilroy-Medium">
            <span className="opacity-50">
              Approximately 90.4% of Millennials, 77.5% of Generation X, and
              48.2% of Baby Boomers are active social media users.
            </span>
          </li>
          <li className="font-semibold py-2 Gilroy-Medium">
            <span className="opacity-50">
              54% of social browsers use social media to research products
            </span>
          </li>
          <li className="font-semibold py-2 Gilroy-Medium">
            <span className="opacity-50">
              73% of marketers believe that their efforts through social media
              marketing have been &apos;somewhat effective&apos; or &apos;very
              effective&apos; for their business.
            </span>
          </li>
        </ul>
      </div>
      <p className="text-sm py-6 Gilroy-Medium">
        These insights underscore the expanding role of social media in our
        lives and businesses. Stay aware, stay informed, and leverage the power
        of social media for your success.
      </p>
    </div>
  );
};

export default SectionThree;
