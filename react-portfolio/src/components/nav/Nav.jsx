import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {SiAboutdotme} from 'react-icons/si'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'
import {MdOutlineLanguage} from 'react-icons/md'
import {RiContactsBook2Fill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active':''}><IoIosHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><SiAboutdotme/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><BsFillFileEarmarkCodeFill/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}><MdOutlineLanguage/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><RiContactsBook2Fill/></a>
    </nav>
  )
}

export default Nav