import React from 'react'
import CV from '../../assets/Simpson Edwin Resume.pdf'

export const cv = () => {
  return (
    <div className='cv'>
        <a href={CV} download className='btn'> Downlad CV </a>
        <a href='#contact' className='btn btn-primary'> Lets Talk </a>
    </div>
  )
}

export default cv