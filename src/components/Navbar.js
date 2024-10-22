import React from 'react'
import header from '../Images/brand_logo.png'
import '../App.css'


const Navbar = () => {
  return (
    <div >
      <nav className='navbar'>
          <div className='header'>
             <img src={header}></img>
          </div>
          <div className='menubar'>
             <div >MENU</div>
             <div>LOCATION </div>
             <div>ABOUT</div>
            <div>CONTACT</div>
          </div>
          <div className='login'>
            <button>LOGIN</button>
          </div>
      </nav>
    </div>
  )
}

export default Navbar