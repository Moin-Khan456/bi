import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { GoArrowUpRight } from "react-icons/go";
import { benefitsOfSoftwareMaintenanceAndSupportService, chooseBI, faqDetails, sectionTwoDesc, softwareMaintenanceandSupportImportantPoints, solutionList } from "../data/supportData.js";

const Header = dynamic(() => import("../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../components/support/sectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../components/support/sectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../components/support/sectionThree.jsx")
);
const TiltMarquee = dynamic(() =>
  import("../components/SolutionFitness/TiltMarquee.jsx")
);
const SectionFour = dynamic(() =>
  import("../components/SolutionFitness/SectionFour.jsx")
);
const ChooseUs = dynamic(() =>
  import("../components/support/chooseUs.jsx")
);
const SectionNine = dynamic(() =>
  import("../components/SolutionFitness/SectionNine.jsx")
);
const SectionTen = dynamic(() =>
  import("../components/SolutionFitness/SectionTen.jsx"),{ssr:false}
);
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle.jsx"),{ssr:false});
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"),{ssr:false});

function Support() {
  return (
    <>
      <Head>
        <title>Software Maintenance and Support Service Company</title>
        <meta
          name="description"
          content="Brain Inventory provides expert and best software maintenance and support services for their customers satisfaction. Contact us today!"
        />
        <meta
          property="og:description"
          content="Brain Inventory provides expert and best software maintenance and support services for their customers satisfaction. Contact us today!"
        />
        <meta
          name="og:title"
          content="Software Maintenance and Support Service Company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Suppot-and-maintence.png"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/software-maintenance-and-support-services"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/software-maintenance-and-support-services"
        />
      </Head>

      <main className="">
        <Header />
        <SectionOne />
        <section>
          <SectionTwo
            head="What is Software Maintenance?"
            description={sectionTwoDesc}
          />

          <SectionThree
            title="Why Software Maintenance and Support Important for Business Growth"
            points={softwareMaintenanceandSupportImportantPoints}
          />

          <SectionThree
            title="Benefits of Software Maintenance and Support Service"
            points={benefitsOfSoftwareMaintenanceAndSupportService}
          />

          <Link href="#talk">
            <button
              className="flex items-center m-auto justify-center font-Satoshi font-bold text-xs bg-primaryTx text-primaryBg rounded-full px-8 py-4 my-12"
            >
              START PROJECT
              <GoArrowUpRight className="font-extrabold text-3xl ml-4 p-2 rounded-full" />
            </button>
          </Link>

          <TiltMarquee title="Expert Software Maintenance and Support Services" />

          <SectionFour
            title="Our Custom Software Maintenance Services"
            description={""}
            solutionList={solutionList}
          />

          <ChooseUs title={"WHY CHOOSE US"} points={chooseBI} />

          <SectionNine
            brand="SOftware DEVELOPMENT"
            pageCategory="SOftware DEVELOPMENT"
            pageCategoryAbbr="SOftware DEVELOPMENT"
            slow={70000}
            fast={55000}
            alt={"Software Development Services"}
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/support1.jpeg"
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
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs/>
          <LetsKick />
          <hr />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Support;
