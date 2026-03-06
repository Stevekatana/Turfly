import React, { useState } from 'react'
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom'

function Forgot() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const resetPage = 'http://localhost:5173/reset'

  async function sendOtp(e){
    e.preventDefault()
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: resetPage
    })
    navigate('/reset')
    
  }
  return (
    <div>
      <div>
        <h1>Reset Password</h1>
      </div>
      <div>
        <div>
          <p>Enter your email address to reset your password</p>
        </div>
        <form onSubmit={sendOtp}>
          <input type="email" placeholder="Enter your email address" onChange={function(e){setEmail(e.target.value)}} /> <br />
          <input type="submit" value="Reset password" id="" />
        </form>
      </div>
    </div>
  )
}

export default Forgot
