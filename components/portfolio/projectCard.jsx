import React from "react";
import Card from "./Card.jsx";
import FatouraImage from "../../public/assets/portfolio-assets/Fatoura.webp"
import CRMImage from "../../public/assets/portfolio-assets/CRM.webp"
import OcureelImage from "../../public/assets/portfolio-assets/Ocureel.webp"
const MyComponent = () => {
  const projects = [
    {
      title: "Numetric.work",
      subtitle: "UI/UX Design, Custom Software Development.",
      src: "https://braininventory.s3.us-east-2.amazonaws.com/videos/Numetric.mp4",
      poster:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/Image 2.png",
      link: "/project/numetric",
    },
    {
      title: "Bloomia",
      subtitle: "UI/UX Design, Custom Software Development.",
      src: "https://braininventory.s3.us-east-2.amazonaws.com/videos/Bloomia.mp4",
      poster:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/Bloomia-Thumbnail+(1).png",
      link: "/project/bloomia",
    },
    {
      title: "Fatoura",
      subtitle: "UI/UX Design, Custom Software Development",
      src: FatouraImage,
      poster:
        FatouraImage,
      link: "/project/fatoura",
    },
    {
      title: "Revolution Travel CRM",
      subtitle: "UI/UX Design, Custom Software Development",
      src: CRMImage,
      poster:
        CRMImage,
      link: "/project/revolution-travel-crm",
    },
    {
      title: "My Fit Mantra",
      subtitle: "UI/UX Design, Custom Software Development.",
      src: "https://braininventory.s3.us-east-2.amazonaws.com/videos/MFM.mp4",
      poster:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/Screenshot -3.png",
      link: "/project/my-fit-mantra",
    },
    {
      title: "Virifi",
      subtitle: "UI/UX Design, Custom Software Development.",
      src: "https://braininventory.s3.us-east-2.amazonaws.com/videos/virifi.mp4",
      poster:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/project/Screenshot -2.png",
      link: "/project/virifi",
    },
    {
      title: "Ocureel",
      subtitle: "UI/UX Design, Custom Software Development.",
      src: OcureelImage,
      poster:
        OcureelImage,
      link: "/project/ocureel",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.src}
            title={project.title}
            subtitle={project.subtitle}
            link={project.link}
            poster={project.poster}
          />
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
