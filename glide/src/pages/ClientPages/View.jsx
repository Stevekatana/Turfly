import React from 'react'
import Navbar from '../../Components/Navbar'
import pic from '../../assets/land.png'
import { Link } from 'react-router-dom'

function View() {
  return (
    <div>
        <Navbar />
        <section className='flex items-center justify-center '>
            <div className='w-full h-full '>
                <div className='bg-black'>
                    <img src={pic} alt="image not found" className='h-52 w-full object-cover opacity-50'/>
                    <h1 className='text-center'></h1>
                </div>
                <div className='p-4 flex items-center justify-center h-full '>
                    <div className='flex flex-col px-20 border-r-2 border-r-gray-500 p-2'>
                        <div>
                            <h1 className='text-center font-semibold text-2xl mb-2'>Description</h1>
                            <div className='text-center'>
                                <p>Meet the Apex Wireless Earbuds. Experience crystal-clear sound and immersive bass in a featherlight design. With 30 hours of battery life and instant pairing, your playlist never has to stop. Elevate your audio experience today.</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div>
                                <h1 className='text-center font-semibold text-2xl mb-2'>Snaps</h1>
                            </div>
                            <div className='flex items-center justify-center gap-10 mt-5'>
                                <img src={pic} alt="image not found" className='h-48 w-48 rounded-md' />
                                <img src={pic} alt="image not found" className='h-48 w-48 rounded-md' />
                                <img src={pic} alt="image not found" className='h-48 w-48 rounded-md' />
                                <img src={pic} alt="image not found" className='h-48 w-48 rounded-md' />
                            </div>
                        </div>
                    </div>
                    <div className='w-200 flex flex-col'>
                        <div>
                            <h1 className='text-center font-semibold text-xl mb-2 underline'>Contact Details</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className='text-center text-lg mb-2'>Address</h1>
                                <p className='text-xl font-semibold text-center'>Syokimau, Nairobi</p>
                            </div>
                            <div>
                                <h1 className='text-center text-lg mb-2'>Price per hr</h1>
                                <p className='text-xl text-center font-semibold'>2000 /=</p>
                            </div>
                            <div className='flex flex-col justify-center items-center  gap-2 mt-10'>
                                <p className='italic text-sm text-red-500'>Click Book now to view what periods are available</p>
                                <Link to='/client/checkout' className='bg-[#111827] p-2 font-semibold text-white rounded-md cursor-pointer'>BOOK NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default View
