import "./Navbar.css";
import logo from "../../../public/fit2B_logo_light.svg";
import homeIcon from "./MenuIcons/home.svg";
import challengeIcon from "./MenuIcons/challenge.svg";
import activitiesIcon from "./MenuIcons/activities.svg";
import settingIcon from "./MenuIcons/setting.svg";
import logoutIcon from "./MenuIcons/logout.svg";

const Navbar = () =>{

    return(
        <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <nav className="Navbar">
                <a href="#"><img src={homeIcon} className="navMenu" alt="homeIcon" /></a>
                <a href="#"><img src={challengeIcon} className="navMenu" alt="challengeIcon" /></a>
                <a href="#"><img src={activitiesIcon} className="navMenu" alt="activitiesIcon" /></a>
                <a href="#"><img src={settingIcon} className="navMenu" alt="settingIcon" /></a>
                <a href="#"><img src={logoutIcon} className="navMenu" alt="logoutIcon" /></a>
            </nav>
      </div>
    );

};

export default Navbar