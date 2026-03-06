import React from 'react'
import img from '../../assets/spidey.webp'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom'

function View() {
  return (
    <div>
    <Navbar />
        <div className='h-screen flex items-center justify-center bg-amber-200'>
            <div className='w-[1200px] bg-green-500'>
                <div>
                    <h1>Title</h1>
                </div>
                <div className='flex items-center justify-evenly'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <p>Nairobi</p>
                        <p>2000/=</p>
                        <p>This is a description</p>
                        <div>
                            <Link to='/view'>Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View
