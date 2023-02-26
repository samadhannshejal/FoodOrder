import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Front.css'
const Front = () => {

const navigate=useNavigate()
  return (
    <div className='front'>
    <div >
      <h1>!! ₩ɆⱠ-₵Ø₥Ɇ !!  </h1>
      <h1>FooD Order System </h1>
      <button onClick={()=>navigate('/register')}>Enter</button>
    </div>
    </div>
  )
}

export default Front
