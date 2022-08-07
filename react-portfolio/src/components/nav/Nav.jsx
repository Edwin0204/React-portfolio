import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {BsPersonSquare} from 'react-icons/bs'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'
import {BsFolderFill} from 'react-icons/bs'
import {RiContactsBook2Fill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active':''}><IoIosHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><BsPersonSquare/></a>
      <a href='#languages' onClick={()=> setActiveNav('#languages')} className={activeNav === '#languages' ? 'active':''}><BsFileEarmarkCodeFill/></a>
      <a href='#portfolio' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}><BsFolderFill/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><RiContactsBook2Fill/></a>
    </nav>
  )
}

export default Nav