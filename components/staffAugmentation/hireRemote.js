import React from "react";
import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import Link from "next/link";

function HireRemote(props) {
  return (
    <div className="bg-primaryBg mt-20 mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* Image Section */}
          <div className="w-[80%] flex items-center mx-auto justify-center">
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire.png"
              alt="Custom Software Development Company | Application Development Company"
              fetchPriority="low"
              priority="low"
              width={500}
              height={500}
              className="lg:h-[400px] w-full max-w-xs lg:max-w-full"
            />
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl text-secondaryTx Gilroy-Bold mb-4">
              Hire Remote Developers to Enhance your <br className="hidden lg:block" /> 
              team capability now.
            </h3>
            <div className="flex justify-center lg:justify-start">
              <HomeButton>
                <span className="text-secondaryTx text-base">Let’s talk</span>
              </HomeButton>
            </div>

            <div className="mt-6">
              <h2 className="Gilroy-Bold text-secondaryTx text-lg">Inquiries</h2>
              <Link
                href="mailto:askus@braininventory.com"
                className="text-secondaryTx Gilroy-Light"
              >
                askus@braininventory.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireRemote;
