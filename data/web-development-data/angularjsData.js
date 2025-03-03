import Link from "next/link";

export const content = (
    <>
      At Braininventory, we provide services for{" "}
      <Link href="/custom-web-development" className="text-[#2186ff]">
        custom web development
      </Link>
      {"  "}
      in Angular. Having a strong team of professional and experienced
      developers, we provide you with high-level services in the area of custom
      web development and app development.
    </>
  );

  export const hireCards = [
    {
      head: "Experienced Developers",
      content:
        "Over time, our team has developed specialized knowledge and capabilities in creating personalized web apps with Angular JS and similar platforms and tools. Our group of Angular specialists works diligently to build Angular apps that provide all the functions your company requires, the assistance your users need, and the outcomes your enterprise warrants. We have the skills and experience to make custom Angular web applications that meet your business objectives.",
    },
    {
      head: "Trusted Delivery Methods",
      content:
        "We’re offering high-quality custom web development services to clients across the globe. Our services are an optimum combination of quality and timely delivery. Throughout AngularJS application development, we focus on delivering solutions that meet your business goals, timeline, and budget. We employ the Agile methodology to keep you in the loop throughout development.",
    },
    {
      head: "Competitive Rates",
      content:
        "Our team of developers, which is highly professional and competent, helps organizations to achieve high ROI through our agile and cost-effective approach. We specialize in developing client-centric web and mobile applications using AngularJS. Our affordable AngularJS website development services are here to help you take your competitive edge to the next level!",
    },
    {
      head: "Transparent Work Approach",
      content:
        "We feel that a suitable development methodology must deliver complete transparency and predictability of the client’s investment. As soon as we understand your requirements, we work with you to define the project objectives and parameters. We provide you with an accurate estimate of the time and cost required to develop your project.",
    },
  ];

  export const faqDetails = [
    {
      id: "1",
      title: "What types of applications can be developed using AngularJS?",
      description:
        "AngularJS web app development can be utilized to develop single-page applications, mobile applications, firebase powered applications, web applications, and Google Chrome extensions.",
    },
    {
      id: "2",
      title: "How does AngularJS improve application performance?",
      description: (
        <>
          <ul className="ml-10 list-disc">
            <li>
              Two-Way Data Binding: It reduces manual updates by establishing an
              automatic synchronization between the model and the view.
            </li>
            <li>
              Routing Optimization: Optimizing routes with lazy loading and
              preloading strategies improves overall application speed.
            </li>
            <li>
              Single Responsibility Principle (SRP): Both AngularJS and Angular
              promote dividing the application into smaller, focused components
              or controllers.
            </li>
            <li>
              Avoid Memory Leaks: Both frameworks emphasize unsubscribing from
              observables or event listeners to prevent memory leaks.{" "}
            </li>
            <li>
              DOM Manipulation Optimization: It has efficient DOM manipulation
              methodologies to manipulate DOM in the form of Directives which
              ensures efficient rendering and DOM updates.
            </li>
            <li>
              Modular Architecture: It allows developers to break organized
              architecture into simpler modules for better lazy loading,
              enabling only the necessary modules/components to load, thereby
              improving application speed.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "3",
      title: "Is AngularJS suitable for large-scale applications?",
      description:
        "Yes. AngularJS is suitable for building complex, large-scale applications. ",
    },
    {
      id: "4",
      title: "Why do many businesses and developers prefer AngularJS?",
      description:
        "Faster development with the help of features like MVC architecture, code reusability, and two-way data binding attracts many businesses and developers today. We offer AngularJS development services to help you build tailored applications according to your unique business needs. ",
    },
    {
      id: "5",
      title: "Will Angular remain significant in 2025?",
      description:
        "Yes. Angular will continue to remain significant in 2025 because it can develop dynamic user interfaces and enterprise-level applications with minimum effort. We, as an AngularJS development company, suggest you prefer AngularJS for building complex and large-scale applications.",
    }
  ];

  export const chooseBI = [
    <>
      At{" "}
      <Link href="/" className="text-primaryTx opacity-100 Gilroy-Bold">
        Brain Inventory
      </Link>
      , our greatest joy stems from offering our clients unparalleled AngularJS
      Development Services, which enable us to produce high-quality bespoke
      software using widely-accepted technologies.
    </>,
    "Our experts utilize multiple frameworks and libraries, including Java, PHP, and HTML5. They make use of industry standards like the MVC (Model-View-Controller) design pattern and dependency injection to make building apps simpler.",
    "Being the best AngularJS Development Company, we endow you with a high-end product by blending our years of expertise and experience with advanced development practices.",
    "In addition to providing you with top-notch AngularJS Development Services, we also provide training for your team. This will ensure that employees are fully abreast with the new technology as well as catering to their growing interest in learning new skills.",
    "We develop and also help our clients in developing applications using state-of-the-art frameworks and Web technologies. A few of the frameworks we extensively use in developing quality web & mobile apps include ReactJS, Angular (1, 2), Vue JS, Node JS, etc. We also provide technical support to users of these frameworks.",
  ];

  export const benefitsList = [
    "Several benefits of AngularJS development make it a popular choice for building web applications.",
    "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML syntax to express your application's components clearly and succinctly.",
    "AngularJS goes far beyond the basics of the JavaScript programming language. AngularJS simplifies developing complicated web applications that rely heavily on data by handling much of the tedious and repetitive work involved.",
    "One of AngularJS's most useful capabilities is its support for dependency injection. Dependency injection is a design pattern in software engineering that allows you to write and sustain your program code in a modular way. This makes the code easy to test and utilize.",
  ];
  export const meanReasons = [
    "AngularJS is a popular JavaScript framework engineered for constructing active and adaptive single-page applications (SPAs). It enables companies to build interactive web apps that deliver a smooth user experience, comparable to a desktop program. SPAs made with AngularJS can boost user involvement and retention, resulting in enhanced customer fulfillment.",
    "AngularJS utilizes a modular design that encourages code reuse, simplifying the management and upkeep of large applications. The framework allows developers to split up intricate programs into smaller, more controllable parts, promoting teamwork and decreasing the time spent coding.",
    "AngularJS has in-built testing features that promote test-driven development. This assists companies in guaranteeing the quality and stability of their apps through automated testing. Furthermore, AngularJS's modular architecture and distinct separation of duties lead to simpler code maintenance and upgrades.",
    "AngularJS can also construct hybrid mobile apps utilizing frameworks such as Ionic.",
  ];
  export const card = [
    "Transform your vision into a dynamic web platform",
    "Industry Expert Developers | Tailored Business Solutions",
    "Future-Ready Web Apps",
    "Custom Integration and Development",
  ];
  export const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What types of applications can be developed using AngularJS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AngularJS web app development can be utilized to develop single-page applications, mobile applications, firebase powered applications, web applications, and Google Chrome extensions."
      }
    },{
      "@type": "Question",
      "name": "How does AngularJS improve application performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Two-Way Data Binding: It reduces manual updates by establishing an automatic synchronization between the model and the view.
        Single Responsibility Principle (SRP): Both AngularJS and Angular promote dividing the application into smaller, focused components or controllers.
        Avoid Memory Leaks: Both frameworks emphasize unsubscribing from observables or event listeners to prevent memory leaks.
        DOM Manipulation Optimization: It has efficient DOM manipulation methodologies to manipulate DOM in the form of Directives which ensures efficient rendering and DOM updates.
        Modular Architecture: It allows developers to break organized architecture into simpler modules for better lazy loading, enabling only the necessary modules/components to load, thereby improving application speed.
        Routing Optimization: Optimizing routes with lazy loading and preloading strategies improves overall application speed.`
      }
    },{
      "@type": "Question",
      "name": "Is AngularJS suitable for large-scale applications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AngularJS is suitable for building complex, large-scale applications."
      }
    },{
      "@type": "Question",
      "name": "Why do many businesses and developers prefer AngularJS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faster development with the help of features like MVC architecture, code reusability, and two-way data binding attracts many businesses and developers today. We offer AngularJS development services to help you build tailored applications according to your unique business needs."
      }
    },{
      "@type": "Question",
      "name": "Will Angular remain significant in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Angular will continue to remain significant in 2025 because it can develop dynamic user interfaces and enterprise-level applications with minimum effort. We, as an AngularJS development company, suggest you prefer AngularJS for building complex and large-scale applications."
      }
    }]
  }