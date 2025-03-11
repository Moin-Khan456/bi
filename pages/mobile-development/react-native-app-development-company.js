import React, { Suspense } from "react";
import Head from "next/head";
import Link from "next/link.js";
import dynamic from "next/dynamic";
import { benefitsList, chooseBI, content, faqDetails, hireCards, meanReasons } from "../../data/mobile-development-data/reactNativeData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() =>
  import("../../components/Web-Development/PageIntro.jsx")
);
const WhyMean = dynamic(() =>
  import("../../components/Web-Development/WhyMean.jsx")
);
const Benefits = dynamic(() =>
  import("../../components/Web-Development/benefits.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));

const ChooseBrainInventory = dynamic(() =>
  import("../../components/common/ChooseBrainInventory.jsx")
);
const Industries = dynamic(() =>
  import("../../components/Web-Development/industries.jsx"),{ssr:false}
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() => import("../../components/common/keepInTouch.js"),{ssr:false});
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});

function ReactNativeDeveloper() {
 
  return (
    <>
      <Head>
        <title>
          React Native App Development Company USA - React Native Services
        </title>
        <meta
          name="description"
          content="Hire expert Brain Inventory team for your react native app development solutions. We are a trusted react native mobile app development company."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="React Native App Development Company USA - React Native Services"
        />
        <meta
          property="og:description"
          content="Hire expert Brain Inventory team for your react native app development solutions. We are a trusted react native mobile app development company."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/react-native-app-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6625.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/react-native-app-development-company"
        />
      </Head>
      <Suspense
        fallback={
          {
            /*<Loader />*/
          }
        }
      >
        <main>
          <Header />
          <section className="pt-32">
            <SectionOne
              heading="React Native App"
              title="Top React Native"
              content={content}
              btn="Get a Quote"
              miniTitle={"Service by Brain Inventory"}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6625.png"
              alt="React Native App Development "
              appDev={true}
            />
            <WhyMean type="React Native App" meanReasons={meanReasons} />
            <Benefits
              type="React Native"
              subhead="React Native, a recently created programming framework by Facebook, simplifies the process of developing native mobile applications for both iOS and Android using JavaScript. There are several benefits of React Native:"
              benefitsList={benefitsList}
            />
            <Hire
              title="Why React Native App Development from %Brain Inventory"
              subhead="The Mobile App Development Services services we offer can help businesses realize their business goals by increasing brand exposure, building engagement and loyalty, accelerating digital transformation journeys, leveraging data, and optimizing tactics."
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="React Native App Development "
            />{" "}
            <Industries />
            <Faqs faq={faqDetails} />
            <BlogArticle />
            <KeepInTouch />
            <LocateUs />
            <LetsKick/>
            <hr />
            <Footer />
          </section>
        </main>
      </Suspense>
    </>
  );
}

export default ReactNativeDeveloper;
