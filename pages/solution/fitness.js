import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/header/Header"));
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const Footer = dynamic(() => import("../../components/common/Footer"));
const Loader = dynamic(() => import("../../components/common/loader"));
const ContactForm = dynamic(() =>
  import("../../components/common/ContactForm.jsx")
);
const FaqHire = dynamic(() => import("../../components/common/Faqhire"));
const Hire = dynamic(() => import("../../components/common/Hire"));
const SectionOne = dynamic(() =>
  import("../../components/SolutionFitness/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/SolutionFitness/SectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/SolutionFitness/SectionThree.jsx")
);
const TiltMarquee = dynamic(() =>
import("../../components/SolutionFitness/TiltMarquee.jsx")
);
const ProjectInquiry = dynamic(() =>
import("../../components/common/projectInquiryCard.jsx")
);
const PlatformDevelopment = dynamic(() =>
  import("../../components/SolutionFitness/PlatformDevelopment.jsx")
);
const Benefits = dynamic(() =>
  import("../../components/Web-Development/benefits.jsx")
);

const ChooseBraininventory = dynamic(() =>
  import("../../components/common/ChooseBraininventory.jsx")
);
const Industries = dynamic(() =>
  import("../../components/Web-Development/industries.jsx")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx")
);

function ReactNativeDeveloper(props) {
  const faqdetails = [
    {
      id: "1",
      title: "Is Flutter still relevant in 2022?",
      description:
        "Flutter is a cross-platform app development framework from Google that allows developers to write their native iOS and Android applications in Dart. Flutter is already popular amongst developers due to its rapid expansion. Brands who have used Flutter for their apps usually have a high demand for Flutter developers because app compatibility with Fuchsia OS can be achieved by sticking to the Dart programming language and using the Dart VM on Android or Fuchsia OS.",
    },
    {
      id: "2",
      title: "How is a Flutter app better than two native apps?",
      description:
        "Single-source code management is a software engineering technique and an open-source concept that you can use to improve your product or service in several ways.",
    },
    {
      id: "3",
      title: "How much does it cost to hire a Flutter Developer?",
      description:
        "To determine the cost of developing a Flutter app, there are several factors to consider. It is best to ask your potential developer what they will charge before reaching out to them. If you have a clear vision for your app, it should be easy to share this with developers who can help you realize your ideas. A developer that specializes in Flutter applications can help you focus on more important things than just how much time you’ll need for development.",
    },
    {
      id: "4",
      title: "What is the best backend for Flutter?",
      description:
        "Choosing a backend technology is crucial for any project. This choice will depend on many factors such as existing technologies used by the front end. If you have an existing application with some backend code, it would be easier to hook a Flutter app to it so that it can reuse its code base. However, if you need additional features and calculations much more strongly than basic REST APIs usually handled by separate batches of operations, then you’ll have to integrate into a new backend service(s).",
    },
  ];


  return (
    <>
      <Head>
        <title>Fitness App Development Solution | Fitness App Development Services</title>
        <link
          rel="canonical"
          href="https://braininventory.in/solution/fitness"
        />
      </Head>
      <Loader />
      <main className="">
        <Header />
        <section className="">
         <SectionOne/>
         <SectionTwo className="pt-52 pb-32 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]" title="TOP FITNESS SOLUTION" head1="Reimagining Fitness with Innovation" description="Brain Inventory stands at the forefront of the fitness solution development arena, embodying a legacy of excellence. Our proficiency is manifest in our state-of-the-art solutions, adorned with ingenious attributes and resilient design, meticulously crafted to reshape the fitness sector."/>
         <SectionThree/>
         <TiltMarquee/>
         <>{/*hussain door animation component */}</>
         <>{/*hussain rocket component */}</>
         <ProjectInquiry/>

         <PlatformDevelopment/>
          <hr />
          <Footer />
        </section>
      </main>
    </>
  );
}
export default ReactNativeDeveloper;
