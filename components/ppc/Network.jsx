import React from 'react';
import Image from 'next/image';

const TileMatrix = () => {
    return (
    <div className='container'>
        <div className="max-w-full flex flex-col lg:flex-row justify-around my-4 lg:my-12 mx-4 lg:mx-36">
            <div className="lg:w-1/2 text-white text-center lg:text-start">
                <h1 className='text-4xl lg:text-5xl Satoshi font-bold lg:w-[70%]'>We are building some incredible social networks</h1>
                <p className='text-slate-400 Gilroy-Bold my-8 lg:w-[55%] tracking-wide text-center lg:text-justify'>Intuitive, scalable and engaging web and mobile social network software that your users will fall in love with</p>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row">
                <div className="flex flex-col">
                    <span className='w-[180px] py-12 text-center flex justify-center items-center text-white Satoshi bg-[#141414] m-2 hover:scale-[1.05] duration-150 ease-in-out'>
                        <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" width={1000} height={1000} src="https://braininventory.s3.us-east-2.amazonaws.com/images/ppc/box.png" alt=""/>
                    </span>
                </div>
                <div className="flex flex-col lg:mt-16">
                    <span className='w-[180px] py-20 text-center flex justify-center items-center text-white Satoshi bg-[#141414] hover:scale-[1.05] duration-150 ease-in-out'>
                        <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" width={1000} height={1000} src="https://braininventory.s3.us-east-2.amazonaws.com/images/ppc/brag.png" alt=""/>
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className='w-[180px] py-12 text-center flex justify-center items-center text-white Satoshi bg-[#141414] m-2 hover:scale-[1.05] duration-150 ease-in-out'>
                        <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" width={1000} height={1000} src="https://braininventory.s3.us-east-2.amazonaws.com/images/ppc/M-logo.png" alt=""/>
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TileMatrix;
