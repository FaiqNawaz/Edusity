import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testmonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' Title='What we Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' Title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' Title='Get In Touch'/>
      <Contact/>
      <Footer/>

      </div>
      
    </div>
  )
}

export default App