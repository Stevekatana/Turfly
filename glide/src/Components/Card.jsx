import React from 'react'
import Pic from '../assets/card.jpg'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className='p-4 border rounded-md'>
        {/* Image section */}
        <div className='p-4'>
            <img src={Pic} alt="image not found" className='rounded-md'/>
        </div>
        <div>
            <div className='text-center'>
                <h1 className='font-bold text-xl'>StepTurf Turf</h1>
            </div>
            <div className='flex items-center justify-around p-2'>
                <div>
                    <span className='text-sm mr-1'>Location:</span>
                    <span className='font-semibold'>Nairobi</span>
                </div>
                <div>
                    <span className='text-sm mr-1'>Price:</span>
                    <span className='font-semibold'>2000 kes/hr</span>
                </div>
            </div>
            <div className='flex items-center justify-center p-2'>
                <Link to='/client/view' className='bg-[#111827] text-white p-1.5 rounded-md hover:font-semibold'>View More</Link>
            </div>
        </div>
    </div>
  )
}

export default Card
