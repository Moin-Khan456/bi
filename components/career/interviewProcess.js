import React from "react";

function InterviewProcess() {
  return (
    <div className="2xl:space-y-8 space-y-6 pt-12 pb-12">
      <div className="grid lg:grid-cols-4 grid-cols-1">
        <div className="bg-hr-color">
          <div>
            <h3 className="Gilroy-Bold text-2xl mb-2">Process of Interview</h3>
            <p className="color-light">
              Selection of any candidate is purely depended on their performance
              in the interview process. Generally, there are three stages in the
              interview process which are as follows.
            </p>
          </div>
        </div>
        <div className="bg-hr-1 relative">
          <div className="overlay-content">
            <h1>
              01 <span className="line"></span>
            </h1>
            <h3>HR Interview</h3>
            <p>
              At a first stage a candidate would appear for HR screening where
              they would be asked question related to adaptability, leadership,
              growth potential etc.
            </p>
          </div>
        </div>
        <div className="bg-hr-2 relative">
          <div className="overlay-content">
            <h1>
              02 <span className="line"></span>
            </h1>
            <h3>Personal Interview</h3>
            <p>
              At a first stage a candidate would appear for HR screening where
              they would be asked question related to adaptability, leadership,
              growth potential etc.
            </p>
          </div>
        </div>
        <div className="bg-hr-3 relative">
          <div className="overlay-content">
            <h1>
              03 <span className="line"></span>
            </h1>
            <h3>Pratical Round</h3>
            <p>
              At a first stage a candidate would appear for HR screening where
              they would be asked question related to adaptability, leadership,
              growth potential etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewProcess;
