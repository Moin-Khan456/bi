import React, {useState} from 'react';
import Head from 'next/head'
import ContactFormBanglore from '../components/common/ContactFormBanglore';

function TechSummit(props) {
    
    return (
        <>
            <div className="container11">
       <div className='flex11'>
       <div className='bi-flex-logo'>
              <img className='bi-ogo mobile' src='https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=256&q=75' />
           </div>
        
           <div className='img-flex'>
               <img className='logo-classic-1' src='/GOK-1.jpg'/>
               <img className='logo-classic-2' src='/im2.png'/>
           </div>

           <div className='bi-flex-logo c-logo-summit'>
              <img className='bi-ogo desktop' src='https://braininventory.in/_next/image?url=https%3A%2F%2Fbraininventory.s3.us-east-2.amazonaws.com%2Fimages%2Fmain%2FLogobg.png&w=256&q=75' />
           </div>

           
       </div>
       <div className='flex-contact'>
          <div style={{width: '100%'}}>
            <ContactFormBanglore/>
          </div>
          <div>
            {/* <img src='https://d1u4arv5y5eda6.cloudfront.net/images/arrow-png.png'/> */}
          </div>
       </div>

       <footer>
          <p className='love-with'>With Love ❤️ Brain Inventory</p>
       </footer>
    </div>
        </>
    );
}

export default TechSummit;