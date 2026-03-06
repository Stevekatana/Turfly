import React from 'react'

function Confirm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-lg shadow-xl text-center border border-blue-500">
        <h2 className="text-3xl font-bold mb-4">📧 Check your email!</h2>
        <p className="text-gray-400 mb-6">
          We sent a magic link to your inbox. <br /> 
          Click it to verify your account and you'll be redirected automatically.
        </p>
        <div className="animate-bounce text-blue-400">
          Waiting for confirmation...
        </div>
      </div>
    </div>
  )
}

export default Confirm
