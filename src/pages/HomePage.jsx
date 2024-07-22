import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Hero from "../components/homepage/Hero";
import About from "../components/homepage/About";
import Services from "../components/homepage/Services";
import useDocumentTitle from '../hooks/useDocumentTitle'
import Works from "../components/homepage/Works";

function HomePage() {
  useDocumentTitle('Laban\'s Desk - Home')
  return (
    <>
      <NavBar />
      <div className="">
        <Hero />
        <div className="md:px-32 px-8 py-8 space-y-8 bg-gray-50">
          <About/>
          <Services/>
          <Works/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
