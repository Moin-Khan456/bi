import React from "react";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";

function HireDedicatedDeveloper(props) {
  return (
    <div className="container padding-left-all-section">
      <div className=" 2xl:p-10 p-8 ">
        <h1 className="text-heading-1 Gilroy-Bold mb-8">
          Hire Dedicated Developers
        </h1>

        <div className="h-[450px] bg-hire-image relative">
          <div className="absolute bottom-4 left-4">
            <HomeButton>
              <Link href="/hire-dedicated-remote-developers">
                <span className="2xl:text-2xl text-xl transition-all">
                  Hire Developers
                </span>
              </Link>
            </HomeButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireDedicatedDeveloper;
