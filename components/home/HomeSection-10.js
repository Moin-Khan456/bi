import Image from "next/image";
import Link from "next/link";
import HomeButton from "../buttons/HomeButton";
import { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";

export default function HomeSectionTen() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateActiveState = () => {
      setIsActive(window.innerWidth < 1024);
    };
    updateActiveState();
    window.addEventListener('resize', updateActiveState);
    return () => window.removeEventListener('resize', updateActiveState);
  }, []);

  return (
    !isActive ? (
      <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-[repeat(0,minmax(0,1fr))] gap-2 p-4 bg-secondaryBg max-w-screen-xl mx-auto
      ">
      <div class="col-start-1 row-start-1 col-end-2 row-end-2 h-full p-4 order-1">
        <p className="text-heading-1 Gilroy-Bold text-secondaryTx">
          Our Portfolio
        </p>
        <div className="lg:flex lg:space-x-10 lg:space-y-0 space-y-10">
          <CounterBox
            counterInfo={{ count: "100", message: "Projects Delivered" }}
          />
          <CounterBox counterInfo={{ count: "50", message: "Happy Clients" }} />
        </div>
      </div>

      <div class="col-start-1 md:col-start-2 row-start-2 sm:row-start-1 col-end-2 md:row-start-1 row-end-4  order-2">
        <a
          href="https://dribbble.com/brain_inventory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="stroke-text text-right mt-14 Gilroy-Bold 2xl:text-9xl lg:text-8xl text-5xl">
            dribble
          </div>
        </a>
        <a
          href="https://www.behance.net/braininventory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="stroke-text text-right Gilroy-Bold 2xl:text-9xl lg:text-8xl text-5xl">
            behance
          </div>
        </a>
      </div>

      <div class="col-start-1 row-start-3 sm:row-start-2 md:row-start-2 col-end-2 row-end-5 order-3">
        <ProjectBox
          info={{
            name: "Numetric.Work",
            images:
              "https://braininventory.s3.us-east-2.amazonaws.com/images/numetrics.png",
            alt: "Numetric: Account software app development",
            summary:
              "Numetric-Online Accounting Software similar to QuickBooks",
          }}
        />
      </div>

      <div class="col-start-1 md:col-start-2 row-start-4 col-end-2 md:col-end-3 row-end-7 order-4">
        <ProjectBox
          info={{
            name: "Skedy",
            images:
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Skedy.png",
            alt: "Skedy, school management app developed by Brain Inventory",
            summary: "School/Institution Management Solution",
          }}
        />
      </div>

      <div class="col-start-1 row-start-5 col-end-2 row-end-8 order-5">
        <ProjectBox
          info={{
            name: "One Premium Down",
            images:
              "https://braininventory.s3.us-east-2.amazonaws.com/images/nft-port.png",
            alt: "NFT Marketplace software development by Brain Inventory",
            summary: "Mint, Sell & Buy NFTs inspired by open Sea",
          }}
        />
      </div>

      <div class="col-start-1 md:col-start-2 row-start-7 mx-auto col-end-2 md:col-end-3 row-end-8  order-6">
       <Link href={"/portfolio"}>
       <HomeButton>
          <span className="2xl:text-2xl text-xl text-primaryTx transition-all">
            Check all our projects
          </span>
        </HomeButton>
       </Link>
      </div>
    </div>
    ):(
      <div className="p-4">
        <div>
        <p className="text-heading-1 gap-3 text-xl Gilroy-Bold text-secondaryTx">
          Our Portfolio
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
          <CounterBox
            counterInfo={{ count: "100", message: "Projects Delivered" }}
          />
          <CounterBox counterInfo={{ count: "50", message: "Happy Clients" }} />
        </div>
        </div>
        <div>
        <a
          href="https://dribbble.com/brain_inventory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="stroke-text text-left mt-14 Gilroy-Bold 2xl:text-9xl lg:text-8xl text-5xl">
            dribble
          </div>
        </a>
        <a
          href="https://www.behance.net/braininventory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="stroke-text text-left Gilroy-Bold 2xl:text-9xl lg:text-8xl text-5xl">
            behance
          </div>
        </a>
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
          size={isActive}
        />
         <ProjectBox
          info={{
            name: "Skedy",
            images:
              "https://braininventory.s3.us-east-2.amazonaws.com/images/Skedy.png",
            alt: "Skedy, school management app developed by Brain Inventory",
            summary: "School/Institution Management Solution",
          }}
          size={isActive}
        />
         <ProjectBox
          info={{
            name: "One Premium Down",
            images:
              "https://braininventory.s3.us-east-2.amazonaws.com/images/nft-port.png",
            alt: "NFT Marketplace software development by Brain Inventory",
            summary: "Mint, Sell & Buy NFTs inspired by open Sea",
          }}
          size={isActive}
        />
         <div className="flex justify-center items-center mt-10">
         <HomeButton>
          <span className="2xl:text-2xl text-xl text-primaryTx transition-all">
            Check all our projects
          </span>
        </HomeButton>
         </div>
      </div>
    )
  );
}

const CounterBox = ({ counterInfo }) => {
  return (
    <div>
      <div className="Gilroy-Bold 2xl:text-7xl xl:text-6xl text-5xl text-primaryTx my-4">
        {counterInfo.count}+
      </div>
      <span className="xl:text-4xl lg:text-3xl text-2xl whitespace-nowrap text-secondaryTx">
        {counterInfo.message}
      </span>
    </div>
  );
};

const ProjectBox = ({ info,size }) => {
  return (
    <div
      className={` flex flex-col justify-center items-center mt-8 hover-image overflow-hidden px-10`}
    >
      <div className={`${size? `h-full` :`min-h-[350px] h-[425px]`} lg:w-full w-[30vw] min-w-[350px] overflow-hidden rounded-xl`}>
        <Image
          src={info.images}
          alt={info.alt}
          loading="lazy"
          width={900}
          height={500}
          className="xs:w-auto sm:w-auto md:w-[1000px]"
        />
      </div>
      <div className="m-0 text-center w-[75%]">
        <h3 className="Gilroy-Bold 2xl:text-5xl xl:text-4xl text-3xl">
          {info.name}
        </h3>
        <p className="2xl:text-2xl lg:text-xl text-xl">{info.summary}</p>
      </div>
    </div>
  );
};
