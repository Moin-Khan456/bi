import React from "react";

function TransparentText({ text }) {
    return (
        <div className="text-container">
            <h1 className="transparent-text text-[4rem] md:text-[8rem] lg:text-[9rem]">{text}</h1>
            <h1 className="absolute text-3xl md:text-5xl lg:text-6xl text-white font-bold pt-2 lg:pt-6">
                {text}
            </h1>
        </div>
    );
}

export default TransparentText;
