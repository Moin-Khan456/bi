import Image from 'next/image'
import React from 'react'

const CustomSocialNetwork = () => {
  return (
    <div className='m-4 lg:m-32'>
        <div className="text-center">
            <h1 className='text-5xl font-bold my-8'>Idea to launch</h1>
            <p>Your companions through the entire journey of social network design & development</p>
        </div>
        <div className="w-full flex justify-center my-8">
            <Image  width={1200} height={500} src="https://braininventory.s3.us-east-2.amazonaws.com/images/ppc/Group+6849.png" alt=""/>
        </div>
    </div>
  )
}

export default CustomSocialNetwork