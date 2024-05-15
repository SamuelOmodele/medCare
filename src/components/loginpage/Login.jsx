import React, { useEffect, useState } from 'react'
import './login.css'
import login_img from '../../images/new_login-removebg-preview.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');


  useEffect(() => {
    auth.signOut(); // Sign out the current user when the component mounts
  }, []);
  

  const dashboard_redirect = () => {
    // navigate('/dashboard')
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      await signInWithEmailAndPassword(auth, email, password)
      alert('LOGIN SUCCESSFUL')
      navigate('/dashboard');
    } catch ( error){
      if (error.code === 'auth/network-request-failed'){
        setErrorMsg('No connection')
      } else if (error.code === 'auth/invalid-credential'){
        setErrorMsg('invalid Email or Password');
      } else {
        setErrorMsg(error.code)
      }
      console.log(error)
    }

  }

  return (
    <div className='login'>
      {errorMsg !== '' && 
      <div className='error'>
        <span class="material-symbols-outlined">error</span>
        <span className='error-text'> {errorMsg}</span>
        <span class="material-symbols-outlined" onClick={() => setErrorMsg('')}>close</span>
      </div>}
      <div className="card">
        <div className="login-form">
          <h2>Login</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder='Enter Email . . .' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter Password . . .' id='passwowrd' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div className="form-control">
              <button type='submit' onClick={dashboard_redirect}>Login</button>
              <span className='forgot'>forgot password</span>
            </div>
            <div className="form-control">
              <span className='acct'>Don't have an account? <Link to='/signup'>sign up</Link>
              </span>
            </div>
          </form>
        </div>
        <div className="login-image">
          <img src={login_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login