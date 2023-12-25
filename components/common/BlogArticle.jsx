import React, { useState, useEffect } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function BlogArticle({ data }) {
  const [store, setStore] = useState(data);
  return (
    <main className="px-2 2xl:p-10 lg:p-8 2xl:space-y-8 space-y-6 w-full blogArticles">
      <section className="container padding-left-all-section-1">
        <section className="">
          <section>
            <section className="flex justify-between flex-col lg:flex-row">
              <h1 className="Gilroy-Bold text-4xl leading-[3rem] lg:w-2/5 my-4">
                The ultimate blogs & articles
              </h1>
              <section className="">
                <button className="border-2 border-white p-4 m-2 rounded-full">
                  <IoMdArrowBack />
                </button>
                <button className="border-2 border-white p-4 m-2 rounded-full">
                  <IoMdArrowForward />
                </button>
              </section>
            </section>
            <section className="flex flex-col lg:flex-row justify-center items-center ">
              {store?.map((ele, index) => (
                <Link
                  href={
                    "https://www.braininventory.in/posts/" +
                    ele.slug +
                    "/" +
                    ele.id
                  }
                  target="_self"
                  key={index}
                >
                  <section className="my-4 lg:mr-4 relative h-64" key={index}>
                    <Image
                      width={500}
                      height={300}
                      className="h-full rounded-3xl"
                      fetchPriority="low"
                      priority="low"
                      src={ele._embedded["wp:featuredmedia"][0].source_url}
                      alt={ele.title.rendered + " | Brain Inventory"}
                    />
                    <section className="absolute inset-0 flex items-start justify-between flex-col p-4 "></section>
                  </section>
                </Link>
              ))}
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}