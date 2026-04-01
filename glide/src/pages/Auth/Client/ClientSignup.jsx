import React from 'react'
import RegistrationForm from '../../../Components/RegistrationForm'
import AlertBox from '../../../Components/AlertBox'
import { Link } from 'react-router-dom'

function ClientSignup() {
  return (
    <div className='flex items-center justify-center bg-white h-screen'>
        <div className='border-2 rounded-md p-3 bg-red-200'>
          <div className='w-full'>
            <h1 className='text-center font-semibold'>Sign Up</h1>
          </div>
          <div>
            <RegistrationForm role='client'/>
          </div>
          <div>
            <div>
              <div>
                <span className='italic text-sm'>Already have an account? </span>
                <span>
                  <Link to='/client/login' className='italic text-sm hover:underline hover:text-red-500'>Log in here</Link>
                </span>
              </div>
              <Link to='/owner/register' className='text-center italic text-sm'>Turf Owner Registration</Link>
            </div>
          </div>

        </div>      
    </div>
  )
}

export default ClientSignup