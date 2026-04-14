import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { MdAdd } from "react-icons/md";
import prof from '../../assets/turf.jpg'
import { Link } from 'react-router-dom';
import { supabase } from '../../../supabaseClient';

function Turf() {
  const [turfs, setTurf] = useState([])
  useEffect(()=>{
    fetchTurfData()
  },[])

  async function fetchTurfData(){
    const { data:{user}, error } = await supabase.auth.getUser()
      if (user){
        const { data, error } = await supabase
        .from('turfs')
        .select('id, name, location, price_per_hour, description')
        .eq('owner_id', user.id)

        if(error){
          console.log(error.message)
        }else{
          setTurf(data)
        }
      }
  }

  async function deleteTurf(id){
    const response = await supabase
    .from('turfs')
    .delete()
    .eq('id', id)

    if(response){
      console.log(id)
      window.location.reload()
    }
  }

  return (
    <div  className='flex'>
      <Sidebar />
      <div className='p-5 w-screen '>
        <div className=''>
          <div className='flex p-3 items-center justify-around'>
            <h1 className='text-3xl font-semibold'>Your Turfs</h1>
            <Link to='/owner/turf/new' className='flex items-center justify-center p-2 bg-green-500 rounded-md text-white font-semibold'>
              <MdAdd />
              Add Turf
            </Link>
          </div>
          <div >
            <ul>
              {
                turfs.map((turf)=>{
                  return(
                    <li key={turf.id} className='flex p-2 items-center gap-2 bg-gray-200 justify-around mb-2 rounded-md'>
                      <div>
                        <img src={prof} className="h-20 w-20" />
                      </div>
                      <div className='flex flex-col w-125'>
                        <div className='flex p-1 items-center justify-center gap-5'>
                          <div>
                            <span>Name: </span>
                            <span className='font-semibold'>{turf.name}</span>
                          </div>
                          <div>
                            <span>Location: </span>
                            <span className='font-semibold'>{turf.location}</span>
                          </div>
                          <div>
                            <span>Price: </span>
                            <span className='font-semibold'>{turf.price_per_hour}</span>
                          </div>
                        </div>
                        <div className='mt-2'>
                          <p className='text-center underline font-semibold'>description</p>
                          <p>{turf.description}</p>
                        </div>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <Link to={`/owner/turf/edit/${turf.id}`} className='p-2 bg-blue-500 text-white font-semibold rounded-md'>Edit</Link>
                        <button onClick={()=>{deleteTurf(turf.id)}} className='p-2 bg-red-500 text-white font-semibold rounded-md'>Delete</button>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Turf
