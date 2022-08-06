import React from 'react'
import './about.css'
import Me2 from "../../assets/IMG_20190904_075237.jpg"
import {BsFillAwardFill} from 'react-icons/bs'
import {BiUserPin} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
          
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me2} alt="me in colisseum" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <BsFillAwardFill className='about__icon'/>
                <h5>Experience</h5>
                <small>+9 Years as PM</small>
              </article>

              <article className='about__card'>
                <BiUserPin className='about__icon'/>
                <h5>Clients</h5>
                <small>AXA and Super</small>
              </article>

              <article className='about__card'>
                <AiOutlineFundProjectionScreen className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ projects</small>
              </article>
            </div>

            <p className='about__content-paragraph'>
            My name is Edwin Simpson, I’m an Industrial Engineer with more than 9 years of experience in continuous improvement projects. I’m also a technology enthusiast looking for a change in my career.
            </p>

            <a href="#contact" className='btn btn-primary btn-about'>Lets talk</a>


          </div>

        </div> 
    </section>
  )
}

export default about