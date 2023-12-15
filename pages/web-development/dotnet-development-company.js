import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import OurDevelopers from "../../components/Hire/OurDevelopers";
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
const AdvantageVerticalCards = dynamic(() =>
  import("../../components/Hire/AdvantageVerticalCards.jsx")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const KeySkill = dynamic(() =>
  import("../../components/Hire/KeySkillsCards.jsx")
);
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced")
);
const Hello = dynamic(() => import("../../components/common/FindUs"));
const Hire = dynamic(() => import("../../components/common/Hire"));
const HireBanner = dynamic(() => import("../../components/common/HireBanner"));
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);

function HireAangularJsDeveloper(props) {
  const content =
    "We are a proficient .NET development company that builds secure and scalable .NET development services utilizing the potential and versatility of the .NET platform to build a variety of applications for diverse domains.";
  const subhead1 =
    "A .NET development solution is essential for businesses and organizations looking to build robust, scalable, and secure software applications. The .NET framework, developed by Microsoft, offers a powerful and versatile environment for developing a wide range of applications, including web applications, desktop software, mobile apps, and more. ";
  const subhead2 =
    "Its comprehensive libraries and tools streamline the development process, enabling faster time-to-market and cost-effective solutions. With built-in security features and a large community of developers, .NET ensures that your applications are resilient to cyber threats. ";
  const subhead3 =
    "Moreover, .NET applications are known for their high performance and stability, which are critical for businesses aiming to provide seamless user experiences. Whether you need a web application, a cloud-based solution, or a custom software system, a .NET development solution can address your specific needs while adhering to industry standards and best practices.";

  const hireCards = [
    {
      head: "Integrity and Transparency",
      content: `We respect your privacy and security so you can rest easy knowing that your information is safe with us. We follow strict NDA agreements which means everything discussed between you and our team members will go no further. We handle every case with discretion so you can be confident knowing your personal information is safe with us.`,
    },
    {
      head: "Customer Satisfaction",
      content:
        "We are committed to ensuring that our clients receive the highest standards of customer care which is made possible through a proven and structured process. We have so far successfully completed over 50 projects ranging from individual website development to complex and specialized systems for existing companies in need of enhancements.",
    },
    {
      head: "Quality Coding",
      content:
        "We value competence, consistency, and security. We meanwhile also have impeccable manners and empathy. We are rigorous in our code reviewing process and in our documentation. It is a point of pride to us that we can step into any active project codebase and update, fix, or add new features without breaking the existing functionality.",
    },
    {
      head: "Hassle-Free Project Management",
      content:
        "We constantly think of how our customers would like to be served. Our professional project managers ensure that the project is done on time, within budget, and with utmost quality. We have an extremely talented team of designers and developers, which helps us offer you a wide array of website design services that complement your business goals.",
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title:
        "Why should I choose ASP.NET framework for enterprise app development?",
      description:
        "ASP.NET is a free web framework developed by Microsoft. It helps you to build any type of application - mobile, web, desktop, gaming, IoT, cloud, etc. ASP.NET provides a customer-centric approach to solution development. It has a modern membership API and numerous authentication features that help you to implement user identity management in your application easily.",
    },
    {
      id: "2",
      title: "Can I choose .NET for eCommerce application development?",
      description:
        ".NET is an ideal technology for shopping or e-commerce websites thanks to its flexibility, open-source features, and impeccable performance. You can effortlessly add/remove/edit items and products from your website. Moreover, your online store will become more advanced with new features such as a wish list, purchase history, site analytics, etc. You'll be able to monitor/control every aspect of your online shop due to the versatility of .NET.",
    },
    {
      id: "3",
      title: "When should I migrate my application to .NET Core?",
      description:
        "With the introduction of .NET Core 1.0, Microsoft has provided a lightweight, open-source and cross-platform version of their full-featured .NET Framework for developing web and cloud-based applications. .NET Core is a modular framework that contains only the most essential components required by your application and runs on Windows, OS X and Linux.",
    },
    {
      id: "4",
      title: "Will you work according to my time zone preference?",
      description:
        "We are ready to help you conquer your IT needs. From building a new website for your top-level executives, down to building the server with which your company's web analytics run. We've got you covered from every angle and at any time of the day. This means you can count on us 24/7/ whether you're in need of .Net programmers or services related to .Net that we provide.",
    },
  ];

  const chooseBI = [
    "At Brain Inventory, we are committed to providing quality .NET development services with optimal time management and trust-worthy quality. Our Certified .NET developers adopt cutting-edge technology viz. C We are a team of dedicated, experienced, and passionate professionals, working for your satisfaction with a 100% focus on our work. ",
    "We have an experience of over 4+ years in the .NET domain and are developers at heart having started developing applications for the .NET platform back in 2002. When you deal with us, you'll be getting skills that are sharpened by continuous learning and interaction with the best software professionals around the globe. ",
    ".NET developers from our great tech pool possess experience in building perfect software solutions that are powerful, maintainable, and well-tested. They have extensive practice in working on large-scale projects for various industrial verticals in the industry. Their skills and expertise cover Microsoft .NET Framework development, ASP.NET, C Are you looking for an experienced .NET development partner? Contact us today and I would be pleased to demonstrate our capabilities.",
  ];

  const reasons = [
    ".NET is a versatile framework suitable for developing a wide range of applications, from web and mobile apps to desktop software and cloud-based solutions.",
    "The extensive set of libraries and pre-built components in .NET enables developers to create applications faster, reducing time-to-market.",
    ".NET allows you to develop applications that can run on various platforms, such as Windows, Linux, and macOS, through .NET Core and .NET 5.",
    ".NET provides built-in security features, making it easier to develop secure applications and protect them from common cyber threats.",
    ".NET applications can easily scale to accommodate growing user loads and evolving business requirements.",
    "The applications are known for their high performance, ensuring a smooth and responsive user experience.",
    "It is compatible with various programming languages, allowing developers to choose the language they are most comfortable with, such as C#, F#, or Visual Basic.",
    ".NET can be seamlessly integrated with other Microsoft technologies and products, making it suitable for enterprises using the Microsoft ecosystem.",
  ];

  return (
    <>
      <Head>
        <title>Best .Net Development Company | .Net Development Services</title>
        <meta
          name="description"
          content="As a prominent .NET development company, we specialize in delivering top-notch ASP.NET development services and boast expertise in mobile app development."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best .Net Development Company | .Net Development Services"
        />
        <meta
          property="og:description"
          content="As a prominent .NET development company, we specialize in delivering top-notch ASP.NET development services and boast expertise in mobile app development."
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_.NET+preview+image.jpg"
        />{" "}
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/dotnet-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Hire+Chatbot+Developers.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/dotnet-development-company"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/dotnet-development-company"
        />
      </Head>
      <Suspense fallback={{/* <Loader /> */}}>
        <div className="relative">
          <Header></Header>
          <HireBanner
            subhead="A Smarter Way to Build Customized Applications."
            title=".NET Development"
            content={content}
            unique="Company"
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/web-development/Mask+Group+162.png"
            alt="DotNet Development Company"
          />
          <Customer />
          <Experienced
            title=".NET Development"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/web-development/Group+6231.png"
            alt="dotnet development company"
            type="why"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="DotNet Development" />
          <AdvantageVerticalCards
            title=".NET Development"
            subhead=".NET development offers numerous benefits for businesses and developers:"
            reasons={reasons}
          />
          <Hire
            title="Why .NET Application Development from %Brain Inventory?"
            card={hireCards}
          />

          <ChooseBraininventory
            reasons={chooseBI}
            alt="Hire Dedicated Laravel Developers"
          />
          <FaqHire faq={faqdetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default HireAangularJsDeveloper;
