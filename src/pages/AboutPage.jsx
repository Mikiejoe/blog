import React from 'react'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Hero from '../components/about/Hero'

function AboutPage() {
  useDocumentTitle('Laban\'s Desk - About')
  return (
    <>
    <NavBar/>
    <div className="">
        <Hero/>
        <div className="md:px-32 px-8 py-8 space-y-8 bg-gray-50">
          
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default AboutPage