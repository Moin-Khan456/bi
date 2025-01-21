import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/header/Header.js"));
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"));
const Loader = dynamic(() => import("../../components/common/loader.js"));
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
const FaqHire = dynamic(() => import("../../components/common/Faqhire.jsx"));
const Customer = dynamic(() => import("../../components/common/customer.jsx"));
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee.jsx")
);
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced.jsx")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
import SectionOne from "../../components/common/HireBanner.jsx";
import Link from "next/link.js";
import Faqs from "../../components/mobilePages/faqs.js";
const Hello = dynamic(() => import("../../components/common/FindUs.jsx"));
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx")
);
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/ChooseBraininventory.jsx")
);

function WordPressWebDesign(props) {
  const content = (
    <>
      Our company offers premium-quality Wordpress website design service across
      the globe.{" "}
      <Link href="/company" className="text-[#2186ff]">
        Our team
      </Link>{" "}
      of highly skilled WordPress experts helps business organizations and
      independent entrepreneurs build responsive, adaptive, high-performance
      plug-ins and themes at competitive prices.
    </>
  );
  const subhead1 =
    "A WordPress website-building solution can be essential for people, companies and groups for various convincing motivations. To begin with, WordPress is an easy-to-understand and profoundly adaptable stage that empowers you to make a site customized to your particular needs and inclinations, regardless of whether it's an individual blog, web based business store, portfolio site, or corporate web nearness.";
  const subhead2 =
    "WordPress has a wide range of themes and plugins that make it versatile for many different uses. Additionally, WordPress is renowned for its search engine optimization features, which can boost your website's search ranking and draw more organic traffic and prospective buyers. Its responsive design means your website will look good and work well on mobile devices, reaching the expanding mobile user population.";
  const subhead3 =
    "WordPress provides a powerful content management system (CMS) that streamlines creating and organizing content. This makes it easy to add new material, photos, and media to your site. The CMS allows hassle-free website updates with original content.";

  const hireCards = [
    {
      head: "Competitive Pricing",
      content: `We are a team of passionate WordPress developers and designers who work with businesses just like yours. We help you build premium WordPress websites, plugins, and themes at affordable rates. Brain Inventory specializes in creating responsive WordPress websites for small, medium, and enterprise-level businesses.`,
    },
    {
      head: "Rich Experience",
      content:
        "We are a trusted provider of responsive Wordpress website design service, with experience in developing high-quality and scalable WordPress websites for clients across diverse industry verticals. Whether you need to convert your existing site into a responsive one or want to launch a new responsive WordPress website, we have the expertise and resources to get the job done.",
    },
    {
      head: "Delivery on Time",
      content:
        "Delivering Wordpress website designs is our main task. To ensure that all the projects are delivered on time, we have organized a group of expert developers who are fully dedicated to the successful completion of each assignment. Dedication and consistency are what we attach the most importance to when carrying out all our projects.",
    },
    {
      head: "Customer-Focused Work Approach",
      content: `Our "customer-focused" work approach is based on mutual respect and trust. We don't impose what we know instead, we strive to develop a solid understanding of what you want and your business goals to provide you with the best and most innovative solutions that deliver you the results that you are looking for.`,
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title: "What are the Benefits of WordPress?",
      description:
        "WordPress is a content management system (CMS) plugin that allows users to create their blogs or websites. It provides features that enable users to create unique and dynamic websites. Since WordPress is a CMS, it contains many features that allow for ease of content creation, data organization, and site administration.",
    },
    {
      id: "2",
      title: "Why Hire A WordPress Website Development Company?",
      description:
        "A WordPress website development company can manage all your WP requirements. WordPress is the most acclaimed and easiest-to-use Content Management system of today. When you hire a WordPress website design company, you will have access to a vast range of plugins and themes suited for business websites, blogs, online stores, and other kinds of websites. In addition, it offers excellent pre-supplied solutions for online stores, galleries, forums, and other similar applications.",
    },
    {
      id: "3",
      title: "Do you build custom WordPress Themes and plugins?",
      description:
        "Yes, We are a team of experts having vast experience in creating custom themes, plugins, and website designs based on your requirements/business needs. We build high-performance, pixel, and highly customized WordPress Themes and plugins as per your industry requirements.",
    },
    {
      id: "4",
      title:
        "Will I get a dedicated Project Manager for my WordPress Website Development Services?",
      description:
        "When you choose Braininventory as your outsourcing partner for your WordPress Website Development Services, you get the best team of Business Analysts who will analyze your business requirements and recommend the right architecture for your website to realize its full potential. You also get the best team of WordPress Developers who are not just highly competent but also have empathy toward your requirements, which plays a vital role in creating a user-friendly interface that is conversational, keeps with the design brief, and is intuitive to use. We guarantee your project's success with a dedicated team comprising Business Analysts, WordPress Developers, server administrators, and, of course, a skilled Project Manager.",
    },
  ];
  const chooseBI = [
    <>
      <Link href="/" className="text-[#2186ff]">
        Brain Inventory
      </Link>{" "}
      offers top Wordpress website design service USA created by a team that has
      acquired phenomenal abilities and skills in how customers work with
      WordPress websites. Our dedicated WordPress website developers offer
      creative inclusions, information on the market situation, and WordPress
      solutions that give true value for your money, and time, and websites that
      allow speedy downloads.
    </>,
    <>
      We have more than 4 years of experience in the field of web design related
      to WordPress Product Development,{" "}
      <Link href="/mobile-app-development-company" className="text-[#2186ff]">
        Mobile App Development
      </Link>
      , and E-commerce Web Development. Our experts assist new business
      enterprises as well as startup companies to come up with unique site
      architecture that allows independent businesses to grow their industry and
      businesses with an experiential solution to build a strong online presence
      at no additional cost.
    </>,
    "We know your business deserves to thrive across all facets. We are proud of our WordPress customizations and development that have enabled hundreds of businesses to boost sales and build their brand online. This is why we provide assistance whenever you need it, with our friendly support team available at any hour of the day or night.",
  ];

  const [position, setPostion] = useState(true);

  const advantages = [
    "WordPress provides an extensive selection of themes and plugins that enable you to tailor your website's look and capabilities to suit your particular requirements.",
    "WordPress has innate search engine optimization advantages. It produces tidy and organized code, provides plugins for SEO, and lets you effortlessly enhance content, which helps make your website more findable on search engines.",
    "Many WordPress themes are responsive, meaning they automatically adapt to different screen sizes, ensuring your website looks good on desktops, tablets, and smartphones.",
    "While no platform is completely immune to security threats, WordPress takes security seriously. Regular updates and security plugins help protect your website from common vulnerabilities.",
    "WordPress is open-source software that anyone can use for free. There are many free themes and plugins available that provide various functions. Although premium themes and plugins cost money, they frequently offer advanced capabilities and support services.",
  ];
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
            // developmentImage="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_PHP+development.png"
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

          <ChooseBraininventory
            reasons={chooseBI}
            alt="Wordpress website designs"
          />
          <Faqs faq={faqdetails} />
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
