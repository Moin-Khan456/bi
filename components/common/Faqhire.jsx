import Image from "next/image";
import React from "react";

function FaqHire({ faq }) {
    const collapsed = (id) => {
        const element = document.getElementById(id);
        element.classList.toggle("collapse-open");
    };

    return (
        <main className="2xl:p-10 p-8 2xl:space-y-8 space-y-6 mobile-view">
            <section className="container padding-left-all-section">
                <h2 className="text-4xl pb-8 Gilroy-Bold">Faq&rsquo;s</h2>
                <section>
                    {faq?.map((el) => {
                        return (
                            <section key={el.id} className="collapse bg-opening mb-6 rounded-xl">
                                <input type="checkbox" />
                                <section className="collapse-title text-xl font-medium">
                                    <section className="md:flex block justify-between items-center">
                                        <section>
                                            <h2 className="text-2xl text-white Gilroy-Bold">
                                                {el.title}
                                            </h2>
                                        </section>
                                        <section className="flex md:block my-4 md:my-0">
                                            <button onClick={() => collapsed(el.id)} className="">
                                                <Image width={el.title.length > 120 ? 85 : 40} height={el.title.length > 90 ? 85 : 40}
                                                    src="https://d1u4arv5y5eda6.cloudfront.net/images/faq-arrow.svg"
                                                    className="cursor-pointer" alt="Custom Software Development Company | Hire Software Developers"
                                                />
                                            </button>
                                        </section>
                                    </section>
                                </section>
                                <section className="collapse-content flex">
                                    <section>
                                        <p>{el.description}</p>
                                    </section>
                                    <section></section>
                                </section>
                            </section>
                        );
                    })}
                </section>
            </section>
        </main>
    );
}

export default FaqHire;
