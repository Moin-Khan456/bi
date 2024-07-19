import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() =>
  import("../components/common/ContactForm.jsx")
);
import FaqHire from "../components/common/Faqhire.jsx";
import LetsKick from "../components/common/LetsKick.js";
import BlogArticle from "../components/common/BlogArticle.jsx";
const Header = dynamic(() => import("../components/header/Header.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"));
const SectionOne = dynamic(() => import("../components/faqs/sectionOne.jsx"));

export default function Faqs() {
  const [faqsType, setFaqsType] = useState("Development/Technologies/Services");

  const onStaffFaqs = [
    {
      id: 1,
      title: "Do you offer on-site software development services?",
      description:
        "We offer customized software development services at our clients' locations to address their particular requirements.",
    },
    {
      id: 2,
      title: "What are the advantages of opting for on-site services?",
      description:
        "Having development team members physically present provides the opportunity for real-time teamwork, clear conversations, and full visibility into the progress of the project. Locating developers within the company also makes it easier to connect new systems and processes with current ones.",
    },
    {
      id: 3,
      title: "What types of projects can benefit from on-site services?",
      description:
        "The most suitable situations for providing services at the client's location are intricate undertakings that necessitate frequent interaction between our professionals and the client's key personnel. Such endeavors include bespoke software creation, business-critical applications, and large information technology initiatives. By working onsite, we can maintain continuous alignment with stakeholders throughout the duration of the project.",
    },
    {
      id: 4,
      title: "How do you ensure the quality of on-site services?",
      description:
        "We have a team of seasoned experts who follow the best procedures and benchmarks in the industry. Furthermore, regular evaluations, feedback meetings, and quality control measures are put in place to guarantee the utmost quality in our on-location services.",
    },
    {
      id: 5,
      title: "What is the process for initiating on-site services?",
      description:
        "The process typically begins with a consultation to understand the client's requirements, followed by project planning, resource allocation, and deployment of our team to the client's location.",
    },
    {
      id: 6,
      title:
        "Can you provide examples of successful on-site projects you've completed in the past?",
      description:
        "We have successfully completed a wide range of on-site projects for clients across various sectors such as healthcare, finance, e-commerce, and other industries. If you require additional details about our expertise and abilities, we would gladly furnish you with examples of our past accomplishments and references from contented clientele.",
    },
    {
      id: 7,
      title:
        "How do you handle communication and collaboration during on-site projects?",
      description:
        "Our company employs a variety of methods to facilitate an open flow of information and cooperation between our staff and the client's key personnel. These methods include face-to-face gatherings, virtual conferences via video, specialized software for coordinating tasks, and consistent reports on the status of ongoing work.",
    },
    {
      id: 8,
      title: "What is the duration of on-site engagements?",
      description:
        "The duration of on-site engagements varies depending on the scope and complexity of the project. We work closely with our clients to establish realistic timelines and milestones to ensure timely delivery of results.",
    },
    {
      id: 9,
      title:
        "What happens if additional resources or expertise are needed during the project?",
      description:
        "If additional resources or expertise are required, we have the flexibility to scale our team accordingly. We can allocate additional resources from our pool of talented professionals or collaborate with external partners as needed.",
    },
    {
      id: 10,
      title:
        "How do you handle confidentiality and security concerns during on-site engagements?",
      description:
        "We take confidentiality and security very seriously. Our team members adhere to strict confidentiality agreements, and we implement robust security measures to safeguard sensitive information and intellectual property throughout the project.",
    },
  ];

  const itStaffAugmentation = [
    {
      id: 1,
      title:
        "What are the employment opportunities offered at Brain Inventory?",
      description: (
        <div>
          <p className={"py-1"}>
            We offer three pricing structures and hiring models for product
            development:
          </p>
          <ul className="list-disc px-6">
            <li>
              Dedicated Developer: A dedicated developer works 160 hours per
              month, 8 hours per day, 5 days per week on your project. This is
              billed monthly.
            </li>
            <li>
              Hourly: You pay by the hour for work completed. We utilize
              time-tracking tools like Time Doctor and Hubstaff to monitor
              hours. This allows flexible engagement.
            </li>
            <li>
              Time and Materials: Share your requirements with us. We will
              evaluate, and provide a detailed estimate of cost and time to
              complete, as well as a project roadmap. This offers complete
              transparency into scope and budget.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title:
        "What if I find the hired developer's work unsatisfactory and wish to terminate the agreement?",
      description:
        "Rest assured, that scenario will not come to pass. Ensuring our clients are fully satisfied is our topmost concern. Either us or you can end this contract at any time, for any reason or none at all, as long as a minimum of 14 days' notice is provided in writing to the other party. If the agreement is terminated, Brain Inventory will issue an invoice detailing the completed work up to that point, which you must pay within 3 business days. The termination invoice will list all outstanding and recently finished work through the end date. When the contract ends, we will deliver all finished materials to you in a usable electronic format.",
    },
    {
      id: 3,
      title:
        "Could I expect the resources that have been hired to be accessible during my time zone?",
      description:
        "Certainly, it is possible to provide access to them. You have the flexibility to collaborate with the contracted personnel as per your convenience and accomplish the task.",
    },
    {
      id: 4,
      title:
        "Would you be willing to complete a test assignment as a means of evaluating your skills?",
      description:
        "We offer a low-cost trial period so you can evaluate our capabilities prior to fully committing. For these preliminary tasks, we require full payment upfront. This allows you to verify our skills risk-free before proceeding with a more extensive engagement.",
    },
    {
      id: 5,
      title:
        "What is the minimum number of people that I need to hire for a team?",
      description:
        "The process of bringing on new talent has no restrictions. You can decide to add one programmer to your team or several, based on your requirements. There is flexibility in assembling the ideal group of developers that matches your needs. If you are uncertain about what your precise requirements are, please send an email to askus@braininventory.com to inquire further.",
    },
    {
      id: 6,
      title:
        "What would happen if the developer is on an extended sick leave or decides to depart from the company?",
      description:
        "No worries. We can allocate the backup developer if the primary one is ill or away for an extended period. Should any developer wish to leave, we require 3 months' notice, which allows time to transfer knowledge to someone else. This ensures no client work is negatively impacted by personnel changes.",
    },
  ];

  const devTechServicesFaqs = [
    {
      id: 1,
      title:
        "What are the most popular types of software development services I can expect from Brain Inventory?",
      description: (
        <div>
          Brain Inventory offers a comprehensive range of software development
          services to meet any need.
          <p className="py-2">
            Brain Inventory has the expertise to build custom software and
            applications for all platforms. We offer:{" "}
          </p>
          <ul className="list-disc px-6 py-1">
            <li>
              The creation of new web, mobile, and desktop applications from
              scratch
            </li>
            <li>
              Custom coding and programming services for any software needs{" "}
            </li>
            <li>Website building, updating, and upkeep </li>
            <li>
              Design and development of mobile apps for all devices like
              iPhones, Android phones and others{" "}
            </li>
            <li>Testing and fixing of software bugs and issues </li>
            <li>IT assistance, system maintenance and troubleshooting </li>
            <li>Technology advice and consulting services </li>
            <li>
              Staffing help by providing skilled IT experts and developers{" "}
            </li>
            <li>
              Cloud computing services such as migration, hosting, and storage{" "}
            </li>
            <li>
              New technologies such as AI, machine learning, data analysis, IoT,
              and automation of business processes.
            </li>
          </ul>
          We have proficiency across the entire range of software development
          and tech services. Whether you need help with a particular project or
          managing your overall IT infrastructure and systems, Brain Inventory
          has the abilities and experience to make your software vision a
          reality.
        </div>
      ),
    },
    {
      id: 2,
      title: "What project management tools do you use?",
      description:
        "We utilize commonly used project management programs such as Jira, Trello, Pivotal Tracker, Asana, and Slack. These tools allow you to keep track of developer productivity and daily project progress. You can generate tasks, delegate work, and monitor development advancement.",
    },
    {
      id: 3,
      title:
        "Do you provide support and maintenance services after deployment?",
      description:
        "We offer ongoing support and maintenance after finishing your project. Our post-launch services cover resolving bugs, upgrading the framework, continuously monitoring performance, and fixing technical issues to improve your product over time.",
    },
    {
      id: 4,
      title:
        "What distinguishes Cross-platform development from Native App development?",
      description:
        "When building apps for mobile devices, native development involves utilizing the platform-specific languages and tools. Objective-C and Swift code is written in Xcode for Apple platforms to produce iOS apps. For Android, developers write Java or Kotlin code in Android Studio to produce apps. With cross-platform approaches, a single codebase can generate apps across multiple operating systems like iOS, Android, and Windows Phone. The cross-platform framework enables writing code once that can then be deployed to the different platforms. This prevents needing to rewrite the application for each operating system natively.",
    },
    {
      id: 5,
      title: "Which operating system should we focus on iOS, Android, or both?",
      description:
        "Due to the increasing prevalence of iPhones and the newest Android phones, we suggest releasing the product on both operating systems.",
    },
    {
      id: 6,
      title:
        "Can I expect my website to function properly and appear visually appealing on all types of devices and various desktop operating systems?",
      description:
        "We will create a website that adjusts its layout responsively using modern CSS 3 standards. This will ensure optimal display across desktop browsers and mobile operating systems. The site will dynamically adapt for an optimal viewing experience on any device.",
    },
    {
      id: 7,
      title:
        "Should I create a website that has all the same functionality as a mobile application?",
      description:
        "A website doesn't need to contain the same features as the application. You can initially focus your efforts on developing just the core mobile application with a simple one-page website. Once the application gains more users and traction, you can then invest in building out a more robust, responsive website that mirrors the features and functionality of the application. The website and app can be developed in phases, starting with an MVP app and a simple landing page site, then later expanding the features on both platforms in tandem. This allows you to validate the product idea and get to market faster, without needing to build extensive web and mobile platforms upfront before demonstrating product-market fit.",
    },
    {
      id: 8,
      title: "If I want to be involved in the development process, is it okay?",
      description: `Yes, the Brain Inventory is founded on Agile principles. This Agile software development method involves constant iteration, where the "client-product owner" actively participates throughout the process.
Our approach is tailored and flexible. At every stage, from conceptualization to launch, you'll receive daily progress reports from the team via Sprint. Our daily scrum meetings incorporate adaptive planning, continuous improvement, execution, and rapid adaptation to change.`,
    },
    {
      id: 9,
      title: `Can you designate a dedicated individual, specifically a "Project Manager – Scrum Master," to serve as the main point of contact?`,
      description: `A specialized project manager, known as the Scrum master, will be designated for the entire duration of our collaboration. This person will be your main point of contact for any help, questions, or issues that arise. You can reach out to the Scrum master at any time for support.
`,
    },
    {
      id: 10,
      title: `How can I get started with Brain Inventory for my software development project?`,
      description: `Embarking on a project with Brain Inventory is effortless! You can get in touch with us via our website or contact us directly to set up a meeting. Our specialists will talk through your project needs, offer tailored suggestions, and walk you through the subsequent actions to commence your project experience with us.
`,
    },
  ];

  return (
    <>
      <Head>
        <title>
          FAQs | Web And Mobile App Development | IT Staff Augmentation
        </title>
        <meta
          property="description"
          content="Our FAQs cover queries on web and mobile app development, our process, services, and hiring dedicated resources."
        />
        <meta
          property="og:description"
          content="Our FAQs cover queries on web and mobile app development, our process, services, and hiring dedicated resources."
        />
        <meta
          name="og:title"
          content="FAQs | Web And Mobile App Development | IT Staff Augmentation"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/FAQ.png"
        />
        <meta property="og:url" content="https://braininventory.in/faqs" />
        <link rel="canonical" href="https://braininventory.in/faqs" />
      </Head>

      <main className="">
        <Header />
        <SectionOne setFaqsType={setFaqsType} faqsType={faqsType} />
        <section>
          {faqsType === "On-Site" && <FaqHire faq={onStaffFaqs} />}
          {faqsType === "IT Staff Augmentation" && (
            <FaqHire faq={itStaffAugmentation} />
          )}
          {faqsType === "Development/Technologies/Services" && (
            <FaqHire faq={devTechServicesFaqs} />
          )}
          <hr />
          <BlogArticle />
          <ContactForm />
          <LetsKick />
          <hr />
          <Footer />
        </section>
      </main>
    </>
  );
}
