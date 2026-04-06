import React, { useState } from 'react'
import { supabase } from '../../../supabaseClient'
import { useNavigate } from 'react-router-dom'

function Forgot() {
  const navigate = useNavigate()
  const [password, setPass] = useState('')
  const [cPass, setConf] = useState('')

  async function handlePassReset(){
    if(password != cPass){
      alert('Passwords do not match!')
    }else{
      await supabase.auth.updateUser({password: password})
      navigate('/client/login')
    }
  }

  return (
    <div className='flex items-center justify-center h-screen bg-red-200'>
      <div className='bg-white p-3 rounded-md border w-125 h-auto'>
        <div>
          <h1>Update your Password</h1>
          <p>Change your password to access your account</p>
        </div>
        <div>
          <form onSubmit={handlePassReset}>
            <input type="text" placeholder="Enter password" onChange={(e)=>{setPass(e.target.value)}}/> <br />
            <input type="text" placeholder="Confirm password" onChange={(e)=>{setConf(e.target.value)}} /><br />

            <input type="submit" value='Reset Password'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forgot