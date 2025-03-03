import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/header/Header"),{ssr:false});
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer"),{ssr:false});
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch")
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const Customer = dynamic(() => import("../../components/common/customer"));
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced")
);
const Hire = dynamic(() => import("../../components/common/Hire"));
import HireBanner from "../../components/common/HireBanner";
import Link from "next/link.js";
import { advantages, chooseBI, content, faqDetails, hireCards, subhead1, subhead2, subhead3 } from "../../data/web-development-data/javaDevelopmentData.js";
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle"),{ssr:false}
);

function JavaDevelopment(props) {
  
  return (
    <>
      <Head>
        <title>
          Java Application Development Service Company USA - Java development
        </title>
        <meta
          name="description"
          content="Are you searching for a Java app development company? Contact brain inventory to give transparent & quality solutions for Java software development services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Java Application Development Service Company USA - Java development"
        />
        <meta
          property="og:description"
          content="Are you searching for a Java app development company? Contact brain inventory to give transparent & quality solutions for Java software development services."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_java+web.png"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/java-development-company"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/java-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/java-development-company.png"
          as="image"
        />
      </Head>

      <div className="relative">
        <Header></Header>
        <HireBanner
          subhead="A Smarter Way to Build Customized Applications."
          title="Java Software Development Service Company"
          content={content}
          unique={"brain inventory"}
          btn="Contact Us!"
          alt="Java Development Company"
        />
        <Customer />
        <Experienced
          title="Java Development"
          type="why"
          image="https://braininventory.s3.us-east-2.amazonaws.com/images/java-development-company.png"
          alt="Java Development Company"
          blueSolution={true}
          para1={subhead1}
          para2={subhead2}
          para3={subhead3}
        />
        <HireMarquee title="Java Development" />
        <Advantage
          title="Java Development Company"
          desc="A Java development company offers numerous benefits to businesses seeking to build robust and scalable software solutions. Firstly, Java is a versatile programming language known for its platform independence, making it suitable for developing applications that can run on any device or operating system. By partnering with a Java Software Development Company, businesses can leverage the language's extensive ecosystem of libraries, frameworks, and tools to accelerate the development process and reduce time-to-market."
          reasons={advantages}
        />
        <Hire
          title="Why to Choose %Brain Inventory% for Java Development?"
          card={hireCards}
        />
        <ChooseBraininventory
          reasons={chooseBI}
          alt="Hire Dedicated Java Developers"
          blueSolution={true}
        />
        <Faqs faq={faqDetails} />
        <hr />
        <BlogArticle />
        <KeepInTouch />
        <LocateUs />
        <LetsKick />
        <Footer />
      </div>
    </>
  );
}

export default JavaDevelopment;
