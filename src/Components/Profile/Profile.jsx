import React,{useState,useEffect} from 'react'
import './Profile.css'
import useToken from '../../useToken';
import axios from 'axios';
import { instance } from '../../api';
// import imgProfile from './ab67706c0000bebbb1940ea8c5d86f564b684597.jpg'

const Profile = (props) => {
    const { token, setToken } = useToken();

    const [profile, setProfile] = useState(
        { firstName: 'Aman', lastName: 'Stickman', imgProfile: '001', birthday: "1900-10-28", height: 185, weight: 65 }
      );
    const getProfile = async (user = token) => {
        const response = await instance.get('/users/user', { params: { user_id: user } });
        // console.log(response.data)
        setProfile(response.data)
        
      }

      useEffect(() => {
        getProfile();
        // getdetail()
    }, []);

    // const getdetail=()=>{
    //     props.profile(profile)
    //   }
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
let imgprofile = `/${profile.imgProfile}`;

    return (
        <div className="profile">
            <h1>My Profile</h1>
            <img src={imgprofile} alt="img profile" />

            <div className='fullName'>
                <p className='Name'>{profile.firstName} {profile.lastName}</p>
                <p className='Result'>{getAge(profile.birthday)} Yrs.</p>
            </div>
            <div className='Height'>
                <p><>Height</></p>
                <p className='Result'>{profile.height} Cm.</p>
            </div>
            <div className='Weight'>
                <p>Weight</p>
                <p className='Result'>{profile.weight} Kg.</p>
            </div>

        </div>
    )
}

export default Profile