import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import HomeButton from "../../components/common/HomeBtn";
import { blogDate } from "../../utils/utils";
import Link from "next/link";
import Skeleton from "./Skeleton";

const Blogs = ({ blogs }) => {
  const [blogData, setBlogData] = useState();
  useEffect(() => {
    setBlogData(null);
    setBlogData(blogs);
  }, [blogData, blogs]);
  return (
    <div className="container">
      {blogData === null ? (
        <Skeleton />
      ) : (
        <>
          {blogData?.map((post, index) => (
            <Link href={`/posts/${post.slug}/${post.id}`} key={index}>
              <div className="lg:w-[75%] flex flex-col lg:flex-row my-8 border-b-2 border-slate-600 ">
                <div className="relative ">
                  <div className="overlay">
                    <Image
                      src={post["_embedded"]["wp:featuredmedia"][0].source_url}
                      fetchPriority="high"
                      loading="lazy"
                      width={300}
                      height={300}
                      alt={
                        post["_embedded"]["wp:featuredmedia"][0].alt_text ??
                        "Brain Inventory exclusive content"
                      }
                      className="w-full max-w-[450px] mx-0 my-0 lg:my-2 rounded-md "
                    />
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <HomeButton>
                      <span className="text-sm">Read More</span>
                    </HomeButton>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-2">
                  <h1 className="text-2xl font-bold">{post.title.rendered}</h1>
                  <div
                    className="text-sm mt-2 text-justify"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <span className="flex mt-2 mb-2">
                    <label>
                      <small className="text-sm text-white text-opacity-50">
                        {blogDate(post.date)}
                      </small>
                    </label>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default memo(Blogs);
