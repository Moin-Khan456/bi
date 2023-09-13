import React from "react";

export default function HireSteps({ type }) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section-1">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h1 className="Gilroy-Bold text-4xl lg:text-6xl lg:leading-[4.5rem]">
              Hire {type} App Developers From Brain Inventory in 4 Easy Steps
            </h1>
            <a href="#talk">
              <button className="bg-engagedment h-12 flex justify-center items-center rounded-lg px-8 Gilroy-Bold mt-7">
                Book a Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.018"
                  height="17.535"
                  viewBox="0 0 18.018 17.535"
                  className="ml-2 h-3"
                >
                  <path
                    id="Path_16513"
                    data-name="Path 16513"
                    d="M13.25,21V6m0,0,7,7.2m-7-7.2-7,7.2"
                    transform="translate(22.25 -4.482) rotate(90)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                </svg>
              </button>
            </a>
          </div>
          <div>
            <div className="bg-technology p-10 lg:ml-8 mb-4">
              <h3 className="Gilroy-Bold text-2xl">Share Your Requirements</h3>
              <p className="Gilroy-Light text-lg opacity-60 pt-2">
                We’ll schedule a quick call and understand your project
                requirements thoroughly. Don’t worry! It’s secure and
                confidential.
              </p>
            </div>
            <div className="bg-technology p-10 lg:ml-8 mb-4">
              <h3 className="Gilroy-Bold text-2xl">
                Shortlist the Right-Fit Talent
              </h3>
              <p className="Gilroy-Light text-lg opacity-60 pt-2">
                We’ll conduct a talent screening, pick, and curate a list of
                right-fit dedicated talents for hire.
              </p>
            </div>
            <div className="bg-technology p-10 lg:ml-8 mb-4">
              <h3 className="Gilroy-Bold text-2xl">Interview the Talent</h3>
              <p className="Gilroy-Light text-lg opacity-60 pt-2">
                Schedule the interview with the talent, matching skill sets to
                your requirements.
              </p>
            </div>
            <div className="bg-technology p-10 lg:ml-8 mb-4">
              <h3 className="Gilroy-Bold text-2xl">
                Onboard & Begin the Project
              </h3>
              <p className="Gilroy-Light text-lg opacity-60 pt-2">
                Once you find your right-fit talent, we’ll help you remotely
                onboard, begin the project, and provide support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
