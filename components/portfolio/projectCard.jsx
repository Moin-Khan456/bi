import React from 'react';
import Card from './Card.jsx';

const MyComponent = () => {
    const projects = [
        { title: "Numetric.work", subtitle: "UI/UX Design, Custom Software Development.", src: "https://d1u4arv5y5eda6.cloudfront.net/videos/Numetric.mp4", poster: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Image 2.png", link: "/project/numetric" },
        { title: "Bloomia", subtitle: "UI/UX Design, Custom Software Development.", src: "https://d1u4arv5y5eda6.cloudfront.net/videos/Bloomia.mp4", poster: "https://d1u4arv5y5eda6.cloudfront.net/images/Bloomia-Thumbnail+(1).png", link: "/project/bloomia" },
        { title: "My Fit Mantra", subtitle: "UI/UX Design, Custom Software Development.", src: "https://d1u4arv5y5eda6.cloudfront.net/videos/MFM.mp4", poster: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Screenshot -3.png", link: "/project/my-fit-mantra" },
        { title: "Virifi", subtitle: "UI/UX Design, Custom Software Development.", src: "https://d1u4arv5y5eda6.cloudfront.net/videos/virifi.mp4", poster: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Screenshot -2.png", link: "/project/virifi" },
        { title: "Fatoura", subtitle: "UI/UX Design, Custom Software Development.", src: "https://d1u4arv5y5eda6.cloudfront.net/videos/fatoura.mp4", poster: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Screenshot -2.png", link: "/project/fatoura" },
        { title: "Revolution Travel CRM", subtitle: "UI/UX Design, Custom Software Development.", src: "https://d1u4arv5y5eda6.cloudfront.net/videos/RTC2.mp4", poster: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Screenshot -2.png", link: "/project/revolution-travel-crm" },
        { title: "Ocureel", subtitle: "UI/UX Design, Custom Software Development.", src: "https://d1u4arv5y5eda6.cloudfront.net/videos/ocureel.mp4", poster: "https://d1u4arv5y5eda6.cloudfront.net/images/project/Screenshot -2.png", link: "/project/ocureel" },
    ]
    return (
        <div className='flex flex-col lg:flex-row lg:flex-wrap px-0 items-center lg:px-12'>
            {projects.map((project, index) => (<span key={index}>
                <Card
                    image={project.src}
                    title={project.title}
                    subtitle={project.subtitle}
                    number={index + 1}
                    link={project.link}
                    poster={project.poster && project.poster}
                />
            </span>))}
        </div>
    );
};

export default MyComponent;

