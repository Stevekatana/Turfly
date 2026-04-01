import React, { useState } from 'react'
import AlertBox from './AlertBox';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';

function LoginForm({role = 'client'}) {
    const navigate = useNavigate()
    const [showAlert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setData] = useState({
        email:'',
        password:''
    })

    async function handleLogin(e){
        e.preventDefault()
        setLoading(true)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password
        })

        if(data){
            role === 'client'
            ? navigate('/client/store')
            : navigate('/owner/dashboard')
        }else{
            launchInterrupt()
            console.log(error.message)
        }
    }
    function launchInterrupt(){
        setAlert(true)
    }
  return (
    <div className='w-150'>
        <AlertBox 
            title="Warning!!!"
            message="Wrong credentials. Kindly try again."
            visible={showAlert}
            onNo={()=>{setAlert(false)}}
            onYes={()=>{setAlert(false); setLoading(false)}}
        />

      <form onSubmit={handleLogin} className='flex flex-col gap-2'>
        <div>
            <input 
                type="text" 
                placeholder='Email Address' 
                className='bg-white w-full'
                onChange={(e)=>{setData({...formData, email: e.target.value})}}
                required
            />
        </div>
        <div>
            <input 
                type="text" 
                placeholder='Password' 
                className='bg-white w-full'
                onChange={(e)=>{setData({...formData, password: e.target.value})}}
                required
            />
        </div>
        
        <div className='mt-2'>
            <input 
                type="submit" 
                value={loading ? 'Logging in...' : `Login as ${role}`} 
                className='bg-blue-500 rounded-md p-2 text-white'
            />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
