export default function SectionOne({ faqsType, setFaqsType }) {
  return (
    <div className="container pt-28 px-14">
      <h2 className="text-4xl mb-4 Gilroy-Bold text-primaryTx">
        FAQs
      </h2>
      <h1 className=" text-3xl Gilroy-Bold">
      IT Staff Augmentation Service | <br/> Custom Software Development 
      </h1>
      <div className="flex md:flex-row flex-col gap-4  pt-8">
        <button
          className={`px-6 py-2 font-bold text-lg border rounded-3xl border-primaryTx text-primaryTx ${
            faqsType === "Development/Technologies/Services" && "bg-secondaryBg"
          }`}
          onClick={() => setFaqsType("Development/Technologies/Services")}
        >
          Development/Technologies/Services
        </button>
        <button
          className={`px-6 py-2 font-bold text-lg border rounded-3xl border-primaryTx text-primaryTx ${
            faqsType === "On-Site" &&
            "bg-secondaryBg"
          }`}
          onClick={() => setFaqsType("On-Site")}
        >
          On-Site
        </button>
        <button
          className={`px-6 py-2 font-bold text-lg border rounded-3xl border-primaryTx text-primaryTx ${
            faqsType === "IT Staff Augmentation" &&
            "bg-secondaryBg"
          }`}
          onClick={() => setFaqsType("IT Staff Augmentation")}
        >
          IT Staff Augmentation
        </button>
      </div>
    </div>
  );
}
