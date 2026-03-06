import React from 'react'
import img from '../assets/spidey.webp'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className='bg-red-400 p-2 '>
      <div className='flex items-center justify-center'>
        <img src={img} alt="image not found"  className='h-44 w-44'/>
      </div>
      <div>
        <p className='text-center'>Turf name</p>
        <div className='flex items-center justify-around'>
          <p>2000/=</p>
          <p>nairobi</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Link to='/view'>View More</Link>
      </div>
    </div>
  )
}

export default Card
