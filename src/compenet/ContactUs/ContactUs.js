import React from 'react'
import './ContactUs.css'
export const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="items-side">
        <div className="item-title">
          <h2 >GET IN TOUCH</h2>
        </div>
        <div className="contact-option">
          <div className="first-option">
            <button><i class="fa-solid fa-envelope"></i></button>
            <h6>email</h6>
            <li>fit_shop@gmail.com</li>
          </div>
          <div className="first-option">
            <button><i class="fa-brands fa-facebook-f"></i></button>
            <h6>facebook</h6>
            <li>fit shop</li>
          </div><div className="first-option">
            <button><i class="fa-brands fa-whatsapp"></i></button>
            <h6>whatsapp</h6>
            <li>+212----------</li>
          </div>
        </div>
      </div>
      <div className="bottom-side">
        <div className="right-side">
          <h2>MESSAGE US</h2>
          <h6>FOR YOUR OPINIONS DONT FORGOT TO MESSAGE US VIA OUR EMAIL.</h6>
        </div>
        <div className="left-side">
          <div className="name-side">
            <input type="text" placeholder='fisrt name' />
            <input type="text" placeholder='last name' />
          </div>
          <div className="email-side">
            <input type="email" placeholder='email' />
          </div>
          <div className="message">
            <textarea name="" id="" cols="60" rows="5" placeholder='subject'></textarea>
            <button className='send'>send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
