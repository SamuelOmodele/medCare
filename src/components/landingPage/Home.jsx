import React from 'react'
import './home.css'
import logo from '../../images/banner-image.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate = useNavigate();
  return (
    <div className='home'>
        <div className="content">
            <h2>Medicare Health Clinic</h2>
            <p>Welcome to Medicare Health Clinic, your trusted partner in medical health care. Experience personalized care, advanced treatments, and compassionate service. Let us guide you towards optimal health and wellness. Explore our services today.</p>
            <button onClick={() => navigate('/login')}>Consult Today</button>
        </div>
        <div className="image">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Home