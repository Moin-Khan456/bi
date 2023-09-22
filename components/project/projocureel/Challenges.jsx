import React from 'react'

const Index = () => {
  return (
      <div className='container'>
    <div className='max-w-full flex flex-col items-center'>
        
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Challenges</h1>
            <p className='opacity-50 text-lg'>The aim was to keep a loading speed equal to or faster than Tik-Tok considering the fact of reaching the same user base in the very near future. Also, we added MLM principals in the referral program and the leaderboard for weekly payouts to the users. Both features made the logic and algorithm highly dense and complex to work upon.</p>
        </div>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Solution</h1>
            <p className='opacity-50 text-lg'>Advanced-level code optimization, breaking the video into smaller frames, connecting them and then showing them as a whole to the end user for much faster loading. To resolve and keeping the algorithm scalable, we divided the points into the category which made the calculations simple. Plus integrated weekly payout automated formulas lead to lesser time consumption.</p>
        </div>
         </div>
    </div>
  )
}

export default Index