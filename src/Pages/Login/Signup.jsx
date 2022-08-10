import "./Login.css";
import React from "react";
import { useState } from "react";

import DatePicker from "react-datepicker";
const Signup = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="main-login">
            <div className='bg-form'>
                <div className='signup-form'>
                    <form action="#" method="post">
                        <div className="imgcontainer">
                            <h1 className='signup-header'>Sign-Up</h1>
                        </div>

                        <div className="container-log-sign">
                            <div id='input-signup'>
                                <div className='item'><input id='input' type="text" placeholder="Username" name="uname" required /></div>
                                <div className='item'><input id='input' type="text" placeholder="Email" name="email" required /></div>
                                <div className='item'><input id='input' type="text" placeholder="First Name" name="fname" required /></div>
                                <div className='item'><input id='input' type="text" placeholder="Last Name" name="lname" required /></div>
                            </div>
                            <div id='shape-signup'>
                                <div className='item'><input id='input' type="number" placeholder="Height" name="height" required /></div>
                                <div className='item'> <input id='input' type="number" placeholder="Weight" name="weight" required /></div>
                                {/* <div className='item'> <input id='input' type="number" placeholder="Date" name="date" required /></div> */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div id='input-signup'>
                                <div className='item'> <input id='input' type="password" placeholder="Password" name="pasw" required /></div>
                                <div className='item'> <input id='input' type="password" placeholder="Confirm Password" name="cpasw" required />
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