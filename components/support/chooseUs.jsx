export const ChooseUs = ({ title, points }) => {
  return (
    <div className="padding-left-all-section-1 container px-6 pb-12">
      <h3 className="MonumentBold font-bold text-4xl py-4 text-center">
        {title}
      </h3>

      <div className="bg-technology py-12 px-8">
        {points.map((ele, index) => (
          <div className="py-4" key={index}>
            <p className="text-sm text-slate-300">{ele}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
