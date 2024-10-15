import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/header/Header.js";
import axios from "axios";
const PopularBlogs = dynamic(() => import("../components/blog/PopularBlogs"));
const Blogs = dynamic(() => import("../components/blog/Blogs"));
const Pagination = dynamic(() => import("../components/blog/Pagination"));
const KeepInTouch = dynamic(() =>
  import("../components/common/keepInTouch.js")
);
import { useRouter } from "next/router";
const LocateUs = dynamic(() => import("../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../components/common/Footer.js"));

export default function Home({ data, blogs, totalPages }) {
  const [position, setPostion] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPostion(true);
    });
  });

  return (
    <>
      <Head>
        <title>Insights and Innovations | Blogs by Brain Inventory</title>
        <meta
          name="description"
          content="Read the latest technology 
          trends, news And updates and 
          other topics about software And 
          app development from Brain 
          Inventory’s informative blogs!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Insights and Innovations | Blogs by Brain Inventory 
"
        />
        <meta
          property="og:description"
          content="Explore the latest insights, trends, and innovations in technology, development, and design on the Brain Inventory blog. Stay updated with us."
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_blog.jpg"
        />
        <meta property="og:url" content="https://braininventory.in/blog" />
        <link
          rel="prev"
          href={`https://braininventory.in/blog/${
            currentPage > 1 ? currentPage - 1 : ""
          }`}
        />
        <link
          rel="next"
          href={`https://braininventory.in/blog/${
            currentPage < totalPages ? currentPage + 1 : ""
          }`}
        />
        <link rel="canonical" href="https://braininventory.in/blog" />
      </Head>
      <main className="relative">
        <Header />
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container padding-left-all-section">
            <h3 className="text-6xl pt-12 Gilroy-Bold">Blogs</h3>

            <div>
              <h3 className="text-xl Gilroy-Bold mt-8 mb-3">Popular Blogs</h3>
              <div className="pb-2">
                <PopularBlogs data={data} />
              </div>
              <hr />
              <Blogs blogs={blogs} pageNumber={currentPage} />
              <Pagination
                itemsPerPage={10}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
        {position && (
          <>
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  const posts = {};
  const fields = "id,title,date,slug,_links,_embedded,excerpt,date";
  if (!posts.data) {
    const response = await axios
      .get(
        `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&_fields=${fields}&per_page=10&page=${1}`
      )
      .then((res) => {
        console.log(res.data);
      });
    posts.data = response.data;
  }
  const postsRes = await fetch(
    "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=100"
  );
  const totalPages = postsRes.headers.get("X-WP-Total");

  return {
    props: {
      data: posts.data.slice(0, 3),
      blogs: posts.data,
      totalPages,
    },
  };
}
