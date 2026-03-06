import React from 'react'
import Navbar from '../../component/Navbar'
import Card from '../../component/Card'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='h-screen flex items-center justify-center'>
        <div className='bg-blue-500 h-screen w-[1200px]'>
          {/* Filter section  & location section*/}
          <div></div>

          {/* Grid section */}
          <div className='grid grid-cols-4 gap-3 p-3'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
