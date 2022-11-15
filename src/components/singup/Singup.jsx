import React from 'react'
import { useNavigate } from 'react-router-dom'
import { env } from '../config'
import { useFormik } from 'formik';
import axios from 'axios';

function Singup() {

    const navigate = useNavigate()

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
                let loginData = await axios.post(`${env.api}/register`, values)
                if (loginData.status === 200) {
                    navigate("/")
                    window.localStorage.setItem("app-token", loginData.data.token)
                }
                console.log(loginData)
            } catch (error) {
                alert(error.response.data.messege)
                console.log(error)
            }
            console.log(values)
        }
    })

    return (

        <div class="container">
            <div class="screen">
                <div class="screen__content">
                    <form class="login" onClick={formik.handleSubmit}>
                        <div class="login__field">
                            <i class="login__icon fas fa-user"></i>
                            <input type="email" class="login__input" placeholder="User name / Email" value={formik.values.email} onChange={formik.handleChange} name="email" />
                            <span style={{ color: 'white' }}>...</span>
                            <span style={{ color: 'red' }}>{formik.errors.email}</span>
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="password" class="login__input" placeholder="Password" value={formik.values.password} name="password" onChange={formik.handleChange} />
                            <span style={{ color: 'red' }}>{formik.errors.password}</span>
                        </div>
                        <button class="button login__submit">
                            <span class="button__text" >Rigister</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
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

export default Singup
