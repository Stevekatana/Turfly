import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TbSoccerField } from "react-icons/tb";
import { supabase } from '../../supabaseClient';

function Sidebar() {
  const navigate = useNavigate()
    async function handleLogout(){
      const { error } = await supabase.auth.signOut()
      if(error){
        console.log(error.message)
      }else{
        navigate('/owner/login')
      }
    }

  return (
    <div className='flex items-center justify-center relative left-0'>
      <div className='p-5 border-r-2 h-screen w-60'>
        <div className=' text-center border-b-2 pb-2'>
          <h1 className='text-2xl font-semibold'>Glide</h1>
          <h4 className='text-sm'>Owner Dashboard</h4>
        </div>
        <div className='mt-5'>
          <ul>
            <li>
              <Link 
                to='/owner/dashboard'
                className='flex items-center justify-start gap-2 p-2 text-xl rounded-md '>
                <IoMdHome />
                Home
              </Link>
            </li>
            <li>
              <Link 
                to='/owner/booking'
                className='flex items-center justify-start gap-2 p-2 text-xl rounded-md '>
                <FaCircleCheck />
                Bookings
              </Link>
            </li>
            <li>
              <Link 
                to='/owner/turf'
                className='flex items-center justify-start gap-2 p-2 text-xl rounded-md '>
                <TbSoccerField />
                Turfs
              </Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <button onClick={handleLogout} className='flex items-center justify-start p-2 text-xl text-red-500 gap-2'>
            <FaSignOutAlt />
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
