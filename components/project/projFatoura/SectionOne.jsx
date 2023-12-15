import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Index = ({ section }) => {
    return (
        <div className="max-w-full lg:min-h-screen flex flex-col px-4 lg:px-12">
            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" width={600} height={600} src={section.logo} className="lg:w-1/6 py-12" alt="Fatoura" />
            <h1 className="text-4xl lg:text-6xl">{section.brief} <span className="text-[#F39573]">{section.styleBrief}</span></h1>
            <p className="opacity-50 lg:w-[45%] lg:leading-10 py-4">Creates and manages customized invoices with data security which helps in promoting your brand and expanding your business.</p>
            <div className="lg:flex items-end">
                <span className="flex justify-between items-center">Made With&nbsp;&nbsp;&nbsp;<Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/XD.png" width={500} height={500} className="w-[10%] lg:w-[20%]" alt="Accounting Based Software Development Company"/></span>
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between py-4">
                <div className="w-full py-4 lg:w-2/6">
                    <h4 className="text-2xl w-full lg:w-3/6">Make you life easier by online invoices.</h4>
                    <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group+6409.png" alt="trusted users" width={400} height={400} className="w-1/4 py-4" />
                </div>
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/template.png" alt="" width={1000} height={1000} className="w-full lg:w-1/3 relative lg:-top-40 "/>
            </div>
        </div>
    );
};

export default Index;