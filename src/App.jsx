import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/landingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Lower from './components/Lower'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll({ autoStart: false });

// Starting the locomotive scroll on the next frame
requestAnimationFrame(() => {
    locomotiveScroll.start();
});
  return (
    <div className='w-full min-h-screen text-white'>
      <Navbar/>
      <LandingPage />
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Lower/>
      <Footer/>
    </div>
  )
}

export default App