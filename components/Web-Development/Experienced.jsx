import Image from 'next/image'
import React from 'react'
const Index = ({ para1, para2, para3, title, image }) => {
    return (
        <main>
            <section className="container padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-20">
                <section className="px-8 lg:px-20">
                    <h1 className='text-4xl lg:text-5xl Gilroy-Bold lg:w-fit'>Why you may need a <span className='text-[#7600EB]'> {title} solution?</span> </h1>
                </section>
                <section className='container'>
                    <section className="grid xs:grid-rows-1 lg:grid-cols-2 gap-x-2 pt-8 w-full">
                        <aside className='w-[75%] container'>
                            <Image
                                src={image} alt="" width={700} height={700}
                                className='rounded-2xl'
                            />
                        </aside>
                        <aside className="">
                            <p className="Gilroy-Light leading-8 font-[10] text-lg p-4 opacity-60 lg:pt-8">
                                {para1}
                                <br />
                                {para2}
                                <br />
                                {para3}
                            </p>
                        </aside>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Index