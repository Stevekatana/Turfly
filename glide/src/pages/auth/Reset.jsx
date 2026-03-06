import React, { useState } from 'react'
import {supabase} from "../../supabaseClient"
import { useNavigate } from 'react-router-dom'

function Reset() {
    const navigate = useNavigate()
    const[password, setPass] = useState('')
    async function resetPassword(e) {
        e.preventDefault()
        await supabase.auth. updateUser({password: password})
        navigate('/login')
    }
  return (
    <div>
      <form onSubmit={resetPassword}>
        <input type="password" placeholder='Enter new password' onChange={function(e){setPass(e.target.value)}}/>
        <input type="submit" value="Reset" id="" />
      </form>

    </div>
  )
}

export default Reset
