import React from 'react'
// import {Link} from 'react-router-dom'
import FLOWER from '../image/purepng1.png'


function Flower() {
  return (
    <div>
       <section className="showcase">
      <div className="description">
      <h1>Flower Bay</h1>
       <p>Lovely flowers at your disposal</p><br/>
      <button id="btn">Shop Now</button></div>
      <div className="flower">
           <img src={FLOWER} alt='imag' />
       </div>

        </section>
    </div>
  )
}

export default Flower
