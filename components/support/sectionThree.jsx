const SectionThree = ({ title, points }) => {
  return (
    <div className="container padding-left-all-section-1">
      <div className="container lg:block">
        <h3 className="text-3xl font-Satoshi font-bold py-4">{title}</h3>

        <div className="container bg-secondaryBg p-2 lg:p-8 !mb-8 ">
          <ul className="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
            {points?.map((item, index) => (
              <li className="font-semibold py-2 font-Satoshi" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
