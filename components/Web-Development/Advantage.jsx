import React from "react";

export default function Advantage({ title, para1, para2, para3, para4, para5, para6, reasons }) {
    return (
        <div className="container padding-left-all-section-1">
            <h1 className='text-4xl lg:text-5xl Gilroy-Bold w-fit lg:pl-10'>Benefits of <span className='text-[#7600EB]'>PHP Development</span></h1>

            <div className="flex flex-col my-8 h-auto ">
                {
                    reasons.map((ele, index) => (
                        <div key={index} className="bg-customer px-6 py-8 mx-8 text-start text-slate-400 my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider">{ele}</div>
                    ))
                }
            </div>
            {/* </div> : <div className="flex flex-col my-8 h-auto">
                <div className="bg-customer px-6 py-8 mx-8 text-center text-slate-400 my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider">{para1}</div>
                <div className="bg-customer px-6 py-8 mx-8 text-center text-slate-400 my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider">{para2}</div>
                <div className="bg-customer px-6 py-8 mx-8 text-center text-slate-400 my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider">{para3}</div>
                <div className="bg-customer px-6 py-8 mx-8 text-center text-slate-400 my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider">{para4}</div>
                <div className="bg-customer px-6 py-8 mx-8 text-center text-slate-400 my-2 lg:w-full  leading-8 Gilroy-Semibold tracking-wider">{para5}</div>
            </div>} */}
        </div>
    );
}
