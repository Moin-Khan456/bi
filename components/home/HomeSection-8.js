import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";
import { HomeSection8info } from "./Data";

const HomeSectionEight = () => {
  return (
    <div className="2xl:p-10 p-8 2xl:pb-40 pb-32">
      <div className="container padding-left-all-section">
        <h2 className="text-heading-2 Gilroy-Bold lg:whitespace-nowrap mb-5">
          The process that delivers the best!
        </h2>
        <div className="divide-y">
          {HomeSection8info?.map((el) => (
            <Section key={el.title} info={el}></Section>
          ))}
        </div>
        <Link href="/portfolio">
          <HomeButton>
            <span className="2xl:text-2xl text-xl transition-all">
              Explore more
            </span>
          </HomeButton>
        </Link>
      </div>
    </div>
  );
};

const Section = ({ info }) => {
  return (
    <>
      <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1  2xl:gap-10 gap-8 2xl:pt-10 2xl:pb-12 py-8">
        <span className="xl:col-span-5 md:col-span-2 col-span-1 stroke-text Gilroy-Bold text-heading-1">
          {info.title}
        </span>
        <div className="xl:col-span-2 md:col-span-1 col-span-1 relative sm:h-full md:h-full lg:h-[350px]">
          <Image
            srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
            sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
            src={
              "https://braininventory.s3.us-east-2.amazonaws.com/images/" +
              info.image
            }
            width={1500}
            height={1500}
            alt={info.alt}
            objectFit="cover"
          />
        </div>
        <p className="2xl:text-xl xl:text-lg text-base Gilroy-Light  xl:col-span-3 md:col-span-1 col-span-1 flex flex-col gap-4">
          {info?.details?.map((el) => (
            <span key={el}>{el}</span>
          ))}
        </p>
      </div>
    </>
  );
};

export default HomeSectionEight;
