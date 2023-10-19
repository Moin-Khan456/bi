import Image from "next/image";
import React from "react";

export default function Customer() {

    const customerImages = ["https://d1u4arv5y5eda6.cloudfront.net/images/c-1.png",
        "https://d1u4arv5y5eda6.cloudfront.net/images/c-2.png",
        "https://d1u4arv5y5eda6.cloudfront.net/images/c-3.png",
        "https://d1u4arv5y5eda6.cloudfront.net/images/c-4.png",
        "https://d1u4arv5y5eda6.cloudfront.net/images/c-5.png",
        "https://d1u4arv5y5eda6.cloudfront.net/images/c-6.png"]

    return (
        <main className="my-4 ">
            <section>
                <Image width={1450}
                    height={700}
                    src="https://d1u4arv5y5eda6.cloudfront.net/images/developers.png" alt="Hire dedicated remote developers | Custom software development company"
                    className="w-full"
                />
            </section>
            <section className="px-4 container">
                <section className="lg:bottom-24 relative lg:px-32">
                    <section className="grid lg:grid-cols-2 grid-cols-1 gap-3 bg-customer">
                        <section className="p-8 pl-11 flex items-center">
                            <h2 className="Gilroy-Bold text-3xl leading-10">
                                100+ Satisfied Customers, including Fortune Organizations, Have
                                Placed Their Confidence in Us
                            </h2>
                        </section>
                        <section className="p-8 pl-11 ">
                            <section className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                                {
                                    customerImages.map((ele, index) => (
                                        <section key={index}>
                                            <Image width={120} height={120}
                                                src={ele} alt="Custom Software Development Company | Hire Software Developers"
                                                className="w-customer"
                                            />
                                        </section>
                                    ))
                                }
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    );
}
