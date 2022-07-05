import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import AboutContent from '../components/AboutContent';



const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading = "About" text="I'm a friendly MERN Developer"/>
      <AboutContent/>     
      <Footer/>
      
    </div>
  )
}

export default About;