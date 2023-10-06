import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import Link from "next/link";

const HomeSectionNine = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full">
          <div className="">
            <div className="sticky top-0 z-20">
              <div className=" w-full  p-10 2xl:space-y-8 xl:space-y-6 space-y-4  bg-gradient-5">
                <p className="Gilroy-Bold text-heading-1">
                  lets discuss your project
                </p>
                <p className="text-heading-4 Gilroy-SemiBold">
                  Get free consultation and let us know your project idea to
                  turn it into an amazing digital product.
                </p>
                <Link href="/contact" className="mt-8 block">
                  <button className="inline-flex items-center bg-transparent transition-all hover-bg-yellow-h">
                    <HomeButton>
                    <span className="2xl:text-2xl text-xl transition-all">
                      talk to our experts
                    </span>
                    </HomeButton>
                  </button>
                </Link>
              </div>
            </div>
            <div className="overflow-x-hidden relative bottom-24">
              <Image width={1833} height={1425} loading="lazy" src="https://d1u4arv5y5eda6.cloudfront.net/images/groupImage.png" alt="custom software development solutions" />
              <div className="absolute bottom-0 2xl:h-40 h-28 w-full bg-gradient-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionNine;
