import React from 'react'
import './Product.css'
import a_img from '../images/a.png'
import b_img from '../images/b.png'
import c_img from '../images/c.png'
import d_img from '../images/d.png'
import e_img from '../images/e.png'
import f_img from '../images/f.png'
import g_img from '../images/g.png'
import h_img from '../images/h.png'
import { useState } from 'react';
import { Link } from 'react-router-dom'





import { Mypro } from '../Mypro/Mypro'
export  const Product = () => {
  
  
  return (
    
    <>
    
   <div className="product-container">
    
   <Mypro src={a_img} firstTitle={"whey"} secondTitle={"100$"} offre={"-15%"} poid={"3,5kg"} buynow={"ADD TO CARD"}/>
   <Mypro src={b_img} firstTitle={"BCAA"} secondTitle={"30$"} offre={"-7%"} poid={"0.32kg"} buynow={"ADD TO CARD"}/>
   <Mypro src={c_img} firstTitle={"Nitro tech"} secondTitle={"70$"} offre={"-13%"} poid={"5kg"} buynow={"ADD TO CARD"}/>
   <Mypro src={d_img} firstTitle={"serious mass"} secondTitle={"60$"} offre={"-11%"} poid={"5kg"} buynow={"ADD TO CARD"}/>
   </div>
   
   <div className="product-container"> 
   <Mypro src={e_img} firstTitle={"elite mass tech"} secondTitle={"60$"} offre={"-14%"} poid={"3'kg"} buynow={"ADD TO CARD"}/>
   <Mypro src={f_img} firstTitle={"muscl mass"} secondTitle={"70$"} offre={"-10%"} poid={"4kg"} buynow={"ADD TO CARD"}/>
   <Mypro src={g_img} firstTitle={"mass gainer"} secondTitle={"86$"} offre={"-12%"} poid={"5,2kg"} buynow={"ADD TO CARD"}/>
   <Mypro src={h_img} firstTitle={"Critical mass"} secondTitle={"55$"} offre={"-10%"} poid={"3kg"} buynow={"ADD TO CARD"}/>
   </div>
  
  
   </>
  )
}
