import React, { useEffect, useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Landing from '../src/pages/Landing'
import Register from '../src/pages/client/Register'
import Login from './pages/client/Login'
import { supabase } from './supabaseClient'

import ClientHome from './pages/client/Home'
import Confirm from './component/Confirm'
import Forgot from './pages/auth/Forgot'
import Reset from './pages/auth/Reset'
import View from './pages/client/View'

function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    supabase.auth.getSession()
    .then(({data:{session}})=>{
      setSession(session)
      setLoading(false);
    })
    const {data:{subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false);
    })
    return ()=>subscription.unsubscribe()

  },[])

  if (loading) {
    return <div className="h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div>
      <Routes>
        {/* Unprotected Routes */}
        <Route path='/' element={<Landing />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/confirm' element={<Confirm />}/>
        <Route path='/forgot' element={<Forgot />}/>
        <Route path='/reset' element={<Reset />}/>

        {/* protected routes */}
        {/* client Routes */}
        <Route path='/store' element={session ? <ClientHome /> : <Navigate to='/login'/>}/>
        <Route path='/view' element={session ? <View /> : <Navigate to='/login'/>}/>
      </Routes>
    </div>
  )
}

export default App
