import React, { useRef } from 'react'
import WhatsAppButton from './component/WhatsAppButton'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Testimonials from './component/Testimonials'
import Footer from './component/Footer'
import Whypiles from './component/Whypiles'

const App = () => {
  const testimonialsRef = useRef(null);
  return <>
    <WhatsAppButton />
    <Home testimonialsRef={testimonialsRef} />
    <About />
    <Services />
    <Whypiles testimonialsRef={testimonialsRef} />
    <div ref={testimonialsRef}><Testimonials /></div>
    {/* <Testimonials /> */}
    <Footer />

  </>
}

export default App