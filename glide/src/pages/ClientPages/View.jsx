import React from 'react'
import Navbar from '../../Components/Navbar'
import pic from '../../assets/land.png'

function View() {
  return (
    <div>
        <Navbar />
        <section className='flex items-center justify-center '>
            <div className='w-full h-full '>
                <div className='bg-black'>
                    <img src={pic} alt="image not found" className='h-52 w-full object-cover opacity-50'/>
                </div>
                <div className='p-2 flex items-center justify-center h-full '>
                    <div>
                        <h1>Description</h1>
                        <div>
                            Meet the Apex Wireless Earbuds. Experience crystal-clear sound and immersive bass in a featherlight design. With 30 hours of battery life and instant pairing, your playlist never has to stop. Elevate your audio experience today.
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default View
