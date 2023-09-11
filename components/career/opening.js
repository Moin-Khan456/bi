import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const OpeningJob = [
  {
    JobTitle: "React-Native Developer",
    JobId: "BI2022-001",
    Position: "2",
    Experience: "1 to 2 Years",
    description:
      "React Native, ReactJs, Redux, SDK Integration, JS, and Hybrid app development, Javascript, ES6, TypeScript, Knowledge of Android or IOS",
    roles: [
      "Senior Engineer with Front end experience and a proven track record of building high-quality scalable mobile application",
      "Build pixel-perfect, buttery smooth UIs across both mobile platforms",
      "Leverage native APIs for deep integrations with both platforms",
      "Diagnose and fix bugs and performance bottlenecks for performance that feels native",
      "Integrate third-party APIs",
      "Expertise with code testing best practices, including unit, and integration testing to ensure the quality of code",
      "Familiarity with code versioning tools such as Git, SVN, and Github",
      "Work with native modules when required",
      "Hands-on experience with React Native, CSS3, HTML5, and JavaScript (ES6 and above)",
      "Experience working in an Agile/Scrum development process",
      "Proficiency in Software Development methodologies, delivery frameworks",
      "Excellent verbal and written communication skills",
      "Positive and fun attitude",
    ],
  },

  {
    JobTitle: "Javascript Developer",
    JobId: "BI2022-002",
    Position: "3",
    Experience: "1 to 4 Years",
    description:
      "JavaScript, React.js, Redux, Node.js,Vue.js, angular,mongoDB, Express.js, Loopback.js, GitLab, GitHub, Bitbucket, Flux, JSON, HTML, CSS, JSX, ES6, Babel, Webpack, NPM",
    roles: [
      "2+ years of experience as a JavaScript Developer",
      "Work with agile development methodologies, adhering to best practices and pursuing continued learning opportunities.",
      "Strong analytical and troubleshooting skills.",
      "Design, code, and manage automated test scripts, continuous builds, and deployment.",
      "Complete knowledge of programming languages like JavaScript, HTML, and CSS.",
      "Understanding of JavaScript libraries and frameworks like node.js, reactjs, angular, vue.js, etc.",
      "Familiarity with code versioning tools such as Git, SVN, and Github",
      "Proficiency in browser rendering behavior and performance.",
    ],
  },
  {
    JobTitle: "Backend Developer",
    Position: "2",
    JobId: "BI2022-003",
    Experience: "1 to 5 Years",
    description: "NodeJS, MongoDB and JavaScript",
    roles: [
      "Developing and maintaining all server-side network components",
      "Ensuring optimal performance of the central database and responsiveness to front-end requests",
      "Collaborating with front-end developers on the integration of elements",
      "Designing customer-facing UI and back-end services for various business processes",
      "Developing high-performance applications by writing testable, reusable, and efficient code",
      "Implementing effective security protocols, data protection measures, and storage solutions",
      "Documenting Node.js processes, including database schemas, as well as preparing reports",
      "Experience with CSS3, HTML5, and JavaScript.",
      "Experience with testing platforms and writing unit tests",
      "Flexibility and ability to adapt to changing priorities and technologies",
      "Experience working in an Agile/Scrum development process",
      "Proficiency in Software Development methodologies, delivery frameworks",
    ],
  },
  {
    JobTitle: "MEAN Stack Developer",
    Position: "2",
    JobId: "BI2022-004",
    Experience: "1 to 5 Years",
    description:
      "MongoDB, Angular, Expressjs, Node.js, HTML, JavaScript, jQuery, CSS",
    roles: [
      "Developing and maintaining all server-side network components",
      "Ensuring optimal performance of the central database and responsiveness to front-end requests",
      "Collaborating with front-end developers on the integration of elements",
      "Designing customer-facing UI and back-end services for various business processes",
      "Developing high-performance applications by writing testable, reusable, and efficient code",
      "Implementing effective security protocols, data protection measures, and storage solutions",
      "Documenting Node.js processes, including database schemas, as well as preparing reports",
      "Experience with CSS3, HTML5, and JavaScript.",
      "Experience with testing platforms and writing unit tests",
      "Flexibility and ability to adapt to changing priorities and technologies",
      "Experience working in an Agile/Scrum development process",
      "Proficiency in Software Development methodologies, delivery frameworks",
    ],
  },
  {
    JobTitle: "Full-Stack Developer",
    Position: "2",
    JobId: "BI2022-005",
    Experience: "1 to 5 Years",
    description:
      "MEAN / MERN Stack, Node, React/ Angular, HTML, JavaScript, jQuery, CSS",
    roles: [
      "Proficient full-stack web developer with experience in building large-scale applications.",
      "Knowledge/Work experience in front-end languages and libraries(eg HTML, CSS, JavaScript)",
      "Knowledge/Work experience in back-end languages",
      "JavaScript framework Node.js, Angular, React, Express",
      "Proficient understanding of code versioning tools, such as Git/BitBucket.",
      "Familiarity with databases(e.g. MySQL, MongoDB good to have) and UI/UX design.",
      "Cloud Deployments, Rest API",
      "Troubleshoot, debug and upgrade applications.",
      "Work with clients, data scientists, and analysts to improve the software.",
      "Ensure the platform remains secure, scalable, sustainable",
      "SDLC and Agile methodologies of software development.",
      "Knowledge of Material UI and Design unit testing framework",
    ],
  },
  {
    JobTitle: "Digital Marketing",
    Position: "2",
    Experience: "1 to 5 Years",
    JobId: "BI2022-006",
    description:
      "Data Analysis, Content Creation, SEO & SEM, CRM, Communication Skills, Social Media, Basic Design Skills",
    roles: [
      "Plan and execute all digital marketing, including #SEO/ #SEM,  marketing database, email, #social media, and display advertising campaign.",
      "Identify trends and insights, and optimize spend and performance based on the insights",
      "Sound Knowledge of email/marketing creative, delivery, and optimization trends.",
      "Execute digital marketing campaigns across search, social, email marketing, and other digital channels.",
      "Monitoring campaign budget, delivery & performance to ensure all targets are met.",
      "Develop and manage digital marketing campaigns on Facebook and Instagram to generate leads and sales.",
      "Coordinate with content and the creative team for campaign launches",
      "Perform keyword analysis and competitor analysis and handle off-page and on-page activities.",
      "Design, build and maintain our social media presence. Create and post engaging social media content.",
      "Proficient in marketing research and statistical analysis",
      "Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform, and motivate.",
      "Expert in outbound and inbound marketing including Google Adwords, Facebook_Ads, SEO, etc.",
    ],
  },
  {
    JobTitle: "MERN Stack Developer",
    Position: "2",
    JobId: "BI2022-007",
    Experience: "1 to 5 Years",
    description:
      "MongoDB, Expressjs, Reactjs, Node.js, HTML, JavaScript, jQuery, CSS",
    roles: [
      "Developing and maintaining all server-side network components",
      "Ensuring optimal performance of the central database and responsiveness to front-end requests",
      "Collaborating with front-end developers on the integration of elements",
      "Designing customer-facing UI and back-end services for various business processes",
      "Developing high-performance applications by writing testable, reusable, and efficient code",
      "Implementing effective security protocols, data protection measures, and storage solutions",
      "Documenting Node.js processes, including database schemas, as well as preparing reports",
      "Experience with CSS3, HTML5, and JavaScript.",
      "Experience with testing platforms and writing unit tests",
      "Flexibility and ability to adapt to changing priorities and technologies",
      "Experience working in an Agile/Scrum development process",
      "Proficiency in Software Development methodologies, delivery frameworks",
    ],
  },
  {
    JobTitle: "QA Engineer",
    Position: "2",
    JobId: "BI2022-008",
    Experience: "1 to 5 Years",
    description: "Manual testing, Bug tracking ((JIRA, Bugzilla, etc.), Agile",
    roles: [
      "Web, Mobile, and Desktop app testing",
      "Experience in writing  test plans from the requirements, specifications, and test strategies",
      "Debugging and determining the root cause",
      "Planning, authoring, debugging and executing performance tests.",
      "Strong root causes analysis experience.",
      "Strong understanding of QA processes and concepts including test case preparation, and testing methodologies.",
      "Experience with tools such as JIRA.",
      "Create and perform test campaigns whenever it is necessary to fit in the overall planning.",
      "Use a bug tracking database to report bugs",
      "Experience in writing Proposals",
      "Analyze the  test results",
      "Strong oral and written communication skills are essential",
      "Strong communication (English, Hindi) and IT fluency",
      "Ability to work collaboratively within a team environment of other engineers to meet aggressive goals and high-quality standards.",
    ],
  },
  {
    JobTitle: "Business Development Executive",
    Position: "2",
    JobId: "BI2022-009",
    Experience: "1 to 5 Years",
    description:
      "Communication and Interpersonal skills, Collaboration skills, Negotiation and Persuasion skills, Project Management Skills, Research & Strategy, and Business Intelligence.",
    roles: [
      "Understanding the project requirement",
      "Online Bidding expert on Upwork, People per hour, Guru portals",
      "Cold calling",
      "Client Acquisition & Lead Generation",
      "Bidding for Web and Mobile Developmen",
      "Contacting potential clients via email or phone to establish rapport and set up meetings",
      "Experience in full sales cycle including deal closing",
      "Strong negotiation skills",
      "Strong communication and presentation skills",
      "Experience in writing Proposals",
      "Excellent in making client relations and experience with interacting with clients in other countries.",
      "Proficient in MS- Excel & mail drafting",
      "Strong communication (English, Hindi) and IT fluency",
      "Must be from a technical background or have prior experience in the IT industry",
    ],
  },
  {
    JobTitle: "Blockchain Developer",
    Position: "2",
    JobId: "BI2022-0010",
    description:
      "JavaScript, Blockchain architecture, Cryptography, Data structures, Smart contracts, Web Development.",
    Experience: "1 to 5 Years",
    roles: [
      "Hands-on technical exposure in implementing Blockchain technologies such as Ethereum",
      "Experience with Solidity and Cryptograph",
      "Strong background in JavaScript and its frameworks",
      "Experience in writing programs in scripting languages and a deep understanding of its architecture",
      "Strong understanding of REST/JSON-based API integration",
      "Experience working in an Agile",
      "Extensive experience with the progression of major projects from the planning stage through to implementation and completion",
      "Effective communicator to all stakeholders and management during project consulting and analysis",
      "Designing, implementing,  administering, and securing the blockchain network",
      "Staying updated with the latest crypto technologies for data protection",
      "Setting security measures against various types of cybercrimes",
      "Implementing tests and continuous integration for the application",
      "Identify and fix bugs within the codebase",
      "Maintain and extend current client and server-side applications responsible for integration and business logic",
    ],
  },
];
function Opening() {
  const { register, handleSubmit, reset } = useForm();
  // const [role, setrole] = useState(null);
  const sumbitContact = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("doc", data.file[0]);
    formData.append("email", data.email);
    formData.append("number", data.number);
    formData.append("exp", data.exp);
    formData.append("role", data.role);
    axios
      .post("/api/career", formData)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
    Swal.fire({
      icon: "success",
      title: "Thank you for your interest in working with Brain Inventory.",
      text: "We have received your application and our Talent Acquisition Team would get back to you if your resume gets shortlisted.",
      showConfirmButton: true,
    });
  };

  const roleShowing = (role) => {
    reset({ role: role });
  };

  const collapsed = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("collapse-open");
  };

  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container">
        <div>
          <h2 className="text-6xl Gilroy-Bold ">Current</h2>
          <h4 className="openings-title">Openings</h4>
        </div>
        <div>
          {OpeningJob.map((el) => {
            return (
              <>
                <div
                  key={el.JobTitle}
                  id={el.JobTitle}
                  className="collapse bg-opening mb-6"
                >
                  <div className="collapse-title text-xl font-medium">
                    <div className="md:flex block justify-between items-center">
                      <div>
                        <h2 className="text-2xl text-white Gilroy-Bold">
                          {el.JobTitle}
                        </h2>
                      </div>
                      <div className="flex md:block my-4 md:my-0">
                        <button
                          onClick={() => collapsed(el.JobTitle)}
                          className="btn-details"
                        >
                          view details
                        </button>
                        <label
                          htmlFor="my-modal"
                          onClick={() => roleShowing(el.JobTitle)}
                          className="btn-apply inline-block leading-[55px] cursor-pointer modal-button"
                        >
                          apply now
                        </label>
                        {/* <button className="btn-apply">apply now</button> */}
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <label className="experiene-label">Experience</label>
                        <h4 className="lg:text-base text-sm">
                          {el.Experience}
                        </h4>
                      </div>
                      <div className="ml-5">
                        <label className="experiene-label">Positions</label>
                        <h4 className="lg:text-base text-sm">{el.Position}</h4>
                      </div>
                      <div className="ml-5">
                        <label className="experiene-label">Job Id</label>
                        <h4 className="lg:text-base text-sm">{el.JobId}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-content flex">
                    <div>
                      <p>Key Skills: {el.description}</p>
                      <h2 className="text-2xl my-4">Description</h2>
                      <ul className="ml-4">
                        {el.roles &&
                          el.roles.map((item) => {
                            return (
                              <li key={item} className="w-full list-disc">
                                {item}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <div></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <form onSubmit={handleSubmit(sumbitContact)}>
            <div className="modal-box w-full max-w-5xl">
              <div className="flex justify-between w-full items-center mb-4">
                <h2 className="text-2xl text-black Gilroy-Bold">Apply Now</h2>
                <label
                  htmlFor="my-modal"
                  className="bg-black rounded-full w-10 h-10 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 relative top-2 left-2 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </div>
              <div>
                <label className="text-black mb-2">Job Title</label>

                <select
                  {...register("role")}
                  className="w-full text-black border focus:outline-0 p-3 mb-4"
                  required
                >
                  {OpeningJob.map((el) => {
                    return (
                      <option key={el.JobTitle} value={el.JobTitle}>
                        {el.JobTitle}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-black mb-2">Firstname</label>
                  <input
                    {...register("firstName")}
                    type="text"
                    required
                    className="w-full text-black border focus:outline-0 p-3 mb-4"
                    placeholder="Firstname"
                  />
                </div>
                <div>
                  <label className="text-black mb-2">Lastname</label>
                  <input
                    {...register("lastName")}
                    type="text"
                    required
                    className="w-full text-black border focus:outline-0 p-3 mb-4"
                    placeholder="Lastname"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="text-black mb-2">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    required
                    className="w-full text-black border focus:outline-0 p-3 mb-4"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-black mb-2">Mobile Number</label>
                  <input
                    {...register("number")}
                    type="number"
                    required
                    className="w-full text-black border focus:outline-0 p-3 mb-4"
                    placeholder="Number"
                  />
                </div>
                <div className="">
                  <div>
                    <label className="text-black mb-2">
                      No year of Experience
                    </label>
                    <input
                      {...register("exp")}
                      type="text"
                      required
                      className="w-full text-black border focus:outline-0 p-3 mb-4"
                      placeholder="Experience"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-black mb-2">Attachment</label>
                <input
                  type="file"
                  {...register("file")}
                  className="w-full text-black border focus:outline-0 p-2 mb-4"
                  required
                  placeholder="Experience"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="m-auto text-center block bg-purple-theme w-40 p-3 rounded-lg mt-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Opening;
