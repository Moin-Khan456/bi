import React from 'react';
import HomeButton from '../buttons/HomeButton';
import Image from 'next/image';

function HireRemote(props) {
    return (
        <div className='bg-white mt-20 mb-20'>
            <div className='container padding-left-all-section-1'>
                <div className='lg:flex items-center'>
                    <div>
                        <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src='https://braininventory.s3.us-east-2.amazonaws.com/images/hire.png' alt="" width={500} height={500} className='lg:h-[400px] p-10 lg:p-0 transform-property' />
                    </div>
                    <div className='pl-6'>
                        <h3 className='text-3xl text-black Gilroy-Bold mb-4'>Hire Remote Developers to Enhance your <br/> team capability now.</h3>
                        <HomeButton>
                            <span className='text-black text-base'>
                            Let’s talk
                            </span>
                        </HomeButton>

                        <div>
                            <h2 className='Gilroy-Bold text-black text-lg pt-6'>Inquiries</h2>
                            <a className='text-black Gilroy-Light lg:pb-0 pb-6'>askus@braininventory.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HireRemote;