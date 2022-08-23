import React, { useState, useEffect } from "react";
import './Greeting.css';
import winner from '../../../public/winner.svg'
import useToken from '../../useToken';
import axios from "axios";
const Greeting=(props)=> {
    const { token, setToken } = useToken();
    const [profile, setProfile] = useState({});
    const getProfile = async (user = token) => {
        const response = await axios.get('http://localhost:8080/users/user', { params: { user_id: user } });
        // console.log(response.data)
        setProfile(response.data)
        
      }

      useEffect(() => {
        getProfile();
        // getdetail()
    }, []);

    return (
        <div className="sayhi-user">
            <div className="sayhi-user-text">
                <h3 className="sayhi-title">Hi! <strong className="name"> {profile.firstName}</strong></h3>
                <p className="sayhi-description">
                    Plan your days to be more productive,you have 4 daily recommend to complete today.
                </p>
            </div>
            <div class="reward-image">
                <img src= {winner}/>
            </div>
        </div>
    );
}

export default Greeting;