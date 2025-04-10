import axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic.js";
import { rediss } from "../../utils/redis.js";
import React, { useState } from "react";
import { throttle } from "lodash";
import { useQuery } from "@tanstack/react-query";

const Header = dynamic(() => import("../../components/header/Header.js"), { ssr: false });
const PopularBlogs = dynamic(() => import("../../components/blog/PopularBlogs.jsx"));
const Blogs = dynamic(() => import("../../components/blog/Blogs.jsx"), { ssr: false });
const Pagination = dynamic(() => import("../../components/blog/Pagination.jsx"), { ssr: false });
const KeepInTouch = dynamic(() => import("../../components/common/keepInTouch.js"));
const LocateUs = dynamic(() => import("../../components/common/locateUs.js"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"), {
  ssr: false,
});

const SkeletonLoader = () => {
  return (
    <div className="container">
      <h2 className="bg-primaryBg text-xl Gilroy-Bold mt-8">All Blogs</h2>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex flex-col sm:flex-row border-2 border-primaryTx overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-primaryBg mt-4">
          <div className="h-48 sm:h-auto sm:w-2/4 sm:p-4">
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className="p-6 sm:w-2/3">
            <div className="h-4 w-20 bg-gray-200 animate-pulse mb-2"></div>
            <div className="h-6 w-48 bg-gray-200 animate-pulse mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 animate-pulse"></div>
              <div className="h-4 bg-gray-200 animate-pulse"></div>
              <div className="h-4 bg-gray-200 animate-pulse"></div>
            </div>
            <div className="h-10 w-24 bg-gray-200 animate-pulse mt-6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SkeletonPopularBlog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden border-2 border-primaryTx h-[33rem] relative">
          <div className="w-full h-[184px] bg-gray-200 animate-pulse"></div>
          <div className="px-2 py-4">
            <div className="h-4 w-20 bg-gray-200 animate-pulse mb-2"></div>
            <div className="h-6 w-48 bg-gray-200 animate-pulse mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 animate-pulse"></div>
              <div className="h-4 bg-gray-200 animate-pulse"></div>
              <div className="h-4 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
          <div className="px-2 absolute bottom-3">
            <div className="h-8 w-24 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home({ initialData, initialBlogs, totalPages, page }) {

  const [currentPage, setCurrentPage] = useState(page);

  const fetchBlogs = throttle(async (currentPage) => {
    const response = await axios.get(
      `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=id,_embedded,slug,date,title,excerpt,_links&_embed&per_page=10&page=${currentPage}`
    );
    return response.data;
  }, 5000);

  // const {
  //   data: blogs,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["blogs", currentPage],
  //   queryFn: () => fetchBlogs(currentPage),
  //   staleTime: 600000,
  // });
  // const popularBlogs = blogs?.slice(0, 3) || [];

  return (
    <>
      <Head>
        <title>Insights and Innovations | Blogs by Brain Inventory</title>
        <meta
          name="description"
          content="Explore the latest insights, trends, and innovations in technology, development, and design on the Brain Inventory blog. Stay updated with us."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Insights and Innovations | Blogs by Brain Inventory "
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
            <h1 className="lg:text-4xl text-2xl pt-12 font-bold sm:leading-12">
              Mindful Blogs | Resource Augmentation | <br /> Web and Mobile
              Software Development
            </h1>
            <div>
              <h3 className="text-xl font-bold mt-8 mb-3 hidden lg:block">
                Popular Blogs
              </h3>
              <div className="pb-2 hidden lg:block">
                {/* {isLoading ? (
                  <SkeletonPopularBlog />
                ) : ( */}
                <PopularBlogs data={initialData} />
                {/* )} */}
              </div>
              {/* {isLoading ? <SkeletonLoader /> : <Blogs blogs={initialBlogs} />} */}
              <Blogs blogs={initialBlogs} />
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

  const cacheKey = `blog:${context.params.slug}`;
  const cachedBlog = await rediss.get(cacheKey);

  if (cachedBlog) {
    const blogs = JSON.parse(cachedBlog);
    return {
      props: {
        initialData: blogs.slice(0, 3),
        initialBlogs: blogs,
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
  await rediss.set(cacheKey, JSON.stringify(blogs), "EX", 300);

  return {
    props: {
      initialData: blogs.slice(0, 3),
      initialBlogs: blogs,
      totalPages: totalPages,
      page: context.params.slug,
    },
    revalidate: 600,
  };
}