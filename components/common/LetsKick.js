
export default function LetsKick({ fromBlog }) {
  return (
    <div className={`container px-4 py-10 lg:px-16 ${fromBlog && "text-slate-900"}`}>
      <div className="2xl:py-5 py-3">
        <div className="flex justify-center">
          <h3 className="xl:text-[6rem] 2xl:text-[6rem] lg:text-6xl md:text-6xl text-5xl Gilroy-Bold underline-offset-[10px] decoration-4 ">
            <span
              className={`stroke-text mr-2 ${fromBlog && "dark-stroke-text"}`}
            >
              if it&apos;s digital,
            </span>
            <span className="">we&apos;ll make it.</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
