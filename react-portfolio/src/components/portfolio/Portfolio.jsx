import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/wardrobe assistant.PNG'
import IMG2 from '../../assets/Bcash.png'
import IMG3 from '../../assets/11-express-homework-demo-01.png'
import IMG4 from '../../assets/Weather Dashboard.png'
import IMG5 from '../../assets/coding quiz.PNG'
import IMG6 from '../../assets/Day planer.PNG'

const data = [
{ 
  id:1,
  image:IMG1,
  title:'Wardrobe Assistant',
  github:'https://github.com/Edwin0204/BootcampProject01',
  demo:'https://edwin0204.github.io/BootcampProject01/'
},
{ 
  id:2,
  image:IMG2,
  title:'Bcash',
  github:'https://github.com/Edwin0204/BCash',
  demo:'https://dry-beach-87188.herokuapp.com/'
},
{ 
  id:3,
  image:IMG3,
  title:'Note Taker',
  github:'https://github.com/Edwin0204/Note-Taker-with-Express.js',
  demo:'https://note-taker-edwin.herokuapp.com/notes'
},
{ 
  id:4,
  image:IMG4,
  title:'Weather Dashboard',
  github:'https://github.com/Edwin0204/Homework-week-6',
  demo:'https://edwin0204.github.io/Homework-week-6/'
},
{ 
  id:5,
  image:IMG5,
  title:'Coding Quiz',
  github:'https://github.com/Edwin0204/Homework-week-4',
  demo:'https://edwin0204.github.io/Homework-week-4/'
},
{ 
  id:6,
  image:IMG6,
  title:'Day Planner',
  github:'https://github.com/Edwin0204/Homework-Week-5',
  demo:'https://edwin0204.github.io/Homework-Week-5/'
}

]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container porfolio__container">
      {
        data.map (({id, image, title, github, demo})=>{
          return (
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='__blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='__blank'>Deployed Page</a>
            </div>
          </article>
          )
        })
      }

      </div>


    </section>
  )
}

export default Portfolio