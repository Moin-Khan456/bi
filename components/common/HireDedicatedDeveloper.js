import React from "react";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";

function HireDedicatedDeveloper(props) {
  return (
    <div className="container padding-left-all-section">
      <div className=" 2xl:p-10 p-8 ">
        <h3 className="text-heading-1 Gilroy-Bold mb-8">
          Hire Dedicated Developers
        </h3>

        <div className="h-[450px] bg-hire-image relative">
          <div className="absolute bottom-4 left-4">
            <Link href="/hire-dedicated-remote-developers">
              <HomeButton>
                <span className="2xl:text-2xl text-xl transition-all">
                  Hire Developers
                </span>
              </HomeButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireDedicatedDeveloper;
