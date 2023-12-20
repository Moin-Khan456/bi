import React from 'react'
import Carousel from "./projectDetailCarousel.jsx"
import Image from 'next/image'
const Index = ({ carouselImages }) => {

    return (
        <div className="py-8 my-8 relative flex flex-col justify-center bg-[#2F45C5] inset-0 bg-gradient-to-b from-[#2F45C5] to-black">
            <div className="container">
                <div className="flex items-center">
                    <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12" />
                    <h1 className='text-3xl lg:text-5xl font-bold Gilroy-SemiBold'>What is </h1>
                    <Image  
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group+6422.png" alt="" width={500} height={500} className='w-28 lg:w-52' />
                </div>
                <div className="px-4 lg:px-48 py-4">
                    <p className='font-Satoshi font-bold text-2xl opacity-50'>Bloomia is a comprehensive platform designed to assist and motivate users in performing kegel exercises, which offer numerous benefits for both men and women. These exercises focus on strengthening the pelvic floor muscles, which play crucial roles in pregnancy, urination, and sexual intercourse. The Bloomia platform provides users with a range of exercise variations to cater to individual preferences and needs. Through an interactive web application, users can access step-by-step animations that guide them through the proper execution of kegel exercises. This allows users to accurately track their progress over time. To enhance motivation and consistency, Bloomia offers various features. Users can establish personal goals and maintain daily streaks to foster a sense of accomplishment. Weekly and monthly graphs enable users to monitor their progress visually, gaining valuable insights into their improvement over time. The platform conveniently records and presents this information within a well-structured calendar, which clearly indicates the status of each exercise session, whether it&apos;s incomplete, partially completed, or fully completed. Additionally, Bloomia understands the importance of reminders for maintaining a consistent exercise routine. Users have the option to set up reminder emails tailored to their specific time zones, ensuring they receive daily prompts to engage in their kegel exercises. With its user-friendly interface, comprehensive exercise variations, progress tracking tools, and customizable reminders, Bloomia provides a complete solution for individuals looking to improve their pelvic floor strength and overall well-being.</p>
                    <Carousel images={carouselImages} />
                </div>
            </div>
        </div>
    )
}

export default Index 