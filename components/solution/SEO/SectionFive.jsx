import Image from 'next/image'
import React from 'react'

const Index = () => {

    return (
        <div className="rounded-md my-8 py-10">
            <div className="container padding-left-all-section">
               
                <div className='lg:grid lg:grid-cols-2 gap-6'>
                      <div className='p-6 lg:p-0'>
                          <h3 className='font-bold text-lg monument'>RISE OF</h3>
                          <h1 className='font-bold lg:text-7xl lg:leading-[70px] lg:w-[400px] text-[#F7D927] monument'>SOCIAL MEDIA APPLICATION</h1>
                          <h3 className='font-bold text-lg mb-6 monument'>COMPARED TO FACEBOOK</h3>
                          <p className='text-sm text-gray-400 font-medium leading-5 font-Satoshi'>At Brain Inventory, we’re more than just a social networking app development company. We’re a forward-thinking technology partner with a mission to empower industries with innovative social solutions. Our expertise lies in delivering tailor-made apps that foster communication and engagement, transforming the way industries connect and collaborate. With Brain Inventory, you gain a strategic partner who understands the nuances of the social industry and can help you harness the power of digital technologies to drive growth and change.</p>
                      </div>

                      <div>
                          <Image src='https://d1u4arv5y5eda6.cloudfront.net/images/solution/abstract-yellow-rocket-ship-concept-cartoon-style.png' 
                          width={800} height={500} alt='social networking app development company' className='w-[800px]'></Image>
                      </div>
                </div>


                <div className='lg:flex block justify-between mt-8 lg:p-0 p-6'>
                    <div className='border-sectionfive w-full'>
                         <h2 className='font-bold text-xl bottom-border-five p-4 font-Satoshi'>Social Media Platform</h2>
                         <ul className=''>
                            <li className='bottom-border-five p-4 font-Satoshi'>Instagram</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>TikTok</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>Clubhouse</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>Twitter</li>
                         </ul>
                    </div>

                    <div className='border-sectionfive w-full'>
                         <h2 className='font-bold text-xl bottom-border-five p-4 font-Satoshi'>Unique Features</h2>
                         <ul className=''>
                            <li className='bottom-border-five p-4 font-Satoshi'>Emphasis on visual content like photos and videos</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>Short-form videos with music backgrounds</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>Audio-only chat rooms</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>Bite-sized content, real-time updates</li>
                         </ul>
                    </div>

                    <div className='border-sectionfive w-full '>
                         <h2 className='font-bold text-xl bottom-border-five p-4 font-Satoshi'>User Base</h2>

                         <ul className=''>
                            <li className='bottom-border-five p-4 font-Satoshi'>1 billion monthly active users</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>800 million monthly active users</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>10 million weekly active users</li>
                            <li className='bottom-border-five p-4 font-Satoshi'>330 million monthly active users</li>
                         </ul>
                    </div>
                </div>

            </div>  
        </div>
    )
}

export default Index 