import Link from "next/link";

export const content = (
    <>
      <Link href="/" className="text-[#2186ff]">
        Brain Inventory
      </Link>{" "}
      is a team of experienced professionals who are passionate about the latest
      innovations and technologies. We are trained in all facets of the MERN
      stack and have expertise in React.js, NodeJS, and more.
    </>
  );

  export const hireCards = [
    {
      head: "On-Time Delivery",
      content:
        "Our reputation is built on our use of distributed teams, agile methods, and effective development strategies. Our expertise in JavaScript and Node.js underpin our approach, and we are eager to assist you in bringing your idea or project to life with a tailored solution utilizing the MERN Stack.",
    },
    {
      head: "Seasoned Developers",
      content:
        "Our team of experienced MERN Stack developers is ready to take your app to the next level. They have extensive knowledge and experience in creating world-class services for clients. You will benefit from our development process and project management technique, which give an efficient way to deliver high-quality software products.",
    },
    {
      head: "Strict NDA Terms",
      content:
        "One of the most important aspects of a business is the idea. However, it is crucial to maintain confidentiality while sharing your business ideas with others. We ensure that no one can access the idea or data until you have signed an NDA. This protects both parties from any sort of breach.",
    },
  ];

  export const faqDetails = [
    {
      id: "1",
      title: "Can you list out some key benefits of MERN?",
      description:
        "Yes, MERN stack development services are still in demand and they will continue to be. MERN stack uses a single language- JavaScript, making it easier to learn even for beginners. Also, the code reusability factor has contributed a lot to its immense popularity. ",
    },
    {
      id: "2",
      title: "What are the major benefits of using MERN Stack web Development?",
      description: (
        <div className="space-y-2">
          <p>The major benefits of using the MERN stack include-</p>
          <ul className="ml-10 list-disc">
            <li>
              Scalability, as it allows for upscaling and downscaling with no
              compromise on the code integrity
            </li>
            <li>Strong community support </li>
            <li>It is free and open-source </li>
            <li>
              It uses the language Node.js to handle multiple actions
              asynchronously{" "}
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "3",
      title: "Is MERN stack best for web development?",
      description:
        "Yes, it is best for building dynamic and scalable web applications because it uses a single-language environment. ",
    },
    {
      id: "4",
      title:
        "Why should I choose MERN Stack for my project?",
      description:
        "MERN stack gives an advantage of cross-platform technology and can easily use the native features of the device to give a satisfactory user experience. ",
    },
    {
      id: "5",
      title: "What services do you offer under MERN Stack development?",
      description:
        "MERN stack development allows building applications using MongoDB, Express.js, React, and Node.js. Using these languages, our MERN stack development company offers various services including custom application development, enterprise application development, e-commerce application development, interactive UI development, React.js development, express.js development, MongoDB development, and CMS development services.",
    },
  ];

  export const chooseBiSubhead =
    "As you can see, designing and building an Android application is not an easy task. It is much more than just coding. In order to deliver the best products in the market, we have highly professional developers who aim to offer a better end-user experience. We are fully equipped with the proven expertise of over 5 years and are equipped with a team of highly qualified developers who prioritize quality and efficiency while developing apps.";
  export const chooseBI = [
    "Brain Inventory is a trusted and reliable choice for MERN Stack Development Services.",
    "Expert developers with deep understanding of MongoDB, Express, React.js, and Node.js.",
    "Proficiency in creating custom web applications with optimal performance.",
    "Stay up-to-date with the latest advancements in technology, including cloud services, DevOps, and continuous integration and delivery.",
    "Ability to develop innovative microservices and serverless applications.",
    "Offer top-notch MERN stack web development services to enterprises, small businesses, and startups.",
    "Skilled scrum masters and product owners dedicated to building highly customizable MERN stack web applications.",
    "Agile mindset for efficient and collaborative development process.",
    "Commitment to delivering results on time and within budget.",
  ];

  export const benefitsList = [
    "Node.js, Express.js, React.js, and MongoDB — what do they all have in common? They are all written in the latest version of JavaScript. The MERN stack combines components from the three technologies in a way that provides a better abstraction than any individual component could achieve on its own.",
    "The MERN stack consists of MongoDB, ExpressJS, React, and Node.js. The MERN stack enables a full-stack service for web development. It’s excellent for building modern applications that depend on data from multiple sources across networks.",
    "The MERN stack was assembled with scalability as a principal goal. Each component technology was engineered for scaling, whether in large or small deployments. This facilitates effortless expansion in massive environments and simplified initial development in more modest settings. The stack's architecture allows seamless growth at any stage.",
  ];
  export const meanReasons = [
    <>
      The MERN Stack (Micro-eCommerce + FaaS + NLP) is a collection of software
      tools for scalable web and{" "}
      <Link href="javascript:void(0)" className="text-[#2186ff]">
        mobile app development
      </Link>
      .
    </>,
    "MERN Stack enables rapid application development in days rather than months or years.",
    "JavaScript is the most popular programming language known for its simplicity and ease of use.",
    "JavaScript comes with many libraries that aid in faster completion of day-to-day tasks.",
    "The JavaScript stack includes Angular and React, offering a range of choices for project stacks.",
    "Brain Inventory is a recommended option for creating an amazing website with an attractive design.",
    "The team of experts at Brain Inventory can assist in developing the best website.",
  ];
  export const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Is the MERN stack still in demand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, MERN stack development services are still in demand and they will continue to be. MERN stack uses a single language- JavaScript, making it easier to learn even for beginners. Also, the code reusability factor has contributed a lot to its immense popularity."
      }
    },{
      "@type": "Question",
      "name": "What are the major benefits of using MERN Stack web Development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The major benefits of using the MERN stack include- 
        Scalability, as it allows for upscaling and downscaling with no compromise on the code integrity
        Strong community support
        It is free and open-source 
        It uses the language Node.js to handle multiple actions asynchronously`
      }
    },{
      "@type": "Question",
      "name": "Is MERN stack best for web development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it is best for building dynamic and scalable web applications because it uses a single-language environment."
      }
    },{
      "@type": "Question",
      "name": "Why should I choose MERN Stack for my project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MERN stack gives an advantage of cross-platform technology and can easily use the native features of the device to give a satisfactory user experience."
      }
    },{
      "@type": "Question",
      "name": "What services do you offer under MERN Stack development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MERN stack development allows building applications using MongoDB, Express.js, React, and Node.js. Using these languages, our MERN stack development company offers various services including custom application development, enterprise application development, e-commerce application development, interactive UI development, React.js development, express.js development, MongoDB development, and CMS development services."
      }
    }]
  }