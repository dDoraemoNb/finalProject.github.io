import React,{useState,useEffect} from 'react'
import Profile from '../../Components/Profile/Profile'
import ContentDashboard from '../../Components/ContentDashboard/ContentDashboard'
import Navbar from '../../Components/Navbar/Navbar'
import { Link} from "react-router-dom"
import './Dashboard.css'
import ActivitiesList from '../../Components/ActivitiesList/ActivitiesList'
import axios from 'axios'
import useToken from '../../useToken'
import { instance } from '../../api'

const Dashboard = (props) => {
    const [activities,setActivitys] = useState([]);
    const { token, setToken } = useToken();

    const getactivities = async (user = token) => {
        const response = await instance.get('/activities', { params: { user_id: user,limit:5 } })

        setActivitys(response.data)
    }

    useEffect(() => {
        getactivities()
        //request with limit
        //response limit
        
    }, [])

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
                        <ActivitiesList  Activity={activities}/>
                        
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