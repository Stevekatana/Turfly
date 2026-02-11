import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Waitlist from './Waitlist'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/waitlist' element={<Waitlist />}/>
      </Routes>
    </div>
  )
}

export default App
