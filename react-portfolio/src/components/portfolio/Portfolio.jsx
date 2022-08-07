import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/wardrobe assistant.PNG'
import IMG2 from '../../assets/Bcash.png'
import IMG3 from '../../assets/11-express-homework-demo-01.png'
import IMG4 from '../../assets/Project Tracker.PNG'
import IMG5 from '../../assets/coding quiz.PNG'
import IMG6 from '../../assets/Day planer.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container porfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt="Wardrobe Assistant" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='__blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='__blank'>Deployed Page</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt="Wardrobe Assistant" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='__blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='__blank'>Deployed Page</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt="Wardrobe Assistant" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='__blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='__blank'>Deployed Page</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt="Wardrobe Assistant" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='__blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='__blank'>Deployed Page</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt="Wardrobe Assistant" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='__blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='__blank'>Deployed Page</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt="Wardrobe Assistant" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='__blank'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='__blank'>Deployed Page</a>
          </div>
        </article>
      

      </div>


    </section>
  )
}

export default Portfolio