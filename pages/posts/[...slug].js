import React, { useState } from "react";
import Head from "next/head";
import LetsKick from "../../components/common/LetsKick";
import Footer from "../../components/common/Footer";
import KeepInTouch from "../../components/common/keepInTouch";
import LocateUs from "../../components/common/locateUs";
import Header from "../../components/header/Header";
import Loader from "../../components/common/loader";
import { getDate } from "../../utils/utils";
import data from "./blog_dataset.json";
import { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import HireDedicatedCard from "../../components/blog/HireDedicatedCard";
import { FiMail } from "react-icons/fi";

export default function PostPage({ post, featuredMedia }) {
  const [title, setTitle] = useState(data.find((ele) => ele.id === post.id)?.Title ?? "Brain Inventory | Blog");
  const [localForm, setLocal] = useState(true);
  const [summary, setSummary] = useState(post.excerpt.rendered.split(":")[1])
  const [discription, setDiscription] = useState(data.find((ele) => ele.id === post.id)?.description ?? summary.split(". ")[0]);


  useEffect(() => {
    setTitle(
      data.find((ele) => ele.id === post.id)?.Title || "Brain Inventory | Blog"
    );
    setDiscription(
      data.find((ele) => ele.id === post.id)?.description || "Brain Inventory | Blog"
    );
  }, [post.id]);

  return (
    <>
      <Loader />
      <div className="relative  ">
        <Head>
          <title>{title}</title>
          <meta name="description" content={discription} />
          <link rel="og:title" content={title} />

          <link
            rel="canonical"
            href={`https://braininventory.in/posts/${post.slug}/${post.id}`}
          />

          <meta property="og:image" content={featuredMedia} />
          <meta
            property="og:url"
            content={`https://braininventory.in/posts/${post.slug}/${post.id}`}
          />
        </Head>
        <Header></Header>

        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container pt-12 padding-left-all-section">
            <div className="grid grid-cols-3 gap-4 post-container">
              <div className="col-span-2 slug-img-container mt-8">
                <h1 className="text-left Gilroy-Bold text-2xl mb-4  ">
                  {post.title.rendered}
                </h1>
                <Image
                  src={featuredMedia}
                  className="w-full lg:min-w-[1350px] lg:max-w-[1350px]"
                  width={1900}
                  height={1900}
                  alt={post.title.rendered}
                />
                <span className="flex mt-2 mb-2">
                  <label className="pl-2">
                    <small className="text-sm color-gray">
                      {getDate(post.modified)}
                    </small>
                  </label>
                </span>
                <div
                  className="card-text pb-5 slugall"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                ></div>
              </div>
              <div className="fixed z-50 bottom-2 right-1 justify-end w-fit">
                {localForm ? (
                  <HireDedicatedCard setLocal={setLocal} />
                ) : (
                  <div
                    className="text-white bg-gradient-to-r from-[#000076] to-[#7600EB] p-4 rounded-full max-w-fit text-2xl m-2 ml-2 lg:m-8"
                    onClick={() => {
                      setLocal(true);
                    }}
                  >
                    <FiMail />
                  </div>
                )}
              </div>
              {/* 
              <div className="relative lg:w-[300px] lg:min-w-[300px] lg:max-w-[300px] lg:mt-12">
                <span className="absolute block text-center">
                  Hire Developer
                </span>
                <div className="p-6 bg-gray-dc mt-8">
                  <h3 className="text-xl Gilroy-Bold mb-4">
                    Hire Dedicated Remote Developers from Brain Inventory
                  </h3>
                  <p className="text-sm">
                    Onboard{" "}
                    <a
                      className=""
                      href="https://braininventory.in/hire-dedicated-remote-developers"
                    >
                      <span className="color-hightlight">
                        dedicated remote developers
                      </span>
                    </a>{" "}
                    to your project as quickly as in 2 days. If at any point in
                    time, you feel the developer is not performing as per
                    expectation, you can ask for replacement or end the contract
                    with 0 penalty.
                  </p>
                </div>
              </div> */}
              {/* <HireDedicatedCard/> */}
            </div>
          </div>
        </div>

        <KeepInTouch />
        <LocateUs />
        <LetsKick />
        <Footer />
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const { slug } = context.query;

  const post = await axios.get(
    `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts/${
      slug[slug.length - 1]
    }`
  );

  const featuredMedia =
    post && (await axios.get(post.data["_links"]["wp:featuredmedia"][0].href));

  return {
    props: {
      post: post.data,
      featuredMedia: featuredMedia.data?.source_url,
    },
  };
}
