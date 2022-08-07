import React from 'react'
import './languages.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiSequelize} from 'react-icons/si'

const Languages = () => {
  return (
    <section id='languages'>
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className='container languages__container'>
        <div className="languages__frontend">
          <h3>Frontend</h3>
          <div className="languages__content">
            <article className='languages__details'>
              <AiFillHtml5 className='languages__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
            <article className='languages__details'>
              <IoLogoCss3 className='languages__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
            <article className='languages__details'>
              <IoLogoJavascript className='languages__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
            <article className='languages__details'>
              <FaBootstrap className='languages__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
            <article className='languages__details'>
              <FaReact className='languages__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
          </div>
        </div>


        <div className="languages__backend">
         <h3>Backend</h3>
          <div className="languages__content">
            <article className='languages__details'>
              <IoLogoNodejs className='languages__details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
            <article className='languages__details'>
              <SiMongodb className='languages__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
            <article className='languages__details'>
              <SiMysql className='languages__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
            <article className='languages__details'>
              <SiSequelize className='languages__details-icon'/>
              <div>
              <h4>Sequilize</h4>
              <small className='text-light'>Jr.</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default Languages