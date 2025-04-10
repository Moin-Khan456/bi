import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import {
  advantages,
  chooseBiSubhead,
  content,
  experienceCards,
  faqDetails,
  hireCards,
  keySkillsBrief,
  subhead1,
  subhead2,
} from "../data/services-data/UXUIDevelopmentData.js";

const Header = dynamic(() => import("../components/header/Header.js"), {ssr: false,});
const HireBanner = dynamic(() => import("../components/common/HireBanner.jsx"));
const Customer = dynamic(() => import("../components/common/customer.jsx"));
const Experienced = dynamic(() => import("../components/Web-Development/Experienced.jsx"));
const DevelopmentProcess = dynamic(() => import("../components/Services/DevelopmentProcess.jsx"));
const HireMarquee = dynamic(() => import("../components/common/HireMarquee.jsx"));
const KeySkill = dynamic(() => import("../components/Hire/KeySkills.jsx"));
const Hire = dynamic(() => import("../components/common/Hire.jsx"));
const ChooseBrainInventory = dynamic(() => import("../components/common/CommonChooseBrainInventory.jsx"));
const Faqs = dynamic(() => import("../components/mobilePages/faqs.js"), { ssr: false,});
const BlogArticle = dynamic(() => import("../components/common/BlogArticle.jsx"),{ ssr: false });
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"), {ssr: false,});


function UiUxDevelopmentServices(props) {
  const chooseBI = [];
  return (
    <>
      <Head>
        <title>Best UI/UX Design And Development Services</title>
        <meta
          name="description"
          content="Brain Inventory provides the best ui/ux design and development services for your customers satisfaction. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best UI/UX Design And Development Services"
        />
        <meta
          property="og:description"
          content="Brain Inventory provides the best ui/ux design and development services for your customers satisfaction. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Android+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/ui-ux-development-services"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/ui-ux-development-services"
        />
      </Head>
      <Suspense
        fallback={
          {
            /*<Loader />*/
          }
        }
      >
        <div className="relative">
          <>
            <Header />
            <HireBanner
              title="Expert UI/UX Design And Development Services by"
              content={content}
              btn="Get a Quote"
              enableBtn={false}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/hire/Braininventory_Hire+Android+Developers.png"
              alt="UIUX development Services"
              type="hire"
              unique={"brain inventory"}
            />{" "}
            <Customer />
            <Experienced
              title="UI/UX"
              type="services"
              hideImage={true}
              card={experienceCards}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Hire+salesforce+developers/Mask+Group+164.png"
              alt="UIUX Development Services"
              para1={subhead1}
              para2={subhead2}
            />
            <DevelopmentProcess
              subhead={"Elevating User Journeys with Our Enhanced"}
              title="UI/UX Development Process"
              subPara="Our team utilizes an in-depth methodology to fully understand your company objectives and determine the optimal way to cater to your intended customers with a smooth, instinctive, and enjoyable interface."
              advantages={advantages}
              enableBtn={false}
              btn="Get a Quote"
            />
            <HireMarquee title="Android" />
            <KeySkill
              heading={"Tools and Technologies% in UI/UX Development"}
              brief={keySkillsBrief}
              gridCol={3}
            />
            <Hire
              enablePara="Our UX/UI design and development stand out for their excellence due to a meticulous blend of creativity, user-centricity, and cutting-edge technologies. We prioritize user experiences, ensuring intuitive interfaces and captivating visuals. Leveraging the latest design tools and methodologies, our team crafts solutions that not only meet but exceed user expectations. This commitment to excellence defines our approach, setting us apart in the competitive landscape."
              colorText={"UX/UI Design & Development"}
              title="What Sets Our % UX/UI Design & Development% Apart in Terms of Excellence"
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              subhead={chooseBiSubhead}
              alt="Hire Android App Developers & Programmers"
            />
            <Faqs faq={faqDetails} />
            <hr />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </>
        </div>
      </Suspense>
    </>
  );
}

export default UiUxDevelopmentServices;
