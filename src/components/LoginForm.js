import React, {useState} from 'react'
import './LoginForm.css'

const LoginForm = () => {

    const [loginForm, setLoginForm] = useState({

        email: "",
        password: ""
    });

    const [loginError, setLoginError] = useState({})

    const validateInfo = () => {
        let error = {}

        if (loginForm.email  === "") {
            error.name = "Full email Required!"
        }
        if(loginForm.password === "" || loginForm.length < 4) {
            error.password = "Password cannot be empty or less than 4 characters."
        }

        setLoginError({...error})
        return Object.keys(error).length < 1;

    }
    
    const onChangeHandler = (e) =>{
        setLoginForm(()=>({
            ...loginForm,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        let isValid = validateInfo()
        if(isValid){
            alert("Submitted")
        }

    }

    const show = (loginError.length > 0)

    console.log(show)

  return (
    <div className='form-container'>
    <form onSubmit={onSubmitHandler} aria-label="form" >
      <div className='field'>
        <label htmlFor='email'>Email</label>
        <input 
        type='email'
        placeholder='example@email.com'
        name='email'
        onChange={onChangeHandler}
        />
        </div>
<div className='field'>
        <label htmlFor='password'>Password</label>
        <input 
        type="password"
        name='password'
        onChange={onChangeHandler}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
    </div>
  )
}

export default LoginForm
