import React, { useState, useEffect } from 'react'
import ActivitySearch from '../../Components/ActivitySearch/ActivitySearch'
import Navbar from '../../Components/Navbar/Navbar'
import ActivitiesList from '../../Components/ActivitiesList/ActivitiesList'
import './Activity.css'
import useToken from '../../useToken';
import Swal from 'sweetalert2';
import axios from 'axios';

const Activity = (props) => {
    const [activities,setActivitys] = useState([]);
    const { token, setToken } = useToken();
    // const navigate = useNavigate();
// console.log(props.limit)

const getListActivity = async (list) => {
    setActivitys(list)
}

    const getactivities = async (user = token) => {
        const response = await axios.get('http://localhost:8080/activities', { params: { user_id: user,limit:10 } })

        setActivitys(response.data)
    }
    function handleDelete(e,params) {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                axios.delete(`http://localhost:8080/activities/${params}`).then(
                    window.location.reload(false)
                )
               
            }
        })
    } 

    useEffect(() => {
        getactivities()
        //request with limit
        //response limit
        
    }, [])


   
    return (
        <div className='main-web'>

            <div className='Activity'>
                <div>
                    <Navbar />
                </div>
                <ActivitySearch getList={getListActivity}/>
                <ActivitiesList Activity={activities} deleteactivity={handleDelete} />
            </div>
        </div>
    )
}

export default Activity