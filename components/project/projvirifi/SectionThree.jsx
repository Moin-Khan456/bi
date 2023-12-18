import React from 'react'
import Image from 'next/image'
const Index = () => {

    return (
        <div className="py-8 relative flex flex-col justify-center bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group%206472.png')]">
            <div className='container'>

            <h1 className='text-3xl lg:text-6xl text-center py-8 Gilroy-Bold'>Design <span className="text-[#7600EB]"> Process</span></h1>
            <div className="px-4 lg:px-48 lg:py-12">
                <Image  
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" 
                src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6436.png" 
                width={800} 
                height={200} className='w-full' alt="" />
            </div>
            </div>
        </div> 
    )
}

export default Index 