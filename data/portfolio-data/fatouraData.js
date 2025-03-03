export const FatouraSectionOne = {
    space:
      "                                                                                                                                                                                                                                                                        ",
    brief: "CREATE & MANAGE YOUR ",
    styleBrief: "INVOICES",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/fatoura-logo.png",
    alt: "Fatoura",
  };
  export const teamMembers = [
    {
      id: 1,
      name: "Shivam Yadav",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -2.png",
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Ali Asgar Dhariwala",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -1.png",
      role: "Software Engineer",
    },
    {
      id: 3,
      name: "Asim Sheikh",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -3.png",
      role: "Software Engineer",
    },
    {
      id: 4,
      name: "Pritesh Patil",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -4.png",
      role: "Quality Analyst",
    },
    {
      id: 5,
      name: "Rimjhim Kasera",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -5.png",
      role: "UI/UX Design",
    },
  ];
  export const sectionOneImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6420.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Mask Group 172.png",
  };
  export const sectionTwoImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6419.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6418.png",
  };

  export const milestoneContent = [
    "Custom-tailored PayPal integration",
    "Multiple subscription options to cater for all sizes of businesses",
    "Multi-Language support at just one click",
  ];
  export const challenge =
    "During the development of the project, we encountered several technical challenges that required careful consideration and implementation. One significant hurdle was the creation of dynamic PDF invoices. It was essential to generate these invoices with dynamic data, but accomplishing this solely on the front end posed difficulties. The handling of page breaks proved problematic, particularly when dealing with both English and Arabic versions, leading to layout shifts and inconsistencies. Another challenge involved the integration of invoices created on the platform with PayPal. We aimed to provide users with the capability to accept payments directly into their PayPal accounts through our platform. This integration necessitated meticulous record-keeping of payment transactions to ensure proper synchronization between the platform and PayPal. Furthermore, we faced the task of managing documents across multiple currencies on the platform. This requirement posed challenges when calculating reports, as differentiation based on currency became crucial for accurate reporting and analysis.";
  export const solution =
    "To address the challenge of generating dynamic PDF documents, we devised a technical solution that involved shifting the application logic responsible for PDF creation to the backend. By leveraging headless browsers, we were able to render HTML layouts and seamlessly generate PDFs from the dynamically generated content. This approach ensured greater control over page breaks and layout consistency, overcoming the limitations experienced on the front end. In terms of integrating PayPal, we implemented a robust solution by utilizing user-provided app credentials, and securely storing them in our database. This allowed us to establish a direct connection between our platform and PayPal, enabling seamless payment transactions. Through meticulous application logic and synchronization mechanisms, we ensured the accurate recording and tracking of payment transactions, providing users with a seamless payment experience. To handle the complexities associated with managing multiple currencies across different documents, we incorporated a reliable third-party service. This service facilitated the calculation of currency values against a base currency (USD) and stored them in our database. With this data in place, we were able to accurately convert values into the desired currencies, enabling precise differentiation and segregation of data when generating reports. This approach ensured that reports were generated with the correct currency representation, providing users with comprehensive and accurate financial insights.";

  export const tech = [
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/6.png",
      name: "Angular",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/7.png",
      name: "NodeJs",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/8.png",
      name: "MongoDB",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/9.png",
      name: "ExpressJs",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/10.png",
      name: "AWS EC2",
    },
  ];