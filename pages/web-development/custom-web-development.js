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
const SectionOne = dynamic(() => import("../../components/common/HireBanner"));
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
  import("../../components/common/ChooseBraininventoryCustom.jsx")
);
const FindUs = dynamic(() => import("../../components/common/FindUs.jsx"));
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx")
);

function HireAangularJsDeveloper(props) {
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
        "Our approach to custom website design is agile, which means that we are flexible and can adapt to changes as they occur. This approach ensures that the end result is always in line with your vision and requirements.",
    },
    {
      head: "Customized Package",
      content:
        "Custom web development services offer the chance to pay for only the functionalities you need, helping you avoid a budget-breaking expense. You can better plan your money timeline in advance of the development process.",
    },
    {
      head: "Scalable",
      content:
        "Our solutions are flexible and can easily adjust to accommodate your business’ growth. They can be scaled as your company expands.",
    },
    {
      head: "Collaboration",
      content:
        "Collaboration is a crucial part of our approach and we firmly believe that achieving success can be best done by partnering with our clients. We will collaborate closely with you to make sure your custom website design lives up to your expectations and needs.",
    },
    {
      head: "Transparency",
      content:
        "At Brain Inventory, we believe in full transparency in all our interactions with clients. We always make sure to be open and honest about what we are able to do and what is out of our capabilities. Plus, we keep you up-to-date with any alterations or advancements of the project.",
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
      title: "What is a custom web design?",
      description:
        "Custom web design isn’t just about the visuals of your website – it’s an in-depth process to understand your business and create a comprehensive digital presence to bring success. Our approach involves learning about you, devising a strategy, creating a great user experience, designing the website and programming it accordingly, as well as implementing marketing tactics. All aspects are meticulously crafted to help you reach your organizational objectives and ensure you get the best ROI.",
    },
    {
      id: "2",
      title: "Can I check up on my website while it’s being developed?",
      description:
        "Yes! We create your website on a development server and provide you with a username and password so you can follow the progress. We believe in transparency and flexibility, so any feedback or suggestions you have for reaching your desired goals are more than welcome. Even once it has been custom-built and is live, you can still keep an eye on it from the back end.",
    },
    {
      id: "3",
      title: "How long does it take to construct and launch a web application?",
      description:
        "It really depends on the complexity of the project, user flows, and designs. The app creation process can range from weeks to months. To ensure fast deployment and maximum customer satisfaction, Brain Inventory uses the Agile Scrum methodology for its software development, which divides it into 2/3-week milestones.",
    },
    {
      id: "4",
      title:
        "How does Brain Inventory approach custom website design projects?",
      description:
        "Brain Inventory takes an agile, collaborative, and transparent approach when crafting custom website designs. We always strive to work closely with our clients and keep them in the loop throughout the whole process. Our team of experts will gain an understanding of your vision and requirements to create a website that meets your expectations.",
    },
  ];

  const para1 =
    "While it’s true that you can use custom solutions to build a unique website, the way your business needs to be structured and the features your customers are looking for will determine whether or not using a custom solution is necessary. If you own a restaurant, for example, you don’t need much. A simple website featuring your menu, team overview, location, and contact information would probably be enough. But if you are looking for something that will help your restaurant to stand out (and not just from a design standpoint), then a custom approach is the way to go.";

  const para2 =
    "If it doesn’t have the elements of being working, engaging, and interactive, it’s not a good web design. Brain Inventory’s custom web design service is committed to that. Our process is unlike other creative agencies since we first focus on getting the answers to important questions.";

  const benefitSubHead =
    "The benefits of having a custom website, app, or eCommerce platform are endless. It can help you build trust and credibility with your customers, provide the highest level of user experience, simplify the process of product creation and management, and more!";

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
  return (
    <>
      <Head>
        <title>
          Custom Website Design And Development Services – Brain Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory is a leading custom web development company that offers reliable and customized web development solutions for your businesses. Contact us today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Website Design And Development Services – Brain Inventory"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a leading custom web development company that offers reliable and customized web development solutions for your businesses. Contact us today."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/custom-web-development"
        />

        <meta
          property="og:image"
          content="https://d1u4arv5y5eda6.cloudfront.net/images/preview/Braininventory_custom+web+develpment+preview+image.jpg"
        />

        <link
          rel="canonical"
          href="https://braininventory.in/web-development/custom-web-development"
        />
      </Head>

      <Suspense fallback={<Loader />}>
        <div className="relative  ">
          <Header />
          <SectionOne
            heading="Transform Your Brand with"
            title="Custom Web"
            content={content}
            btn="Contact Us!"
            developmentImage="https://d1u4arv5y5eda6.cloudfront.net/images/Technology/Braininventory_hybrid+app+3.png"
            image="https://d1u4arv5y5eda6.cloudfront.net/images/campaign-creators-iEiUITs149M-unsplash.png"
            type="web"
            alt="custom web development company"
          />
          <section className="container">
            <Customer />
          </section>
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
            head="Why Choose Brain inventory for Your Next"
            blue="Assignment"
            alt="custom web development company"
          />
          <BlogArticle />
          <FaqHire faq={faqdetails} />
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
