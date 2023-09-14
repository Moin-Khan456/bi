import React from "react";

export default function KeySkill({ breif, points }) {
    return (
        <div>
            <div className="container padding-left-all-section-1 lg:pb-28">
                <div className="lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
                    <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
                        Our Key Skill Set
                    </h2>
                    <p className="Gilroy-Light !text-xl !leading-8 pb-6">{breif}</p>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="container">
                            <ul className="team-list grid grid-cols-1 lg:grid-cols-4">
                                {points?.map((ele) => (
                                    <>
                                        <div className={`bg-customer m-1 p-8 text-center w-[250px] h-[150px]`}>
                                            {ele}
                                        </div>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
