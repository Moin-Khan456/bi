import React from 'react'
import Image from 'next/image'
const Index = () => {

    return (
        <div className="relative flex flex-col lg:flex-row items-end justify-center bg-white max-w-full">
            <div className="bg-[#e8fdd0] lg:h-screen lg:w-[60%]">
                <h1 className='text-5xl Gilroy-bold text-black font-bold w-[70%] px-8 pt-12'>Get Inspired</h1>
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group+6399.png" width={1000} height={1000} alt="" className='lg:w-[80%]'/>
            </div>
            <div className="bg-[#e2e1fe] w-full lg:w-[40%] lg:h-[70vh]">
                <h1 className='text-4xl lg:text-5xl Gilroy-bold text-black font-bold w-[70%] p-8'>Leaderboard - Earn Points</h1>
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group+6400.png" width={1000} height={1000} alt="" className=''/>
            </div>
            <h1 className='transparent-text text-8xl lg:absolute lg:top-10 lg:right-8'>Website Version</h1>
        </div>
    )
}

export default Index 