import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import Link from "next/link";

const logos = [
  "logo8",
  "logo7",
  "logo3",
  "logo5",
  "logo4",
  "logo1",
  "logo6",
  "logo2",
];

const HomeSectionEleven = () => {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-10 xl:space-y-8 space-y-6 flex flex-col justify-center">
      <div className="container padding-left-all-section">
        <h1 className="text-heading-1 2xl:pt-20 xl:pt-16 pt-14 2xl:pb-10 pb-8 Gilroy-Bold">
          we&apos;d love to add your logo here.
        </h1>

        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-20 xl:gap-12 gap-12">
          {logos.map((el) => (
            <div
              key={el}
              className="border border-blue h-40 2xl:p-12 lg:p-10 p-4"
            >
              <div className="relative h-full">
                <Image
                  src={
                    "https://d1u4arv5y5eda6.cloudfront.net/images/" +
                    el +
                    ".svg"
                  }
                  loading="lazy"
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <HomeButton>
            <Link href="/portfolio">
              <span className="2xl:text-2xl text-xl transition-all">
                we have more!
              </span>
            </Link>
          </HomeButton>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionEleven;
