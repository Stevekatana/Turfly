import React from 'react'
import { Link } from 'react-router-dom'
import Turf from '../assets/turf.jpg'

function Landing() {
  return (
    <div className='h-screen bg-[#0B1220]'>
      <nav className='z-10 flex items-center justify-evenly p-3 backdrop-blur-md border-b-2 border-b-[#1E293B] sticky top-0 w-screen bg-[#0B1220] opacity-75'> 
        <div>
          <Link to='/' className='text-[#A3FF12]'>Glide</Link>
        </div>
        <div className='flex items-center gap-7 '>
          <Link to='/client/register' className='text-white'> Sign Up</Link>
          <Link to='/client/store' className=' p-2 bg-[#A3FF12] text-[#0B1220] rounded-md'>Search Turf Now</Link>
        </div>

      </nav>

      <section className=' absolute top-0 w-screen h-auto'>
        <div className=' h-auto'>
          <img src={Turf} alt="Image not found!" className='w-screen h-screen  object-cover'/>
        </div>
        <div className='absolute top-[40%] text-white text-center w-full p-2'>
          <div>
            <h1 className='text-5xl'>Glide</h1>
          </div>
          <div className='text-3xl mt-5'>
            <span>Book your </span>
            <span>Turf Instantly</span>
          </div>
          <div className='mt-10'>
            <Link to='/client/store' className=' p-2 bg-[#A3FF12] text-[#0B1220] rounded-md'>Get Started</Link>
          </div>
       </div>
      </section>
    </div>
  )
}
 
export default Landing
