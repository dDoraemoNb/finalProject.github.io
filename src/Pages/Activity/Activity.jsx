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
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const limit = 10;
    // const [info, setInfo] = useState([])
    // console.log(startDate)
    // console.log(searchType)
    // const navigate = useNavigate();
    // console.log(props.limit)
    const lastIndex = page * limit;
    const firstIndex = lastIndex - limit;
    const info = activities.slice(firstIndex, lastIndex)
    let lastPage = 0
    if (activities[0] === undefined) {
        lastPage = 1
    } else {
        lastPage = Math.ceil(activities.length / limit)
    }


    function handlePrevious() {
        console.log("Previous")
        setPage((p) => {
            if (p === 1) return p;
            return p - 1;
        })
    }
    function handleNext() {
        console.log("NEXT")
        setPage((p) => {
            if (p === pageCount) return p;
            return p + 1
        })

    }


    // const getListActivity = async (list) => {
    //     setActivitys(list)
    // }

    const getactivities = async (user = token) => {
        const response = await instance.get('/activities/list', { params: { user_id: user, limit: 10 } })

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
                instance.delete(`/activities/${params}`)
                .then(
                    ()=>window.location.reload(false)
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
                setPage(1)
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
                    setPage(1)

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
                    setPage(1)
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
                    setPage(1)
                }
                getActivityByDate();
            }


        } else if (searchType) {//

            const type = searchType

            const getActivityByType = async () => {
                const response = await instance.get(`/activities/search/type`, { params: { type: type } })
                setActivitys(response.data)
                setPage(1)
            }
            getActivityByType();

            // console.log(type)
        } else {//
            const getActivity = async (user = token) => {
                const response = await instance.get('/activities/list', { params: { user_id: user, limit: 10 } })
                setActivitys(response.data)
                setPage(1)
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

                <ActivitySearch
                    getList={setActivitys}
                    search={handleSearch}
                    setDateRange={setDateRange}
                    endDate={endDate}
                    startDate={startDate}
                    setType={setType}
                />
                <div id="button" >
                    <button className='pagination' disabled={page === 1} onClick={handlePrevious}>Previous</button>
                    <button className='pagination' disabled={page === lastPage} onClick={handleNext}>Next</button>
                </div>
                <ActivitiesList
                    Activity={info}
                    deleteactivity={handleDelete}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    page={page}
                    pageCount={lastPage}
                />
                <div id="button" >
                    <button className='pagination' disabled={page === 1} onClick={handlePrevious}>Previous</button>
                    <button className='pagination' disabled={page === lastPage} onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Activity