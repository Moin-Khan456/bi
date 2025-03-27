import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link.js";
import {
  benefitsList,
  chooseBI,
  content,
  faqDetails,
  hireCards,
  meanReasons,
  jsonLdScript
} from "../../data/mobile-development-data/flutterAppData.js";

const Header = dynamic(() => import("../../components/header/Header.js"), {
  ssr: false,
});
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
const Industries = dynamic(
  () => import("../../components/Web-Development/industries.jsx"),
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

function Flutter() {
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Flutter App Development Company USA - Flutter App Design Services
        </title>
        <meta
          name="description"
          content="Looking for a flutter app development company? Look no further! Contact brain inventory for experienced flutter app development services, for quality services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Flutter App Development Company USA - Flutter App Design Services"
        />
        <meta
          property="og:description"
          content="Looking for a flutter app development company? Look no further! Contact brain inventory for experienced flutter app development services, for quality services."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/mobile-development/flutter-app-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6728.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/mobile-development/flutter-app-development-company"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
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
              heading="Flutter App"
              title="Top Flutter"
              content={content}
              btn="Get a Quote"
              miniTitle={"Service by Brain Inventory"}
              image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6728.png"
              alt=" Flutter Development Company"
              appDev={true}
            />
            <WhyMean type="Flutter App" meanReasons={meanReasons} />
            <Benefits
              type="Flutter App"
              subhead={
                <>
                  Flutter is a new mobile and{" "}
                  <Link
                    href="/web-development/custom-web-development"
                    className="text-[#2186ff]"
                  >
                    web-development framework
                  </Link>{" "}
                  for creating apps that run on iOS, Android, and the Web. There
                  are several benefits of Flutter App Development:
                </>
              }
              benefitsList={benefitsList}
            />
            <Hire
              title="Why Flutter App Development from %Brain Inventory"
              subhead={
                <>
                  We are not only a{" "}
                  <Link href="javascript:void(0)" className="text-[#2186ff]">
                    mobile app development company
                  </Link>{" "}
                  but, more importantly, a Flutter app development company to
                  build apps that users love to explore.
                </>
              }
              card={hireCards}
            />{" "}
            <ChooseBrainInventory
              reasons={chooseBI}
              alt="Flutter Development Company"
            />{" "}
            <Industries />
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
export default Flutter;
