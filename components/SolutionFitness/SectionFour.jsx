import Image from 'next/image'
import React from 'react'
const Index = ({title, description, solutionList}) => {

    return (
        <div className="rounded-md my-8 py-10">
            <div className="container padding-left-all-section-1">
                <div>
                   <h2 className='text-center text-bold lg:text-6xl text-xl Gilroy-Bold'>{title}</h2>
                   <p className='text-center lg:px-40 pt-6 text-gray-300 text-sm lg:text-base lg:pb-12 pb-6'>{description}</p>
                </div>
            </div>
            <div className='relative'>
                    {solutionList.map((el, index)=>{
                        return(
                            <div key={index} className='lg:py-12 py-8 border-custom hover-btn'>
                                <div className='container padding-left-all-section-1'>
                                    <div  className='lg:grid lg:grid-cols-3 gap-6 lg:p-0 p-7'>
                                        <div>
                                            <h1 className='text-2xl Gilroy-Bold lg:mb-0 mb-3'>{el.text}</h1>
                                        </div>
                                        <div className='text-white col-span-2'>
                                            <p className='text-base text-gray-300 lg:px-9'>{el.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                 </div>
        </div>
    )
}
export default Index