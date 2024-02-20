import axios from "axios";
import React from "react";
import { rediss } from "../../utils/redis";
import Header from "../../components/header/Header";
import KeepInTouch from "../../components/common/keepInTouch.js";
import LocateUs from "../../components/common/locateUs.js";
import LetsKick from "../../components/common/LetsKick.js";
import Footer from "../../components/common/Footer.js";

const Test = ({ data, blogs, page }) => {
  return (
    <main className="relative second-component">
      <Header />
      <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container padding-left-all-section-1">
            <h1 className="text-6xl pt-12 font-bold">Blogs</h1>
            </div>
        </div>
        <KeepInTouch />
        <LocateUs />
        <LetsKick />
        <Footer />
    </main>
  );
};

export default Test;

export async function getServerSideProps(context) {
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

  console.log(response.data);
  return {
    props: {
      data: response?.data?.slice(0, 3) ?? [],
      blogs: response?.data ?? [],
      totalPages: totalPages,
      page: context.query.slug,
    },
  };
}
