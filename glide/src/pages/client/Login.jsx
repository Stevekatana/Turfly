import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { supabase } from '../../supabaseClient'

function Login() {
  const navigate  = useNavigate()
      const [email, setEmail] = useState('')
      const [password, setPass] = useState('')

      async function handleLogin(e) {
        e.preventDefault()
        const {data, error} = await supabase.auth.signInWithPassword({
          email,
          password
        })

        if(error){
          console.log(error.message)
        } else {
          alert(data.user.email)
          navigate('/store')
        }
      }
    
  return (
    <div className='flex items-center justify-center h-screen bg-amber-200'>
      <div>
        <div>
            <h1>Log in Page</h1>
        </div>
        <div>
            <form onSubmit={handleLogin}>
                  <div>
                      <label htmlFor="">Email Address: </label><br />
                      <input type="text" className='bg-white w-full' onChange={function(e){setEmail(e.target.value)}}/>
                  </div>
                  <div>
                      <label htmlFor="">Password: </label><br />
                      <input type="password" className='bg-white w-full' onChange={function(e){setPass(e.target.value)}}/>
                  </div>
                  <div className='mt-2 flex items-center justify-center'>
                    <div>
                      <input type="submit" value='Sign Up' className='bg-green-500 p-2 rounded-md w-32'/><br />
                      <Link to='/venreg' className='hover:underline'>Log in as a Turf Owner</Link><br />
                      <Link to='/forgot' className='hover:underline' id='forgot'>Forgot your password? Click here to reset</Link><br />
                      <Link to='/register' className='hover:underline'>Don't have an account? Sign In</Link>
                    </div>
                  </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
