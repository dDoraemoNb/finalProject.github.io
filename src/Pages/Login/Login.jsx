import { React, useState, useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';


const Login = (props) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('WORK')
    }
    return (
        <div className='main-login'>
            <div className='bg-form'>
                <div className='login-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="imgcontainer">
                            <img src="../../../public/img_avatar2 .png" alt="Avatar" className="avatar" />
                        </div>

                        <div className="container">
                            <div id='input-signup'>
                                <input type="text" placeholder="Enter Username" name="uname"
                                    onChange={e => username = e.firstnamme.value} required />

                                <input type="password" placeholder="Enter Password" name="psw"
                                    onChange={e => firstnamme = e.firstnamme.value} required />
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
                        {/* <a href='signup'><button className='signup'>Sign Up</button></a> */}
                        <Link to="/signup" className='signup'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login