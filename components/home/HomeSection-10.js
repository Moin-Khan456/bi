import Link from "next/link";
import Image from "next/image";

const HomeSectionTen = () => {
  return (
    <div className="flex justify-center ">
      <div className="container padding-left-all-section">
        <div className="flex w-full lg:flex-row flex-col 2xl:gap-10 gap-8 2xl:py-10 2xl:px-0  px-8">
          <div className="lg:space-y-12 space-y-8 flex-1">
            <p className="text-heading-1 Gilroy-Bold">our portfolio</p>

            <div className="lg:flex lg:space-x-10 lg:space-y-0 space-y-10">
              <CounterBox
                counterInfo={{ count: "100", message: "Projects Delivered" }}
              ></CounterBox>
              <CounterBox
                counterInfo={{ count: "50", message: "Happy Clients" }}
              ></CounterBox>
            </div>

            <ProjectBox
              info={{
                name: "Numetric.Work",
                images:
                  "https://braininventory.s3.us-east-2.amazonaws.com/images/numetrics.png",
                alt: "Numetric: Account software app development",
                summary:
                  "Numetric-Online Accounting Software similar to QuickBooks",
              }}
            ></ProjectBox>
            <div className="w-[30vw] h-[30vw] relative lg:mx-auto rounded-full border border-[#ffffff86] flex items-center">
              <span className="w-[28vw] h-[28vw] mx-auto overflow-hidden rounded-full border border-[#ffffffc2] flex items-center">
                <span className="w-[26vw] h-[26vw] mx-auto overflow-hidden rounded-full border">
                  <video
                    muted
                    loop
                    autoPlay={true}
                    controls={false}
                    className="relative top-20 scale-[2]"
                    poster="https://braininventory.s3.us-east-2.amazonaws.com/images/work-v-thumbnail.png"
                  >
                    <source
                      src="https://braininventory.s3.us-east-2.amazonaws.com/videos/work.mp4"
                      type="video/mp4"
                    />
                  </video>
                </span>
              </span>
            </div>
            <Link
              href="/portfolio"
              className="flex cursor-pointer lg:justify-center items-center space-x-8"
            >
              <div className="flex lg:justify-center items-center space-x-8">
                <div className="2xl:text-7xl lg:text-6xl text-5xl Gilroy-Bold stroke-text">
                  wanna see <br /> more
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-auto h-auto lg:h-40 lg:w-40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="lg:space-y-8 space-y-6 flex-1">
            <div className="lg:h-40 h-10"></div>

            <a
              href="https://dribbble.com/brain_inventory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="stroke-text Gilroy-Bold 2xl:text-9xl lg:text-8xl text-5xl">
                dribble
              </div>
            </a>
            <a
              href="https://www.behance.net/braininventory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="stroke-text Gilroy-Bold 2xl:text-9xl lg:text-8xl text-5xl">
                behance
              </div>
            </a>

            <ProjectBox
              info={{
                name: "One Premium Down",
                images:
                  "https://braininventory.s3.us-east-2.amazonaws.com/images/nft-port.png",
                alt: "NFT Marketplace software development by Brain Inventory",
                summary: "Mint, Sell & Buy NFTs inspired by open Sea",
              }}
            ></ProjectBox>

            <ProjectBox
              info={{
                name: "Skedy",
                images:
                  "https://braininventory.s3.us-east-2.amazonaws.com/images/Skedy.png",
                alt: "Skedy, school management app  developed by Brain Inventory",
                summary: "School/Institution Management Solution",
              }}
            ></ProjectBox>
          </div>
        </div>
      </div>
    </div>
  );
};

const CounterBox = ({ counterInfo }) => {
  return (
    <div>
      <div className="Gilroy-Bold text-base-orange-1 2xl:text-7xl xl:text-6xl text-5xl mb-4">
        {counterInfo.count}+
      </div>
      <span className="xl:text-4xl lg:text-3xl text-2xl whitespace-nowrap">
        {counterInfo.message}
      </span>
    </div>
  );
};

const ProjectBox = ({ info }) => {
  return (
    <div className="xl:space-y-6 lg:space-y-6 space-y-8 hover-image overflow-hidden">
      <div className="min-h-[350px] h-[425px] lg:w-full w-[30vw] min-w-[350px] overflow-hidden">
        <Image  
         
          src={info.images}
          alt={info.alt}
          loading="lazy"
          width={900}
          height={500}
          className="xs:w-auto sm:w-auto md:w-[1000px]"
        />
      </div>
      <div>
        <h3 className="Gilroy-Bold 2xl:text-5xl xl:text-4xl text-3xl">
          {info.name}
        </h3>
        <p className="2xl:text-2xl lg:text-xl text-xl">{info.summary}</p>
      </div>
    </div>
  );
};

export default HomeSectionTen;
