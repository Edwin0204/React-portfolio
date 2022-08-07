import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/edwin-simpson-50948052/' target="_blank" className='socials__icon'><GrLinkedin/></a>
        <a href='https://github.com/Edwin0204' target="_blank" className='socials__icon'><FaGithub/></a>
        
    </div>
  )
}

export default HeaderSocials