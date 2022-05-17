import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import FlowerButton from './FlowerButton'
// import AnyName from '../images/imagenam.png' to import image do


function Nav () {
  return (
    <header>

        <h1><Link to='/' className='logo'>
      FlowerBay
      </Link></h1>
    <nav >
        
        <ul className="nav-links">
           <FlowerButton/>
          
            <li><Link to='/' className='links' >Home </Link></li>
            <li><Link to='/About us' className='links' > About Us</Link></li>
            <li><Link to='/Gallery' className='links' > Gallery</Link></li>
            <li><Link to='/Contact Us' className='links' > Contact Us</Link></li>
      
        </ul>
      
      </nav>
    </header>
  )
}

export default Nav