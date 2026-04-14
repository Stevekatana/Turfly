import React from 'react'

function Checkout() {
  const date = ['6.00am', '7.00am','8.00am','9.00am','10.00am','11.00am','12.00pm','1.00pm','2.00pm','3.00pm',
                '4.00pm','5.00pm','6.00pm','7.00pm','8.00pm','8.00pm','9.00pm']

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='border-2 rounded-md p-4'>
        <div>
            <h1 className='text-center text-3xl font-semibold'>StepTurf Turf</h1>
        </div>
        <div className='mt-5'>
          <h1 className='text-center text-xl mb-5'>Today's Slots - 7/4/2026</h1>
          <div className='flex items-center justify-center ' >
            {
              date.map((date)=>{
                return(
                  <div className='border-2 p-1'>
                    {date}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
