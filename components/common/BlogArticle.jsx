import React, { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const SkeletonCard = () => (
  <div className="relative flex-shrink-0 w-[85vw] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-lg overflow-hidden shadow-lg snap-section snap-center bg-gray-200 ">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
    <div className="w-full h-[230px] bg-gray-300" />
  </div>
);

export default function BlogArticle() {
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    axios
      .get(
        "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=6"
      )
      .then((res) => {
        setStore(res.data);
        setLoading(false);
      });
  }, []);

  const updateScrollState = () => {
    const carousel = carouselRef.current;
    setIsStart(carousel.scrollLeft <= 0);
    setIsEnd(
      carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10
    );
  };

  const scrollLeft = () => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.firstChild.offsetWidth + 32;
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.firstChild.offsetWidth + 32;
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", updateScrollState);
    return () => carousel.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <main className="px-4 py-6 w-full">
      <section className="container mx-auto">
        <section className="flex justify-between items-center mb-6">
          <h3 className="Gilroy-Bold text-4xl leading-[3rem] lg:w-2/5 my-4">
            The ultimate blogs & articles
          </h3>
          <section className="flex">
            <button
              type="button"
              className={`border-2 p-3 rounded-full mx-2 ${
                isStart ? "bg-gray-400 cursor-not-allowed" : "bg-primaryTx"
              }`}
              onClick={scrollLeft}
              aria-label="Scroll Left"
              disabled={isStart}
            >
              <MdKeyboardArrowLeft className="text-primaryBg text-2xl" />
            </button>
            <button
              type="button"
              className={`border-2 p-3 rounded-full mx-2 ${
                isEnd ? "bg-gray-400 cursor-not-allowed" : "bg-primaryTx"
              }`}
              onClick={scrollRight}
              aria-label="Scroll Right"
              disabled={isEnd}
            >
              <MdKeyboardArrowRight className="text-primaryBg text-2xl" />
            </button>
          </section>
        </section>

        <section
          className="flex overflow-x-scroll scroll-smooth no-scrollbar snap-x snap-mandatory gap-4 px-4"
          ref={carouselRef}
          style={{ scrollPadding: "0 16px" }}
        >
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : store?.map((ele, index) => (
                <Link
                  href={`/posts/${ele.slug}`}
                  key={index}
                  className="flex-shrink-0 w-[80vw] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-lg overflow-hidden shadow-xl snap-section snap-center transition-transform duration-300"
                >
                  <Image
                    src={ele._embedded["wp:featuredmedia"][0].source_url}
                    alt={ele.title.rendered || `Blog post ${index}`}
                    width={400}
                    height={250}
                    className="w-full h-[230px] object-contain"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {ele.title.rendered}
                    </h3>
                    <div
                      className="text-gray-600 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: ele.excerpt.rendered }}
                    />
                  </div>
                </Link>
              ))}
        </section>
      </section>
    </main>
  );
}
