import React from 'react'
import './header.css'
import CV from './cv'
import Me from '../../assets/IMG_20190909_125342.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Edwin Simpson</h1>
        <h5 className="text-light"> Fullstack Develoaper</h5>
        <CV />

        <HeaderSocials/>

        <div className='me'>
          <img className='immage' src={Me} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header