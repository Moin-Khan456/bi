import React from "react";
import Image from "next/image";

function Faqs({faq}) {
  const collapsed = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("collapse-open");
  };

  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <h2 className="text-4xl pb-8 Gilroy-Bold">faq&rsquo;s</h2>
        <div>
          {faq?.map((el) => {
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
                        <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
                          src="https://braininventory.s3.us-east-2.amazonaws.com/images/faq-arrow.svg"
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
