import React, { useRef } from 'react'
import WhatsAppButton from './component/WhatsAppButton'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Testimonials from './component/Testimonials'
import Footer from './component/Footer'
import Whypiles from './component/Whypiles'
import Gallery from './component/Gallery'
import Testimonialtwo from './component/Testimonialtwo'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import TestimonialPage from './secondfolder/TestimonialPage'


const App = () => {


  const testimonialsRef = useRef(null);
  return <>
    <WhatsAppButton />
    <BrowserRouter>
      {/* <Home testimonialsRef={testimonialsRef} /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<About />} /> */}

        <Route path='/review' element={<TestimonialPage />} />
      </Routes>
    </BrowserRouter>
    {/* <Home testimonialsRef={testimonialsRef} /> */}
    {/* <About /> */}
    {/* <Services /> */}
    {/* <Whypiles testimonialsRef={testimonialsRef} /> */}
    {/* <div ref={testimonialsRef}><Testimonials /></div> */}
    {/* <Testimonialtwo /> */}
    {/* <Gallery /> */}
    {/* <Footer /> */}

  </>
}

export default App