import Image from 'next/image'
import React from 'react'

const Index = () => {
    return (
        <div className="bg-[#2F45C5] rounded-md my-8">
            <div className="container">
                <div className="my-8 py-12 ">
                    <div className="flex items-center">
                        <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12" />
                        <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/Group+6425.png" alt="" width={700} height={700} className='w-28 lg:w-44' />
                        <h1 className='text-3xl lg:text-5xl font-bold project__section__two__heading'> Perspective</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/Group+6421.png" alt="" className='w-full py-4' width={900} height={900} />
                </div>
            </div>
        </div>
    )
}

export default Index 