import React from "react";

const Approach = () => {
    const points = [
        {
            head: "Understanding the Client’s Vision",
            content: "Our first step in fitness solution development is gaining a deep understanding of our client’s business objectives and vision for their solutions. We believe every solution should be a direct reflection of the client’s brand and goals."
        },
        {
            head: "Research and Analysis",
            content: "We conduct comprehensive market research and competitor analysis. This enables us to create a website or an app that is not just innovative, but also competitive and designed to succeed."
        },
        {
            head: "Designing the User Experience",
            content: "One of the most critical aspects of our approach is designing an intuitive and engaging user experience. We ensure the developed product is user-friendly, aesthetically pleasing, and easy-to-navigate."
        },
        {
            head: "Development",
            content: "Our development team meticulously codes the solution, ensuring it’s robust, functional, and free from glitches. We use the latest technologies and follow best practices for website or app development."
        },
        {
            head: "Testing",
            content: "We conduct rigorous testing to ensure the website or application performs optimally under all conditions. Bugs are identified and fixed to ensure a smooth user experience."
        },
        {
            head: "Launch and Post-Launch Support",
            content: "After the successful testing phase, we launch the solution on the required platforms. Post-launch, we provide continuous support and updates to keep the technology relevant and functioning flawlessly."
        },
    ]
  return (
    <div className="container px-6">
      <h1 className="font-Satoshi font-bold text-4xl">
        How do we Approach Fitness Solution Development?
      </h1>
      <h6 className="text-sm py-6 text-slate-300">
        At Brain Inventory, we have a unique, innovative, and efficient approach
        towards fitness solution development that sets us apart in the digital
        landscape. We believe in creating fitness solutions that are tailored to
        the needs of our clients and their users. Our approach involves the
        following steps:
      </h6>
      <div className="bg-technology py-12 px-8">
      {points.map((ele, index)=>(
        <div className="py-4" key={index}>
          <h3 className="text-2xl font-Satoshi py-2 font-Satoshi font-semibold">
            {ele.head}
          </h3>
          <p className="text-sm text-slate-300">
            {ele.content}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Approach;
