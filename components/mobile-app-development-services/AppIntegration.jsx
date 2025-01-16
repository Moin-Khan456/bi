import Link from 'next/link'
import React from 'react'

const AppIntegration = () => {
  return (
    <div className='container 2xl:px-18 xl:px-16 px-10 py-10'>

    <div className="lg:grid lg:grid-cols-2 gap-0">
    <div className="bg-secondaryBg bg-development-simply-culture active">
      <h2 className='heading text-primaryTx'>Mobile App Integration</h2>
      <p>
      Once you have developed either a native or web based application for your business, the next major challenge is how can you integrate this app to third party services or your existing software such as CRM? 
      </p>
      <p>
      Our mobile app integration services can make this task simpler for you to ensure you give a smoother browsing experience to all your users. 
      </p>
    </div>

    <div className="bg-development-simply-culture ">
      <h2 className='heading text-primaryTx'>Ionic App Integratione</h2>
      <p>
      In general, mobile app development is an expensive service. On top of it, building. a native application for different platforms can be tricky. 
      </p>
      <p>
      Ionic framework allows developers to create highly functional and performing mobile apps that can cater to both frontend and backend processes. 
      </p>
    </div>
  </div>
    </div>
  )
}

export default AppIntegration