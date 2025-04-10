import React, { useEffect, useState } from "react";
import Head from "next/head";
import LetsKick from "../../components/common/LetsKick";
import Footer from "../../components/common/Footer";
import KeepInTouch from "../../components/common/keepInTouch";
import LocateUs from "../../components/common/locateUs";
import Header from "../../components/header/Header";
import { getDate } from "../../utils/utils";
import Image from "next/image";
import axios from "axios";

export default function PostPage({ slug, post, featuredMedia }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title.rendered,
    "description": post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
    "datePublished": post.date,
    "dateModified": post.modified ?? post.date,
    "author": {
      "@type": "Person",
      "name": post.yoast_head_json.author ?? "Brain Inventory",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brain Inventory",
      "url": "https://braininventory.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=384&q=75"
      },
    },
    "image": featuredMedia,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://braininventory.in/posts/${slug}`,
    },
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fixNumbering = () => {
        document.querySelectorAll('.ez-toc-list-level-3 li:not(.ez-toc-page-1)').forEach(item => {
          item.classList.add('ez-toc-page-1');
        });
                document.querySelectorAll('.ez-toc-heading-level-4 li:not(.ez-toc-page-1)').forEach(item => {
          item.classList.add('ez-toc-page-1');
        });
      };
      fixNumbering();
      const observer = new MutationObserver(fixNumbering);
      observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      });

      return () => observer.disconnect();
    }
  }, []);

  const [title, setTitle] = useState(
    post.yoast_head_json.title ?? "Brain Inventory | Blog"
  );
  const [description, setDescription] = useState(
    post.yoast_head_json.description ?? "Brain Inventory | Blog"
  );

  return (
    <>
      <div className="relative bg-primaryBg ">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="description" content={description} />
          <link rel="og:title" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:description" content={description} />
          <link
            rel="canonical"
            href={`https://braininventory.in/posts/${slug}`}
          />
          <meta property="og:image" content={featuredMedia} />
          <meta
            property="og:url"
            content={`https://braininventory.in/posts/${slug}`}
          />
          {!slug && <meta name="robots" content="noindex, nofollow" />}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>
        <Header></Header>
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container pt-12 padding-left-all-section-1 text-slate-950">
            <div className="grid grid-cols-3 gap-4 post-container">
              <div className="col-span-2 slug-img-container mt-8">
                <h1 className="text-left Gilroy-Bold text-4xl mb-4">
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
                  dangerouslySetInnerHTML={{
                    __html: modifyTOCLinks(post.content.rendered, post.slug),
                  }}
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
const modifyTOCLinks = (content, slug) => {
  return content.replace(
    /href="(https:\/\/braininventoryblogs\.com\/wordpress[^"]+)"/g,
    (match, oldUrl) => {
      const anchorPart = oldUrl.split("#")[1];
      return `href="/posts/${slug}#${anchorPart}"`;
    }
  );
};


export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  if (!slug[0]) {
    return {
      notFound: true,
    };
  }

  const fields = "id,slug,title,_links,date,content,excerpt,yoast_head_json";

  try {
    const postResponse = await axios.get(
      `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?slug=${slug[0]}&_embed&_fields=${fields}`
    );
    const post = postResponse.data[0];
    if (!post) {
      return {
        notFound: true,
      };
    }

    let featuredMediaUrl = null;

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
    console.error("Error fetching post data:", error);
    return {
      notFound: true,
    };
  }
};
