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
        <h3 className="text-heading-1 2xl:pt-20 xl:pt-16 pt-14 2xl:pb-10 pb-8 Gilroy-Bold">
          we&apos;d love to add your logo here.
        </h3>

        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-20 xl:gap-12 gap-12">
          {logos.map((el) => (
            <div
              key={el}
              className="border border-blue h-40 2xl:p-12 lg:p-10 p-4"
            >
              <div className="relative h-full flex">
                <Image
                  srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
                  sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
                  src={
                    "https://braininventory.s3.us-east-2.amazonaws.com/images/" +
                    el +
                    ".svg"
                  }
                  width={200}
                  height={200}
                  loading="lazy"
                  alt="Brain Inventory"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/portfolio">
            <HomeButton>
              <span className="2xl:text-2xl text-xl transition-all">
                we have more!
              </span>
            </HomeButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionEleven;
