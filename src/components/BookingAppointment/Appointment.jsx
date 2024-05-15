import React, { useEffect, useState } from 'react'
import './appointment.css'
import { auth } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {

  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentMsg, setAppointmentMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser){
      console.log('Email: ', auth.currentUser.email)
    }
  })

  const bookAppointment = async(e) => {
    e.preventDefault();

    try{
      await addDoc(collection(db, 'AppointmentRecord'), {
        email: auth.currentUser.email,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        appointmentMsg: appointmentMsg, 
        createdAt: new Date()
      });
      alert('Appointment Scheduled Successfully')
      navigate('/dashboard')
    } catch ( error){
      console.log(error)
    }
  }


  return (
    <div className='appointment'>

        <div className="dashboard-nav">
          <p>Medicare Health Clinic</p>
        </div>

        <div className="appointment-form">
          <form action="" onSubmit={bookAppointment}>
            <h2>Book an Appointment</h2>
            <div className="form-control">
              <label htmlFor="date">Appointment Date</label>
              <input type="date" name="date" id="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required/>
            </div>
            <div className="form-control">
              <label htmlFor="date">Time</label>
              <input type="time" name="" id="" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required/>
            </div>
            <div className="form-control">
              <label htmlFor="password">Enter Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message ...' style={{resize: 'none'}} value={appointmentMsg} onChange={(e) => setAppointmentMsg(e.target.value)} required></textarea>
            </div>
            <div className="form-control">
              <button type='submit' className='btn-appointment'>Book Appointment</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Appointment