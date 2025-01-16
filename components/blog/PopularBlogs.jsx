import Image from "next/image";
import React from "react";
import Link from "next/link";
import Skeleton from "./HorizontalSkeleton";

const PopularBlogs = ({ data }) => {
  return (
    <main className="container">
      {data === null || data === undefined || data == [] ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {data?.map((post, index) => (
            <Link
              href={`/posts/${post.slug}/${post.id}`}
              key={index}
              className="w-full"
            >
              <div className="max-w-sm rounded overflow-hidden border-2 border-primaryTx h-[33rem] relative">
                <Image
                  className="w-full h-[184px]"
                  src={post["_embedded"]["wp:featuredmedia"][0].source_url}
                  alt={
                    post["_embedded"]["wp:featuredmedia"][0].alt_text ??
                    "Brain Inventory exclusive content"
                  }
                  width={300}
                  height={184}
                />
                <div className="px-2 py-4">
                  <p className="text-sm">{post.date.split("T")[0]}</p>
                  <div className="font-bold text-3xl md:text-[16px] mb-2">
                    {post.title.rendered}
                  </div>
                  <div
                    className="text-sm mt-2 text-justify"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </div>
                <div className="px-2 absolute bottom-3">
                  <Link href={`/posts/${post.slug}/${post.id}`}
              key={index}
              className="bg-primaryTx Gilroy-SemiBold px-3 py-1 text-primaryBg">
                  Read More
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};
export default PopularBlogs;
