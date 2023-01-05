import React from 'react'
import "./nav.css"

// ? rfce -> react functional component export- builds boilerplate function and names function to file name.

function Nav() {
  return (
    <div className='navbar'>
        <a href="" className="nav-link">About</a>
        <a href="" className="nav-link">Pricing</a>
        <a href="" className="nav-link">Contact</a>
    </div>
  )
}

export default Nav