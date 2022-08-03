import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com' target="_blank"><GrLinkedin/></a>
        <a href='https://www.github.com' target="_blank"><FaGithub/></a>
        
    </div>
  )
}

export default HeaderSocials