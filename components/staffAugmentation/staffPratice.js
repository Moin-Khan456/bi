import React from 'react';

function StaffPratice(props) {
    return (
        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
        <div className='container padding-left-all-section'>
            <h3 className='text-lg Gilroy-Bold'>Best Practices</h3>
            <h2 className='text-4xl Gilroy-Bold'>Efficient, Smart and Dedicated Professionals</h2>
        
          <div className='mt-8 lg:flex'>
              <div className='w-[80%] pr-10'>
                 <h4 className='Gilroy-Medium text-2xl leading-8'>
                    Even when you hire a single developer, from Brain Inventory you hire the complete team’s experience.
                 </h4>
                 <p className='color-light text-base pt-3 pb-4'>Our closely connected team provides a strong backbone to every project that we work on. Daily scrum calls helps developers share their challenges and take guidance from other experienced developers from the team.</p>                 
                 <h5 className='Gilroy-Bold text-xl'>ADVANTAGES</h5>
                 <ul className='mt-4 ml-4 mb-6'>
                    <li className='Gilroy-Medium text-lg mb-2 list-disc'>Certified Developers</li>
                    <li className='Gilroy-Medium text-lg mb-2 list-disc'>Weekly Tech Workshop</li>
                    <li className='Gilroy-Medium text-lg mb-2 list-disc'>9500+ dev community</li>
                    <li className='Gilroy-Medium text-lg mb-2 list-disc'>Transparent and proactive</li>
                 </ul>
              </div>
              <div >
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 '>
                 <div className='p-section'>
                    <h2 className='Gilroy-Bold text-xl'>Scalability</h2>
                    <p className='color-light Gilroy-Light text-base pt-2'>We make it easy for you to scale your team at any instant.</p>
                 </div>
                 <div className='p-section'>
                    <h2 className='Gilroy-Bold text-xl'>Startup Friendly Policies</h2>
                    <p className='color-light Gilroy-Light text-base pt-2'>We understand and support the dynamics of a growing startup.</p>
                 </div>
                 <div className='p-section'>
                    <h2 className='Gilroy-Bold text-xl'>No Bond</h2>
                    <p className='color-light Gilroy-Light text-base pt-2'>Brain Inventory Values Trust More than a Bond. Grow Limitless with Us.</p>
                 </div>
                 <div className='p-section'>
                    <h2 className='Gilroy-Bold text-xl'>Trackability</h2>
                    <p className='color-light Gilroy-Light text-base pt-2'>Track resource time and tasks using sophisticated tools</p>
                 </div>
                 <div className='p-section'>
                    <h2 className='Gilroy-Bold text-xl'>Communication</h2>
                    <p className='color-light Gilroy-Light text-base pt-2'>Timely and transparent communication makes us the most dependable partner.</p>
                 </div>
                 <div className='p-section'>
                    <h2 className='Gilroy-Bold text-xl'>Account Manager</h2>
                    <p className='color-light Gilroy-Light text-base pt-2'>Each client is assigned an Account Manager for all query resolution ensuring a single point of contact.</p>
                 </div>
              </div>
              </div>
          </div>

        </div>
    </div>
    );
}

export default StaffPratice;