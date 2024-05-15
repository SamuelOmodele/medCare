import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="col">
            <div className="head">
                <div className="logo">
                    <div className='icon'>M</div>
                    <span>Medicare Clinic</span>
                </div>
            </div>
            <div className="mid">
                <p>Medicare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            </div>
            <div className="mid">
                <p>© Medicare PTY LTD 2023. All rights reserved.</p>
            </div>

        </div>
        <div className="col">
            <div className='list'>
                <li><b>Company</b></li>
                <li>About</li>
                <li>Find a doctor</li>
                <li>Apps</li>
            </div>
        </div>
        <div className="col">
            <div className='list'>
                <li><b>Region</b></li>
                <li>Indonesia</li>
                <li>Singapore</li>
                <li>Hongkong</li>
                <li>Canada</li>
            </div>
        </div>
        <div className="col">
            <div className='list'>
                <li><b>Help</b></li>
                <li>Help center</li>
                <li>Contact Support</li>
                <li>Instruction</li>
                <li>How it works</li>
            </div>
        </div>
    </div>
  )
}

export default Footer