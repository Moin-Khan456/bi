import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  approachDesc,
  approachPoints,
  faqDetails,
  platformDesc,
  platformDevelopment,
  sectionFourDesc,
  sectionThreeInsights,
  sectionThreeServices,
  sectionTwoDesc,
  solutionList,
  title,
} from "../../data/industry-data/sportData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
const SectionOne = dynamic(() =>
  import("../../components/industry/Sports-App-Development/sectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/SolutionFitness/SectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/industry/Sports-App-Development/sectionThree.jsx")
);
const TiltMarquee = dynamic(() =>
  import("../../components/SolutionFitness/TiltMarquee.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/SolutionFitness/SectionFour.jsx")
);
const SectionSix = dynamic(
  () => import("../../components/SolutionAccounting/SectionSix.jsx"),
  { ssr: false }
);
const PlatformDevelopment = dynamic(() =>
  import("../../components/SolutionAccounting/SectionSlider.jsx")
);
const SectionNine = dynamic(() =>
  import("../../components/SolutionFitness/SectionNine.jsx")
);
const Approach = dynamic(() =>
  import("../../components/SolutionFitness/Approach.jsx")
);
const SectionTen = dynamic(
  () => import("../../components/SolutionFitness/SectionTen.jsx"),
  { ssr: false }
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"), {
  ssr: false,
});
const BlogArticle = dynamic(
  () => import("../../components/common/BlogArticle.jsx"),
  { ssr: false }
);
const KeepInTouch = dynamic(
  () => import("../../components/common/keepInTouch.js"),
  { ssr: false }
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});

function SportAppDeveloper() {
  return (
    <>
      <Head>
        <title>Custom Sports App Development Company - Sports Web Design</title>
        <meta
          name="description"
          content="Brain Inventory specializes in professional sports app development, delivering best solutions for fantasy sports apps, sports betting apps, and much more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Sports App Development Company - Sports Web Design"
        />
        <meta
          property="og:description"
          content="Brain Inventory specializes in professional sports app development, delivering best solutions for fantasy sports apps, sports betting apps, and much more."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/sports"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/sports.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/sports"
        />
      </Head>
      <Suspense
        fallback={
          {
            /*<Loader />*/
          }
        }
      >
        <main className="">
          <Header />
          <SectionOne />
          <section className="sm:pt-32">
            <SectionTwo
              className="container pb-2 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
              title="Custom Sports App Development Services by Brain Inventory"
              isHeadShow={false}
              head1="Elevating Performance with Innovative Sports Software Development"
              description={sectionTwoDesc}
            />
            <TiltMarquee title="Sports App Development Company" />

            <SectionThree
              title="Insights into the Sports Development Industry"
              points={sectionThreeInsights}
              sectionThreeServices={sectionThreeServices}
            />

            <SectionFour
              title="Why Choose Brain Inventory?"
              description={sectionFourDesc}
              solutionList={solutionList}
            />

            <SectionSix
              headAbove=""
              subheadAbove=""
              className="lg:text-[2rem] MonumentRegular font-light tracking-wide leading-high-force"
              customClasses="w-[400px] !bottom-0"
              title="Ready to start your journey with a transformative Sport tech platform?"
              btn="BUILD YOUR SPORTS APP"
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/sport-app-development1.jpg"
            />

            <PlatformDevelopment
              data={platformDevelopment}
              subhead=""
              head="Special Features of Our Sports Apps"
              description={platformDesc}
            />

            <SectionNine
              brand="Sports App Development Company"
              pageCategory="Sports App Development Company"
              pageCategoryAbbr="Sports App Development Company"
              slow={70000}
              fast={55000}
              alt={"Software Development Services"}
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/sports-app-development2.jpg"
            />
            <div className="pt-12"></div>
            <Approach
              title={title}
              desc={approachDesc}
              points={approachPoints}
            />

            <SectionTen
              oneName={"EDUCATION.NUMETRIC"}
              oneVideo={
                "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Education+Numetric/1.mp4"
              }
              oneImage={
                "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Education+Numetric/Ed+tech.png"
              }
              twoName={"EDUCATOR UNITED"}
              twoVideo={
                "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Dummy+1/3.mp4"
              }
              twoImage={
                "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Dummy+1/Ed+tech.png"
              }
              oneLink={null}
              twoLink={null}
              alt="Our Work"
            />

            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <hr />
            <Footer />
          </section>
        </main>
      </Suspense>
    </>
  );
}

export default SportAppDeveloper;
