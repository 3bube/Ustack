import React from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import OurServices from "./components/OurServices"
import AboutUs from "./components/AboutUs"
import WorkSection from "./components/WorkSection"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <NavBar/>
    
    <div className="max-w-7xl mx-auto pt-20-px-6">
      <HeroSection/>
    </div>
    <div className="max-w-7xl mx-auto pt-20-px-6">
      <WorkSection/>
    </div>
    <div className="max-w-7xl mx-auto pt-20-px-6">
      <OurServices/>
    </div>
    <div className="max-w-7xl mx-auto pt-20-px-6">
      <AboutUs/>
    </div>
    <div className="max-w-7xl mx-auto pt-20-px-6">
      <ContactUs/>
    </div>
    <Footer/>

    </>
  )
}

export default App
