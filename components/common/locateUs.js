import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import Link from "next/link";

const locations = [
  {
    placeName: "India (HQ)",
    address: [
      "618, Shekhar Central, Palasia Square, A.B Road, Indore, Madhya Pradesh, 452001",
    ],
    image: "india.svg",
    phone: "+918109561401",
    alt: "Brain Inventory India (HQ) - 618, Shekhar Central, Palasia Square, A.B Road, Indore, Madhya Pradesh, 452001",
    contact:"Call Us",
    contactwith:"+918109561401"
  },
  {
    placeName: "USA",
    address: ["720 Seneca St Ste 107 Seattle,", "USA 98101"],
    phone: "+1(206)6533419",
    image: "USA.png",
    alt: "Brain Inventory USA Office: 720 Seneca St Ste 107 Seattle, USA 98101",
    contact:"Call Us",
    contactwith:"+12066533419"

  },
  {
    placeName: "United Kingdom",
    address: ["Brain Inventory, SBVS, 8 Roundhay Road,", "Leeds, UK, LS7 1AB"],
    image: "unitedKindom.svg",
    phone: "+18008209286",
    alt: "Brain Inventory United Kingdom office: SBVS, 8 Roundhay Road, Leeds, UK, LS7 1AB",
    contact:"Email Us",
    contactwith:"+18008209286"
  },
  {
    placeName: "Canada",
    address: ["44 Main Street East Milton,", "ONCanada L9T 1N3"],
    image: "canada.svg",
    phone: "+4166696505",
    alt: "Brain Inventory Canada Office: 44 Main Street East Milton, ONCanada L9T 1N3",
    contact:"Email Us",
    contactwith:"+4166696505"
  },
  {
    placeName: "Jordan",
    address:
      ["185 Wasfi Al-Tal Street, Ammon Oasis Complex P.O Box 4724 Amman 11953 Jordan "],
    phone: "+960770781000",
    image: "Jordan.png",
    alt: "Brain Inventory Jordan Office: 185 Wasfi Al-Tal Street, Ammon Oasis Complex P.O Box 4724 Amman 11953 Jordan",
    contact:"Email Us",
    contactwith:"+960770781000"
  },
];

export default function LocateUs({ fromBlog }) {
  return (
    <div className="2xl:pt-32 xl:pt-28 pt-24 mobile-padding">
      <div
        className={`2xl:py-10 py-3 2xl:px-12 lg:px-16 2xl:space-y-8 xl:space-y-6 space-y-4 mx-auto max-w-screen-xl`}
      >
        <h4 className="text-heading-1 Gilroy-Bold mobile-padding">
          Locate Us{" "}
        </h4>
        <div className="lg:grid xl:grid-cols-5 grid-cols-2 2xl:gap-8 gap-4">
          {locations.map((el) => {
            return <Card key={el.placeName} info={el} fromBlog={fromBlog} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Card = ({ info ,fromBlog}) => {
  return (
    <>
      <div className="lg:h-[400px] h-[350px]  xl:w-[200px]  p-8 bg-secondaryBg flex flex-col items-center relative rounded-[8px]">
        <Image
          src={`https://braininventory.s3.us-east-2.amazonaws.com/images/${info.image}`}
          width="117"
          height="140"
          alt=""
        />
        <div className="text-center">
          <h2 className="my-3 font-bold text-xl text-primaryTx">
            {info.placeName}
          </h2>
          <p className="text-sm">{info.address[0]}</p>
          <p>{info.address[1]}</p>
        </div>
      <div className="absolute bottom-6 flex items-center">
      <Link href={`tel:${info.contactwith}`}>
      <HomeButton fromBlog={fromBlog} >
          <span className="2xl:text-2xl text-lg Gilroy-SemiBold transition-all text-primaryTx ">
            {info.contact}
          </span>
        </HomeButton>
      </Link>
      </div>
      </div>
    </>
  );
};
