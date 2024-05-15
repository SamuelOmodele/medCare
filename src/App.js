import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './Navigation';
import Home from './components/landingPage/Home';
import Services from './components/landingPage/Services';
import HealthCareProvider from './components/landingPage/HealthCareProvider';
import OurApp from './components/landingPage/OurApp';
import Footer from './components/landingPage/Footer';
import Login from './components/loginpage/Login';
import Signup from './components/loginpage/Signup';
import Sidebar from './components/sidebarFolder/Sidebar';
import Dashboard from './components/dashboardPage/Dashboard';
import Appointment from './components/BookingAppointment/Appointment';
import MedicalServices from './components/servicesPage/MedicalServices';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={
        <>
          <Navigation current_link={'home'}/>
          <Home />
          <Services />
          <HealthCareProvider />
          <OurApp />
          <Footer />
        </>
        }/>
        <Route path='/login' element={
        <>
          <Navigation current_link={'login'}/>
          <Login />
        </>
        }/>
        <Route path='/signup' element={
        <>
          <Navigation current_link={'login'}/>
          <Signup />
        </>
        }/>
        <Route path='/dashboard' element={
        <div className='flex'>
          <Sidebar current={'Dashboard'}/>
          <Dashboard />
          
        </div>
        }/>
        <Route path='/services' element={
        <div className='flex'>
          <Sidebar current={'Services'}/>
          <MedicalServices />
          
        </div>
        }/>

        <Route path='/appointment' element={
        <div className='flex'>
          <Sidebar current={'Services'}/>
          <Appointment />
          
        </div>
        }/>
      </Routes>
      
    </div>
  );
}

export default App;
