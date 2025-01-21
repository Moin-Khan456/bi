import React, { Suspense } from "react";
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
const FaqHire = dynamic(() => import("../../components/common/Faqhire.jsx"));
import SectionOne from "../../components/common/HireBanner";
import Link from "next/link.js";
const Customer = dynamic(() => import("../../components/common/customer.jsx"));
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee.jsx")
);
const CustomBenefits = dynamic(() =>
  import("../../components/common/CustomBenefits.jsx")
);
const CustomWeb = dynamic(() => import("../../components/customWeb.jsx"));
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx")
);
import DOMPurify from "isomorphic-dompurify"
import Faqs from "../../components/mobilePages/faqs.js";


function CustomWebDevelopment(props) {
  const content =
    "Our agile web design and development teams build fast and responsive websites with state of art features based on your ideas. We provide right framework for your project, allowing us to iterate quickly.";
  const hireCards = [
    {
      head: "Superior Code quality",
      content:
        "Our priority is on writing clean code, so our clients get a lightweight, speedy website that requires minimal maintenance.",
    },
    {
      head: "Agile Approach",
      content:
        "Our approach to Custom Website Development is agile, which means that we are flexible and can adapt to changes as they occur. This approach ensures that the end result is always in line with your vision and requirements.",
    },
    {
      head: "Customized Package",
      content:
        "Custom web development services offer the chance to pay for only the functionalities you need, helping you avoid a budget-breaking expense. You can better plan your money timeline in advance of the development process.",
    },
    {
      head: "Scalable",
      content:
        "Our offerings are adaptable and can simply be modified to support the expansion of your organization. They can be enlarged as your firm increases in size.",
    },
    {
      head: "Collaboration",
      content:
        "Collaboration is a crucial part of our approach and we firmly believe that achieving success can be best done by partnering with our clients. We will collaborate closely with you to make sure your Custom Website Development lives up to your expectations and needs.",
    },
    {
      head: "Transparency",
      content:
        "Brain Inventory is committed to complete transparency in every client interaction. Our priority is to always communicate openly and truthfully regarding our abilities and limitations. Furthermore, we ensure that you are informed of any changes or progress in the project without delay.",
    },
    {
      head: "Content Management",
      content:
        "Web Apps that are tailored include user-friendly site management tools, allowing non-technical members of the organization such as managers, content editors, and other team members to make changes to the website without needing technical help.",
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title: "Why do you need web development services?",
      description:
        "Custom Web development services are essential for your business if you are looking to establish a strong online presence, reach an international audience, sell products and services through an e-commerce store, improve customer satisfaction, or improve branding and marketing.",
    },
    {
      id: "2",
      title: "Why is custom web design better than templates?",
      description:
        "Custom web design is always better than ready-made templates because it offers greater flexibility to put design elements as per your unique business goals, brand identity, and project requirements. It allows you to offer a more personalized experience to the customer. On the other hand, templates are pre-designed, and the brand has to fit in. Opt for custom website development if you want to maintain your brand’s credibility for a long time.",
    },
    {
      id: "3",
      title: "Why is custom website design essential for your brand?",
      description:
        "A custom website design is crucial for your business if you want to give a personalized experience to the user and create an online presence that aligns perfectly with your brand image. Unlike generic templates, custom web development builds brand credibility and fosters trust in your customers.",
    },
    {
      id: "4",
      title:
        "What are the benefits of custom web design?",
      description: (
        <>
          <p> The benefits associated with a custom web design are- </p>
          <ul className="ml-10 list-disc">
            <li>An improved user experience </li>
            <li>A significant boost in the search engine results</li>
            <li>Increased conversions</li>
            <li>
              Scalability, the website can scale easily, to accommodate your
              growing business needs
            </li>
            <li>It creates a more personalized experience</li>
          </ul>
        </>
      )
    },
    {
      id: "5",
      title: "Can I check up on my website while it’s being developed?",
      description:
        "Yes. Absolutely. You can keep a check on your website while it's being developed. It allows for instant feedback to the development team so that changes can be made in the initial stage only. At our custom website design company, we conduct regular meetings with our clients to ensure they are on the same page and stay satisfied with every stage of the development process.",
    },
  ];

  const para1 =
    "While it’s true that you can use custom solutions to build a unique website, the way your business needs to be structured and the features your customers are looking for will determine whether or not using a custom solution is necessary. If you own a restaurant, for example, you don’t need much. A simple website featuring your menu, team overview, location, and contact information would probably be enough. But if you are looking for something that will help your restaurant to stand out (and not just from a design standpoint), then a custom approach is the way to go.";

  const para2 =
    "If it doesn’t have the elements of being working, engaging, and interactive, it’s not a good web design. Brain Inventory’s Custom Web Development is committed to that. Our process is unlike other creative agencies since we first focus on getting the answers to important questions.";

  const benefitSubHead =
    "Developing a personalized website, application, or eCommerce platform offers numerous advantages. It assists in establishing trust and credibility with customers, delivers optimal user experience, streamlines product creation and administration, and much more. A tailored digital presence furnishes countless positives.";

  const benefitsList = [
    "A secure and reliable website with all the functionalities you need",
    "An eye-catching and enticing design tailored to reach your desired demographic.",
    "A layout is free of distractions, and content that is maximized for efficiency and faster loading speeds.",
    "High-quality, on-brand visuals such as professional photographs, illustrations, or videos.",
    "Thoughtfully crafting conversion funnels to boost your conversions.",
    "Make sure to apply on-page SEO to each page of your website in order to increase your rankings in search engine results.",
    "A customer-friendly interface to help your customers navigate easily and efficiently.",
    "An exceptional user experience that helps you reduce churn rate and construct a solid brand.",
    "Maximize your website's performance, compatibility, and accessibility with our full optimization service.",
    "Our handcrafted admin panels allow your web administrators to quickly and easily make any changes they need.",
  ];

  const chooseBI = [
    <>
      At <Link href="/" className="text-[#2186ff]">Brain Inventory</Link>, {`we strive for total
      transparency in everything we do with our clients. We are careful to
      explain exactly what we can and can't deliver, so there are no unexpected
      disappointments. We also make it a top priority to keep customers updated
      if we implement any modifications or enhancements throughout a job. We aim
      to be completely upfront about our capabilities and processes so there is
      never any confusion. Our goal is to foster relationships built on trust by
      being forthcoming at every stage. We aim to be completely forthright at
      all times with those who work with us. Our goal is to foster trust and
      understanding through constant transparency.`}
    </>,
    "Our delivery processes are transparent, our communication is excellent, and we offer a flexible approach; this allows us to deliver custom software projects to all types of businesses, ranging from startups to large enterprises.",
    "Let us help you bring your vision into reality with an advanced and reliable website designed to perform and personalized just for you!",
  ];
const jsonLdScript = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why do you need web development services?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Custom Web development services are essential for your business if you are looking to establish a strong online presence, reach an international audience, sell products and services through an e-commerce store, improve customer satisfaction, or improve branding and marketing."
    }
  },{
    "@type": "Question",
    "name": "Why is custom web design better than templates?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Custom web design is always better than ready-made templates because it offers greater flexibility to put design elements as per your unique business goals, brand identity, and project requirements. It allows you to offer a more personalized experience to the customer. On the other hand, templates are pre-designed, and the brand has to fit in. Opt for custom website development if you want to maintain your brand’s credibility for a long time."
    }
  },{
    "@type": "Question",
    "name": "Why is custom website design essential for your brand?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A custom website design is crucial for your business if you want to give a personalized experience to the user and create an online presence that aligns perfectly with your brand image. Unlike generic templates, custom web development builds brand credibility and fosters trust in your customers."
    }
  },{
    "@type": "Question",
    "name": "What are the benefits of custom web design?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `The benefits associated with a custom web design are- 
      A significant boost in the search engine results
      Increased conversions
      Scalability, the website can scale easily, to accommodate your growing business needs
      It creates a more personalized experience
      An improved user experience`
    }
  },{
    "@type": "Question",
    "name": "Can I check up on my website while it’s being developed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Absolutely. You can keep a check on your website while it's being developed. It allows for instant feedback to the development team so that changes can be made in the initial stage only. At our custom website design company, we conduct regular meetings with our clients to ensure they are on the same page and stay satisfied with every stage of the development process."
    }
  }]
}
const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript))
  return (
    <>
      <Head>
        <title>Custom Website Development USA - Custom Web Design</title>
        <meta
          name="description"
          content="Brain Inventory gives you the best solutions for custom web development services. Elevate your brand with a custom website design company. Contact us!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Website Development USA - Custom Web Design"
        />
        <meta
          property="og:description"
          content="Brain Inventory gives you the best solutions for custom web development services. Elevate your brand with a custom website design company. Contact us!"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/custom-web-development"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_custom+web+develpment+preview+image.jpg"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/web-development/custom-web-development"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/campaign-creators-iEiUITs149M-unsplash.png"
          as="image"
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
        <div className="relative  ">
          <Header />
          <SectionOne
            heading="Transform Your Brand with"
            title="Custom Web Development & Design Services by"
            content={content}
            btn="Contact Us!"
            // developmentImage="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Braininventory_hybrid+app+3.png"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/campaign-creators-iEiUITs149M-unsplash.png"
            type="web"
            unique={"brain inventory"}
            alt="custom web development company"
          />
          <Customer />
          <CustomWeb para1={para1} para2={para2} type="Custom web" />
          <HireMarquee title="Custom Web" />
          <CustomBenefits
            type="Web"
            subhead={benefitSubHead}
            benefitsList={benefitsList}
          />
          <Hire
            title="Why Custom Web Development from %Brain Inventory"
            card={hireCards}
          />

          <ChooseBraininventory
            reasons={chooseBI}
            alt="hybrid development company"
          />
          <Faqs faq={faqdetails} />
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

export default CustomWebDevelopment;
