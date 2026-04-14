import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { supabase } from '../../../supabaseClient'
import { useNavigate } from 'react-router-dom'

function NewTurf() {
  const navigate = useNavigate()
  const [userId, setUser] = useState({})
  const [formData, setData] = useState({
    turfName:'',
    location:'',
    price:'',
    description:''
  })

  async function addNewTurf(e){
    e.preventDefault()
    const { data:{ user }, error } = await supabase.auth.getUser()
    if(user){
      setUser(user.id)

      const { error } = await supabase
      .from('turfs')
      .insert({
        owner_id: userId,
        name: formData.turfName,
        location: formData.location,
        price_per_hour: formData.price,
        description: formData.description
      })

      if(!error){
        navigate('/owner/turf')
      }
    }

  }
  return (
    <div className='flex'>
        <Sidebar />
      <div className='p-5 flex items-center justify-center w-screen '>
        <div className='border'>
            <div>
                <h1>Register new Turf</h1>
            </div>
            <div>
                <form className="flex flex-col gap-2" onSubmit={addNewTurf}>
                    <input type="text" placeholder="Turf Name" id="" onChange={(e)=>{setData({...formData, turfName: e.target.value})}}/>
                    <input type="text" placeholder="Price per hr" id="" onChange={(e)=>{setData({...formData, price: e.target.value})}}/>
                    <input type="text" placeholder="Location" id="" onChange={(e)=>{setData({...formData, location: e.target.value})}} />
                    <textarea placeholder="Add a turf description" id="" onChange={(e)=>{setData({...formData, description: e.target.value})}}></textarea>
                    {/* <input 
                        type="file" 
                        accept="image/*" 
                        className="" /> */}
                    <input type="submit" value='add Turf' className='bg-blue-500 text-white '/>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewTurf
