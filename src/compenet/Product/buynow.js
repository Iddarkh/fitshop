import React from 'react'
import './buynow.css';
import { useState } from 'react';


export const Buynow = () => {
  const [userName,setUserName] = useState('');
  const [familyName,setFamilyName]=useState('');
  const [userMail,setUsermail] = useState('');
  const [cardNumber,setCardNumber] = useState('');
  const [userCvc,setuserCvc] = useState('');
  const [msg,setMsg] = useState('');
  const [auth,setAuth] = useState(false);
  const handleClick=()=>{
    if(userName.length > 6 && userCvc.length === 4 && cardNumber.length === 16){
      setMsg('votre command sera realiser merci pour votre attendre');
      setAuth(!auth)
    }
    else{
      setMsg("remplire tous les cases s'il vous plait");
    }
  }

  return (
    
    <div className= "start-payement">
  <div className="closing-btn">
      </div>
    <div className="payement-items">
      
      <div className="name-items">
      <div className="name-side">
        <label htmlFor="firs">first name</label>
        <div className="name-input">
          <input type="text" placeholder='write a first name' value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="name-side">
        <label htmlFor="firs">first name</label>
        <div className="name-input">
          <input type="text" placeholder='write a familly name' value={familyName} onChange={(e) => setFamilyName(e.target.value)}/>
        </div>
      </div>
    </div>
    <div className="card-email">
          <div className="card-number-side">
            <label htmlFor="">card number</label>
            <div className="card-number-input">
              <input type="number" placeholder='0000-00000-000-0000-0000'  value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}  />
            </div>
          </div>
          <div className="email-payement-side">
            <label htmlFor="">Email</label>
            <div className="card-number-input">
              <input type="email" placeholder='guest@gmail.com'  value={userMail} onChange={(e) => setUsermail(e.target.value)}/>
            </div>
          </div>
    </div>
    <div className="card-details">
      <div className="cvc-side">
        <label htmlFor="">cvc</label>
        <div className="cvc-input">
          <input type="number" placeholder='0213'  value={userCvc} onChange={(e) => setuserCvc(e.target.value)}/>
        </div>
      </div>
      <div className="date-side">
        <label htmlFor="">CARD EXP</label>
        <div className="date-input">
          <input type="date"/>
        </div>
      </div>
      
      
    </div>
    <h6 style={{color: auth ? 'green' : 'red'}}>{msg}</h6>
    <div className="payement-btn">
        <button onClick={handleClick}>buy now</button>
      </div>
  </div>
  </div>

  )
}
