import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { collection, query, where, getDocs, getDoc, doc, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase'

const Dashboard = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userAppointmentList, setUserAppointmentList] = useState([]);
  const [comingSoonAlert, setComingSoonAlert] = useState(false);
  const [activeAppointment, setActiveAppointment] = useState(null);
  
  const fetchUserAppointment = async(email) => {
    try {
      const q = query(collection(db, 'AppointmentRecord'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          fetchAppointmentDocument(doc.id);
        });
      } else {
        console.log("User data not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  const fetchAppointmentDocument = async (id) => {
    try {
      const docRef = doc(db, 'AppointmentRecord', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserAppointmentList(prevAppointments => [...prevAppointments, docSnap.data()]);
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  }

  const fetchCurrentUser = async(email) => {
    try {
      const q = query(collection(db, 'UserRecord'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          fetchDocument(doc.id);
        });
      } else {
        console.log("User data not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error appropriately (e.g., show error message to user)
    }
  }

  const fetchDocument = async (id) => {
    try {
      const docRef = doc(db, 'UserRecord', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  }

  useEffect(() => {
    let current_user = auth.currentUser;

    if (current_user){
      console.log(current_user);
      fetchCurrentUser(current_user.email);
      fetchUserAppointment(current_user.email)
    }
  }, [])

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
      <div className='body-section'>
      {user && <>
        
        <div className="container">
          <p className='head-text'><span className="material-symbols-outlined">Dashboard</span> Dashboard</p>
          <div className="boxes">
            
            {services.map((service, index) => (
            <div className="box"onClick={service.functionCall} key={index}>
              <span className="material-symbols-outlined">{service.icon}</span>
              <div className="box-text">
                <p className="thick">{service.title}</p>
                <p className='small'>{service.description}</p>
              </div>

            </div>))}
          </div>

          <div className="container2">
            <p className='head-text'><span class="material-symbols-outlined">list</span> Electronic History</p>
            {userAppointmentList.length === 0 && <p>No Appointment Created yet</p>}

            <div className="medical-list">
              {userAppointmentList.sort((a, b) => b.createdAt - a.createdAt).map((appointment, index) => (
                <div className="row" key={index}>
                  <i className='bx bx-plus-medical'></i>
                  <div>
                    <h3>Appointment</h3>
                    <p>Date: {appointment.appointmentDate} | Time: {(appointment.appointmentTime).toString().slice(0, 2) > 12 ? `${(appointment.appointmentTime).toString().slice(0, 2)%12}:${(appointment.appointmentTime).toString().slice(3, 5)} PM` : `${appointment.appointmentTime} AM`}</p>
                  </div>
                  <i className='bx bx-right-arrow-alt right-arrow' onClick={()=> setActiveAppointment(appointment)}></i>
                </div>
              ))}
            </div>

          </div>

          {activeAppointment &&
            <>
            <div className="background"></div>
            <div className="appointment-form modal">
              <form action="">
              <span class="material-symbols-outlined" onClick={() => setActiveAppointment(null)}>close</span>
                <h2>Appointment Schedule</h2>
                <div className="form-control">
                  <input type="date" name="date" id="date" value={activeAppointment.appointmentDate}  />
                </div>
                <div className="form-control">
                  <input type="time" name="" id="" value={activeAppointment.appointmentTime}  />
                </div>
                <div className="form-control">
                  <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message ...' style={{ resize: 'none' }} value={activeAppointment.appointmentMsg} required></textarea>
                </div>
              </form>
            </div>
            </>
          }
        </div>
        </>}
      {!user && <p className='loading'>Loading...</p>}
      </div>
    </div>
  )
}

export default Dashboard