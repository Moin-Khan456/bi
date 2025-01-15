import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const HomeSectionEight = ({info}) => {
  const [activeSection, setActiveSection] = useState("Discovery Workshop");

  // Create references for each section
  const sectionRefs = info.content.reduce((acc, section) => {
    acc[section.title] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([title, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(title);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (title) => {
    sectionRefs[title].current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="2xl:p-10 p-8 2xl:pb-40 pb-32">
      <div className="container padding-left-all-section">
        <h2 className="text-heading-2 Gilroy-Bold lg:whitespace-nowrap mb-5">
          {info.title}
        </h2>
        <p className="text-lg text-secondaryTx">
          {info?.description}
        </p>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 pt-10">
          {/* Navigation */}
          <nav className=" md:w-full md:sticky md:top-0 md:h-screen md:p-8 md:flex md:flex-col md:justify-center hidden">
            {info.content.map((section, index) => (
              <div key={index} className="flex items-center space-x-4">
                <button
                  onClick={() => scrollToSection(section.title)}
                  className={`text-4xl font-bold text-left transition-colors ${
                    activeSection === section.title
                      ? "text-blue-600"
                      : "text-transparent hover:text-blue-600/80"
                  } stroke-blue-600 stroke-2`}
                  style={{ WebkitTextStroke: "1px #2563eb" }}
                >
                  {section.title}
                 {
                  index<=info.content.length-2? <div className={`${info.content.length<4?`h-32`:`h-10`} w-full border-l border-primaryTx`} />:""
                 }

                </button>
                {/* Divider Line */}
              </div>
            ))}
          </nav>

          {/* Content */}
          <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto space-y-[20vh]">
              {info.content.map((section, index) => (
                <section
                  key={index}
                  ref={sectionRefs[section.title]}
                  className="min-h-screen flex items-center"
                >
                  <div className="flex flex-col gap-4">
                      <>
                      <h1 className="lg:hidden block Gilroy-SemiBold text-3xl text-primaryTx">{section.title}</h1>       
                     {
                      section.details.map((detail,index)=>(
                        <p
                        key={index}
                        className="text-lg Gilroy-SemiBold leading-relaxed"
                      >
                        {detail}
                      </p>
                      ))
                     }
                      </>
                    <Image
                      src={section.image}
                      alt={section.alt}
                      width={400}
                      height={350}
                      className="rounded-lg flex justify-center"
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionEight;
