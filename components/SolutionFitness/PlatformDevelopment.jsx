import React from 'react'

const PlatformDevelopment = () => {
  return (
    <div className='container py-12'>
        <div className='text-center flex flex-col items-center'>
            <h5 className='text-md font-bold MonumentBold tracking-wide'>WHY CHOOSE BRAIN INVENTORY FOR</h5>
            <h1 className='text-5xl MonumentBold w-1/2 py-4'>FITNESS PLATFORM DEVELOPMENT</h1>
            <p className='font-Satoshi text-slate-500 text-sm'>In the universe of crafting fitness solutions, Brain Inventory shines as a catalyst for change. Our imaginative strategies, extensive expertise, and unwavering dedication to excellence converge to form robust solutions that deeply resonate with users, magnifying their fitness experiences. Here’s why our partnership is transformative:</p>
        </div>
        <div className='grid grid-cols-3 gap-4 py-12 relative'>
                <div className='hidden lg:block absolute bg-[#11012A] w-[31.5%] left-[1rem] top-14 z-50 rounded-tr-[20px] rounded-tl-[30px] rotate-2 h-[30px]'/>
                <div className='absolute bg-[#11012A] w-[31.5%] left-[1rem] bottom-14 z-50 rounded-br-[20px] rounded-bl-[20px] -rotate-2 h-[30px] hidden lg:block'/>
            <div className=' p-12 card-3d-left '>
                <h1 className='text-3xl font-semibold py-6'>Expert Collaborators</h1>
                <p className='text-xl opacity-50 leading-10'>Need an accomplished team to steer your fitness solutions? Look no further. Our team comprises proficient individuals, each equipped with unparalleled technical prowess, poised to turn your visions into reality. We’re not just a team; we’re your adept allies on the path to excellence within the fitness industry.</p>
            </div>
            <div className='bg-technology p-12'>
                <h1 className='text-3xl font-semibold py-6'>Adaptive Approach</h1>
                <p className='text-xl opacity-50 leading-10'>In the dynamic realm of fitness, agility is paramount. We grasp this importance and mold our solutions using agile development principles. Our approach is flexible, effective, and tailored to fit your unique needs, keeping pace with evolving trends and emerging technologies. Through our adaptable methodology, you receive solutions that remain relevant today and prepared for the ever-changing future.</p>
            </div>
            <div className='hidden lg:block absolute bg-[#11012A] w-[31.5%] right-[1rem] top-14 z-50 rounded-tr-[20px] rounded-tl-[30px] -rotate-2 h-[30px]'/>
                <div className='absolute bg-[#11012A] w-[31.5%] right-[1rem] bottom-14 z-50 rounded-br-[20px] rounded-bl-[20px] rotate-2 h-[30px] hidden lg:block'/>

            <div className=' p-12 card-3d-right relative'>
                <h1 className='text-3xl font-semibold py-6'>User-Centric Philosophy</h1>
                <p className='text-xl opacity-50 leading-10'>At the heart of our fitness technology solutions is User Satisfaction. We hold true to crafting products that not only meet but surpass user expectations, fostering trust and dependability. In the constantly evolving fitness landscape, we stand by your side as a dependable partner, committed to delivering exceptional service and inventive solutions that genuinely make a difference.</p>
            </div>
        </div>
    </div>
  )
}

export default PlatformDevelopment