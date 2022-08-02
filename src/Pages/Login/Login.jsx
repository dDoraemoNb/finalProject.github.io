import { React, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import './Login.css'


const Login = (props) => {

    return (
        <div className='main-login'>
            <div className='bg-form'>
                <div className='login-form'>
                    <form>
                        <div className="imgcontainer">
                            <img src="../../../public/img_avatar2 .png" alt="Avatar" className="avatar" />
                        </div>

                        <div className="container">
                            <div id='input-signup'>
                                <input type="text" placeholder="Enter Username" name="uname" required />

                                <input type="password" placeholder="Enter Password" name="psw" required />
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" /*checked="checked"*/ name="remember" />
                                <label>Remember me</label>
                            </div>
                        </div>
                        <a href='/' ><button className='login' type="submit" >Log In</button></a>
                        {/* <div className="container" style="background-color:#f1f1f1">
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div> */}

                    </form>
                    <div id='button-login'>
                        <a href='signup'><button className='signup'>Sign Up</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login