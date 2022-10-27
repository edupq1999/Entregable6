import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/loginScreen.css'

const LoginScreen = () => {

    const {handleSubmit, reset, register} = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => 
              localStorage.setItem('token', res.data.data.token),
              setIsLogged(true)
            )
            .catch(err => console.log(err))
    }

    useEffect(() => {
      if (localStorage.getItem('token')) {
        setIsLogged(true)
      } else {
        setIsLogged (false)
      }
    }, [])

    const handleLogout = () => {
      localStorage.removeItem('token')
      setIsLogged(false)
    }

    if (isLogged) {
      return  <div className='login_form '>
                <label className='login_form_label'>User is logged ✅</label>
                <button className='login_form_button' onClick={handleLogout}>Logout</button>
              </div>
    } else {
      return (
        <form onSubmit={handleSubmit(submit)} className='login_form'>
            <div className='login_form_container'>
            <label className='login_form_label' htmlFor="email">Email</label>
            <input className='login_form_input' type="text" id='email' placeholder='Enter email' {...register('email')}/>
            </div>
            <div className='login_form_container'>
            <label className='login_form_label' htmlFor="password">Password</label>
            <input className='login_form_input' type="password" id='password' placeholder='password' {...register('password')}/>
            </div>
            <button className='login_form_button'>Login</button>
        </form>
      )
    }
}

export default LoginScreen