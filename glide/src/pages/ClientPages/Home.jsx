import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Card from '../../Components/Card'
import { supabase } from '../../../supabaseClient'

function Home() {
  const [ data, setData ] = useState([])

  useEffect(()=>{
    fetchTurfs()
  },[])

  async function fetchTurfs(){
    const { data, error } = await supabase
    .from('turfs')
    .select('id, name, price_per_hour, location, description')
    
    if(error){
      console.log(error.message)
    } else {
      setData(data)
    }
  }
  return (
    <div>
      <Navbar />

      {/* Grid Section */}
      <section className='flex items-center justify-center'>
        <div className='grid grid-cols-3 w-300 p-2 gap-5 '>
          {
            data.map((data)=>{
              return(
                <Card 
                  turfName = { data.name }
                  location = { data.location }
                  price = { data.price_per_hour }
                  hyperlink = { data.id }
                />
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Home
