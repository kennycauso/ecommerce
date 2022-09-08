import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiUserCircle } from 'react-icons/hi'

const FormLogin = () => {

  const [isLogged, setIsLogged] = useState()
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true)
    }
  }, [])

  const submit = data => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`;

    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        console.log(res.data)
        setIsLogged(true)
      })
      .catch(err => console.log(err))

    reset({
      email: '',
      password: ''
    })
  }

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setIsLogged(false)
  }


  if (isLogged) {
    return (
      <div className='logged-container'>
        <div className='logged-card'>
          <h2 className='logged-card__welcome'>Welcome!</h2>
          <div className='logged-card__circle'><HiUserCircle className='logged-card__icon' /></div>
          <span className='logged-card__name'>To the Kenny's E-commerce</span>
          <h4 onClick={handleLogOut} className='logged-card__logout'>Log out</h4>
        </div>
      </div>
    )
  } else {
    return (
      <form onSubmit={handleSubmit(submit)} className='login__form'>
        <h2 className='login__title'>Welcome! Enter your email and password to continue</h2>
        <div className='login__div-email'>
          <label className='login__label' htmlFor="email">Email</label>
          <input
            {...register('email')}
            className='login__input'
            type="email"
            id='email'
          />
        </div>
        <div className='login__div-password'>
          <label className='login__label' htmlFor="password">Password</label>
          <input
            {...register('password')}
            className='login__input'
            type="password"
            id='password'
          />
        </div>
        <button className='login__btn'>Login</button>
        <h4 className='login__text-no-account'>Don't have an account? <span className='login__text-sign-up'>Sign up</span></h4>
      </form>
    )
  }
}

export default FormLogin
