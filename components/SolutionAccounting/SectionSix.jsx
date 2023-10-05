import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Index = ({title, btn, head, src}) => {

    return (
        <div className="rounded-md my-8 py-10 space-x-6">
            <div className="container padding-left-all-section ">
                <div className='lg:grid lg:grid-cols-2 gap-0 h-[450px] bg-[#4601a1] rounded-2xl'>
                      <div className='p-12'>
                          <h1 className='font-bold lg:text-6xl Gilroy-Bold'>{title}</h1>
                            <button className="flex items-center font-Satoshi font-bold text-xs rounded-full border-gray-50 border-[1px] px-8
                             py-4 my-12">
                              {btn}
                            <GoArrowUpRight className="font-extrabold text-3xl ml-4 p-2 rounded-full bg-[#9347E7]" />
                            </button>
                            <p className='lg:w-[235px] relative top-11'>{head}</p>
                      </div>
                      <div className='relative'>
                          <Image src={src} 
                          width={1800} height={1800} alt='' className='m-auto block absolute bottom-0 right-10 w-[800px]'></Image>
                      </div>
                </div>
            </div>  
        </div>


        
        
    )
}

export default Index 