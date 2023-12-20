import React from 'react';
import Image from 'next/image';

const SectionSix = () => {
  return (
    <div className="relative left-0 lg:pb-12">
      <div className="bg-[#ffffff]">
        <div className="relative overflow-scroll no-scrollbar py-16 lg:py-36">
          <Image  
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group+6514.png" width={1800} height={900} alt=""className='scale-[1.8] ml-40 m-auto block lg:ml-[38rem]' />
        </div>
        <Image  
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/dfvbgnm.png" width={1500} height={1000} alt="" className='m-auto block' />
      </div>
    </div>
  )
}

export default SectionSix