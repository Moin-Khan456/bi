import React from "react";
import Image from "next/image";

const faqdetails = [
  {
    id: "1",
    title:
      "I want to keep my iOS app idea confidential. Will you sign an NDA with me?",
    description:
      "A web application runs on a web browser and requires mobile data or wi-fi to work. On the other hand, native app is installed directly on the mobile phone and depends upon the nature of native app; it can work without using an internet connection.",
  },
  {
    id: "2",
    title: "Do I own the ownership and the code of my application?",
    description:
      "A web application runs on a web browser and requires mobile data or wi-fi to work. On the other hand, native app is installed directly on the mobile phone and depends upon the nature of native app; it can work without using an internet connection.",
  },
  {
    id: "3",
    title: "Do you have flexible hiring models?",
    description:
      "A web application runs on a web browser and requires mobile data or wi-fi to work. On the other hand, native app is installed directly on the mobile phone and depends upon the nature of native app; it can work without using an internet connection.",
  },
  {
    id: "4",
    title: "How do you allocate the resources for my app development in iOS?",
    description:
      "A web application runs on a web browser and requires mobile data or wi-fi to work. On the other hand, native app is installed directly on the mobile phone and depends upon the nature of native app; it can work without using an internet connection.",
  },
  {
    id: "5",
    title: "What are some of the top iOS apps developed by you?",
    description:
      "A web application runs on a web browser and requires mobile data or wi-fi to work. On the other hand, native app is installed directly on the mobile phone and depends upon the nature of native app; it can work without using an internet connection.",
  },
];
function Faqs() {
  const collapsed = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("collapse-open");
  };

  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <h2 className="text-4xl pb-8 Gilroy-Bold">faq&rsquo;s</h2>
        <div>
          {faqdetails.map((el) => {
            return (
              <div key={el.id} className="collapse bg-opening mb-6">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  <div className="md:flex block justify-between items-center">
                    <div>
                      <h2 className="text-2xl text-white Gilroy-Bold">
                        {el.title}
                      </h2>
                    </div>
                    <div className="flex md:block my-4 md:my-0">
                      <button onClick={() => collapsed(el.id)} className="">
                        <Image
                          src="https://d1u4arv5y5eda6.cloudfront.net/images/faq-arrow.svg"
                          className="cursor-pointer"
                          alt=""
                          width={40} height={40}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="collapse-content flex">
                  <div>
                    <p>{el.description}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Faqs;
