import React from 'react'
import Navbar from '../../Components/Navbar'
import Card from '../../Components/Card'

function Home() {
  return (
    <div>
      <Navbar />

      {/* Grid Section */}
      <section className='flex items-center justify-center'>
        <div className='grid grid-cols-3 w-300 p-2 gap-5 '>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  )
}

export default Home
