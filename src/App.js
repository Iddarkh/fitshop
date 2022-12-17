import React from 'react';
import {Navbar} from './compenet/navbar/Navbar'
import {BrowserRouter,Route, Link, Routes } from 'react-router-dom';
import {Home} from './compenet/Home/Home';
import {Product} from './compenet/Product/Product';
import {JoinUs} from './compenet/JoinUs/JoinUs'
import {ContactUs} from './compenet/ContactUs/ContactUs'
import './App.css'
import { Buynow } from './compenet/Product/buynow';

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Product' element={<Product/>}></Route>
            <Route path='/JoinUs' element={<JoinUs />}></Route>
            <Route path='/ContactUs' element={<ContactUs/>}></Route>
            <Route path='/Buy' element={<Buynow/>}></Route>

            
    </Routes>
    </BrowserRouter>
    </>
  )
}
