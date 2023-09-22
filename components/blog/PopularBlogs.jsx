import Image from "next/image";
import React from "react";
import axios from "axios";

const PopularBlogs = ({ data }) => {
  return (
    <main className="container">
      <div className="flex flex-col lg:flex-row">
        {data?.map((post, index) => (
          <Image
            key={index}
            src={post["_embedded"]["wp:featuredmedia"][0].source_url}
            fetchPriority="high"
            width={800}
            height={800}
            alt=""
            className="w-full m-2 rounded-md"
          />
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
