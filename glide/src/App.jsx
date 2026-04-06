import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Landing from './Pages/Landing'
import ClientLogin from './Pages/Auth/Client/ClientLogin'
import ClientSignup from './Pages/Auth/Client/ClientSignup'
import VendorSignup from './Pages/Auth/Owner/VendorSignup'
import VendorLogin from './Pages/Auth/Owner/VendorLogin'

import Home from './Pages/ClientPages/Home'

import Dashboard from './Pages/OwnerPages/Dashboard'
import { supabase } from '../supabaseClient'
import Forgot from './Pages/Auth/Forgot'
import Reset from './Pages/Auth/Reset'
import View from './Pages/ClientPages/View'

function App() {
  const [role, setRole] = useState({})
  const [sesh, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    fetchSession()
  },[])

  async function fetchSession(){
    try{  
      const { data:{session}, error } = await supabase.auth.getSession()
        if(session){
          setSession(session)
          const { data, error:profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', session.user.id)
            .single()
          if(data){
            setRole(data.role)
          }else{
            console.log(error.message)
          }
        }else{
          console.log(error)
        }
    }catch(error){
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  if(loading) return <div>Loading...</div>

  return (
    <div className='h-screen'>
      <Routes>

        {/* Public Routes */}
        <Route path='/' element={<Landing />} />
        <Route path ='/client/login' element={<ClientLogin />}/>
        <Route path='/client/register' element={<ClientSignup/>}/>
        <Route path='/owner/register' element={<VendorSignup />}/>
        <Route path='/owner/login' element={<VendorLogin/>} />

        {/* Work on the password reset section */}
        <Route path='/reset' element={<Forgot />}/>
        <Route path='/forgot' element={<Reset />}/>

        {/* ****************************************************************** */}

        {/* Client Routes */}
        <Route 
          path='/client/store' 
          element={sesh && role === 'client' ? <Home /> : <Navigate to='/client/login'/> }
        />
        <Route 
          path='/client/view' 
          element={sesh && role === 'client' ? <View /> : <Navigate to='/client/login'/> }
        />

        {/* ****************************************************************** */}


        {/* Owner Routes */}
        <Route 
          path='/owner/dashboard' 
          element={sesh && role === 'owner' ? <Dashboard /> : <Navigate to='/vendor/login'/> }
        />
      </Routes>
    </div>
  )
}

export default App