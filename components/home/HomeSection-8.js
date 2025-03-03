import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const HomeSectionEight = ({ info }) => {
  const [activeSection, setActiveSection] = useState("Discovery Workshop");
  const containerRef = useRef(null); // Ref for the scroll container

  // Debounce function to limit scroll event frequency
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll(".snap-section");
      let currentActive = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the visible area of the viewport
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          currentActive = section.getAttribute("data-title");
        }
      });

      // Only update state if the active section has changed
      if (currentActive && currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    // Debounce the scroll handler to reduce frequency of updates
    const debouncedScrollHandler = debounce(handleScroll, 10);

    container.addEventListener("scroll", debouncedScrollHandler);
    handleScroll(); // Initial check after mounting

    return () => {
      container.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [activeSection]); // Re-run effect if activeSection changes

  const scrollToSection = (title) => {
    const section = document.querySelector(`[data-title="${title}"]`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="2xl:p-10 p-8 2xl:pb-40 pb-32">
      <div className="container padding-left-all-section">
        <h2 className="text-heading-2 Gilroy-Bold lg:whitespace-nowrap mb-5">
          {info.title}
        </h2>
        <p className="text-lg text-secondaryTx">{info?.description}</p>
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 pt-10">
          {/* Navigation */}
          <nav className="md:w-full md:sticky md:top-0 md:h-screen md:p-8 md:flex md:flex-col md:justify-center hidden">
            {info.content.map((section, index) => (
              <div key={index} className="flex items-center space-x-4">
                <button
                  onClick={() => scrollToSection(section.title)}
                  className={`text-4xl font-bold text-left transition-colors ${
                    activeSection === section.title
                      ? "text-primaryTx"
                      : "text-transparent hover:text-primaryTx"
                  } stroke-primaryTx stroke-2`}
                  style={{ WebkitTextStroke: "1px #2563eb" }}
                >
                  {section.title}
                  {index <= info.content.length - 2 ? (
                    <div
                      className={`${
                        info.content.length < 4
                          ? `h-32`
                          : info.content.length > 6
                          ? `h-7`
                          : `h-10`
                      } w-full border-l border-primaryTx`}
                    />
                  ) : (
                    ""
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Content */}
          <div
            ref={containerRef}
            className="flex-1 p-8 overflow-y-scroll sm:snap-y sm:snap-mandatory h-[100vh] scroll-smooth"
          >
            <div className="max-w-3xl mx-auto space-y-20 sm:space-y-[20vh]">
              {info.content.map((section, index) => (
                <section
                  key={index}
                  data-title={section.title}
                  className="snap-section snap-start sm:min-h-screen flex items-center"
                >
                  <div className="flex flex-col gap-4">
                    <h1 className="lg:hidden block Gilroy-SemiBold text-3xl text-primaryTx">
                      {section.title}
                    </h1>
                    {section.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-lg Gilroy-SemiBold leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                    <Image
                      src={section.image}
                      alt={section.alt}
                      width={350}
                      height={300}
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