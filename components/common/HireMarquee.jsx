import Marquee from "react-easy-marquee";

const HireMarquee = ({ title }) => {
    const array = new Array(3).fill(null);
    return (
        <main className="lg:h-auto flex flex-col justify-center my-0">
            <Marquee
                duration={25000}
                background="#fafafa00"
                reverse={true}
                height="150px"
            >
                {array.map((el, index) => (
                    <section
                        key={index}
                        className="inline-flex space-x-10 mr-10 2xl:text-2xl text-xl items-center"
                    >
                        <span className="text-6xl Gilroy-Bold">Brain Inventory</span>
                        <span className="text-6xl Gilroy-Bold"> Brain Inventory</span>
                        <span className="text-6xl Gilroy-Bold"> Brain Inventory </span>
                    </section>
                ))}
            </Marquee>
            <section className="border-y" />
            <Marquee 
                duration={20000} 
                background="#fafafa00" 
                height="150px" 
                reverse={false} 
            >
                {array.map((el, index) => (
                    <section
                        key={index}
                        className="inline-flex space-x-10 mr-10 2xl:text-2xl text-xl items-center"
                    >
                        <span className="text-6xl Gilroy-Bold">{title }</span>
                        <span className="text-6xl Gilroy-Bold"> {title }</span>
                        <span className="text-6xl Gilroy-Bold">{title }</span>
                    </section>
                ))}
            </Marquee>
        </main>
    );
};
export default HireMarquee;