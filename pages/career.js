import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/header/Header"));
const Banner = dynamic(() => import("../components/career/banner.js"));
const WhyWork = dynamic(() => import("../components/contacts/whyWork.js"));
const Footer = dynamic(() => import("../components/common/Footer"));
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
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
          content="Looking for a career at Brain 
          Inventory? Seize the 
          opportunity to join the team of 
          top-notch software 
          professionals and start working
          on interesting projects!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Career at Brain 
Inventory | Best Software Development Company "
        />
        <meta
          property="og:description"
          content=" Looking for a 
career at Brain Inventory? Seize the opportunity to join the 
team of top-notch software professionals and start working 
on interesting projects!"
        />

        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/hr-1.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/career"
        />
        <link rel="canonical" href="https://braininventory.in/career" />
      </Head>
      <Loader />
      <div className="relative second-component">
        <Header />
        <section className="container">
          <Banner />
          <WhyWork />
        </section>
        <>
          {loadMore && (
            <>
              <main>
                <MeetCrew />
                <section className="container">
                  <Culture />
                  {/* <Newsletter /> */}
                </section>
                <InterviewProcess />
                <section className="container">
                  <Opening />
                  <KeepInTouch />
                  <LocateUs />
                  <Footer />
                </section>
              </main>
            </>
          )}
        </>
      </div>
    </>
  );
}

export default Career;
