import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  const [profile, setProf] = useState([])

  useEffect(function(){
    getsessionIdandProfile()

  },[])

    async function getsessionIdandProfile(){
      const {data:{session}} = await supabase.auth.getSession()

      if(session.user){
        const {data, error} = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', session.user.id)
        .single()
        
        if(error){
          console.log('query error:', error)
        } else {
          setProf(data)
        }
      }
    }

  async function handleSignOut() {
      const {error} = await supabase.auth.signOut()

      if(error){
        alert(error.message)
      } else {
        navigate('/login')
      }
  }
  return (
    <nav className='flex items-center justify-evenly p-2 h-auto bg-red-500' >
      <div>
        <h1>Glide</h1>
      </div>
      <div>
        <form action="handleSearch">
          <input type="text" placeholder="Search Glide" id="" />
          <input type="submit" value='Search' />
        </form>
      </div>
      <div className='flex items-center justify-center gap-3 w-auto bg-green-500'>
        <div className='flex items-center justify-center gap-1'>
          <IoMdPerson />
          <p>{profile.full_name}</p>
        </div>

          <button className='flex items-center justify-center gap-1' onClick={handleSignOut}>
            <FaSignOutAlt />
            sign out
          </button>

      </div>
    </nav>
  )
}

export default Navbar
