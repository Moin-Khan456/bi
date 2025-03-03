export const BloomiaSectionOne = {
    space:
      "                                                                                                                                                                                                                           ",
    brief: "",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 4230.png",
    image:
      "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6382.png",
    alt: "Bloomia",
  };

  export const sectionOneImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6420.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Mask Group 172.png",
  };
  export const sectionTwoImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6419.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6418.png",
  };
  export const carouselImages = [
    {
      id: 1,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-1.png",
      hover:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/Component+10.png",
    },
    {
      id: 2,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-2.png",
      hover:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/Component+11.png",
    },
  ];

  export const section2CarouselImages = [
    {
      id: 1,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-1.png",
    },
    {
      id: 2,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-2.png",
    },
  ];

  export const tech = [
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/6.png",
      name: "Angular",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/7.png",
      name: "NodeJs",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/9.png",
      name: "ExpressJs",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/8.png",
      name: "MongoDB",
    },
  ];

  export const teamMembers = [
    {
      id: 1,
      name: "Krishna Agrawal",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6420.png",
      role: "Sr. UI/UX Designer",
    },
    {
      id: 2,
      name: "Gunjan Jain",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6423.png",
      role: "Sr. Software Architecture",
    },
    {
      id: 3,
      name: "Pradyumna Garg",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6429.png",
      role: "Software Architecture",
    },
    {
      id: 4,
      name: "Puneet Rajwani",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6432.png",
      role: "Software Architecture",
    },
    {
      id: 5,
      name: "Gautam Patil",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6426.png",
      role: "Software Engineer",
    },
    {
      id: 6,
      name: "Hussain Ali",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6435.png",
      role: "Software Engineer",
    },
    {
      id: 7,
      name: "Subhash Ajmera",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6438.png",
      role: "Software Engineer",
    },
    {
      id: 8,
      name: "Rahul Badwaya",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6441.png",
      role: "Software Engineer",
    },
  ];

  export const milestoneContent = [
    "Platform got published by major media houses",
    "Completing the project in a record time and achieving a smooth Go-Live",
    "Customer hit the break even in 6 Months",
  ];

  export const challenge =
    "During the development of the aforementioned project, we encountered several challenges that required careful problem-solving and optimization. One of the initial hurdles we faced was devising a dynamic animation screen that could be controlled based on user operations. We needed to animate a series of components in a sequential manner, with each component having variable timing. Ensuring smooth animation while handling repetitions posed a significant challenge that required meticulous planning and implementation. Another obstacle we encountered was accurately tracking and maintaining the user's daily streak. Our objective was to break the streak if the user failed to use the app daily. To achieve this, we had to optimize the solution to avoid unnecessary data accumulation while effectively monitoring and updating the streak status. This involved designing a streamlined data management system that efficiently tracked and recorded the user's daily engagement without unnecessary overhead.";

  export const solution =
    "To address the animation challenge, we decided to develop our own SVG element instead of relying on third-party libraries. This approach provided us with greater control over key points and allowed us to make changes on each time frame. We were able to stop and resume the animation effectively, tailoring it to meet the specific requirements of the project. This bespoke solution offered us the flexibility to write custom application logic that seamlessly integrated with the rest of the platform. For optimizing the daily streak feature, we implemented a client-side logic that was responsible for maintaining or breaking the streak data. We recognized that if a user never logged into the platform, there was no need to track or break the streak, as the user wouldn't be present to notice the change. By implementing this logic on the front end, we avoided unnecessary storage space and reduced the need for continuous monitoring and database checks. This optimization allowed us to save resources and streamline the streak-tracking process. Through these solutions, we were able to overcome the animation and streak optimization challenges, ensuring a smooth user experience while efficiently managing resources and data.";
