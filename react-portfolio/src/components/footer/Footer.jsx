import React from 'react'
import './footer.css'
import {GrLinkedin} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='links'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#languages">Languages</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/edwin-simpson-50948052/' target="_blank" className='socials__icon'><GrLinkedin/></a>
      <a href='https://github.com/Edwin0204' target="_blank" className='socials__icon'><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Edwin Simpson. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer