import React, { useState } from "react";
import Head from "next/head";
import Header from "../../components/header/Header.js";
import axios from "axios";
import PopularBlogs from "../../components/blog/PopularBlogs";
import Blogs from "../../components/blog/Blogs";
import Pagination from "../../components/blog/Pagination";
import KeepInTouch from "../../components/common/keepInTouch.js";
import LocateUs from "../../components/common/locateUs.js";
import LetsKick from "../../components/common/LetsKick.js";
import Footer from "../../components/common/Footer.js";
import { rediss } from "../../utils/redis.js";

export default function Home({
  data = false,
  blogs = false,
  totalPages,
  page,
}) {
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
        <meta property="og:url" content="https://braininventory.in/blog/1" />
        <link
          rel="prev"
          href={`https://braininventory.in/blog/${
            currentPage > 1 ? currentPage - 1 : ""
          }`}
        />
        <link
          rel="next"
          href={`https://braininventory.in/blog/${
            currentPage !== totalPages ? Number(currentPage) + 1 : ""
          }`}
        />
        <link rel="canonical" href="https://braininventory.in/blog/1" />
      </Head>
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
    </>
  );
}
export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=3600"
  );

  const postsRes = await fetch(
    "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=1"
  );
  const totalPages = await postsRes.headers.get("X-WP-Total");

  const cachedBlog = JSON.parse(await rediss.get(`blog-${context.query.slug}`));
  if (cachedBlog) {
    return {
      props: {
        data: cachedBlog.slice(0, 3),
        blogs: cachedBlog,
        totalPages: totalPages,
        page: context.query.slug,
      },
    };
  }

  const response = await axios.get(
    `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=id,_embedded,slug,date,title,excerpt,_links&_embed&per_page=10&page=${context.query.slug}`,
    { next: { revalidate: 600 } },
    {
      cache: "force-cache",
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    }
  );
  await rediss.set(
    `blog-${context.query.slug}`,
    JSON.stringify(response.data),
    "EX",
    300
  );

  return {
    props: {
      data: response?.data?.slice(0, 3) ?? [],
      blogs: response?.data ?? [],
      totalPages: totalPages,
      page: context.query.slug,
    },
  };
}
