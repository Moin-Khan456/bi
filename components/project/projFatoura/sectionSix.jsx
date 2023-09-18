import Image from 'next/image'
import React from 'react'
const Index = () => {

    return (
        <div className="max-w-full flex flex-col px-4 lg:px-12 py-8 bg-[#000] semi-container">
            <h1 className='flex text-end justify-center text-3xl lg:text-5xl lg:mx-44 fatoura__text'>TYPEFACE & COLORS</h1>
            <div className='lg:flex'>
            <div className="px-4 lg:px-48 lg:py-12">
                <Image width={600} height={600} src="https://d1u4arv5y5eda6.cloudfront.net/images/project/fatoura/Group 6473.png" className='' alt="" />
            </div>
            <div className="lg:flex flex-col text-2xl">
                <div className="fatoura_gilroy_regular mt-8">
                    <div className="w-[15%] py-4 flex justify-between">
                        <p>Gilroy</p>
                        <p className='mr-4'>Regular</p>
                    </div>
                    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                </div>
                <div className="fatoura_gilroy_medium">
                    <div className="w-[15%] py-4 flex justify-between">
                        <p>Gilroy</p>
                        <p>Medium</p>
                    </div>
                    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                </div>
                <div className="fatoura_gilroy_bold">
                    <div className="w-[15%] py-4 flex justify-between">
                        <p>Gilroy</p>
                        <p  className='text-start mr-10'>Bold</p>
                    </div>
                    <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                </div>
            </div>
            </div>

            <div>
                 <Image width={1450} height={1450} src='https://d1u4arv5y5eda6.cloudfront.net/images/project/fatoura/Group 6515.png' className='lg:p-32' />
            </div>
        </div>
    )
}

export default Index 