import React from 'react'
import RegistrationForm from '../../../Components/RegistrationForm'

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
        </div>      
    </div>
  )
}

export default VendorSignup
