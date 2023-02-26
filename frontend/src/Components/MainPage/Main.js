import React from 'react'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './Main.css'

const Main = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='navbar'>
      
      <Link to="/main/restra" className='restra'>Create Restaurant </Link>
      <Link to="/main/allRestra" className='restra'>All Restaurants </Link>
      <Link to="/main/order" className='order'>Order</Link>
     
      <button onClick={() =>navigate('/')}>Log Out</button>
      </div>
      <Outlet  />
    </div>
  )
}

export default Main
