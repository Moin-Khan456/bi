import Image from 'next/image'
import React from 'react'

const Index = () => {
    return (
        <div className="pt-12 container">
            <div className="flex items-center">
                <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12"/>
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6426.png" alt="" width={500} height={500} className='w-36 lg:w-60'/>
                <h1 className='text-3xl lg:text-5xl font-bold Gilroy-SemiBold'> Website</h1>
            </div>
            <div className="px-12 lg:px-96 min-w-full">
                <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6414.png" alt='' width={800} height={800} className='pt-4 lg:py-12'/>
            </div>
        </div>
    )
}

export default Index 