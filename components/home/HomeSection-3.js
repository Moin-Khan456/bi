import Link from "next/link";
import HomeButton from "../buttons/HomeButton.js";

const HomeSectionThree = () => {
  return (
    <div className="container padding-left-all-section">
      <div className=" lg:flex items-start pt-0 md:pt-20">
        <div className="w-full p-6 pt-0 lg:p-10 pr-0 2xl:pb-16 xl:pb-12 pb-10 2xl:space-y-10 xl:space-y-8 space-y-6">
          <h2 className="text-heading-2 text-secondaryTx Gilroy-Bold lg:whitespace-nowrap">
            Work that make you say woww!
          </h2>
          <div className="lg:flex justify-between">
            <div className="lg:flex items-start md:gap-5 lg:gap-10">
              <div className="flex flex-col gap-14 mb-6">
                <p className="text-heading-4 leading-loose w-[70%] text-secondaryTx">
                  Namaste! Here you can discover who we are, how we work and
                  what we do. We approach all our projects with our 4 core
                  values.
                </p>
                <Link href="/portfolio">
                  <HomeButton>
                    <>see our portfolio</>
                  </HomeButton>
                </Link>
              </div>
              <div className="md:w-[80%] w-full lg:grid grid-cols-2 2xl:gap-4 xl:gap-4 gap-4 h-full">
                <Box
                  title="focus"
                  textColor="black"
                  color="orange"
                  summary="We always have our eye on the detailing"
                  titleColor="black"
                />
                <Box
                  title="passion"
                  color="blue"
                  textColor="white"
                  summary="We love building amazing products"
                  titleColor="white"
                />
                <Box
                  title="creativity"
                  color="blue"
                  textColor="white"
                  summary="We are all about the creativity and vision"
                  titleColor="white"
                />
                <Box
                  title="community"
                  color="orange"
                  summary="We are always open to everyone and anytime"
                  textColor="black"
                  titleColor="black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Box = ({ title, summary, color, textColor, titleColor }) => (
  <div
    className={
      "bg-base-" +
      color +
      "-1" +
      " 2xl:p-8 xl:p-6 p-4 h-48 mb-4 lg:h-[18rem] 3xl:h-[16rem] overflow-x-hidden relative group" +
      " text-" +
      textColor
    }
  >
    <p className={`text 2xl:text-7xl xl:text-7xl text-6xl Gilroy-Bold md:translate-x-28 translate-x-18 group-hover:-translate-x-full text-${titleColor} uppercase transition-transform ease-linear duration-[4000ms]`}>
      {title}
    </p>
    <div className="absolute xl:bottom-5 bottom-3 pr-8">
      <p className="uppercase 2xl:text-3xl xl:text-2xl text-xl 2xl:mb-4 mb-2 Gilroy-SemiBold">
        {title}
      </p>
      <p className="xl:text-lg text-base Gilroy-Light">{summary}</p>
    </div>
  </div>
);
export default HomeSectionThree;
