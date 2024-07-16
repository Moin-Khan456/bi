function SectionThree({ title, points, sectionThreeServices }) {
  return (
    <div className="container padding-left-all-section-1">
      <div className="container lg:block">
        <h1 className="text-3xl font-Satoshi font-bold py-4">{title}</h1>

        <div className="container bg-[#121212] p-2 lg:p-8 !mb-8 ">
          <ul className="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6 ">
            {points?.map((item, index) => (
              <li className="font-semibold py-2 font-Satoshi" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container lg:block">
        <div className="container bg-[#121212] p-2 lg:p-8 !mb-8 ">
          <h1 className="text-3xl font-Satoshi font-bold py-4">
            {sectionThreeServices.title}
          </h1>
          <p className="text-sm opacity-50">{sectionThreeServices.desc}</p>
          <ul className="list-disc list-inside text-sm pl-8 mb-4 mt-0 py-6  ">
            {sectionThreeServices?.points?.map((item, index) => (
              <div key={index} className="mb-2">
                <li className="font-bold text-base font-Satoshi">
                  {item.title}
                </li>
                <p className="text-sm pl-6">{item.desc}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
