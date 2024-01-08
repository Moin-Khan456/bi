import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from 'next/image';

const SectionOne = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center lg:px-24 relative bottom-0 lg:-bottom-32 h-[75vh] lg:h-[148.5vh]'>
            <Image  
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group+6401.png" width={500} height={800} alt="Custom Software Development Company | Application Development Company" className="lg:hidden pt-[5rem] bg-gradient-to-r from-violet-500 to-fuchsia-500"/>
            <div className="text-black font-bold flex items-center py-4 lg:py-0">
                    Made with &nbsp; <Image  
          width={80} height={50} src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/XD.png" alt="Custom Software Development Company | Application Development Company" className='w-8' />
            </div>
        </div>
    )
}

export default SectionOne