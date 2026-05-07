import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../../../supabaseClient'
import Turf from '../OwnerPages/turf/Turf'
import Navbar from '../../Components/Navbar'

function Checkout() {
  const { id:tId } = useParams()
  const navigate = useNavigate()

  const [ name,setName ] = useState([])
  const [ uId, setUid ] = useState([])
  const [ data,setdata ] = useState([])
  const [ turf,setData ] = useState([])
  const [ selectedSlots, setSlots ] = useState([])
  const [ existingBookings, setExistingData] = useState([])
  const [ mpesaNum, setNum ] = useState('')
  
  const hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
  let dateToday = new Date().toLocaleDateString('en-gb')
  

  useEffect(()=>{
    fetchCheckoutData()
    fetchBookedSlots()
  },[])

  async function fetchCheckoutData(){
    const {data:{user}, error} = await supabase.auth.getUser()
    if(user){
      const {data, error} = await supabase
      .from('profiles')
      .select('full_name, phone')
      .eq('id', user.id)
      .single()

      if(error){
        console.log(error.message)
      }else{
        setName(data)
        setUid(user.id)
      }
    }

    const { data:turfData, error: tError } = await supabase
    .from('turfs')
    .select('id, name, price_per_hour')
    .eq('id', tId)
    .single()
    
      if(tError){
        console.log('error',tError)
      }else{
        setData(turfData)
      }
  }

  async function fetchBookedSlots(){
    let dbDate = new Date().toISOString().split('T')[0]

    const { data, error } = await supabase
    .from('bookings')
    .select('start_time')
    .eq('turf_id', tId)
    .eq('booking_date', dbDate)
    .in('status', ['confirmed', 'pending'])

    if(error){
      console.log(error.message)
    }else{
      setExistingData(data)
    }
  }

  function toggleSlot(hour) {
    if (selectedSlots.includes(hour)) {
      setSlots(selectedSlots.filter(slot => slot !== hour));
    } else {
      setSlots([...selectedSlots, hour]);
    }
  }

  async function initiateReserve(e){
    e.preventDefault()
    console.log(selectedSlots)
    let dbDate = new Date().toISOString().split('T')[0]
    const bookingData = selectedSlots.map((hour) =>{
    const startTime = `${hour.toString().padStart(2,'0')}:00:00`

    return{
        user_id: uId,
        turf_id: tId,
        phone_number: mpesaNum,
        booking_date: dbDate,
        start_time: startTime,
        total_price: selectedSlots.length * (turf.price_per_hour || 0),
        status: 'pending'
      }
    })

    const { data, error } = await supabase
    .from('bookings')
    .insert(bookingData)

    if (error) {
      if (error.code === '23505') {
        alert("One of these slots was just taken! Please refresh.");
      } else {
        console.error(error.message);
      }
    } else {
      console.log("Success! Rows created:", bookingData.length);
      window.location.reload()

      // Proceed to STK Push logic...
    }
  }
  
  return (
    <div>
      <Navbar />
    <div className='flex items-center justify-center p-4'>
      <div className='border-2 rounded-md p-4 w-auto'>
        <div>
            <h1 className='text-center text-3xl font-semibold uppercase'>
              {turf.name}
            </h1>
        </div>
        <div className='flex justify-around gap-5'>
          <div className='mt-5'>
            <h1 className='text-center text-xl mb-5'>Select time Slots - {dateToday}</h1>
            <div className='grid grid-cols-4 gap-3 mb-6' >
              {
                hours.map((hour)=>{
                  const isSelected = selectedSlots.includes(hour)

                  //display logic
                  const displayHour = hour > 12 ? hour - 12 : hour;
                  const amPm = hour >= 12 ? 'PM' : 'AM';
                  
                  // Check if this hour exists in the data we fetched from Supabase
                  const isTaken = existingBookings.some(
                    (b) => parseInt(b.start_time.split(':')[0]) === hour
                  );
                  
                  const isChosen = selectedSlots.includes(hour);

                  return(
                    <button 
                      key={hour}
                      type='button'
                      disabled={isTaken}
                      onClick={() => toggleSlot(hour)}
                      className={ `border-2 p-2 w-32 text-center rounded-md transition-all 
                        ${
                        isTaken 
                                ? 'bg-red-100 text-red-400 cursor-not-allowed' 
                                : isSelected 
                                            ? 'bg-green-500 text-white' 
                                            : 'bg-white'
                        }`
                      }
                    >
                      {displayHour}:00 {amPm}
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div className='pt-10'>
            <div>
              <span>Player: </span>
              <span>{name.full_name}</span>
            </div>
            <div>
              <span>Total Price: </span>
              <span>Ksh {selectedSlots.length * (turf.price_per_hour || 0)}</span>
            </div>
            <div>
              <form onSubmit={initiateReserve}>
                <input 
                  type="text" 
                  required
                  placeholder='enter mpesa number'
                  onChange={(e)=>{setNum(e.target.value)}}
                /> 
                
                <br />

                <input 
                  type="submit" 
                  value='Reserve Turf' 
                  className='mt-2 bg-green-500 text-white font-semibold rounded-md p-2'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Checkout
