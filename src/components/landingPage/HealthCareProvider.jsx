import React from 'react'
import './healthcareprovider.css'
import banner from '../../images/health-care-img.png'

const HealthCareProvider = () => {
  return (
    <div className='healthcareprovider'>
        <div className="image">
            <img src={banner} alt="" />
        </div>
        <div className="content">
            <h2>Leading healthcare providers</h2>
            <p>Medicare provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</p>
            <button onClick={() => alert('Coming soon')}>Learn More</button>
        </div>
    </div>
  )
}

export default HealthCareProvider