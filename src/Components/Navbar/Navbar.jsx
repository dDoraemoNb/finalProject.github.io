import "./Navbar.css";
// import logo from "../../../public/fit2B_logo_light.svg";
// import homeIcon from "./MenuIcons/home.svg";
// import challengeIcon from "./MenuIcons/challenge.svg";
// import activitiesIcon from "./MenuIcons/activities.svg";
// import settingIcon from "./MenuIcons/setting.svg";
// import logoutIcon from "./MenuIcons/logout.svg";

const Navbar = () =>{

    return(
        <div className="header">
            <img src='../../../public/fit2B_logo_light.svg' className="logo" alt="logo" />
            <nav className="Navbar">
                <a href="/"><img src='../../../public/MenuIcons/home.svg' className="navMenu" alt="homeIcon" /></a>
                <a href="#"><img src='../../../public/MenuIcons/challenge.svg' className="navMenu" alt="challengeIcon" /></a>
                <a href="activity"><img src='../../../public/MenuIcons/activities.svg' className="navMenu" alt="activitiesIcon" /></a>
                <a href="#"><img src='../../../public/MenuIcons/setting.svg' className="navMenu" alt="settingIcon" /></a>
                <a href="#"><img src='../../../public/MenuIcons/logout.svg' className="navMenu" alt="logoutIcon" /></a>
            </nav>
      </div>
    );

};

export default Navbar