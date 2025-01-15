import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import HomeSectionEight from "../components/home/HomeSection-8.js";
import { CareerInfo, OpeningJob } from "../components/career/careerData.js";
import KeepInTouch from "../components/common/keepInTouch.js";
const Header = dynamic(() => import("../components/header/Header"));
const Banner = dynamic(() => import("../components/career/banner.js"));
const WhyWork = dynamic(() => import("../components/contacts/whyWork.js"));
const Footer = dynamic(() => import("../components/common/Footer"));

const LocateUs = dynamic(() => import("../components/common/locateUs"));
const MeetCrew = dynamic(() => import("../components/company/meetCrew.js"));
const Culture = dynamic(() => import("../components/career/culture.js"));
const Newsletter = dynamic(() => import("../components/career/Newsletter.js"));
const InterviewProcess = dynamic(() =>
  import("../components/career/interviewProcess.js")
);
const Opening = dynamic(() => import("../components/career/opening.js"));
const Loader = dynamic(() => import("../components/common/loader"));

function Career(props) {
  const [loadMore, setLoadMore] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setLoadMore(true);
    });
  }, []);
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
          <Banner />
          <WhyWork />
        </section>
        <main>
          <section className="container">
            <Culture />
          </section>
          <HomeSectionEight info={CareerInfo} />
          <section className="container">
            <Opening OpeningJob={OpeningJob} />
            <KeepInTouch/>
            <LocateUs />
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
}

export default Career;
