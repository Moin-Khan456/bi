import Image from 'next/image'
import React from 'react'

const Index = ({ sectionOneImg, sectionTwoImg }) => {
    return (
        <div className='container'>
            <div className="flex items-center">
                <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12" />
                <h1 className='text-3xl lg:text-5xl font-bold Gilroy-SemiBold'>Admin&apos;s </h1>
                <Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6423.png" alt="" width={500} height={900} className='w-28 lg:w-56' />
            </div>
            <div className='flex justify-center items-center flex-col lg:flex-row w-full'>
                <div className="max-w-full lg:w-[50%] h-auto mx-4 bg-[#2F45C5] rounded-3xl my-4 pt-4 px-8 project__three__one">
                    <div className=''>
                        <div className="">
                            <h3 className=''>Dashboard</h3>
                            <Image src={sectionOneImg?.one} alt="" className='w-full scale-[1.15]' width={500} height={500} />

                        </div>
                        <div className="">
                            <h3 className=''>Settings</h3>
                            <Image src={sectionOneImg?.two} className='w-full' width={500} height={500} alt="" />
                        </div>
                    </div>

                </div>
                <div className="max-w-full lg:w-[50%]">
                    <div className="lg:px-12 bg-[#EBEBFC] mb-12 rounded-2xl mx-4 project__three__two h-[50%]">
                        <h3 className='text-black text-lg lg:text-2xl pt-4  Gilroy-Bold pl-8'>Subscription History</h3>
                        <Image src={sectionTwoImg?.one} alt="" width={500} height={500} className='flex justify-center w-full lg:w-[91%] lg:pl-12' />
                    </div>
                    <div className="px-4 lg:px-24 bg-[#EBEBFC] mt-12 rounded-2xl mx-4 project__three__two h-[50%]">
                        <h3 className='text-black text-lg ml-4 lg:ml-0 lg:text-2xl pt-4 Gilroy-Bold'>User Management</h3>
                        <Image src={sectionTwoImg?.two} alt="" width={500} height={500} className='flex justify-center w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index