import React from 'react'
import RegistrationForm from '../../../Components/RegistrationForm'
import { Link } from 'react-router-dom'

function VendorSignup() {
  return (
    <div className='flex items-center justify-center bg-white h-screen'>
        <div className='border-2 rounded-md p-3 bg-red-200'>
          <div className='w-full'>
            <h1 className='text-center font-semibold'>Turf Owner Sign Up</h1>
          </div>
          <div>
            <RegistrationForm role='owner'/>
          </div>
              <div>
                <span className='italic text-sm'>Already have an account? </span>
                <span>
                  <Link to='/owner/login' className='italic text-sm hover:underline hover:text-red-500'>Log in here</Link>
                </span>
              </div>
        </div>      
    </div>
  )
}

export default VendorSignup
