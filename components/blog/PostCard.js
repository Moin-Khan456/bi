import { useState } from "react";
import { useRouter } from "next/router";
import HomeButton from "../buttons/HomeButton";
import { getDate } from "../../utils/utils.js";
import Loader from "../common/loader";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  const router = useRouter();
  const [progress, setProgress] = useState(false);

  const URLGOTO = () => {
    setProgress(true);
  };
  return (
    <>
      <main className="">
        {/*<Loader />*/}
        <Link href={`/posts/${post.slug}/${post.id}`}>
            <section
              className={`lg:flex custom-class ${
                progress ? "cursor-wait" : "cursor-pointer"
              }`}
              onClick={() => URLGOTO()}
            >
              <section className="relative lg:w-1/2 mr-4 ">
                <section className="overlay">
                  <Image
                    src={post["_embedded"]["wp:featuredmedia"][0].source_url}
                    alt={post.slug}
                    layout="fill"
                  />
                </section>
                <section className="absolute top-36 lg:top-40 left-4">
                  <HomeButton>
                    <span className="text-sm">Read More</span>
                  </HomeButton>
                </section>
              </section>
              <section className="lg:w-1/2">
                <section className="">
                  <section className="">
                    <h3 className="text-2xl Gilroy-Bold">
                      {post.title.rendered}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                      className="text-sm mt-2"
                    ></p>

                    <small className="text-sm color-gray">
                      {getDate(post.date)}
                    </small>
                    <br />
                  </section>
                </section>
              </section>
            </section>
        </Link>
      </main>
    </>
  );
}
