import Image from 'next/image'
import React from 'react'
const Index = () => {
    return (
        <div className="rounded-md my-8 py-10 pb-32">
            <div className="container padding-left-all-section relative">
               <div className='lg:mb-80 mb-[36rem]'>
                  <Image
                  src='https://d1u4arv5y5eda6.cloudfront.net/images/solution/Group+7062.png'
                  alt=''
                  width='900'
                  height='400'
                  className='m-auto'
                  ></Image>
               </div>
                  <div className='lg:grid lg:grid-cols-2 gap-8 absolute lg:top-80 top-32'>
                      <div className='m-6 lg:m-0'>
                                <Image
                            src='https://d1u4arv5y5eda6.cloudfront.net/images/solution/1.png'
                            alt=''
                            width='600'
                            height='600'
                            className=''
                            ></Image>
                            <h3 className='monument text-white text-3xl mt-4'>PROJECT NAME</h3>
                            <p className=''>When examining solutions for the social industry, it&apos;s essential to first conduct a thorough scope analysis. Here&apos;s a brief rundown of the process:</p>
                      </div>
                      <div className='lg:mt-24 m-6 lg:m-0'>
                                <Image
                            src='https://d1u4arv5y5eda6.cloudfront.net/images/solution/e8635b913472ae92c6c9d727d1ccce71.png'
                            alt=''
                            width='600'
                            height='600'
                            className=''
                            ></Image>
                            <h3 className='monument text-white text-3xl mt-4'>PROJECT NAME</h3>
                            <p className=''>When examining solutions for the social industry, it&apos;s essential to first conduct a thorough scope analysis. Here&apos;s a brief rundown of the process:</p>
                      </div>
                  </div>
            </div>  
        </div>
    )
}
export default Index