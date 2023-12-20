import Image from "next/image";
import React from "react";
import axios from "axios";
import Link from "next/link";
import Skeleton from "./HorizontalSkeleton";

const PopularBlogs = ({ data }) => {
  return (
    <main className="container">
      {
        data === null || data === undefined || data == [] ? <Skeleton/> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data?.map((post, index) => (
          <Link href={`/posts/${post.slug}/${post.id}`} key={index} className="w-full">
            <Image  
         
              src={post["_embedded"]["wp:featuredmedia"][0].source_url}
              blurDataURL="data:/image-loading.png"
              placeholder="blur"
              quality={50}
              fetchPriority="high"
              width={300}
              height={300}
              alt={post["_embedded"]["wp:featuredmedia"][0].alt_text??"Brain Inventory exclusive content"}
              className="w-full m-2 rounded-md"
            />
          </Link>
        ))}
      </div>
      }
    </main>
  );
};
export default PopularBlogs;

// export async function getServerSideProps() {
//   const response = await axios.get(
//     "https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=_embedded,_links,&_embed&per_page=3&page=1"
//   );
//   console.log("Popular: ", response.data);
//   return {
//     props: {
//       data: response.data,
//     },
//   };
// }
