import React from "react";
import {IoMdArrowForward} from "react-icons/io";

export default function KeySkill({ type, subhead }) {
    const benefitsList = ["Enhanced Security", "People tend to search for products or services on their phones more than on a Business apps can lack the specialized security measures you need to protect your data, so building a completely customized version can provide peace of mind. ", "Increase Saleslaptop. Having an app for your business available is likely to bring more sales.", "Easier In Maintenance", "When you opt for a general app, you become reliant on an unfamiliar developer team for mobile app creation. If they choose to discontinue development, you'll be left without ongoing progress. "
    ]
    return (
        <div>
            <div className="container padding-left-all-section-1 pb-28">
                <div className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
                    <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
                        Benefits of Custom{" "}
                        <span className="text-[#7600EB]">{type} Development</span>
                    </h2>
                    <p className="Gilroy-Light !text-xl !leading-8 pb-6">
                        {subhead}
                    </p>
                    <div className="">
                        <div>
                            <ul className="team-list">
                                {" "}
                                {benefitsList.map((ele) => (
                                    <>
                                    {ele.startsWith("Easier") && <br/>}
                                        <li>
                                            <IoMdArrowForward className="max-w-[2rem] min-w-[2rem]"/>
                                          {" "}
                                            {ele}
                                        </li>
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
