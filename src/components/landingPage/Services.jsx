import React from 'react'
import './services.css'
import { services } from '../../Data'
import { useNavigate } from 'react-router-dom'

const Services = () => {

    const navigate = useNavigate();
    return (
        <div className='services'>
            <div className="texts">
                <h2>Our services</h2>
                <p>We provide you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
            <div className="cards">
                {services.map((data, index) => (
                    <div className='card' key={index}>
                        <img src={data.image} alt="" />
                        <h2>{data.head}</h2>
                        <p>{data.subhead}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate('/login')}>Learn More</button>

        </div>


    )
}

export default Services