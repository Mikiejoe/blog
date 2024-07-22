import React from 'react'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Hero from '../components/WhatWeDo/Hero'
import Services from '../components/homepage/Services'

function WhatWeDoPage() {
  useDocumentTitle('Laban\'s Desk - What We Do')
  return (
    <>
    <NavBar/>
    <div className="">
        <Hero/>
        <div className="md:px-32 px-8 py-8 space-y-8 bg-gray-50">
          <Services/>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default WhatWeDoPage