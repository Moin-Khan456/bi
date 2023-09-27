import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='container'>
            <div className='m-4 lg:m-36'>
                <div className="flex justify-center lg:justify-start pb-4">
                    <h1 className='text-4xl lg:text-6xl font-bold'>Our Work</h1>
                </div>

                <div className="flex items-end  my-4 flex-col lg:flex-row">
                    <video
                        className='rounded-3xl lg:w-[60%]'
                        muted
                        loop
                        autoPlay={true}
                        controls={false}
                        poster="https://d1u4arv5y5eda6.cloudfront.net/images/ppc/1.png"
                        preload="metadata"
                    >
                        <source
                            src="https://d1u4arv5y5eda6.cloudfront.netvideos/ocureel.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="lg:w-[40%] ml-4 py-4 lg:px-8">
                        <h1 className='font-bold text-3xl lg:text-5xl my-2'>Ocureel</h1>
                        <p>
                            A game-changing patented social video content application which went viral in no time. Ocureel is a video content platform which takes users on the ultimate adventure of creating real-life connections & building deep relationships via interactive video content. Ocureel a patented game is designed to bring life and help you feel good about the time you spend on your phone.
                        </p>
                    </div>
                </div>
                <div className="flex items-end  my-4 flex-col lg:flex-row">
                <video
                        className='rounded-3xl lg:w-[60%] lg:hidden block'
                        muted
                        loop
                        autoPlay={true}
                        controls={false}
                        poster="https://d1u4arv5y5eda6.cloudfront.net/images/ppc/iPhone+XR+Isometric.png"
                        preload="metadata"
                    >
                        <source
                            src="https://d1u4arv5y5eda6.cloudfront.netvideos/MFM.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="lg:w-[40%] ml-4 py-4 lg:px-8">
                        <h1 className='font-bold text-3xl lg:text-5xl my-2'>My Fit Mantra</h1>
                        <p>
                            My Fit Mantra (MFM) is a blend of fitness & social connectivity software designed to cater to the diverse needs of trainers and individuals seeking to achieve their fitness goals. MFM stands out as the ultimate Social fitness app. With an extensive collection of collaborative workout plans, challenge people, Feed, Chat, Video calling, and Leaderboard in real-time. MFM fosters a sense of community through its Friendly & Strong Community feature.
                        </p>
                    </div>
                    <video
                        className='rounded-3xl lg:w-[60%] hidden lg:block'
                        muted
                        loop
                        autoPlay={true}
                        controls={false}
                        poster="https://d1u4arv5y5eda6.cloudfront.net/images/ppc/iPhone+XR+Isometric.png"
                        preload="metadata"
                    >
                        <source
                            src="https://d1u4arv5y5eda6.cloudfront.netvideos/MFM.mp4"
                            type="video/mp4"
                        />
                    </video>

                </div>
                <div className="flex items-end  my-4 flex-col lg:flex-row">
                    <video
                        className='rounded-3xl lg:w-[60%]'
                        muted
                        loop
                        autoPlay={true}
                        controls={false}
                        poster="https://d1u4arv5y5eda6.cloudfront.net/images/ppc/2.png"
                        preload="metadata"
                    >
                        <source
                            src="https://d1u4arv5y5eda6.cloudfront.netvideos/Hub+1.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="lg:w-[40%] ml-4 py-4 lg:px-8">
                        <h1 className='font-bold text-3xl lg:text-5xl my-2'>Hub1</h1>
                        <p>
                            Hub1 is a comprehensive hybrid mobile application built to ease the process of connecting within the organisation. A simple yet powerful SAAS platform which makes internal communication and digital gathering at everyone&apos;s fingertip. Imagine Hub1 as an evolved version of Whatsapp where messaging and communication, interactive feed, social calendar, tagging and open forum makes it a complete internal organisation community platform.
                        </p>
                    </div>
                </div>
                <div className="flex items-end  my-4 flex-col lg:flex-row">
                <div className="lg:w-[40%] ml-4 py-4 lg:px-8">
                <video
                        className='rounded-3xl lg:w-[60%] block lg:hidden'
                        muted
                        loop
                        autoPlay={true}
                        controls={false}
                        poster="https://d1u4arv5y5eda6.cloudfront.net/images/ppc/2.png"
                        preload="metadata"
                    >
                        <source
                            src="https://d1u4arv5y5eda6.cloudfront.netvideos/Mentorship.mp4"
                            type="video/mp4"
                        />
                    </video>
                        <h1 className='font-bold text-3xl lg:text-5xl my-2'>Mentorship</h1>
                        <p>
                            Mentorship is a professional social network operating with a slightly different ideology from LinkedIn. Mentorship opens the door for mentees to confidently reach out to mentors and build solid relationships. Being a mentor is admirable and vital. We bring professional and personal interests together, helping make connections stronger and allowing communication to flow. Users can connect, chat, and post content. Search for mentors or mentees locally or far away.
                        </p>
                    </div>
                    <video
                        className='rounded-3xl lg:w-[60%] hidden lg:block'
                        muted
                        loop
                        autoPlay={true}
                        controls={false}
                        poster="https://d1u4arv5y5eda6.cloudfront.net/images/ppc/2.png"
                        preload="metadata"
                    >
                        <source
                            src="https://d1u4arv5y5eda6.cloudfront.netvideos/Mentorship.mp4"
                            type="video/mp4"
                        />
                    </video>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects