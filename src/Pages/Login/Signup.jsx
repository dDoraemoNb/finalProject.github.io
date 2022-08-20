import "./Login.css";
import React,{ useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

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
            imgProfile:'img_avatar2 .png',
            birthday: startDate,
            password: password,
            checkPassword: checkPassword

            // user_Name: info.userName,
            // email: info.email,
            // firstName: info.firstName,
            // lastName: info.lastName,
            // height: info.height,
            // weight: info.weight,
            // birthday: info.startDate,
            // password: info.passWord,
            // check_password: info.checkPassWord
        };
        axios.post('http://localhost:8080/users/signup', data).then(
            navigate('/')
        ).catch(

            err => {
                console.log(err)
            }
        )
        // console.log(data)
    }
    // function checkInfo(){
    //     if(e.checkPassword.value !==e.passWord.value){

    //     }
    // }

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
                                <div className='item'><input id='email' type="text" placeholder="Email" name="email"
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