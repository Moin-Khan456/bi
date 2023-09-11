import Link from "next/link";
import React from "react";

function Engagementmodal() {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <div>
          <h2 className="Gilroy-Bold lg:text-4xl text-3xl text-white pt-4 pb-4 ">
            engagement models
          </h2>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
            <div className="box-modal-engagement">
              <h3 className="text-center text-xl Gilroy-Bold my-6">
                dedicated hiring
              </h3>
              <div className="bg-box-m-e">
                <p className="text-sm text-center color-light Gilroy-Light">
                  Have a large project in hand? Need a team for ongoing work
                  under your control? Dedicated hiring is best for you then.
                  Monthly pay as you go. Get access to the best iOS app
                  developers in the industry.
                </p>
              </div>
              <ul className="list-modal">
                <li>8 Hours daily billing</li>
                <li>
                  An exhaustive pool of developers with 4+ Years of experience
                </li>
                <li>Get a dedicated account manager</li>
                <li>
                  Seamlessly communicate with Skype, Email, Zoom, Jira,
                  Confluence, and Slack
                </li>
                <li>Authorized Source Code</li>
                <li>An all-inclusive project tracking</li>
                <li>Assistance to scale your application performance</li>
              </ul>

              <Link href="/contact">
                <button className="bg-yellow-color px-8 h-12 m-auto block my-6 Gilroy-Bold text-base">
                  Enquire Now
                </button>
              </Link>
            </div>
            <div className="box-modal-engagement">
              <h3 className="text-center text-xl Gilroy-Bold my-6">
                Time & material based hiring
              </h3>
              <div className="bg-box-m-e">
                <p className="text-sm text-center color-light Gilroy-Light">
                  If your project scope is not defined, we recommend you going
                  for the Time and Materials based model. You get to hire iPhone
                  app developers for the hours you need, based on your
                  requirement.
                </p>
              </div>
              <ul className="list-modal">
                <li>Hire best app developers for the hours you need</li>
                <li>
                  An exhaustive pool of developers with 4+ Years of experience
                </li>
                <li>
                  Seamlessly communicate with Skype, Email, Zoom, Jira,
                  Confluence, and Slack
                </li>
                <li>Authorized Source Code</li>
                <li>Get complete control over your project development</li>
                <li>An all-inclusive project tracking</li>
                <li>Assistance to scale your application performance</li>
              </ul>

              <Link href="/contact">
                <button className="bg-yellow-color px-8 h-12 m-auto block my-6 Gilroy-Bold text-base">
                  Enquire Now
                </button>
              </Link>
            </div>
            <div className="box-modal-engagement">
              <h3 className="text-center text-xl Gilroy-Bold my-6">
                Fixed price model
              </h3>
              <div className="bg-box-m-e">
                <p className="text-sm text-center color-light Gilroy-Light">
                  If your project scope is defined, you can go for a fixed
                  pricing model. As you send your requirements, we will create a
                  time break up with our proposal based on the features.
                </p>
              </div>
              <ul className="list-modal">
                <li>Hire best app developers for the hours you need</li>
                <li>
                  An exhaustive pool of developers with 4+ Years of experience
                </li>
                <li>
                  Seamlessly communicate with Skype, Email, Zoom, Jira,
                  Confluence, and Slack
                </li>
                <li>Authorized Source Code</li>
                <li>Get complete control over your project development</li>
                <li>An all-inclusive project tracking</li>
                <li>Assistance to scale your application performance</li>
              </ul>

              <Link href="/contact">
                <button className="bg-yellow-color px-8 h-12 m-auto block my-6 Gilroy-Bold text-base">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Engagementmodal;
