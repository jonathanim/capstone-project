import React from 'react'
import LoginForm from '../components/LoginForm'
import "./styles/Login.css"

const Login = () => {
  return (
    <div className='login-container'>
        <div className="center-container">
            <LoginForm/>
        </div>
    </div>
  )
}

export default Login
