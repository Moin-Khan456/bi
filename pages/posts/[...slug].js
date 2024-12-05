import React, { useState } from "react";
import Head from "next/head";
import LetsKick from "../../components/common/LetsKick";
import Footer from "../../components/common/Footer";
import KeepInTouch from "../../components/common/keepInTouch";
import LocateUs from "../../components/common/locateUs";
import Header from "../../components/header/Header";
import { getDate } from "../../utils/utils";
import data from "./blog_dataset.json";
import { useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function PostPage({ slug, post, featuredMedia }) {
  const [title, setTitle] = useState(
    data.find((ele) => ele.id === post.id)?.Title ?? "Brain Inventory | Blog"
  );
  const [summary, setSummary] = useState(
    post.excerpt.rendered.includes(":")
      ? post.excerpt.rendered.split(":")[1]
      : post.excerpt.rendered
  );
  const [discription, setDiscription] = useState(
    data.find((ele) => ele.id === post.id)?.description ??
      summary?.split(". ")?.[0]
  );

  useEffect(() => {
    setTitle(
      data.find((ele) => ele.id === post.id)?.Title || "Brain Inventory | Blog"
    );
    setDiscription(
      data.find((ele) => ele.id === post.id)?.description ||
        "Brain Inventory | Blog"
    );
  }, [post.id]);
  return (
    <>
      <div className="relative bg-white ">
        <Head>
          <title>{title}</title>
          <meta name="description" content={discription} />
          <link rel="og:title" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={discription} />
          <link
            rel="canonical"
            href={`https://braininventory.in/posts/${slug}/${post.id}`}
          />
          <meta property="og:image" content={featuredMedia} />
          <meta
            property="og:url"
            content={`https://braininventory.in/posts/${slug}/${post.id}`}
          />
          {!slug && <meta name="robots" content="noindex, nofollow" />}
        </Head>
        <Header></Header>
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container pt-12 padding-left-all-section-1 text-slate-950">
            <div className="grid grid-cols-3 gap-4 post-container">
              <div className="col-span-2 slug-img-container mt-8">
                <h1 className="text-left Gilroy-Bold text-2xl mb-4  ">
                  {post.title.rendered}
                </h1>

                <Image
                  src={featuredMedia}
                  className="w-full lg:min-w-[1000px] lg:max-w-[1350px]"
                  width={900}
                  height={900}
                  fetchPriority="high"
                  priority
                  alt={post.title.rendered}
                />
                <span className="flex mt-2 mb-2">
                  <label className="pl-2">
                    <small className="text-sm text-white text-opacity-50">
                      {getDate(post.date)}
                    </small>
                  </label>
                </span>

                <div
                  className="card-text pb-5 slugall"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <KeepInTouch fromBlog={true} />
        <LocateUs fromBlog={true} />
        <LetsKick fromBlog={true} />
        <Footer fromBlog={true} />
      </div>
    </>
  );
}
// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   const fields = "id,title,_links,date,content,excerpt";

//   const post = await axios.get(
//     `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts/${
//       slug[slug.length - 1]
//     }?_embed&_fields=${fields}`
//   );

//   const featuredMedia =
//     post && (await axios.get(post.data["_links"]["wp:featuredmedia"][0].href));
//   return {
//     props: {
//       slug: slug,
//       post: post.data,
//       featuredMedia: featuredMedia.data?.source_url,
//     },
//   };
// }

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  // If slug is undefined, show 404 page
  if (!slug[0]) {
    return {
      notFound: true,
    };
  }

  const fields = "id,slug,title,_links,date,content,excerpt";

  try {
    // Fetch the post data using the slug, with specific fields and embedded data
    const postResponse = await axios.get(
      `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?slug=${slug[0]}&_embed&_fields=${fields}`
    );
    const post = postResponse.data[0];

    // If no post is found, show 404 page
    if (!post) {
      return {
        notFound: true,
      };
    }

    let featuredMediaUrl = null;

    // Check if the post has a featured media and fetch its URL from the embedded data
    if (post && post._embedded && post._embedded["wp:featuredmedia"]) {
      featuredMediaUrl = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return {
      props: {
        slug: slug[0],
        post: post,
        featuredMedia: featuredMediaUrl,
      },
    };
  } catch (error) {
    // Handle errors gracefully and show 404 page
    console.error("Error fetching post data:", error);
    return {
      notFound: true,
    };
  }
};
