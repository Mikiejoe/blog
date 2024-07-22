import React from 'react'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Hero from '../components/WhatWeHaveDone/Hero'
import Works from '../components/homepage/Works'

function WhatWeHaveDone() {
  useDocumentTitle('Laban\'s Desk - What We Have Done')
  return (
    <>
    <NavBar/>
    <div className="">
        <Hero/>
        <div className="md:px-32 px-8 py-8 space-y-8 bg-gray-50">
          <Works/> 
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default WhatWeHaveDone