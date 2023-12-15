import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Marquee from 'react-easy-marquee';

const Index = () => {

    return (
        <div className="rounded-md my-8 py-10 lg:space-x-6 relative " >
            <div className=' py-32 lg:pb-[22rem]'>
                <Marquee duration={15000} reverse={true} className='mb-6'>
                        <h2 className='stroke-text-seven lg:text-8xl text-5xl'> SOCIAL MEDIA MARKETING SOCIAL MEDIA MARKETING </h2>
                </Marquee>
                <Marquee duration={20000} className='mb-6'>
                      <h1 className='stroke-text-seven lg:text-8xl text-5xl'> SEO SEO SEO SEO SEO SEO SEO SEO</h1>
                </Marquee>
                <Marquee duration={19000} className='mb-6'>
                     <h3 className='stroke-text-seven lg:text-8xl text-5xl'>BRANDING BRANDING BRANDING BRANDING BRANDING</h3>
                </Marquee>
                <Marquee duration={22000} className='mb-6'>
                      <h1 className='stroke-text-seven lg:text-8xl text-5xl'> SEO SEO SEO SEO SEO SEO SEO SEO</h1>
                </Marquee>
                <Marquee duration={15000} className='mb-6'>
                    <h2 className='stroke-text-seven lg:text-8xl text-5xl'>  MEDIA MARKETING SOCIAL MEDIA MARKETING</h2>
                </Marquee>
            </div>
            <div className=" padding-left-all-section absolute top-0 left-0 right-0 lg:p-0 p-4">

                      <div>
                          <Image src='https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Group+7033.png' 
                          width={500} height={400} alt='social networking app development company' className='m-auto block'></Image>
                      </div>

                      <div>
                          <h2 className='text-center font-Brinattan lg:text-6xl text-4xl pt-6 lg:py-10'>Sharing Your Vision</h2>
                          <p className='text-center lg:w-[60%] m-auto text-lg text-white'>We love create experiences that enable people to connect, express themselves and establish meaningful relationships</p>
                      <button className="flex items-center m-auto justify-center font-Satoshi font-bold text-xs bg-gradient-to-r from-[#000076] to-[#7600EB] rounded-full   px-8
                             py-4 my-12">
                              START PROJECT
                            <GoArrowUpRight className="font-extrabold text-3xl ml-4 p-2 rounded-full bg-[#9347E7]" />
                            </button>
                      </div>
               
            </div>  
        </div>


        
        
    )
}

export default Index 