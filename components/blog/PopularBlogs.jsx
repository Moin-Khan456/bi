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
              <Image
                src={post["_embedded"]["wp:featuredmedia"][0].source_url}
                blurDataURL="data:/image-loading.png"
                placeholder="blur"
                quality={50}
                priority="true"
                fetchPriority="high"
                width={300}
                height={300}
                alt={
                  post["_embedded"]["wp:featuredmedia"][0].alt_text ??
                  "Brain Inventory exclusive content"
                }
                className="w-full m-2 rounded-md"
              />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};
export default PopularBlogs;
