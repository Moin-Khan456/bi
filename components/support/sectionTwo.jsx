const SectionTwo = ({ head, description }) => {
  return (
    <div className="container padding-left-all-section-1 px-6 py-12">
      <h2 className="text-4xl lg:text-[3.75rem] lg:leading-[4rem] px-4 font-semibold MonumentBold">
        {head}
      </h2>
      <p className="text-[.875rem] opacity-50 p-4 ">{description}</p>
    </div>
  );
};

export default SectionTwo;
