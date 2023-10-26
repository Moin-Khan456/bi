import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/header/Header"));
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer"));
const Loader = dynamic(() => import("../../components/common/loader"));
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch")
);
const FaqHire = dynamic(() => import("../../components/common/Faqhire"));
const Customer = dynamic(() => import("../../components/common/customer"));
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced")
);
const Hire = dynamic(() => import("../../components/common/Hire"));
const SectionOne = dynamic(() =>
  import("../../components/common/HireBanner.jsx")
);
const Hello = dynamic(() => import("../../components/common/FindUs"));
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/ChooseBraininventory.jsx")
);

function HireAangularJsDeveloper(props) {
  const content =
    "Our company offers premium-quality WordPress development services across the globe. Our team of highly skilled WordPress experts helps business organizations and independent entrepreneurs build responsive, adaptive, high-performance plug-ins and themes at competitive prices.";
  const subhead1 =
    "A WordPress Website Development solution can be indispensable for individuals, businesses, and organizations for several compelling reasons. Firstly, WordPress is a user-friendly and highly customizable platform that enables you to create a website tailored to your specific needs and preferences, whether it's a personal blog, e-commerce store, portfolio site, or corporate web presence.";
  const subhead2 =
    "Its extensive library of themes and plugins offers versatility and functionality, making it suitable for a wide range of purposes. Moreover, WordPress is known for its search engine optimization (SEO) capabilities, which can help improve your website's visibility on search engines, attracting more organic traffic and potential customers. Its responsive design ensures your website looks and functions well on various devices, catering to the growing mobile user base.";
  const subhead3 =
    "WordPress offers a robust content management system (CMS) that simplifies content creation and management, allowing you to effortlessly update your website with fresh content, images, and multimedia.";

 

  const hireCards = [
    {
      head: "Competitive Pricing",
      content: `We are a team of passionate WordPress developers and designers who work with businesses just like yours. We help you build premium WordPress websites, plugins, and themes at affordable rates. Brain Inventory specializes in creating responsive WordPress websites for small, medium, and enterprise-level businesses.`,
    },
    {
      head: "Rich Experience",
      content:
        "We are a trusted provider of responsive WordPress development services, with experience in developing high-quality and scalable WordPress websites for clients across diverse industry verticals. Whether you need to convert your existing site into a responsive one or want to launch a new responsive WordPress website, we have the expertise and resources to get the job done.",
    },
    {
      head: "Delivery on Time",
      content:
        "Delivering WordPress website development services is our main task. To ensure that all the projects are delivered on time, we have organized a group of expert developers who are fully dedicated to the successful completion of each assignment. Dedication and consistency are what we attach the most importance to when carrying out all our projects.",
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
    "Brain Inventory offers top WordPress development services in India created by a team that has acquired phenomenal abilities and skills in how customers work with WordPress websites. Our dedicated WordPress website developers offer creative inclusions, information on the market situation, and WordPress solutions that give true value for your money, and time, and websites that allow speedy downloads.",
    "We have more than 4 years of experience in the field of web design related to WordPress Product Development, Mobile App Development, and E-commerce Web Development. Our experts assist new business enterprises as well as startup companies to come up with unique site architecture that allows independent businesses to grow their industry and businesses with an experiential solution to build a strong online presence at no additional cost.",
    "We believe your business should be able to work at its best in all areas. We take pride in our WordPress customizations and development which has helped hundreds of companies create more sales and online presence. That is why we are available to help you 24/7, with friendly support available around the clock.",
  ];

  const [position, setPostion] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPostion(true);
    });
  });
  const advantages = [
    "WordPress offers a wide range of themes and plugins that allow you to customize your website's appearance and functionality to meet your specific needs.",
    "WordPress is inherently SEO-friendly. It generates clean and structured code, offers SEO plugins, and allows you to optimize content easily, helping improve your website's visibility on search engines.",
    "Many WordPress themes are responsive, meaning they automatically adapt to different screen sizes, ensuring your website looks good on desktops, tablets, and smartphones.",
    "While no platform is completely immune to security threats, WordPress takes security seriously. Regular updates and security plugins help protect your website from common vulnerabilities.",
    "WordPress itself is open-source and free to use. You can find free themes and plugins for many functionalities. While some premium themes and plugins come with a cost, they often provide advanced features and support.",
  ];
  return (
    <>
      <Head>
        <title>
          WordPress Website Development Company | WordPress Development
        </title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="WordPress Website Development Company | WordPress Development"
        />
        <meta
          name="description"
          content="Unlock the potential of your online presence with our top-rated WordPress website development. Our expert WordPress developers create stunning, user-friendly websites tailored to your business needs."
        />
        <meta
          property="og:description"
          content="Unlock the potential of your online presence with our top-rated WordPress website development. Our expert WordPress developers create stunning, user-friendly websites tailored to your business needs."
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/preview/Braininventory_hybrid-app-development.jpg"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/wordpress-development-company"
        />
        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/preview/wordpress-development.png"
        />
        <link
          rel="canonical"
          href=" https://braininventory.in/web-development/wordpress-development-company"
        />
      </Head>
      <Loader />
      <main className="">
        <section>
          <Header />
          <SectionOne
            heading="A Smarter Way to Build Customized Applications."
            title="WordPress Website Development"
            content={content}
            btn="Contact Us!"
            developmentImage="https://d1u4arv5y5eda6.cloudfront.net/images/Braininventory_PHP+development.png"
            image="https://d1u4arv5y5eda6.cloudfront.net/images/Braininventory_wordpress+1.png"
            alt="WordPress website development services"
            type="php"
            unique="Company"
          />
          <Customer />
          {position && (
            <>
              <Experienced
                title="WordPress Website Development"
                type="why"
                image="https://d1u4arv5y5eda6.cloudfront.net/images/Braininventory_wordpress+2.png"
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
              
              <ChooseBraininventory reasons={chooseBI} alt="WordPress website development services" />
              <FaqHire faq={faqdetails} />
              <hr />
              <BlogArticle />
              <KeepInTouch />
              <LocateUs />
              <LetsKick />
              <Footer />
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default HireAangularJsDeveloper;
