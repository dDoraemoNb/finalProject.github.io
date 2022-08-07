import React from 'react'
import Profile from '../../Components/Profile/Profile'
import ContentDashboard from '../../Components/ContentDashboard/ContentDashboard'
import Navbar from '../../Components/Navbar/Navbar'
import './Dashboard.css'
import ActivitiesList from '../../Components/ActivitiesList/ActivitiesList'
import { Link } from 'react-router-dom'

const Dashboard = (props) => {

    return (
        <div className='main-web'>
            <div className="Dashboard">
                <div>
                    <Navbar />
                </div>
                <div className="content">

                    <div className="left-content">
                        <div className='col'>
                            <p>DashBoard</p>
                            <div className='top-left-content'>
                                <Link to="/add" className='addActivities'>+Add Activity</Link>
                                {/* <Link to="" className='addChallenge'>+Add Challenge</Link> */}
                            </div>
                        </div>
                        <ContentDashboard />
                        <ActivitiesList />
                    </div>
                    <div className="right-content">
                        <Profile profile={props.profile} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard