import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
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
      <h2 className="bg-primaryBg text-xl Gilroy-Bold mt-8">All Blogs</h2>
      {blogData === null ? (
        <Skeleton />
      ) : (
        <>
          {blogData?.map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={index}>
              <div className="flex flex-col sm:flex-row border-2 border-primaryTx  overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-primaryBg mt-4">
                {/* Image Section */}
                <div className="h-48 sm:h-auto sm:w-2/4 sm:p-4 ">
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
                    className="w-full h-full sm:object-contain sm:rounded-xl"
                  />
                </div>

                {/* Content Section */}
                <div className=" p-6 sm:w-2/3">
                  {/* Date */}
                  <p className=" flex flex-col justify-between text-sm text-secondaryTx">{post.date.split("T")[0]}</p>

                  {/* Title */}
                  <h3 className="flex flex-col justify-between text-xl font-bold text-secondaryTx mt-2">
                  {post.title.rendered}
                  </h3>

                  {/* Description */}
                  <p className="flex flex-col justify-between text-sm mt-4 line-clamp-3">
                  <div
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/posts/${post.slug}`}
                    className="inline-block mt-6 text-sm font-bold text-primaryBg bg-primaryTx px-4 py-2 transition-colors duration-200"
                  >
                    Read More
                  </Link>
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
