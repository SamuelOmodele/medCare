import React, { useState } from 'react'
import './medicalservices.css'
import { useNavigate } from 'react-router-dom';

const MedicalServices = () => {

  const [comingSoonAlert, setComingSoonAlert] = useState(false);
  const navigate = useNavigate();

  const goToAppointment = () => {
    console.log('testing')
    navigate('/appointment')
  }

  const comingSoon = () => {
    setComingSoonAlert(true);
  }

  const services = [
    {
      functionCall: comingSoon,
      icon: 'local_pharmacy',
      title: 'Online Pharmacy',
      description: 'Your online pharmacy for quality care, delivered.'
    },
    {
      functionCall: goToAppointment,
      icon: 'book_online',
      title: 'Schedule Appointment',
      description: 'Easily book appointments online with us. Your health, your schedule, our priority.'
    },
    {
      functionCall: comingSoon,
      icon: 'receipt_long',
      title: 'Pay Bills',
      description: 'Pay your bills hassle-free with our secure online portal. Convenient, efficient, and worry-free transactions'
    },
    {
      functionCall: comingSoon,
      icon: 'ambulance',
      title: 'Emergency',
      description: 'Urgent care when you need it most. Trust us for prompt and compassionate emergency services'
    },
  ]

  return (
    <div className='dashboard'>
      <div className="dashboard-nav">
        <p>Medicare Health Clinic</p>
      </div>
      {comingSoonAlert && <div className="coming-soon-alert">
        Coming Soon
        <span className="material-symbols-outlined" onClick={() => setComingSoonAlert(false)}>close</span>
      </div>}
      <div className="container">
        <p className='head-text'><span className="material-symbols-outlined">list</span> Services</p>
        <div className="boxes">

          {services.map((service, index) => (
            <div className="box" onClick={service.functionCall} key={index}>
              <span className="material-symbols-outlined">{service.icon}</span>
              <div className="box-text">
                <p className="thick">{service.title}</p>
                <p className='small'>{service.description}</p>
              </div>

            </div>
          ))}

        </div>
        <p className='description'>Explore a wide range of personalized services designed to promote wellness and enhance your quality of life</p>

      </div>



    </div>
  )
}

export default MedicalServices