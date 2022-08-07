import React from 'react'
import './Profile.css'
// import imgProfile from './ab67706c0000bebbb1940ea8c5d86f564b684597.jpg'

const Profile = (props) => {
    return (
        <div className="profile">
            <div>
                <h1>My Profile</h1>
                <img src='../../../public/ab67706c0000bebbb1940ea8c5d86f564b684597.jpg' alt="img profile" />
            </div>
            <div>
                <p>{props.profile.name} {props.profile.lastname}</p>
                <p>{props.profile.yrs} Yrs.</p>
            </div>
            <div>
                <p>Height</p>
                <p>{props.profile.height} Cm.</p>
            </div>
            <div>
                <p>Weight</p>
                <p>{props.profile.weight} Kg.</p>
            </div>

        </div>
    )
}

export default Profile