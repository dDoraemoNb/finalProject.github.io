import './Profile.css'
import imgProfile from './ab67706c0000bebbb1940ea8c5d86f564b684597.jpg'

const Profile = () => {
    return (
        <div className="profile">
            <h1>My Profile</h1>
            <img src={imgProfile} alt="img profile" />
            <p><span>AMAN</span><span>Stcickman</span></p>
            <span>150 Yrs.</span>
            <p><span>Height</span></p>
            <p>185 Cm.</p>
            <p><span>Weight</span></p>
            <p>65 Kg.</p>
        </div>
    )
}

export default Profile