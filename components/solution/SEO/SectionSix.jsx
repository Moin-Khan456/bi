import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Index = () => {

    return (
        <div className="rounded-md my-8 py-10 space-x-6">
            <div className="container padding-left-all-section ">

               
                <div className='lg:grid lg:grid-cols-2 gap-6 bg-[#4601a1] '>
                      <div className='p-6'>
                          <h1 className='font-bold lg:text-6xl Gilroy-Bold'>Develop Your Own Social Media App</h1>
                            <button className="flex items-center font-Satoshi font-bold text-xs rounded-full border-gray-50 border-[1px] px-8
                             py-4 my-12">
                              BUILD YOUR SOCIAL MEDIA APP
                            <GoArrowUpRight className="font-extrabold text-3xl ml-4 p-2 rounded-full bg-[#9347E7]" />
                            </button>
                            <p className='lg:w-[300px] relative top-11'>Explore everthing that the Brain Inventory team can do for you</p>
                      </div>
                      <div>
                          <Image src='https://d1u4arv5y5eda6.cloudfront.net/images/solution/Mask+Group+166.png' 
                          width={500} height={500} alt='social networking app development company' className='m-auto block'></Image>
                      </div>
                </div>
            </div>  
        </div>


        
        
    )
}

export default Index 