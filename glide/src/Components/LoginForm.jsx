import React, { useState } from 'react'
import AlertBox from './AlertBox';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';

function LoginForm({role = 'client'}) {
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [showAlert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setData] = useState({
        email:'',
        password:''
    })

    async function handleLogin(e){
        e.preventDefault()
        setLoading(true)
        try{
            const { data, error:authError } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password
            })

            if(authError){
                setError(authError.message)
                launchInterrupt()
            } else{
                const path = `/${role === 'client' ? 'client/store' : 'owner/dashboard'}`
                navigate(path)
            }

            // if(data.session){
            //     const path = `/${role === 'client' ? 'client/store' : 'owner/dashboard'}`
            //     navigate(path)
            // }
            
        }catch(error){
            console.log(error.error)
        }finally{
            setLoading(false)
        }
    }
    function launchInterrupt(){
        setAlert(true)
    }
  return (
    <div className='w-150'>
        <AlertBox 
            title="Warning!!!"
            message={error}
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
