import Image from "next/image";

const locations = [
  {
    placeName: "India (HQ)",
    address:
      "618, Shekhar Central, Palasia Square, A.B Road, Indore, Madhya Pradesh, 452001",
    image: "india.svg",
    phone: "+918109561401",
    alt: "Brain Inventory India (HQ) - 618, Shekhar Central, Palasia Square, A.B Road, Indore, Madhya Pradesh, 452001",
  },
  {
    placeName: "United Kingdom",
    address: "Brain Inventory, SBVS, 8 Roundhay Road, Leeds, UK, LS7 1AB",
    image: "unitedKindom.svg",
    phone: "+18008209286",
    alt: "Brain Inventory United Kingdom office: SBVS, 8 Roundhay Road, Leeds, UK, LS7 1AB",
  },
  {
    placeName: "Canada",
    address: "44 Main Street East Milton, ONCanada L9T 1N3",
    image: "canada.svg",
    phone: "+4166696505",
    alt: "Brain Inventory Canada Office: 44 Main Street East Milton, ONCanada L9T 1N3",
  },
  {
    placeName: "Jordan",
    address:
      "185 Wasfi Al-Tal Street, Ammon Oasis Complex P.O Box 4724 Amman 11953 Jordan ",
    phone: "+962790961000",
    image: "Jordan.png",
    alt: "Brain Inventory Jordan Office: 185 Wasfi Al-Tal Street, Ammon Oasis Complex P.O Box 4724 Amman 11953 Jordan",
  },
  {
    placeName: "USA",
    address: "720 Seneca St Ste 107 Seattle, USA 98101",
    phone: "+1(206)6533419",
    image: "USA.png",
    alt: "Brain Inventory USA Office: 720 Seneca St Ste 107 Seattle, USA 98101",
  },
];

export default function LocateUs() {
  return (
    <div className="2xl:py-32 xl:py-28 py-24 2xl:px-10 lg:px-8 mobile-padding">
      <div className="container padding-left-all-section">
        <div className="2xl:py-20 py-12 2xl:px-12 lg:px-16 2xl:space-y-8 xl:space-y-6 space-y-4">
          <h4 className="text-heading-1 Gilroy-Bold mobile-padding">
            locate us
          </h4>
          <div className="lg:grid xl:grid-cols-5 grid-cols-2 2xl:gap-8 gap-4">
            {locations.map((el) => {
              return <Card key={el.placeName} info={el} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ info }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 mb-6 items-start">
        <div className="relative place-self-center">
          <Image
            src={"https://d1u4arv5y5eda6.cloudfront.net/images/" + info.image}
            loading="lazy"
            alt={info.alt}
            width={138}
            height={167}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="2xl:text-base text-lg Gilroy-Bold">
            {info.placeName}
          </h4>
          <p className="2xl:text-[11px] text-[11px]">{info.address}</p>
          <p className="2xl:text-base text-sm mt-2">{info.phone}</p>
        </div>
      </div>
    </>
  );
};
