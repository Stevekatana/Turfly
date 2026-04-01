import React from 'react'
import { Link } from 'react-router-dom'
import Turf from '../assets/turf.jpg'

function Landing() {
  return (
    <div className='h-screen bg-[#0B1220]'>
      <nav className='z-10 flex items-center justify-evenly p-3 backdrop-blur-md border-b-2 border-b-[#1E293B] sticky top-0 w-screen bg-[#0B1220] opacity-75'> 
        <div>
          <Link to='/' className='text-white'>Glide</Link>
        </div>
        <div className='flex items-center gap-3 '>
          <Link to='/client/register' className='text-white'> Sign Up</Link>
          <Link to='/client/login' className='text-white'> Log In</Link>
        </div>

      </nav>

      <section className=' absolute top-0 w-screen h-auto'>
        <div className='bg-red-500 h-auto'>
          <img src={Turf} alt="Image not found!" className='w-screen h-screen  object-cover'/>
        </div>
        <div className='absolute text-white'>
          <h1>Glide</h1>
          <div>
            <span>Book your </span>
            <span>Turf Instantly</span>
          </div>
       </div>
      </section>
    </div>
  )
}
 
export default Landing
