import axios from "axios";
import React from "react";

const Test = ({data, blogs, page}) => {
  return <div>Test</div>;
};

export default Test;

export async function getServerSideProps(context) {
  const response = await axios.get(
    `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_fields=id,_embedded,slug,date,title,excerpt,_links&_embed&per_page=10&page=${context.query.slug}`,
    { next: { revalidate: 600 } },
    {
      cache: "force-cache",
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    }
  );
  console.log(response.data);
  return {
    props: {
      data: response?.data?.slice(0, 3) ?? [],
      blogs: response?.data ?? [],
      page: context.query.slug,
    },
  };
}
