import Image from "next/image";
import React from "react";

export default function ChooseBraininventory({head, blue, alt}) {
    return (
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6 w-full">
            <div className="container padding-left-all-section-1">
                <div className="">
                    <div>
                        <h1 className="Gilroy-Bold text-4xl leading-[3rem] my-4">
                            {head} <span className="text-[#7600EB]">{blue}</span>
                        </h1>
                        <div className="flex flex-col lg:flex-row w-full">
                            <div className="bg-technology p-10 lg:ml-8 mb-4 flex flex-col items-center">
                                <Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6156.svg" alt={alt} width={40} height={40}/>
                                <p className="Gilroy-Light text-lg opacity-60 pt-4">
                                    We can offer integration with third-party tools, enabling extended website functionality from payment gateways to marketing automation. Our team has the expertise to ensure a seamless experience for your customers.
                                </p>
                            </div>
                            <div className="bg-technology p-10 lg:ml-8 mb-4 flex flex-col items-center">
                                <Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6157.svg"  alt={alt} width={40} height={40}/>
                                <p className="Gilroy-Light text-lg opacity-60 pt-4">
                                At Brain Inventory, our mission is to develop custom web solutions by providing cutting-edge solutions and a highly stable user-friendly website that is tailored to your needs.
                                </p>
                            </div>
                            <div className="bg-technology p-10 lg:ml-8 mb-4 flex flex-col items-center">
                                <Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6158.svg"  alt={alt} width={40} height={40}/>
                                <p className="Gilroy-Light text-lg opacity-60 pt-4">
                                Our delivery processes are transparent, our communication is excellent, and we offer a flexible approach; this allows us to deliver custom software projects to all types of businesses, ranging from startups to large enterprises.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
