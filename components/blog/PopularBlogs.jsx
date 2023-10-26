import Image from "next/image";
import React from "react";
import axios from "axios";
import Link from "next/link";

const PopularBlogs = ({ data }) => {
  return (
    <main className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data?.map((post, index) => (
          <Link href={`/posts/${post.slug}/${post.id}`} key={index} className="w-full">
            <Image
              src={post["_embedded"]["wp:featuredmedia"][0].source_url}
              fetchPriority="high"
              width={1800}
              height={1800}
              alt=""
              className="w-full m-2 rounded-md"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};
export default PopularBlogs;

export async function getServerSideProps() {
  const response = await axios.get(
    "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=3&page=1"
  );
  return {
    props: {
      data: response.data,
    },
  };
}
