import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Hero from "../components/homepage/Hero";
import About from "../components/homepage/About";
import Services from "../components/homepage/Services";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="">
        <Hero />
        <div className="md:px-32 px-8 py-8 space-y-8 bg-primary">
          <About/>
          <Services/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
