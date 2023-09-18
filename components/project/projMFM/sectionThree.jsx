import React from "react";
import PrajectBranding from "./ProjectBranding.js";
import Image from 'next/image'

const Index = ({ text, image }) => {
    return (
        <div>
            <PrajectBranding text={text} />
            <div className="relative flex flex-col items-center py-8">
                <Image
                    src={image}
                    alt=""
                    width={500}
                    height={500}
                    className="lg:w-[70%] mx-auto"
                />
            </div>
        </div>
    );
};

export default Index;
