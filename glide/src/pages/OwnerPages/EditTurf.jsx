import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../../supabaseClient'

function EditTurf() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [formData, setforms] = useState({
    turfName:'',
    location:'',
    prices: '',
    descript:''
  })

  useEffect(()=>{
    toBeEdited()
  },[])

  async function toBeEdited(){
    const { data, error } = await supabase
    .from('turfs')
    .select('id, name, price_per_hour, location, description')
    .eq('id', id)
    .single()
    if(error){
      console.log(error.message)
    }else{
      setData(data)
    }
  }

  async function handleTurfUpdate(e){
    e.preventDefault()
    const { error }= await supabase
    .from('turfs')
    .update({
      name: formData.turfName,
      price_per_hour: formData.prices,
      location: formData.location,
      description: formData.descript,
    })
    .eq('id', id)

    if(error){
      console.log(error.message)
    }else{
      alert('turf successfully Updated')
      navigate('/owner/turf')
    }
  }

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex items-center justify-center p-3 w-screen'>
        <div className='border '>
            <div>
                <h1>Edit Turf</h1>
            </div>
            <div>
                <form onSubmit={handleTurfUpdate} className="flex flex-col gap-2">
                    <input type="text" placeholder={data.name} onChange={(e)=>{setforms({...formData, turfName:e.target.value})}} />
                    <input type="text" placeholder={data.price_per_hour} onChange={(e)=>{setforms({...formData, prices:e.target.value})}} />
                    <input type="text" placeholder={data.location} onChange={(e)=>{setforms({...formData, location:e.target.value})}} />
                    <textarea placeholder={data.description} onChange={(e)=>{setforms({...formData, descript:e.target.value})}}></textarea>

                    {/* <input 
                        type="file" 
                        accept="image/*" 
                        className="" /> */}
                    <input type="submit" value='Save changes' className='bg-blue-500 text-white '/>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditTurf
