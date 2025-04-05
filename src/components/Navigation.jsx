import React from 'react'

const Navigation = () => {
  return (
    <div>
      <nav className='Container'>
        <div className="navlogo">
          <img src='images/brand_logo.png' alt='logo'/>
        </div>
        <div className="navser">
          <ul>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
          </ul>
        </div>
        <div className="navlog">
          <button>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
