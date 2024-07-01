import React from 'react'
import Navbar from './components/Navbar'
import About from './page/About'
import Testimonials from './page/Testimonials'
import Services from './page/Services'
import Contact from './page/Contact'
import Footer from './components/Footer'
import Gallery from './page/Gallery'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return <div className='overflow-hidden'>


    <Navbar />
    <About />
    <Gallery />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />



  </div>
}


export default App