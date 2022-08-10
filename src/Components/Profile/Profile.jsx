import React from 'react'
import './Profile.css'
// import imgProfile from './ab67706c0000bebbb1940ea8c5d86f564b684597.jpg'

const Profile = (props) => {
    
    function getAge( dateString ) 
{
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

    return (
        <div className="profile">
            <h1>My Profile</h1>
            <img src='../../../public/ab67706c0000bebbb1940ea8c5d86f564b684597.jpg' alt="img profile" />

            <div className='fullName'>
                <p className='Name'>{props.profile.name} {props.profile.lastname}</p>
                <p className='Result'>{getAge(props.profile.yrs)} Yrs.</p>
            </div>
            <div className='Height'>
                <p><>Height</></p>
                <p className='Result'>{props.profile.height} Cm.</p>
            </div>
            <div className='Weight'>
                <p>Weight</p>
                <p className='Result'>{props.profile.weight} Kg.</p>
            </div>

        </div>
    )
}

export default Profile