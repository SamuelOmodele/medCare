import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'

const Navigation = ({current_link}) => {
  return (
    <nav>
        <div className="logo">
            <div className='icon'>M</div>
            <span>Medicare Clinic</span>
        </div>
        <ul>
            <li className={current_link === 'home' ? 'active' : ''}><Link to='/'>Home</Link></li>
            <li className={current_link === 'services' ? 'active' : ''}><Link to=''>Services</Link></li>
            <li className={current_link === 'apps' ? 'active' : ''}><Link to=''>Apps</Link></li>
            <li className={current_link === 'about us' ? 'active' : ''}><Link to=''>About us</Link></li>
            <li className={current_link === 'login' ? 'active' : ''}><Link to='/login'>Login</Link></li>
        </ul>
    </nav>

  )
}

export default Navigation