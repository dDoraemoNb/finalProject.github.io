import React from 'react'
import Profile from '../../Components/Profile/Profile'
import ContentDashboard from '../../Components/ContentDashboard/ContentDashboard'
import Navbar from '../../Components/Navbar/Navbar'
import './Dashboard.css'
import ActivitiesList from '../../Components/ActivitiesList/ActivitiesList'

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

                                <a href="add" className='frame'>+Add Activity</a>
                                <a href="" className='frame1'>+Add Challenge</a>
                            </div>
                        </div>
                        <ContentDashboard />
                        <ActivitiesList />
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