import React, { useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';

const Industries = () => {
    useEffect(() => {
        $('.industries_list li').hover(function () {
            var tab_id = $(this).attr('data-tab');
            $('.industries_list li').removeClass('current');
            $('.tab-content_i').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
    }, [])
    return (
        <main className='2xl:space-y-8 space-y-6 container lg:px-24'>
            <section className='relative'>
                <section>
                    <h2 className='Gilroy-Bold text-4xl'>Industries we serve</h2>
                </section>
                <section className=''>
                    <section className=''>
                        <section id="tab-1" className="tab-content_i current">
                            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/I-1.png" className="img_industry_1" alt="industries" width={500} height={500} />
                        </section>
                        <section id="tab-2" className="tab-content_i">
                            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/I-2.png" className="img_industry_1" alt="industries" width={500} height={500} />
                        </section>
                        <section id="tab-3" className="tab-content_i">
                            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/I-3.png" className="img_industry_1" alt="industries" width={500} height={500} />
                        </section>
                        <section id="tab-4" className="tab-content_i">
                            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/I-4.png" className="img_industry_1" alt="industries" width={500} height={500} />
                        </section>
                        <section id="tab-5" className="tab-content_i">
                            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/I-5.png" className="img_industry_1" alt="industries" width={500} height={500} />
                        </section>
                        <section id="tab-6" className="tab-content_i">
                            <Image layout="responsive"
        srcSet="/image-320w.jpg 320w,
              /image-480w.jpg 480w,
              /image-800w.jpg 800w"
        sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px" src="https://braininventory.s3.us-east-2.amazonaws.com/images/I-5.png" className="img_industry_1" alt="industries" width={500} height={500} />
                        </section>
                    </section>
                    <section className=''>
                        <ul className="industries_list lg:absolute top-0 lg:left-[30rem]">
                            <li data-tab="tab-1" className="hover-link current">
                                Custom Fantasy Sports
                            </li>
                            <li data-tab="tab-2" className="hover-link">
                                Sports Betting Solution
                            </li>
                            <li data-tab="tab-3" className="hover-link">
                                Custom Social Networks
                            </li>
                            <li data-tab="tab-4">
                                Healthcare Solutions
                            </li>
                            <li data-tab="tab-5">
                                eLearning & Lms
                            </li>
                            <li data-tab="tab-6">
                                On-Demand Solution
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </main>
    );
}
export default Industries;