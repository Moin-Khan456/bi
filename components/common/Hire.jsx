import * as React from "react";

export default function App({
  enablePara = false,
  title,
  colorText = "Brain",
  subhead,
  subhead1,
  subhead2,
  card,
}) {
  const titleArray = title.split("%");
  return (
    <main className="container">
      <section className="relative flex flex-col lg:flex-row lg:gap-10 h-auto w-full">
        <section className="lg:sticky lg:top-0 min-w-[50%] h-[250px] lg:min-h-screen ">
          <section className="lg:h-[200px] px-8 lg:px-0 lg:w-[700px] absolute lg:top-[15%] lg:left-[50%] max-w-[600px] lg:-translate-x-[45%] lg:-translate-y-[50%]">
            <h1 className="Gilroy-Bold lg:text-6xl text-[1.9rem] lg:leading-[4.5rem]">
              {titleArray.map((ele, index) => (
                <span className="" key={index}>
                  {console.log(ele.includes("Brain"))}
                  {ele.includes("Brain") ? (
                    <span className="text-[#7600EB]">{ele}</span>
                  ) : ele.includes("Salesforce Development") ? (
                    <span className="text-[#7600EB]">{ele}</span>
                  ) : (
                    <span>{ele}</span>
                  )}
                </span>
              ))}
            </h1>
            <p className="text-lg font-thin opacity-60 lg:mt-4 hidden lg:block">
              {subhead}
            </p>
            <p className="text-lg font-thin opacity-60 lg:mt-4 hidden lg:block">
              {subhead1}
            </p>
            <p className="text-lg font-thin opacity-60 lg:mt-4 hidden lg:block">
              {subhead2}
            </p>
            {enablePara && (
              <p className="text-lg font-thin opacity-60 lg:mt-4 hidden lg:block">
                {enablePara}
              </p>
            )}
          </section>
        </section>
        <section className="lg:w-[40%] px-8 lg:px-0">
          <section>
            {card.map((ele, index) => (
              <section className="bg-technology p-10 lg:ml-8 mb-4" key={index}>
                <h3 className="Gilroy-Bold text-3xl">{ele.head}</h3>
                <p className="Gilroy-Light text-lg opacity-60 pt-4">
                  {ele.content}
                </p>
              </section>
            ))}
            <section className="min-h-[50px] hidden lg:block" />
          </section>
        </section>
      </section>
    </main>
  );
}
