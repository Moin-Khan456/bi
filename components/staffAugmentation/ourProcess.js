import React from 'react';

function ourProcess(props) {
    return (
        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container'>
                <h3 className='text-lg Gilroy-Bold'>Our Process</h3>
                <h2 className='text-4xl Gilroy-Bold'>Quick and Transparent Process to the Hire <br/> Remote Developers</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    <div className='class-inventory after-one'>
                        <h4 className='text-xl leading-8 Gilroy-Bold'>Brain Inventory Shortlists the Best Candidates (8 hours)</h4>
                        <ul className='pt-6 ml-4'>
                            <li className='color-light text-lg mb-1 list-disc'>Shortlists the developers with relevant skills</li>
                            <li className='color-light text-lg mb-1 list-disc'>Based on their work and experience, we filter the best.</li>
                            <li className='color-light text-lg mb-1 list-disc'>Check their availability for the start date.</li>
                        </ul>
                    </div>
                    
    
                    <div className='class-inventory after-3'>
                        <h4 className='text-xl leading-8 Gilroy-Bold'>1st Round of Interview is <br/> Conducted (8 hours)</h4>
                        <ul className='pt-6 ml-4'>
                            <li className='color-light text-lg mb-1 list-disc'>Brain Inventory team conducts the first round to check skills</li>
                            <li className='color-light text-lg mb-1 list-disc'>A chart with skillset and a rating out of 10 is marked.</li>
                            <li className='color-light text-lg mb-1 list-disc'>Resume along with rating are updated and shared with client.</li>
                         </ul>
                    </div>
                    <div className='class-inventory after-4'>
                        <h4 className='text-xl leading-8 Gilroy-Bold'>Onboarding Process (8 hours)</h4>
                        <ul className='pt-6 ml-4'>
                            <li className='color-light text-lg mb-1 list-disc'>Developer details like email, skype, etc are shared</li>
                            <li className='color-light text-lg mb-1 list-disc'>Time Tracking Tool and PM tool invites are shared to client</li>
                            <li className='color-light text-lg mb-1 list-disc'>A dedicated Account Manager is assigned for smooth relation</li>
                         </ul>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    <div className='class-inventory after-four'>
                        <h4 className='text-xl leading-8 Gilroy-Bold'>Requirements Gathering (3.5 hours)</h4>
                         <ul className='pt-6 ml-4'>
                            <li className='color-light text-lg mb-1 list-disc'>Understanding the product, and features that need implementation</li>
                            <li className='color-light text-lg mb-1 list-disc'>Creating a list of essential skills required for the execution</li>
                            <li className='color-light text-lg mb-1 list-disc'>Making Recommendations and suggestions for right 3rd party tools</li>
                         </ul>
                    </div>
                    <div className='class-inventory after-5'>
                        <h4 className='text-xl leading-8 Gilroy-Bold'>Interview is scheduled with Client (8 hours)</h4>
                        <ul className='pt-6 ml-4'>
                            <li className='color-light text-lg mb-1 list-disc'>Availability schedule for 1 day is shared by client for interview</li>
                            <li className='color-light text-lg mb-1 list-disc'>Only the best and most suitable are interviewed by clients.</li>
                            <li className='color-light text-lg mb-1 list-disc'>Save hours of effort spent in filtering and review</li>
                         </ul>
                    </div>
                    <div className='class-inventory after-6'>
                        <h4 className='text-xl leading-8 Gilroy-Bold'>Contract Signing (8 hours)</h4>
                        <ul className='pt-6 ml-4'>
                            <li className='color-light text-lg mb-1 list-disc'>NDA and Contract are shared with client for review</li>
                            <li className='color-light text-lg mb-1 list-disc'>- All responsibilities and conditions are clearly mentioned</li>
                            <li className='color-light text-lg mb-1 list-disc'>- Client reverts with a signed copy of contract and NDA
</li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ourProcess;