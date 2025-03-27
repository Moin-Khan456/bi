import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { advantages, chooseBI, content, faqDetails, hireCards, subhead1, subhead2, subhead3 } from "../../data/web-development-data/wordpressWebData.js";

const Header = dynamic(() => import("../../components/header/Header.js"),{ssr:false});
const SectionOne = dynamic(() => import("../../components/common/HireBanner.jsx"));
const Customer = dynamic(() => import("../../components/common/customer.jsx"));
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced.jsx")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee.jsx")
);
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
const ChooseBrainInventory = dynamic(() =>
  import("../../components/common/ChooseBrainInventory.jsx")
);
const Faqs = dynamic(() => import("../../components/mobilePages/faqs.js"),{ssr:false});
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx"),{ssr:false}
);
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"),{ssr:false});

function WordPressWebDesign(props) {

  return (
    <>
      <Head>
        <title>
          WordPress Website Design Company USA - WordPress Website Design
        </title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="WordPress Website Design Company USA - WordPress Website Design"
        />
        <meta
          name="description"
          content="Are you looking for WordPress web design & development services? We are here to help! Contact Brain Inventory for experienced WordPress developers."
        />
        <meta
          property="og:description"
          content="Are you looking for WordPress web design & development services? We are here to help! Contact Brain Inventory for experienced WordPress developers."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_hybrid-app-development.jpg"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/wordpress-website-design-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/wordpress-development.png"
        />
        <link
          rel="canonical"
          href=" https://braininventory.in/web-development/wordpress-website-design-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_wordpress+1.png"
          as="image"
        />
      </Head>
      <main className="">
        <section>
          <Header />
          <SectionOne
            heading="A Smarter Way to Build Customized Applications."
            title="WordPress Website Designing & Development Company by"
            content={content}
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_wordpress+1.png"
            alt="Wordpress website designs"
            type="php"
            unique="brain inventory"
          />
          <Customer />
          <Experienced
            title="WordPress Website Development"
            type="why"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_wordpress+2.png"
            alt="WordPress Website Development Company"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="wordpress website development" />
          <Advantage
            title="WordPress Website Development"
            subhead="WordPress website development offers numerous benefits, making it a popular choice for businesses and individuals alike. Here are some of the key advantages:"
            reasons={advantages}
          />
          <Hire
            title="Why to Choose %Brain Inventory% for WordPress Project Development?"
            card={hireCards}
          />

          <ChooseBrainInventory
            reasons={chooseBI}
            alt="Wordpress website designs"
          />
          <Faqs faq={faqDetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default WordPressWebDesign;
