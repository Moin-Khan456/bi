import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Marquee from './Marquee';



const Index = () => {
    return (
        <div className="rounded-md my-8 ">
            <div className='video-section'>
             <video
              loop
              autoPlay={true}
              controls={false}
              className='h-[105vh]'
            
              preload="metadata"
            >
             <source src="https://d1u4arv5y5eda6.cloudfront.net/images/solution/rFdCZriM6x6btVRZViNaME7HxM~w8PxP8RCbFNOFxnsLMlURKFYtWlMRADjbWqpyPZzXao.mp4" type="video/mp4" />

            </video>
            <div className="container padding-left-all-section">
                    <div className='absolute top-0 m-auto pt-20'>
                         <div className='p-6 lg-p-0'>
                         <h1 className='monument text-4xl pt-7'>OUR</h1>
                        <h2 className='monument lg:text-[10rem] text-4xl leading-[1] mb-8'>EXPERTISE</h2>
                        <h1 className='monument text-4xl'>YOUR</h1>
                        <h2 className='monument lg:text-[11.3rem] text-4xl leading-[1]'>BUSINESS</h2>
                         </div>
                
                        <div className='lg:flex justify-between relative p-6 lg-p-0 pt-8 lg:pt-0'>
                            <div className='w-full'>
                                <p className='lg:w-[40%]'>Unleash the potential of your social industry business with Brain Inventory, a leader in technical solutions. We’re here to transform your challenges into opportunities that will amplify your impact.</p>
                            </div>

                      
                                <div className='hidden lg:block absolute top-[-20rem] left-[23rem]'>
                                     <Image 
                                     src='https://d1u4arv5y5eda6.cloudfront.net/images/solution/Mask+Group+163.png'
                                     alt=''
                                       width={800}
                                       height={800}
                                       className=' w-[700px] h-[600px]'
                                     ></Image>
                                </div>
                            
                            <div className='w-full'>
                                 <button className="flex items-center font-Satoshi relative lg:left-80 font-bold text-xs rounded-full bg-gradient-to-r from-[#000076] to-[#7600EB] px-6 py-4 my-12">
                                    LEVERAGE THE POWER OF US &nbsp;{" "}
                                    <GoArrowUpRight className="font-extrabold text-3xl p-2 rounded-full bg-[#9347E7]" />
                                </button>
                            </div>
                        </div>
                    </div>

          
            </div>
            <Marquee/>
            </div>
           
        </div>
    )
}

export default Index 