import Link from "next/link";

export const content = (
    <>
      <Link href="/" className="text-[#2186ff]">
        Brain Inventory
      </Link>{" "}
      {`is a company that values customer happiness above all else in today's
      technology-driven world. We have a team of highly trained Salesforce
      specialists and accredited programmers who offer Salesforce creation
      services at a competitive rate. All of our clients have been completely
      satisfied with our work.`}
    </>
  );
  export const subhead =
    "Our proficient consultants in Salesforce CRM assist you in analysing your business requirements by recognizing areas of improvement to enhance performance and efficiency. Our outreach spans across the globe, catering to countries such as the UK, Canada, the United States, and Jordan. We specialise in delivering a broad range of services to clients from diverse sectors.";
  export const subhead1 =
    "We reject the notion that anything is impossible or unattainable. We are determined to fulfill your unique needs for an online presence. Our commitment to providing exactly what our clients desire has earned the trust and loyalty of people worldwide. There is no request too customized or complex that we cannot deliver. We make the impossible possible and overcome any obstacles to achieve the vision you have for your digital brand.";
  export const keySkillsBrief =
    "Salesforce development leverages a variety of tools and technologies to create powerful and scalable solutions for businesses. Key tools include Salesforce Lightning, a component-based framework for building modern user interfaces, and Apex, a powerful programming language for building custom business logic and integrations. Developers also use Visualforce, a markup language for creating custom user interfaces, and Salesforce DX, a developer-friendly platform for managing the application development lifecycle. Additionally, Salesforce offers a robust ecosystem of third-party tools and technologies, such as Heroku for hosting and deploying applications, and MuleSoft for integrating Salesforce with other systems. With these tools and technologies, Salesforce developers can create highly customized and efficient solutions tailored to the unique needs of each business.";

  export const subHeadPathways =
    "We have the expertise to achieve the desired outcomes for your Salesforce investments. We provide four options for engaging with us, which are designed to be convenient and adaptable to your business needs.";

  export const EngageOptions = [
    {
      head: "DISCOVER",
      content:
        "We thoroughly examine your company and offerings to gain a comprehensive understanding of your products and services. Furthermore, we scrutinize your existing Salesforce setup in depth to establish the appropriate specifications.",
    },
    {
      head: "BUILD",
      content:
        "It is crucial to collaborate with an experienced Salesforce development services provider that has expert staff to optimize your business workflows. We finish projects on schedule, handling architecture configuration, solution ideation, development, and testing.",
    },
    {
      head: "DEPLOY",
      content:
        "The solution that is developed can sometimes be so important that it may provide capabilities to your Salesforce business that you have never encountered before. As a result, we make the solution accessible to users through the right tools without impacting any current information or functions.",
    },
  ];

  export const hireCards = [
    {
      head: "Certified Salesforce Developers",
      content: `Our experienced team of Salesforce experts holds the latest certifications and stays on top of the most current technologies and trends. Leveraging this knowledge allows us to build cutting-edge Salesforce CRM systems that boost your digital footprint and empower your organization. Though the tools may change, our commitment to maximizing your growth through custom-tailored solutions remains constant.`,
    },
    {
      head: "Customer Satisfaction",
      content:
        "We are not hindered by any obstacles that could prevent us from satisfying even the smallest of our customers' needs. We are not hindered by any obstacles that could prevent us from satisfying even the smallest of our customer's needs. For us, every piece of information you provide is valuable and we make sure to include it.",
    },
    {
      head: "Years of Experience",
      content:
        "We have developed high-impact salesforce solutions for our clients for nearly 4 years, giving us valuable experience and expertise in this niche. Our time working in this field allows us to confidently understand how to build effective solutions that have a real impact on our clients.",
    },
    {
      head: "Clean Codes",
      content:
        "Our software engineers prioritize crafting uncomplicated, coherent code that is straightforward and performs well. We take pride in writing uncluttered, effective code - this dedication to simplicity and efficiency distinguishes our work from that of our rivals.",
    },
  ];
 export const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Which language is used in Salesforce development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Developers can use Apex, JavaScript, Python, and other query languages for Salesforce development. However, most of them prefer using Apex due to its customization features. Contact our Salesforce development company to discuss your project."
      }
    },{
      "@type": "Question",
      "name": "How does Salesforce development work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salesforce development services usually involve the programming language Apex to create customized features and logic for building UI. Developers can also connect Salesforce with third-party tools like payment gateways to make applications more sturdy and functional."
      }
    },{
      "@type": "Question",
      "name": "Is Salesforce front-end or back-end?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salesforce is generally called a back-end framework but it also includes front-end elements like Lightning for creating beautiful user interfaces."
      }
    },{
      "@type": "Question",
      "name": "Will you work according to my time zone preference?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We will conduct a meeting with you to understand your time zone preferences, company norms, and cultural differences to make the workflow smoother in the long run."
      }
    },{
      "@type": "Question",
      "name": "Which platform is used for developing an app in Salesforce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Salesforce platform is used for developing an app in Salesforce. Using tools like Apex, Lightning components and other programming languages, developers can create custom applications easily. Contact our Salesforce app development company to learn more about Salesforce and its applications in your industry."
      }
    }]
  }
  
  export const faqDetails = [
    {
      id: "1",
      title: "Which language is used in Salesforce development?",
      description:
        <>
        Developers can use Apex, JavaScript, <Link className="text-blue-600" href={"https://braininventory.in/web-development/python-web-development-company"}>Python</Link>, and other query languages for Salesforce development. However, most of them prefer using Apex due to its customization features. Contact our Salesforce development company to discuss your project. 

        </>
    },
    {
      id: "2",
      title: "How does Salesforce development work?",
      description:
        "Salesforce development services usually involve the programming language Apex to create customized features and logic for building UI. Developers can also connect Salesforce with third-party tools like payment gateways to make applications more sturdy and functional.",
    },
    {
      id: "3",
      title:
        "Is Salesforce front-end or back-end?",
      description:
        "Salesforce is generally called a back-end framework but it also includes front-end elements like Lightning for creating beautiful user interfaces. ",
    },
    {
      id: "4",
      title: "Will you work according to my time zone preference?",
      description:
        "Yes. We will conduct a meeting with you to understand your time zone preferences, company norms, and cultural differences to make the workflow smoother in the long run.",
    },
    {
      id: "5",
      title: "Which platform is used for developing an app in Salesforce?",
      description:
        <>
        The Salesforce platform is used for developing an app in Salesforce. Using tools like Apex, Lightning components and other programming languages, developers can create <Link className="text-blue-600" href={"https://braininventory.in/mobile-development/custom-mobile-app-development-company"}>custom applications</Link> easily. Contact our Salesforce app development company to learn more about Salesforce and its applications in your industry.
        </>
    },
  ];

  export const chooseBI = [
    <>
      Brain Inventory, a leading Salesforce development, implementation, and
      integration partner in USA, is here to help enhance your Salesforce
      experience. We help you deliver an unmatched customer experience for your
      organization by tapping into the power of Salesforce.
    </>,
    "We provide end-to-end Salesforce professional services including Salesforce customization, development, app building, Pardot, CPQ, and more, backed by a team of certified experts. Today, we have successful Salesforce deployments in our portfolio, including Fortune 500 companies.",
    <>
      <Link href="/company" className="text-[#2186ff]">
        Our team
      </Link>{" "}
      {`is dedicated and devoted to our clients, not to the latest technology or
      any major software vendors. We aim to work with the best technologies to
      serve our clients and their customers' interests. Our Salesforce
      consulting services in USA support business growth and success through
      cloud enablement.`}
    </>,
  ];

  export const experienceCards = [
    {
      head: "Salesforce Consulting",
      content:
        "Our team of experts is here to assist you in unlocking the maximum potential of your business by developing integrated service, sales, and marketing strategies. Whether you aim to enhance your current Salesforce System or introduce a new one, you can have complete trust in our skilled consultants to deliver extraordinary outcomes.",
    },
    {
      head: "Salesforce CRM Development",
      content:
        "Salesforce is a flexible customer relationship management (CRM) system that many companies need customising to enable communication between departments and automate workflows. Our services include both setting up new Salesforce platforms and transitioning your current CRM system over to Salesforce. We can help configure Salesforce to meet your business's specific needs for internal coordination and process automation.",
    },
    {
      head: "Salesforce Lightning",
      content:
        "Salesforce is a flexible customer relationship management (CRM) system that many companies need customising to enable communication between departments and automate workflows. Our services include both setting up new Salesforce platforms and transitioning your current CRM system over to Salesforce. We can help configure Salesforce to meet your business's specific needs for internal coordination and process automation.",
    },
    {
      head: "Salesforce Customization",
      content:
        "For highly specialized business needs, we offer tailored Salesforce solutions. This encompasses developing one-of-a-kind programming to enable capabilities not inherent in Salesforce's standard offerings. Our goal is to optimize returns on investment by crafting a distinctive and compelling experience for our clients' customers.",
    },
    {
      head: "Salesforce Integration",
      content:
        "To ensure consistent processes across an organization, companies frequently require capabilities beyond simply setting up and tailoring software to their needs. They need to integrate Salesforce with external applications. This integration helps construct a cohesive system used company-wide by departments such as sales, finance, customer service, and marketing.",
    },
  ];