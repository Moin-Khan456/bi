import Image from 'next/image'
import React from 'react'

const CustomSocialNetwork = () => {
  return (
    <div className='container custom-container'>
        <div className="text-center">
            <h1 className='text-5xl font-bold my-8'>Any kind of custom social network under the hood</h1>
            <p>Brands that are in need of deeper customer engagement hire us for social network development, tailor-made for their targeted demographics for vast reach. Our social media software are mobile-optimized and our native apps ensure a smooth performance. We build custom social networks keeping Gen Z and millennial users in mind. We have built custom social networks for many industries like</p>
        </div>
        <div className="w-full flex flex-col justify-center my-8 lg:-ml-12">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-72 h-72 text-center flex flex-col justify-center items-center lg:m-4 bg-[#141414] hover:scale-[1.05] duration-150 ease-in-out">
                <p className="w-24 text-center">Sports social network</p>
              </div>
              <div className="w-72 h-72 text-center flex flex-col justify-center items-center lg:m-4 bg-[#242424] hover:scale-[1.05] duration-150 ease-in-out">
                <p className="w-24 text-center">Healthcare communities </p>
              </div>
              <div className="w-72 h-72 text-center flex flex-col justify-center items-center lg:m-4 bg-[#141414] hover:scale-[1.05] duration-150 ease-in-out">
                <p className="w-24 text-center">FMCG social network</p>
              </div>
              <div className="w-72 h-72 text-center flex flex-col justify-center items-center lg:m-4 bg-[#242424] hover:scale-[1.05] duration-150 ease-in-out">
                <p className="w-24 text-center">Travel communities</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center relative lg:left-20">
              <div className="w-72 h-72 text-center flex flex-col justify-center items-center lg:m-4 bg-[#242424] hover:scale-[1.05] duration-150 ease-in-out">
                <p className="w-24 text-center">Beauty and fashion communities</p>
              </div>
              <div className="w-72 h-72 text-center flex flex-col justify-center items-center lg:m-4 bg-[#141414] hover:scale-[1.05] duration-150 ease-in-out">
                <p className="w-24 text-center">Automobile social Network</p>
              </div>
              <div className="w-72 h-72 text-center flex flex-col justify-center items-center lg:m-4 bg-[#242424] hover:scale-[1.05] duration-150 ease-in-out">
                <p className="w-24 text-center">Events management social network</p>
              </div>
              <div className="w-72 h-72 text-center flex flex-col justify-center items-center lg:m-4 bg-[#141414] hover:scale-[1.05] duration-150 ease-in-out">
                <p className="w-24 text-center">News and media Social Network</p>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default CustomSocialNetwork