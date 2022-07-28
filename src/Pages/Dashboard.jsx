import React from 'react'
import Profile from '../Components/Profile/Profile'
import ContentDashboard from '../Components/ContentDashboard/ContentDashboard'
import Navbar from '../Components/Navbar/Navbar'
import './Dashboard.css'

const Dashboard = (props) => {

    return (
        <div className='main-dashboard'>
            <div className="Dashboard">
                <div>
                    <Navbar />
                </div>
                <div className="content">
                    <div className="left-content">
                        <ContentDashboard />
                    </div>
                    <div className="right-content">
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard