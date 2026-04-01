import React, { useState } from 'react'
import AlertBox from './AlertBox'
import { supabase } from '../../supabaseClient'

function RegistrationForm({role = 'client'}) {
    const [cpass, setCpass] = useState('')
    const [showAlert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setData] = useState({
        fullName:'',
        email:'',
        phone:'',
        password:'',
    })
    
    async function handleRegistration(e){
        e.preventDefault()
        setLoading(true)
        if(formData.password != cpass){
            fireInterrupt()
        }else{
            const redirectUrl = role === 'owner'
            ? `http://localhost:5173/owner/dashboard`
            :`http://localhost:5173/client/store`

            const {data, error} = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options:{
                    data:{                        
                        full_name: formData.fullName,
                        email: formData.email,
                        phone: formData.phone,
                        role: role
                    },
                    emailRedirectTo: redirectUrl
                },
                
            })

            if(error){
                console.log(error.message)
            }else{
                alert('check your email for the confirmation link!')
                setLoading(false)
            }
        }
    }

    function fireInterrupt(){
        setAlert(true)
    }

  return (
    <div className='w-150'>
        <AlertBox 
            title="Warning!!!"
            message="Passwords do not match. Kindly try again."
            visible={showAlert}
            onNo={()=>{setAlert(false)}}
            onYes={()=>{setAlert(false); setLoading(false)}}
        />

      <form onSubmit={handleRegistration} className='flex flex-col gap-2'>
        <div>
            <input 
                type="text" 
                placeholder='Full Name' 
                className='bg-white w-full'
                onChange={(e)=>{setData({...formData, fullName: e.target.value})}}
                required
            />
        </div>
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
                placeholder='Phone number' 
                className='bg-white w-full'
                onChange={(e)=>{setData({...formData, phone: e.target.value})}}
                required
            />
        </div>

        {/* For owner use only */}

        {/* {role === 'owner' && (
            <div>
                <input 
                    type="text" 
                    placeholder='Business Name' 
                    className='bg-white w-full'
                    onChange={(e)=>{setData({...formData, bizName: e.target.value})}}
                    required
                />
        </div>
        )} */}
        <div>
            <input 
                type="text" 
                placeholder='Password' 
                className='bg-white w-full'
                onChange={(e)=>{setData({...formData, password: e.target.value})}}
                required
            />
        </div>

        <div>
            <input 
                type="text" 
                placeholder='Confirm Password' 
                className='bg-white w-full'
                onChange={(e)=>{setCpass(e.target.value)}}
                required
            />
        </div>
        
        <div className='mt-2'>
            <input 
                type="submit" 
                value={loading ? 'Creating Account...' : `Register as ${role}`} 
                className='bg-blue-500 rounded-md p-2 text-white'
            />
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm