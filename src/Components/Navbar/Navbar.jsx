import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
// import logo from "../../../public/fit2B_logo_light.svg";
// import homeIcon from "./MenuIcons/home.svg";
// import challengeIcon from "./MenuIcons/challenge.svg";
// import activitiesIcon from "./MenuIcons/activities.svg";
// import settingIcon from "./MenuIcons/setting.svg";
// import logoutIcon from "./MenuIcons/logout.svg";

const Navbar = () => {
    let navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem("token")
        // sessionStorage.clear
        navigate("/login");
        navigate("/login");
    }
    return (
        <div className="header">
            <img src='/fit2B_logo_light.svg' className="logo" alt="logo" />
            <nav className="Navbar">
                <Link to="/"><img src='/MenuIcons/home.svg' className="navMenu" alt="homeIcon" /></Link>
                {/* <a href="#"><img src='/MenuIcons/challenge.svg' className="navMenu" alt="challengeIcon" /></a> */}
                <Link to="/activity"><img src='/MenuIcons/activities.svg' className="navMenu" alt="activitiesIcon" /></Link>
                <Link to="/edit-profile"><img src='/MenuIcons/setting.svg' className="navMenu" alt="settingIcon" /></Link>
                <a onClick={handleLogout} ><img src='/MenuIcons/logout.svg' className="navMenu" alt="logoutIcon" /></a>
            </nav>
        </div>
    );

};

export default Navbar