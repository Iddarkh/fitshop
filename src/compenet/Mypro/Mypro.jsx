import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const Mypro = (props) => {
  
  
  return (
  
   <div className="first-item">
    <div className="product-img">
      <img src={props.src} alt="" />
    </div>
    <div className="product-title">
      <li>{props.firstTitle}</li>
      <li>{props.secondTitle}</li>
      <li>{props.poid}</li>
      <button className='butta'><Link to ="/Buy">{props.buynow}</Link></button>
      <div className="offre-side">
        <button>{props.offre}</button>
      </div>
    </div>
   </div>
  
  )
}

