import Image from 'next/image'
import React from 'react'
import { IoMdArrowForward } from "react-icons/io"

const FindUs = () => {
    return (
        <div className="p-4 container">
            <div className='flex flex-col lg:flex-row justify-between lg:mx-56'>
                <div className="border-slate-400 border-2 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
                    <Image  
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/drew-beamer-3SIXZisims4-unsplash.png" width={500} height={500} alt="Custom Software Development Company | Hire Software Developers" />
                </div>
                <div className="bg-white text-black lg:rounded-r-3xl lg:rounded-b-none lg:rounded-br-3xl p-4 rounded-b-2xl flex justify-center relative flex-col lg:p-6 lg:w-3/4">
                    <a href='#talk'>
                        <h1 className='absolute opacity-10 text-5xl lg:text-7xl font-extrabold top-8 flex justify-center'>Let&apos;s Talk</h1>
                        <h2 className='text-4xl w-full lg:w-full Gilroy'>Let&apos;s work & build Something great together</h2>
                        <div className="bg-blue-700 w-fit text-white rounded-xl flex justify-center items-start relative flex-col py-2 px-2 lg:mt-2">
                            <p className='text-xs opacity-40 font-thin'>Hire talented, hardworking and dedicated Wordpress developers from India</p>
                            <h2 className='text-2xl w-1/2 py-2 px-4 flex items-center'>Find Us <IoMdArrowForward /></h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FindUs