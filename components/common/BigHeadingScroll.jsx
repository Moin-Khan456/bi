import Marquee from "react-easy-marquee";

export default function BigHeadingScroll({duration, text, reverse}) {
    return (
        <Marquee height="250px" className="group" background="#fafafa00" duration={duration || 15000} reverse={reverse || true}>
            <h2 className="2xl:text-9xl xl:text-8xl text-6xl px-20 Gilroy-Bold stroke-text group-hover:text-white whitespace-nowrap">{text}</h2>
        </Marquee>
    )
}