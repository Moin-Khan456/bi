import Image from 'next/image'
import React from 'react'

const Index = () => {

    
    return (
        <div className="rounded-md my-8 py-10">
            <div className="container padding-left-all-section">
                <div>
                   <h2 className='text-center text-bold lg:text-6xl text-xl Gilroy-Bold'>Solutions for Social Media App Development</h2>
                   <p className='text-center lg:px-40 pt-6 text-gray-400 text-sm lg:text-base lg:pb-12 pb-6'><span className='text-white'>Crack the code</span> on social media app development with us. We’re the champions of creating innovative solutions that make waves in the social industry. With us, you’re not just building an app - you’re <span className='text-white'>creating an experience</span> that captivates and engages users from the get-go!</p>
                </div>

           
            </div>


            <div className='relative'>
                    {solutionList.map((el, index)=>{
                        return(
                            <div key={index} className='lg:py-12 py-8 border-custom hover-btn'>
                             
                                <div className='container padding-left-all-section'>
                                    <div  className='lg:grid lg:grid-cols-3 gap-6 lg:p-0 p-7'>
                                        <div>
                                            <h1 className='text-2xl Gilroy-Bold lg:mb-0 mb-3'>{el.text}</h1>
                                        </div>
                                        <div className='text-white col-span-2'>
                                            <p className='text-base text-gray-400 lg:px-9'>{el.desc}</p>
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