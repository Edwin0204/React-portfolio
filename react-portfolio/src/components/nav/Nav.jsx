import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {SiAboutdotme} from 'react-icons/si'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'
import {MdOutlineLanguage} from 'react-icons/md'
import {RiContactsBook2Fill} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href='#' className='active'><IoIosHome/></a>
      <a href='#about'><SiAboutdotme/></a>
      <a href='#experience'><BsFillFileEarmarkCodeFill/></a>
      <a href='#services'><MdOutlineLanguage/></a>
      <a href='#contact'><RiContactsBook2Fill/></a>
    </nav>
  )
}

export default Nav