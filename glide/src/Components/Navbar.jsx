import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdPin } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { supabase } from '../../supabaseClient';

function Navbar() {
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    fetchUserProfile()
    // fetchUserLocation()
  },[])

  async function fetchUserProfile(){
    const { data:{session}, error } = await supabase.auth.getSession()
    if(session){
      const{ data, error:profileError } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', session.user.id)
      .single()

      if(data){
        setProfile(data.full_name)
      }else{
        console.log(profileError)
      }
    }else{
      alert(error.message)
    }
  }

  async function handleLogout(){
    const { error } = await supabase.auth.signOut()
    navigate('/client/login')
  }
  return (
    <nav className='bg-[#111827] p-2 px-32 flex items-center justify-around border-b-2 sticky top-0 z-20'>
      <div>
        <Link to='/client/store' className='text-2xl text-white font-semibold'>Glide</Link>
      </div>
      <div className='bg-white p-1 rounded-md'>
        <form action="">
          <input type="text" placeholder="Search turfs here..." className='w-76  placeholder:text-center'/>
          <input type="submit" value="Search" className='border ml-2 rounded-md p-1 bg-[#111827] text-white focus:border-white focus:outline-none' /> 
        </form>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex items-center justify-center gap-2 text-white'>
          <IoMdPin />
          <p>Nairobi</p>
        </div>
        <div  className='flex items-center justify-center gap-2 text-white'>
          <IoPerson />
          <p>{profile}</p>
        </div>
        <div  className='flex items-center justify-center gap-2 text-white'>
          <button onClick={handleLogout}>Signout</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar