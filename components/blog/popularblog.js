import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import HomeButton from "../buttons/HomeButton";

export default function PopularBlog({ post, featuredMedia }) {
  const router = useRouter();
  const URLGOTO = () => {
    router.push(`/posts/${post.slug}/${post.id}`);
  };
  return (
    <Link href={`/posts/${post.slug}/${post.id}`}>
      <div className="relative hover-overlay cursor-pointer">
        <div className="overlay">
          <Image src={featuredMedia} alt={post.slug} layout="fill" />
        </div>
        <div className="absolute top-12">
          <div className="pl-2 pr-2">
            <div className="mt-24" onClick={() => URLGOTO()}>
              <HomeButton>
                <span className="text-sm">Read More</span>
              </HomeButton>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}
