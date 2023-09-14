import React from 'react'

const OurDevelopers = ({banners}) => {
    return (
        <>
            {
                banners?.map(({ title, brief }, index) => (
                    <div className="container padding-left-all-section-1 flex flex-col items-end" key={index}>
                        <div className="bg-customer p-8 lg:py-8 advantage-para m-6 flex flex-col lg:flex-row items-center justify-evenly w-[93%] lg:w-full">
                            <h5 className="text-2xl font-bold text-shadow lg:w-[15%]">{title}</h5>
                            <p className="Gilroy-Light text-sm tracking-wide leading-8 pb-6 lg:w-[70%]">{brief}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default OurDevelopers