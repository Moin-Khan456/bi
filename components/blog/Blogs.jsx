import Image from "next/image";
import React, { useEffect, useState } from "react";
import HomeButton from "../../components/common/HomeBtn";
import axios from "axios";
import Link from "next/link";
import Skeleton from "./Skeleton";

const Blogs = ({ pageNumber }) => {
  // const [currentPage, setCurrentPage] = useState(pageNumber);
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(null);
    axios
      .get(
        `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=5&page=${pageNumber}`
      )
      .then((res) => {
        setData([...res.data]);
      });
  }, [pageNumber]);
  return (
    <div className="container">
      {data === null ? (
        <Skeleton />
      ) : (
        <>
          {data?.map((post, index) => (
            <Link href={`/posts/${post.slug}/${post.id}`} key={index}>
              <div className="lg:w-[75%] flex flex-col lg:flex-row my-8 border-b-2 border-slate-600 ">
                <div className="relative ">
                  <div className="overlay">
                    <Image
                      src={post["_embedded"]["wp:featuredmedia"][0].source_url}
                      fetchPriority="high"
                      width={500}
                      height={500}
                      alt=""
                      className="w-full max-w-[450px] mx-0 my-0 lg:my-2 rounded-md "
                    />
                  </div>
                  <div className="absolute bottom-10 left-8">
                    <HomeButton>
                      <span className="text-sm">Read More</span>
                    </HomeButton>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-2">
                  <h1 className="text-2xl Gilroy-Bold">
                    {post.title.rendered}
                  </h1>
                  <div
                    className="text-sm mt-2 blog-card-content text-justify"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Blogs;
