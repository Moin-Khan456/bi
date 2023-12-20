import React from "react";
import Image from "next/image";
const Index = () => {
  return (
    <div className="py-8 relative flex flex-col justify-center bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group%206472.png')]">
      <h1 className="text-center text-3xl Gilroy-Bold lg:text-6xl  lg:mx-44">
        <span className="text-[#7600EB]">Customer&apos;s</span> Outlook
      </h1>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <Image  
         
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Mask Group 259.png"
              width={800}
              height={700}
              className="lg:scale-[1.3]  mt-24"
              alt=""
            />
          </div>
          <div>
            <div className="mt-20 h-[500px] overflow-auto no-scrollbar px-2 lg:px-0">
              <div>
                <Image  
         
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/A.png"
                  width={800}
                  height={500}
                  className="lg:px-24 mt-24"
                  alt=""
                />
              </div>
              <div>
                <Image  
         
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/B.png"
                  width={800}
                  height={500}
                  className="lg:px-24 mt-24"
                  alt=""
                />
              </div>
              <div>
                <Image  
         
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/C.png"
                  width={800}
                  height={500}
                  className="lg:px-24 mt-24"
                  alt=""
                />
              </div>
              <div>
                <Image  
         
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/D.png"
                  width={800}
                  height={500}
                  className="lg:px-24 mt-24"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
