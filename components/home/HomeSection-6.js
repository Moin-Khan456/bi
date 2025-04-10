import Marquee from "react-easy-marquee";
import Link from "next/link";
import Head from "next/head";
const array = new Array(3).fill(null);
const HomeSectionSix = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="video"
          href="https://braininventory.s3.us-east-2.amazonaws.com/videos/Final.mp4"
          type="video/mp4"
        />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/branding+rotating.webp"
        />
      </Head>

      <div className="lg:h-screen flex flex-col justify-center">
        <Marquee duration={15000} background="transparent" reverse height="150px">
          {array.map((_, index) => (
            <div key={index} className="flex space-x-5 mr-10 2xl:text-2xl text-xl items-center">
              <StaticSVG type="email" />
              <span className="underline pb-2 underline-offset-[12px] decoration-1">
                career@braininventory.com
              </span>
              <StaticSVG type="phone" />
              <span>+917722885755</span>
              <StaticSVG type="email" />
              <Link href={"mailto:askus@braininventory.com"} className="underline pb-2 underline-offset-[12px] decoration-1">
                askus@braininventory.com
              </Link>
              <StaticSVG type="phone" />
              <span>+918109561401</span>
            </div>
          ))}
        </Marquee>

        <div className="py-10 border-y">
          <LazyVideo />
        </div>

        <Marquee duration={15000} background="transparent" reverse height="150px">
          <div className="flex space-x-10 mr-10 2xl:text-2xl text-xl items-center">
            <span>
              We partner on big and small projects with all kinds of clients - from boutique brands to market leaders.
            </span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

const StaticSVG = ({ type }) => {
  const icons = {
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    ),
  };

  return icons[type] || null;
};

export default HomeSectionSix;


const LazyVideo = () => {
  return (
    <video
      muted
      loop
      autoPlay
      controls={false}
      playsInline
      loading="lazy"
      preload="metadata"
      className="rounded-lg w-full md:w-auto"
      poster="https://braininventory.s3.us-east-2.amazonaws.com/images/branding+rotating.webp"
    >
      <source
        src="https://braininventory.s3.us-east-2.amazonaws.com/videos/Final.mp4"
        type="video/mp4"
      />
    </video>
  );
};
