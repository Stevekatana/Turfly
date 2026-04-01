import React from 'react'
import LoginForm from '../../../Components/LoginForm'

function VendorLogin() {
  return (
    <div className='flex items-center justify-center bg-white h-screen'>
        <div className='border-2 rounded-md p-3 bg-red-200'>
          <div className='w-full'>
            <h1 className='text-center font-semibold'>Turf owner Log In</h1>
          </div>
          <div>
            <LoginForm role='owner'/>
          </div>

        </div>      
    </div>
  )
}

export default VendorLogin
