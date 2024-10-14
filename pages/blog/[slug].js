import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Header from "../../components/header/Header.js";
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
          content="Explore the latest insights, trends, and innovations in technology, development, and design on the Brain Inventory blog. Stay updated with us."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Insights and Innovations | Blogs by Brain Inventory 
"
        />
        <meta
          property="og:description"
          content=" Explore the latest insights, trends, and innovations in technology, development, and design on the Brain Inventory blog. Stay updated with us."
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
            <h1 className="lg:text-5xl text-3xl pt-12 font-bold leading-12">
            Welcome to the Brain Inventory Blogs: Insights, Trends, and Innovations
              Development
            </h1>
            <div>
              <h3 className="text-xl font-bold mt-8 mb-3 hidden lg:block">
                Popular Blogs
              </h3>
              <div className="pb-2 hidden lg:block">
                <PopularBlogs data={data} />
              </div>
              <hr className="hidden lg:block" />
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

// export async function getServerSideProps(context) {
//   context.res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=600, stale-while-revalidate=3600"
//   );

//   let totalPages = await rediss.get(`totalPages`);

//   // if (!totalPages) {
//   //   const postsRes = await fetch(
//   //     "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=1"
//   //   );
//   //   totalPages = postsRes.headers.get("X-WP-Total");
//   //   await rediss.set(`totalPages`, totalPages, "EX", 600);
//   // }

//   const cachedBlog = JSON.parse(await rediss.get(`blog-${context.query.slug}`));
//   if (cachedBlog) {
//     return {
//       props: {
//         data: cachedBlog.slice(0, 3),
//         blogs: cachedBlog,
//         totalPages: totalPages,
//         page: context.query.slug,
//       },
//     };
//   }

//   const response = await axios.get(
//     `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=id,_embedded,slug,date,title,excerpt,_links&_embed&per_page=10&page=${context.query.slug}`,
//     { next: { revalidate: 600 } },
//     {
//       cache: "force-cache",
//       headers: {
//         "Cache-Control": "public, max-age=600",
//       },
//     }
//   );

//   totalPages = response.headers["x-wp-total"];

//   await rediss.set(`totalPages`, totalPages, "EX", 600);
//   await rediss.set(
//     `blog-${context.query.slug}`,
//     JSON.stringify(response.data),
//     "EX",
//     300
//   );

//   return {
//     props: {
//       data: response?.data?.slice(0, 3) ?? [],
//       blogs: response?.data ?? [],
//       totalPages: totalPages,
//       page: context.query.slug,
//     },
//   };
// }

export async function getStaticPaths() {
  let totalBlogs = await rediss.get(`totalBlogs`);

  if (!totalBlogs) {
    const response = await axios.get(
      "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=1"
    );
    totalBlogs = response.headers["x-wp-total"];
    await rediss.set(`totalBlogs`, totalBlogs, "EX", 600);
  }

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalBlogs / itemsPerPage);

  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      params: { slug: i.toString() },
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  let totalPages = await rediss.get(`totalPages`);

  if (!totalPages) {
    const postsRes = await axios.get(
      "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=1"
    );
    totalPages = postsRes.headers["x-wp-totalpages"];
    await rediss.set(`totalPages`, totalPages, "EX", 600);
  }

  const cachedBlog = await rediss.get(`blog-${context.params.slug}`);
  if (cachedBlog) {
    const blogs = JSON.parse(cachedBlog);
    return {
      props: {
        data: blogs.slice(0, 3),
        blogs: blogs,
        totalPages: totalPages,
        page: context.params.slug,
      },
      revalidate: 600,
    };
  }

  const response = await axios.get(
    `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=id,_embedded,slug,date,title,excerpt,_links&_embed&per_page=10&page=${context.params.slug}`,
    { next: { revalidate: 600 } }
  );

  const blogs = response.data;
  await rediss.set(
    `blog-${context.params.slug}`,
    JSON.stringify(blogs),
    "EX",
    300
  );

  return {
    props: {
      data: blogs.slice(0, 3),
      blogs: blogs,
      totalPages: totalPages,
      page: context.params.slug,
    },
    revalidate: 86400,
  };
}
