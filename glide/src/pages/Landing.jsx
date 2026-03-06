import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>

      <div>
        <Link to='/register'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>
    </div>
  )
}

export default Landing
