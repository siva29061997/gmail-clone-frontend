import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { env } from '../config';

function Login() {
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: (values) => {
      let errors = {}

      if (values.email == "") {
        errors.email = "*Email is Required"
      }
      if (values.password == "") {
        errors.password = "*Password is Required"
      }
      return errors
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values)
        if (loginData.status === 200) {
          navigate("/portal/list")
          window.localStorage.setItem("app-token", loginData.data.token)
        }
        console.log(loginData)
      } catch (error) {
        alert(error.response.data.messege)
        console.log(error)
      }
    }
  })

  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login" onSubmit={formik.handleSubmit}>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input type="email" class="login__input" placeholder="User name / Email" value={formik.values.email} onChange={formik.handleChange} name="email" />
              <span style={{ color: 'white' }}>...</span>
              <span style={{ color: 'red' }}>{formik.errors.email}</span>
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input type="password" class="login__input" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} name="password" />
              <span style={{ color: 'red' }}>{formik.errors.password}</span>
            </div>
            <button class="button login__submit">
              <span class="button__text" >Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div class="social-login">
            <button onClick={() => navigate('/signup')} class="button login__submit">
              <span class="button__text">Sign Up</span>
            </button>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>

  )
}

export default Login
