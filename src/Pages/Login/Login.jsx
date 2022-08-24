import { React, useState, useEffect } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import useToken from '../../useToken';
import { instance } from '../../api';
// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const usedToken = useToken()
    
    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({
    //         userName,
    //       password
    //     });
    //     setToken(token);
    //   }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log('WORK')

        const data = {
            user_name: userName,
            password: password
        }

        const checkLogin = async (user_name = data.user_name) => {
            const response = await instance.get('/users/signup/check', { params: { user_name: user_name } });
            if (!response.data) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid username ',
                })
            } else if (data.password !== response.data.password) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid  password',
                })
            } else {
                instance.post('/login', data)
                    .then(res => {
                        // console.log(res)
                        usedToken.setToken(res.data)
                        navigate('/')
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
        checkLogin()
    }
    return (
        <div className='main-login'>
            <div className='bg-form'>
                <div className='login-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="imgcontainer">
                            <img src="/img_avatar2 .png" alt="Avatar" className="avatar" />
                        </div>

                        <div className="container">
                            <div id='input-signup'>
                                <input type="text" placeholder="Enter Username" name="uname"
                                    onChange={e => setUserName(e.target.value)} required />

                                <input type="password" placeholder="Enter Password" name="psw"
                                    onChange={e => setPassword(e.target.value)} required />
                            </div>
                            {/* <div className="checkbox">
                                <input type="checkbox" checked="checked" name="remember" />
                                <label>Remember me</label>
                            </div> */}
                        </div>
                        <a href='/' ><button className='login' type="submit" >Log In</button></a>
                        {/* <div className="container" style="background-color:#f1f1f1">
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div> */}

                    </form>
                    <div id='button-login'>
                        {/* <a href='signup'><button className='signup'>Sign Up</button></a> */}
                        <Link to="/signup" className='signup'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
