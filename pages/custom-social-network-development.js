import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Marquee from "react-easy-marquee";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
const Header = dynamic(() => import("../components/ppc/Header.jsx"));
const TailMatrix = dynamic(() => import("../components/ppc/Tailmatrix.jsx"));
const Idea = dynamic(() => import("../components/ppc/Idea.jsx"));
const WhyBI = dynamic(() => import("../components/ppc/WhyBI.jsx"));
const Trust = dynamic(() => import("../components/ppc/Trust.jsx"));
const Network = dynamic(() => import("../components/ppc/Network.jsx"));
const Projects = dynamic(() => import("../components/ppc/Projects.jsx"));
const CustomSocialNetwork = dynamic(() =>
  import("../components/ppc/CustomSocialNetwork.jsx")
);
const Loader = dynamic(() =>
  import("../components/common/loader")
);
const HireBanner = dynamic(() => import("../components/ppc/HireBanner.jsx"));

function HireAangularJsDeveloper(props) {
  const [pop, setPop] = useState(false);
  const [localForm, setLocal] = useState(true);
  const [loadComp, setLoadComp] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.smartlook ||
        (function (d) {
          var o = (window.smartlook = function () {
              o.api.push(arguments);
            }),
            h = d.getElementsByTagName("head")[0];
          var c = d.createElement("script");
          o.api = new Array();
          c.async = true;
          c.type = "text/javascript";
          c.charset = "utf-8";
          c.src = "https://web-sdk.smartlook.com/recorder.js";
          h.appendChild(c);
        })(document);
      window.smartlook("init", "a3459c65e0d69bf6b6ff9d9b4120d4f1dc6aa787", {
        region: "eu",
      });
    }
  });

  return (
    <>
      <Head>
        <title>We Develop Highly Engaging Custom Social Networks</title>
        <meta
          name="description"
          content="Hire top-rated Web and Mobile app Developers from Brain Inventory to build highly scalable Application. Our experienced developers build highly customized applications for different sizes of businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="We Develop Highly Engaging Custom Social Networks"
        />
        <meta
          property="og:description"
          content="Hire top-rated Web and Mobile app Developers from Brain Inventory to build highly scalable Application. Our experienced developers build highly customized applications for different sizes of businesses."
        />
        <meta property="og:url" content="https://braininventory.in/custom-social-network-development" />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.comimages/I-1.png"
        />
        
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Loader />
      <div className="h-fit -rotate-90 fixed -left-[99vw] top-0 w-[200vw] z-50 hidden lg:block">
        <Marquee duration={70000}>
          <div className="bg-[#c0f7f1] text-black py-2 font-bold">
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp; braininventory.in &nbsp;
            braininventory.in &nbsp; braininventory.in &nbsp; braininventory.in
            &nbsp; braininventory.in &nbsp;
          </div>
        </Marquee>
      </div>
      <div className="relative  overflow-hidden">
        <Header setPop={setPop} pop={pop}></Header>
        <div className="mt-32">
          <HireBanner
            content="Get unmatched customer engagement by our powerful social networks"
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/ppc/Group+6768.png"
            alt="Android Appp Development Services, Android App Development"
            setPop={setPop}
            pop={pop}
            localForm={localForm}
            setLocal={setLocal}
          />

          <div className="container">
            <div className="flex justify-between mx-8 lg:pl-24 my-8 lg:my-0">
              <h1 className="text-head text-center lg:text-start mt-8 text-5xl lg:text-[4.5rem] font-extrabold font-satoshi">
                <p className="w-full text-2xl font-normal">We are a</p>
                creative social <br className="hidden lg:block" /> platform
                development <br className="hidden lg:block" /> company
              </h1>
              <div className="flex flex-col">
                {!localForm && (
                  <div className="w-full h-[70%] hidden lg:block">
                    <Image
                      src="https://braininventory.s3.us-east-2.amazonaws.com/images/ppc/Group+6771.png"
                      priority={true}
                      alt=""
                      width={150}
                      height={150}
                      className="animate-spin-slow"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
              <TailMatrix />
              <Network />
              <CustomSocialNetwork />
              <Projects />
              <Idea />
              <Trust />
              <WhyBI />
              <div className="flex justify-center">
                <Image
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6813.png"
                  alt=""
                  width={1500}
                  height={1500}
                  className=" w-[35%]"
                />
              </div>
        </div>
      </div>
    </>
  );
}

export default HireAangularJsDeveloper;
