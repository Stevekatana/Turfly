import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Components/Sidebar'
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";
import prof from '../../../assets/turf.jpg'
import { supabase } from '../../../../supabaseClient';
import { IoShapesSharp } from 'react-icons/io5';

function Booking() {
  const [oId, setOid] = useState([])
  const [turfData, setTdata] = useState([])
  const [cData, setclientData] = useState([])

  useEffect(()=>{
    fetchBookings()
  },[])

  async function fetchBookings(){
    // fetchsession
    const { data:seshData, error:seshError } = await supabase.auth.getUser()
    if(seshError){
      console.log(seshError.message)
    }else{
      // fetch turfData
      const { data:tData, error:tdError } = await supabase
      .from('turfs')
      .select('id, name')
      .eq('owner_id',seshData.user.id )
      if(tdError){
        console.log('tdError', tdError.message)
      }else{
        console.log(tData)
        setTdata(tData)
        // fetch bookingData
        const {data:bData, error:bError} = await supabase
        .from('bookings')
        .select(' turf_id, user_id, booking_date, total_price, status')
        .eq('turf_id', tData.id)

        if(bError){
          console.log(bError.message)
        }else{
          console.log(bData)
        }
        

      }
    }
  }
  return (
    <div  className='flex'>
      <Sidebar />
      <div className='p-5 w-screen '>
        <div className=''>
          <div className='flex p-3 items-center justify-around'>
            <h1 className='text-3xl font-semibold'>Your Bookings</h1>
          </div>
          <div>
            <table className='w-full'>
              <thead className='mb-2'>
                <tr className=''>
                  <th>Client Name</th>
                  <th>Turf</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-blue-200 text-center rounded-md'>
                  <td>Steve</td>
                  <td>kilimani turfs</td>
                  <td>3000</td>
                  <td>pending</td>
                  <td className='flex flex-col p-1 gap-2 text-white font-semibold'>
                    <Link to='/owner/booking/view' className='bg-blue-500 rounded-md p-1'>View</Link>
                    <button className='bg-green-500 rounded-md p-1'>Accept</button>
                    <button className='bg-red-500 rounded-md p-1'>Cancel</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Booking
