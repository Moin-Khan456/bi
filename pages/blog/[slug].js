import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../../components/header/Header.js";
import axios from "axios";
import Loader from "../../components/common/loader";
const PopularBlogs = dynamic(() => import("../../components/blog/PopularBlogs"));
const Blogs = dynamic(() => import("../../components/blog/Blogs"));
const Pagination = dynamic(() => import("../../components/blog/Pagination"));
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch.js")
);
import { useRouter } from "next/router";
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"));

export default function Home({ data, blogs, totalPages, page }) {
  const [currentPage, setCurrentPage] = useState(page);

  return (
    <>
      <Head>
        <title>
          Brain Inventory Blog – Staff Augmentation | Software | Web | App
          Development
        </title>
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
          content=" Brain Inventory Blog – Staff Augmentation | Software | Web | App Development 
"
        />
        <meta
          property="og:description"
          content=" Read the latest technology trends, news And updates and other topics about software And app development from Brain Inventory’s informative blogs!"
        />

        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Braininventory_blog.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/blog/1"
        />       
        <link rel="prev" href={`https://braininventory.in/blog/${currentPage > 1 ? currentPage-1 : ""}`} />        
        <link rel="next" href={`https://braininventory.in/blog/${currentPage !== totalPages ? Number(currentPage)+1 : ""}`} />        
        <link rel="canonical" href="https://braininventory.in/blog/1" />
      </Head>
      <Suspense fallback={"Loading......"}>
      <Loader/>
      <main className="relative second-component">
        <Header />
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container padding-left-all-section-1">
            <h1 className="text-6xl pt-12 font-bold">Blogs</h1>
            <div>
              <h3 className="text-xl font-bold mt-8 mb-3">Popular Blogs</h3>
              <div className="pb-2">
                <PopularBlogs data={data} />
              </div>
              <hr />
              <Blogs blogs={blogs} pageNumber={currentPage} />
              <Pagination
                itemsPerPage={10}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
      </main>
      </Suspense>
    </>
  );
}
export async function getServerSideProps(context) {
    const response = await axios.get(
      `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=id,_embedded,slug,date,title,excerpt,_links&_embed&per_page=10&page=${context.query.slug}`, { next: { revalidate: 3600 } }, { cache: 'force-cache' }
    );
  const postsRes = await fetch(
    "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=10"
  );
  const totalPages = postsRes.headers.get("X-WP-Total");

  return {
    props: {
      data: response.data.slice(0, 3),
      blogs: response.data,
      totalPages,
      page: context.query.slug
    },
  };
}
