import React from 'react'
import './Navbar.css'
import {BrowserRouter,Route, Link, Routes } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div class="navbar">
        <a href=""class="logo">FIT<b>SHOP</b></a>
        <ol>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/Product'>PRODUCT</Link></li>
            <li><Link to='/ContactUs'>CONTACT US</Link></li>
            <li><Link className='btn' to='JoinUs'>Join US</Link></li>
        </ol>
        
    </div>
  )
}
