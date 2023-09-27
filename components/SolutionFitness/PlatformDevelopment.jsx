import React from 'react'

const PlatformDevelopment = ({cardPoints,
    subhead,
    head,
    description}) => {
  return (
    <div className='container py-12 px-6'>
        <div className='text-center flex flex-col items-center'>
            <h5 className='text-md font-bold MonumentBold tracking-wide'>{subhead}</h5>
            <h1 className='lg:text-5xl MonumentBold w-1/2 py-4'>{head}</h1>
            <p className='font-Satoshi text-slate-500 text-sm'>{description}</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 py-12 relative'>
            <div className='bg-technology lg:my-12 px-12 py-6 card-3d-left '>
                <h1 className='text-3xl font-semibold py-6'>{cardPoints[0].head}</h1>
                <p className='text-xl opacity-50 leading-10'>{cardPoints[0].content}</p>
            </div>
            <div className='bg-technology px-12 py-6'>
                <h1 className='text-3xl font-semibold py-6'>{cardPoints[1].head}</h1>
                <p className='text-xl opacity-50 leading-10'>{cardPoints[1].content}</p>
            </div>

            <div className='bg-technology lg:my-12 px-12 py-6 card-3d-right relative'>
                <h1 className='text-3xl font-semibold py-6'>{cardPoints[2].head}</h1>
                <p className='text-xl opacity-50 leading-10'>{cardPoints[2].content}</p>
            </div>
        </div>
    </div>
  )
}

export default PlatformDevelopment