import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {supabase} from '../../supabaseClient'

function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPass] = useState('')
  const [cPass, setConf] = useState('')

  async function handleRegistration(e){
    e.preventDefault()

    if(password !== cPass){
      alert('Passwords do not match!')
    }else{
      console.log(name, email, phone, password)
      const{data, error} = await supabase.auth.signUp({
        email,
        password,
        options:{
          emailRedirectTo: `${window.location.origin}/store`,
          data:{
            full_name: name,
            phone: phone,
            role: 'client'
          }
        }
      })
      if(error){
        console.log(error.message)
      }else{
        // alert('User Registration successful. Check your email to confirm')
        navigate('/confirm')
      } 
    }
  }

  return (
    <div className='flex items-center justify-center bg-gray-500 h-screen'>
      <div className='bg-blue-200 p-2 rounded-md w-2xl px-2'>
        <div className='text-center'>
            <h1 >Sign Up</h1>
        </div>
          <div className=' w-full p-1'>
              <form onSubmit={handleRegistration}>
                  <div>
                      <label htmlFor="">Full Name: </label><br />
                      <input type="text" className='bg-white w-full' onChange={function(e){setName(e.target.value)}}/>
                  </div>
                  <div>
                      <label htmlFor="">Email Address: </label><br />
                      <input type="text" className='bg-white w-full' onChange={function(e){setEmail(e.target.value)}}/>
                  </div>
                  <div>
                      <label htmlFor="">Phone: </label><br />
                      <input type="text" className='bg-white w-full' onChange={function(e){setPhone(e.target.value)}}/>
                  </div>
                  <div>
                      <label htmlFor="">Password: </label><br />
                      <input type="password" className='bg-white w-full' onChange={function(e){setPass(e.target.value)}}/>
                  </div>
                  <div>
                      <label htmlFor="">Confirm Password: </label><br />
                      <input type="password" className='bg-white w-full' onChange={function(e){setConf(e.target.value)}}/>
                  </div>
                  <div className='mt-2 flex items-center justify-center'>
                    <div>
                      <input type="submit" value='Sign Up' className='bg-green-500 p-2 rounded-md w-32'/><br />
                      <Link to='/venreg' className='hover:underline'>Sign in as a Turf Owner</Link><br />
                      <Link to='/login' className='hover:underline'>Already have an account? Log In</Link>
                    </div>
                  </div>
              </form>
          </div>
          <div className='bg-blue-400'>
            hello
          </div>
      </div>
    </div>
  )
}

export default Register
