import React from 'react'
import './FlowerButton.css'
import { Link } from 'react-router-dom'


function FlowerButton() {


  return (
    <div >
      <button ><Link to='./' className="flo-btn">Buy a flower</Link></button>
    </div>
  )
}

export default FlowerButton
