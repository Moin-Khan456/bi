import React, { useEffect, useState, useRef } from "react";
import { IoMdArrowForward, } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import axios from "axios";
import Image from "next/image";

export default function BlogArticle() {
  const [store, setStore] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    axios
      .get(
        "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=6"
      )
      .then((res) => setStore(res.data));
  }, []);

  const scrollLeft = () => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.firstChild.offsetWidth + 32; // Card width + gap
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.firstChild.offsetWidth + 32; // Card width + gap
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <main className="px-4 py-6 w-full">
      <section className="container mx-auto">
        {/* Title and Buttons */}
        <section className="flex justify-between items-center mb-6">
          <h3 className="Gilroy-Bold text-4xl leading-[3rem] lg:w-2/5 my-4">
            The ultimate blogs & articles
          </h3>
          <section className="flex">
            <button
              type="button"
              className="border-2 bg-primaryTx p-3 rounded-full mx-2"
              onClick={scrollLeft}
              aria-label="Scroll Left"
            >
              <MdKeyboardArrowLeft className="text-primaryBg text-2xl" />
            </button>
            <button
              type="button"
              className="border-2 bg-primaryTx p-3 rounded-full mx-2"
              onClick={scrollRight}
              aria-label="Scroll Right"
            >
              <MdKeyboardArrowRight className="text-primaryBg text-2xl" />
            </button>
          </section>
        </section>

        {/* Images Only */}
        <section
          className="flex overflow-x-scroll scroll-smooth no-scrollbar"
          ref={carouselRef}
        >
          {store?.map((ele, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] mx-4 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={ele._embedded["wp:featuredmedia"][0].source_url}
                alt={`Image ${index}`}
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
