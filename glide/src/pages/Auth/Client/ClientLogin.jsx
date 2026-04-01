import React from 'react'
import LoginForm from '../../../Components/LoginForm'
import { Link } from 'react-router-dom'

function ClientLogin() {
  return (
    <div className='flex items-center justify-center bg-white h-screen'>
        <div className='border-2 rounded-md p-3 bg-red-200'>
          <div className='w-full'>
            <h1 className='text-center font-semibold'>Log In</h1>
          </div>
          <div>
            <LoginForm role='client'/>
          </div>
          <div>
            <div>
              <span className='italic text-sm'>Don't have an account? </span>
              <span>
                <Link to='/client/register' className='italic text-sm hover:underline hover:text-red-500'>Register here</Link>
              </span>
            </div>
            <div>
              <Link to='/reset' className='italic text-sm hover:underline hover:text-red-500'>Forgot password? click here</Link>
            </div>
          </div>
        </div>      
    </div>
  )
}

export default ClientLogin
