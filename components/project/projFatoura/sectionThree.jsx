import Image from 'next/image'
import React from 'react'
const Index = () => {

    return (
        <div className="py-8 relative flex flex-col justify-center bg-[#F39573]">
        <div className='container'>
            <h1 className='text-3xl lg:text-5xl text-center py-8 fatoura__text'>SCREENS & VISUALS</h1>
            <h1 className='text-center text-3xl lg:text-5xl border-2 border-[#F39573] border-b-white lg:mx-44'>H O M E S C R E E N</h1>
            <div className="px-4 lg:px-48 lg:py-12">
                <Image width={1000} height={1000} className='w-full' src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group 6506.png" alt="" />
            </div>
        </div> 
        </div> 
    )
}

export default Index 