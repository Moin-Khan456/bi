import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { careerCategories, CareerHeroSection, CareerInfo, OpeningJob, whyWorkDataCareer } from "../components/career/careerData.js";

const Header = dynamic(() => import("../components/header/Header"),{ssr:false});
const Banner = dynamic(() => import("../components/career/banner.js"));
const WhyWork = dynamic(() => import("../components/contacts/whyWork.js"));
const Culture = dynamic(() => import("../components/career/culture.js"));
const HomeSectionEight = dynamic(() => import("../components/home/HomeSection-8.js"),{ssr:false});
const Opening = dynamic(() => import("../components/career/opening.js"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const Footer = dynamic(() => import("../components/common/Footer"),{ssr:false});

function Career(props) {
  return (
    <>
      <Head>
        <title>
          Career at Brain Inventory | Best Software Development Company
        </title>
        <meta
          name="description"
          content="We are inviting students, graduates, and professionals who inspire us to join our creative work culture. Discover the difference with special opportunities at Brain Inventory."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Career at Brain 
Inventory | Best Software Development Company "
        />
        <meta
          property="og:description"
          content="We are inviting students, graduates, and professionals who inspire us to join our creative work culture. Discover the difference with special opportunities at Brain Inventory."
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/hr-1.jpg"
        />
        <meta property="og:url" content="https://braininventory.in/career" />
        <link rel="canonical" href="https://braininventory.in/career" />
      </Head>
      {/*<Loader />*/}
      <div className="relative  ">
        <Header />
        <section className="container">
          <Banner info={CareerHeroSection}/>
          <WhyWork info={whyWorkDataCareer} />
        </section>
        <main>
          <section className="container">
            <Culture categories={careerCategories} />
          </section>
          <HomeSectionEight info={CareerInfo} />
          <section className="container">
            <Opening OpeningJob={OpeningJob} />
            <KeepInTouch/>
            <LocateUs />
            <LetsKick/>
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
}

export default Career;
