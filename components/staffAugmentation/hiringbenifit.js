import Image from "next/image";
import React from "react";

function Hiringbenifit(props) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section-1">
        <h3 className="text-lg Gilroy-Bold">
          Benefits of hiring remote developers from India
        </h3>
        <h2 className="text-4xl Gilroy-Bold">
          Hire Remote Developers At Affordable Cost
        </h2>

        <div className="lg:flex mt-12 justify-between">
          <div className="lg:w-[30%]">
            <p className="mb-6 Gilroy-Medium color-light text-lg">
              With the advent of technology, India has become a hub for startups
            </p>
            <p className="mb-6 Gilroy-Medium color-light text-lg">
              With the right mix of affordability, quality assurance, and time
              overlap with major countries, it is no wonder that we are the top
              country to hire remote development teams.
            </p>
            <p className="mb-6 Gilroy-Medium color-light text-lg">
              Leverage all such benefits and cut hiring costs to boost the
              growth of your startup with Brain Inventory, a top web, and app
              development company.
            </p>
            <h3 className="Gilroy-Bold text-2xl mt-12">90+ Clients From</h3>
            <p>Cities across globe</p>
          </div>

          <div className="lg:w-[40%] lg:mt-0 mt-4">
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/globe.png"
              alt="Custom Software Development Company | Application Development Company"
              fetchPriority="low"
              priority="low"
              width={500}
              height={500}
              className="px-12"
            />
          </div>

          <div className="lg:w-[30%]">
            <div className="">
              <h3 className="lg:text-right text-2xl Gilroy-Bold pt-6">75%</h3>
              <p className="lg:text-right color-light pb-6 border-b-2-cg">
                Employment Rate by IT Industry
              </p>
            </div>
            <div className="">
              <h3 className="lg:text-right text-2xl Gilroy-Bold pt-6">
                2,000,000+
              </h3>
              <p className="lg:text-right color-light pb-6 border-b-2-cg">
                New Trained Professionals Every Year
              </p>
            </div>
            <div className="">
              <h3 className="lg:text-right text-2xl Gilroy-Bold pt-6">
                $500 Billion
              </h3>
              <p className="lg:text-right color-light pb-6 border-b-2-cg">
                IT Market Revenue in india(by 2025)
              </p>
            </div>
          </div>
        </div>

        <p className="lg:w-[50%] mt-8 color-light">
          India&lsquo;s IT industry has the highest employment rate in the
          world, and it produces skilled and competent talent every year. With
          business-friendly policies, India remains the most preferred country
          to hire remote dedicated developers.
        </p>
      </div>
    </div>
  );
}

export default Hiringbenifit;
