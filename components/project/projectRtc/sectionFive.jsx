import Image from 'next/image'
import React from 'react'
const Index = () => {
    return (
        <div className="py-8 relative flex flex-col justify-center">
            <div className="w-full h-[40vh] lg:h-[72vh] overflow-scroll no-scrollbar">
                <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/rtc/Group+6521.png" className='w-full h-full scale-x-150 ml-96' width={1500} height={1500} alt="" />
            </div>
        </div>
    )
}
export default Index 