import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <section id="HOME" class="HOME view">
        <div class="hightlight">
            <h2>THE FITNESS FECILITY FOR ALL OF YOUR NEEDS</h2>
            <button class="joinus"><Link to='/JoinUs'>Join Us</Link></button>
        </div> 

    </section>
  )
}
