import React from "react";

function TransparentText({ text }) {
  return (
    <div className="text-container">
      <h3 className="transparent-text text-[4rem] md:text-[8rem] lg:text-[9rem]">
        {text}
      </h3>
      <h3 className="absolute text-3xl md:text-5xl lg:text-6xl text-primaryTx font-bold pt-2 lg:pt-6">
        {text}
      </h3>
    </div>
  );
}

export default TransparentText;
