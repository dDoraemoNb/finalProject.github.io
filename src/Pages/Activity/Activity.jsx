import React, { useState, useEffect } from 'react'
import ActivitySearch from '../../Components/ActivitySearch/ActivitySearch'
import Navbar from '../../Components/Navbar/Navbar'
import ActivitiesList from '../../Components/ActivitiesList/ActivitiesList'
import './Activity.css'
import useToken from '../../useToken';
import Swal from 'sweetalert2';
import axios from 'axios';
import { instance } from '../../api'

const Activity = (props) => {
    const [activities, setActivitys] = useState([]);
    const { token, setToken } = useToken();
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [searchType, setType] = useState();
    // console.log(startDate)
    // console.log(searchType)
    // const navigate = useNavigate();
    // console.log(props.limit)

    const getListActivity = async (list) => {
        setActivitys(list)
    }

    const getactivities = async (user = token) => {
        const response = await instance.get('/activities', { params: { user_id: user, limit: 10 } })

        setActivitys(response.data)
    }
    function handleDelete(e, params) {

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
                instance.delete(`/activities/${params}`).then(
                    window.location.reload(false)
                )

            }
        })
    }

    function handleSearch(e) {
        e.preventDefault();

        if (searchType && startDate && endDate) {

            const start = new Date(startDate)
            const end = new Date(endDate)
            start.setHours(0, 0, 0, 0)
            end.setHours(23, 59, 59, 999)

            const getActivityByAll = async () => {
                const response = await instance.get(`/activities/search/all`, { params: { start: start, end: end, type: searchType } })
                setActivitys(response.data)
            }
            getActivityByAll();

        } else if (startDate) {//
            if (endDate) {//
                const start = new Date(startDate)
                const end = new Date(endDate)
                start.setHours(0, 0, 0, 0)
                end.setHours(23, 59, 59, 999)


                const getActivityByDateEndDate = async () => {
                    const response = await instance.get('/activities/search/dateEnd', { params: { start: start, end: end } })
                    setActivitys(response.data)


                }
                getActivityByDateEndDate();


            } else if (searchType) {//
                const start = new Date(startDate)
                const end = new Date(startDate)
                start.setHours(0, 0, 0, 0)
                end.setHours(23, 59, 59, 999)

                const getActivityByDateType = async () => {
                    const response = await instance.get(`/activities/search/datetype`, { params: { start: start, end: end, type: searchType } })
                    setActivitys(response.data)
                }
                getActivityByDateType();
            } else {//
                const start = new Date(startDate)
                const end = new Date(startDate)

                start.setHours(0, 0, 0, 0)
                end.setHours(23, 59, 59, 999)

                const getActivityByDate = async () => {
                    const response = await instance.get(`/activities/search/date`, { params: { start: start, end: end } })
                    setActivitys(response.data)
                }
                getActivityByDate();
            }


        } else if (searchType) {//

            const type = searchType

            const getActivityByType = async () => {
                const response = await instance.get(`/activities/search/type`, { params: { type: type } })
                setActivitys(response.data)
            }
            getActivityByType();

            // console.log(type)
        } else {//
            const getActivity = async (user = token) => {
                const response = await instance.get('/activities', { params: { user_id: user, limit: 10 } })
                setActivitys(response.data)
            }
            getActivity();

        }

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
                <ActivitySearch getList={setActivitys} search={handleSearch} setDateRange={setDateRange} endDate={endDate} startDate={startDate} setType={setType} />
                <ActivitiesList Activity={activities} deleteactivity={handleDelete} />
            </div>
        </div>
    )
}

export default Activity