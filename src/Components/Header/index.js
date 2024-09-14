import React from 'react'
import './style.css'
import { useNavigate } from 'react-router'
const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='header'>
      <h2>ACO<span style={{color:'navy'}}>N</span>EWS</h2>
      <p onClick={()=>navigate(-1)}>Back</p>
    </div>
  )
}

export default Header
