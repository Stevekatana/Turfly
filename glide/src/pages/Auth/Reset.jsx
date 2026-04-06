import React, { useState } from 'react'
import { supabase } from '../../../supabaseClient'
import { useNavigate } from 'react-router-dom'

function Reset() {
  const navigate = useNavigate()
  const [ email, setEmail ] = useState('')
  const [ error, setError ] = useState()
  
  async function sendResetLink(e){
    e.preventDefault()
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      email,
      { 
        redirectTo: `http://localhost:5173/reset`
      })
      
    if(error){
      console.log(error.message)
    }
  }
  return (
    <div>
      <div>
        <form onSubmit={sendResetLink}>
          <div>
            <h1>Enter your Email Address: </h1>
            <input type="email" placeholder='Email address here' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="submit" value="Send Link"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reset
