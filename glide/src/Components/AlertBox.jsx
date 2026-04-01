import React from 'react'

function AlertBox({title, message, visible, onYes, onNo}) {
    if(!visible) return null
  return (
    <div className='bg-white absolute p-2 w-125 h-50 rounded-md border-2 shadow-md'>
      <div>
        <h1 className='text-center font-semibold'>{title}</h1>
      </div>
      <div className='p-5'> 
        <p className='text-center'>{message}</p>

      </div>
      <div className='flex items-center justify-evenly mt-3 p-2'>
        <button onClick={onNo} className='bg-red-500 p-2 rounded-md shadow-md text-white'>No</button>
        <button onClick={onYes} className='bg-blue-500 p-2 rounded-md shadow-md text-white'>Yes</button>
      </div>
    </div>
  )
}

export default AlertBox
