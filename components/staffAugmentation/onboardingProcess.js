import React from 'react';

function OnboardingProcess(props) {
    return (
        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container padding-left-all-section'>
                <h3 className='text-lg Gilroy-Bold'>Our Process</h3>
                <h2 className='text-4xl Gilroy-Bold'>Quick and Transparent Process to <br/> the Hire Remote Developers</h2>          
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                    <div className='mt-8'>
                      <h3 className='text-center Gilroy-Bold text-xl bg-case-blue-request pt-3 pb-3 mb-3'>Cost</h3>
                        <ul>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Employee Salary </li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> HR Cost </li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Recruitment Cost</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Office Space and System Cost</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Upskilling and Learning</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Work Culture Maintenance</li>
                            <li className='text-center bg-case-blue-request Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Total Estimated Cost</li>

                        </ul>
                    </div>
                    <div className='mt-8'>
                      <h3 className='text-center Gilroy-Bold text-xl bg-case-blue-request pt-3 pb-3 mb-3'>Inhouse Developer</h3>
                        <ul>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> $12,500.00 </li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> $100.00</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> $2500.00</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> $350.00</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> $100.00</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'>$50.00</li>
                            <li className='text-center bg-case-blue-request Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'>$ 15,500</li>
                        </ul>
                    </div>
                    <div className='mt-8'>
                    <h3 className='text-center Gilroy-Bold text-xl bg-hight-orange pt-3 pb-3 mb-3'>Brain Inventory Contact resourse</h3>
                        <ul>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> $2000.00 </li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Included </li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Included</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Included</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Included</li>
                            <li className='text-center Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> Included</li>
                            <li className='text-center bg-hight-orange Gilroy-Bold text-lg mb-3 pb-3 pt-3 border-custom'> $2,000</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default OnboardingProcess;