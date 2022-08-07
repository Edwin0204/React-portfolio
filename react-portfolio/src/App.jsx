import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'  
import Languages from './components/Languages/Languages'
import Portfolio from './components/portfolio/Portfolio'
import ContactUs from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header /> 
        <Nav />
        <About />
        <Languages />
        <Portfolio />
        <ContactUs />
        <Footer />
                 

    </>
  )
}

export default App