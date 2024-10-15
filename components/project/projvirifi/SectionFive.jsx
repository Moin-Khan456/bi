import React from "react";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <div className="py-8 mb-8 relative flex flex-col justify-center bg-virifi-m bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Image+8.png')] bg-repeat lg:py-24 lg:-my-12">
        <div className="container">
          <h3 className="text-center text-3xl Gilroy-Bold lg:text-6xl  lg:mx-44">
            <span className="text-[#7600EB]"> Admin&apos;s</span> Outlook
          </h3>

          <div className="px-4 lg:px-24 lg:py-12 ">
            <div className="">
              <div>
                <Image
                  className="w-full"
                  width={2000}
                  height={500}
                  alt="Custom Software Development Company | Application Development Company"
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6475.png"
                />
              </div>

              <div>
                <Image
                  className="w-full"
                  width={2000}
                  height={500}
                  alt="Custom Software Development Company | Application Development Company"
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6473.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Mask Group 289.png"
          alt="Custom Software Development Company | Application Development Company"
          width={2000}
          height={100}
          className="w-full"
        />
      </div>
    </>
  );
};
export default Index;
