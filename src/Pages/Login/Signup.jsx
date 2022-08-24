import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { instance } from "../../api";

const Signup = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [password, setPassWord] = useState();
    const [checkPassword, setCheckPassWord] = useState();
    // const [info,setInfo] = useState([]);
    const navigate = useNavigate();

    function handlesubmit_sigup(e) {
        e.preventDefault();
        const data = {
            user_name: userName,
            email: email,
            firstName: firstName,
            lastName: lastName,
            height: height,
            weight: weight,
            imgProfile: 'img_avatar2 .png',
            birthday: startDate,
            password: password,
            checkPassword: checkPassword
        };

        const check = async (user_name = data.user_name) => {
            const response = await instance.get('/users/signup/check', { params: { user_name: user_name } });
            if (response.data) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'This Username is already use.',
                })
            } else if (data.password !== data.checkPassword) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Passwords do not match.',
                })
            } else {
                instance.post('/users/signup', data).then(()=>
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your registration has been successfully completed.',
                        showConfirmButton: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            
                                navigate('/')
                            
                            
                        }
                        
                    })

                ).catch(
                    (error) => {
                        if (error.response) console.log(error.response.data);
                    }
                )
            }
        }
        check()
    }
    return (
        <div className="main-login">
            <div className='bg-form'>
                <div className='signup-form'>
                    <form onSubmit={handlesubmit_sigup}>
                        <div className="imgcontainer">
                            <h1 className='signup-header'>Sign-Up</h1>
                        </div>

                        <div className="container-log-sign">
                            <div id='input-signup'>
                                <div className='item'><input id='input' type="text" placeholder="Username" name="uname"
                                    onChange={e => setUserName(e.target.value)} required /></div>
                                <div className='item'><input id='email' type="email" placeholder="Email" name="email"
                                    onChange={e => setEmail(e.target.value)} required /></div>
                                <div className='item'><input id='input' type="text" placeholder="First Name" name="fname"
                                    onChange={e => setFirstName(e.target.value)} required /></div>
                                <div className='item'><input id='input' type="text" placeholder="Last Name" name="lname"
                                    onChange={e => setLastName(e.target.value)} required /></div>
                            </div>
                            <div id='shape-signup'>
                                <div className='item'><input id='input' type="number" placeholder="Height" name="height"
                                    onChange={e => setHeight(e.target.value)} required /></div>
                                <div className='item'> <input id='input' type="number" placeholder="Weight" name="weight"
                                    onChange={e => setWeight(e.target.value)} required /></div>
                                {/* <div className='item'> <input id='input' type="number" placeholder="Date" name="date" required /></div> */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div id='input-signup'>
                                <div className='item'> <input id='input' type="password" placeholder="Password" name="pasw"
                                    onChange={e => setPassWord(e.target.value)} required /></div>
                                <div className='item'> <input id='input' type="password" placeholder="Confirm Password" name="cpasw"
                                    onChange={e => setCheckPassWord(e.target.value)} required />
                                </div>
                            </div>


                            <div id='button-login'>

                                <button className='login' type="submit">Sign Up</button>
                                <button className='signup' type="reset">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup