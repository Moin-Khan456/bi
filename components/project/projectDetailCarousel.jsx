import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (activeIndex === images?.length * 2) {
      setActiveIndex(0);
      containerRef.current.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }
  }, [activeIndex, images?.length]);

  const handlePrev = () => {
    if (activeIndex === 0)
      setActiveIndex(activeIndex + duplicatedImages.length);
    setActiveIndex(activeIndex - 1);
    containerRef.current.scrollTo({
      left:
        (activeIndex - 1) * containerRef.current.offsetWidth -
        (activeIndex - 1) * 50,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (activeIndex === duplicatedImages.length - 1) setActiveIndex(0);
    setActiveIndex(activeIndex + 1);
    containerRef.current.scrollTo({
      left:
        (activeIndex + 1) * containerRef.current.offsetWidth -
        (activeIndex + 1) * 50,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-12">
      <div
        className="overflow-x-scroll  scrollbar-thin whitespace-nowrap flex project-detail-carousel"
        ref={containerRef}
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
      >
        {images?.map((image, index) => (
          <div
            className="inline-block m-2 lg:m-8 min-w-[70vw] lg:min-w-[50vw]"
            key={image.id}
          >
            <Image
              src={image.url}
              alt={`Image ${index + 1}`}
              className="rounded-3xl"
              width={800} height={300} objectFit={"cover"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
