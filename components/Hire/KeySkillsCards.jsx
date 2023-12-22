import React from "react";

export default function KeySkill({ breif, points, grid, width }) {
    return (
        <div>
            <div className="container px-4 lg:px-6 lg:pb-28">
                <div className="lg:p-12 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
                    <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
                        Our Key Skill Set
                    </h2>
                    <p className="Gilroy-Light !text-xl !leading-8 pb-6">{breif}</p>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="container">
                            <ul className={`team-list grid grid-cols-1 ${grid ?? 'lg:grid-cols-4'}`}>
                                {points?.map((ele) => (
                                    <>
                                        <div className={`bg-customer hover:scale-105 m-1 p-8 text-center flex items-center justify-center ${ width ?? 'w-[250px]'} h-[150px]`}>
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
