import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from 'next/image';

const SectionOne = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center lg:px-24 relative bottom-0 lg:-bottom-32 h-[75vh] lg:h-[148.5vh]'>
            <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/ocureel/Group+6401.png" width={500} height={800} alt="" className="lg:hidden pt-[5rem] bg-gradient-to-r from-violet-500 to-fuchsia-500"/>
            {/* <div className="lg:w-[15%] px-4 lg:px-0 flex justify-center bg-white py-3 rounded-2xl mt-4 shadow-2xl ">
                <button className="flex flex-col items-center Gilroy" id="rtc-xd">
                    <span className="text-xs font-thin text-white pb-1">
                            Case study 2022
                        </span>
                    <a href="https://xd.adobe.com/view/2199324e-80e8-41c0-b113-5460b4ab28b3-74ca/" target="_blank">
                        <span className="flex items-center justify-between text-black font-semibold w-full py-2 px-4">
                            Explore &nbsp; <BsArrowRight />
                        </span>
                    </a>
                </button>
            </div> 

            <ReactTooltip
                anchorId="rtc-xd"
                place="right"
                variant="info"
                content="Click to visit Adobe XD Design"
            />
            */}
            <div className="text-black font-bold flex items-center py-4 lg:py-0">
                    Made with &nbsp; <Image width={80} height={50} src="https://d1u4arv5y5eda6.cloudfront.net/images/project/XD.png" alt="" className='w-8' />
            </div>
        </div>
    )
}

export default SectionOne