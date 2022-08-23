import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Activity from './Pages/Activity/Activity'
import Login from './Pages/Login/Login'
import Signup from './Pages/Login/Signup'
import Add from './Pages/Add/Add'
import Edit from './Pages/Edit/Edit'
import EditActivity from './Pages/EditActivities/EditActivities'
import useToken from './useToken';

function Authentication() {

  const navigate = useNavigate()
  const tokenUsed = useToken();

  useEffect(() => {
    if (!tokenUsed.token) {
      navigate('/login')
    }
  }, [])

  return <Outlet />
}

const App = (props) => {
  const [count, setCount] = useState(0)
  const { token, setToken } = useToken();
  // const [profile, setProfile] = useState();
  
  // function getdetail(detail) {
  //   setProfile(detail)
  // }

  // const [activitys, setActivitys] = useState(
  //   [
  //     {
  //       img: '010', title: 'ไปวิ่งกับน้องหมา', type: 'Jogging',
  //       description: 'It is a long established fact that a reader will be distracted bythe readable content of a page when looking at its layout. '
  //     },
  //     {
  //       img: '002', title: 'ไปปาก', type: 'swim',
  //       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //     },
  //   ]
  // );


  // console.log(profile)
  // const [selectedActivity, setSelectActivity] = useState();

  // const getProfile = async (user = token) => {
  //   const response = await axios.get('http://localhost:8080/users/user', { params: { user_id: user } });
  //   // console.log(response.data)
  //   setProfile(response.data)
  // }

  // const getactivities = async (user = '62f32c1d78af39f80fa8aadd') => {
  //   const response = await axios.get('http://localhost:8080/activities', { params: { user_id: user } })

  //   setActivitys(response.data)
  // }

  // useEffect(() => {

  //     getProfile();

  //   getactivities();

  // }, []);


  //const token = true

  // if (!token) {

  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         {/* <Redirect to="/login"/> */}

  //       </Routes>
  //     </BrowserRouter>
  //   )
  // }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='login' element={<Login setToken={setToken} />} ></Route>
        <Route path='signup' element={<Signup />} ></Route> */}
        <Route element={<Authentication />} >
          <Route index element={<Dashboard  />} ></Route>
          <Route path="activity" element={<Activity />} ></Route>
          <Route path="add" element={<Add />} ></Route>
          <Route path='edit-profile' element={<Edit />} ></Route>
          <Route path='edit-activities/:activity_id' element={<EditActivity />}></Route>
        </Route>


        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        {/* <Route path="/" element={<ListActivity />} ></Route>
          <Route path="/" element={<AddActivity />} ></Route> */}
      </Routes>
    </BrowserRouter>
  )

  //BACKUP
  // < Route element = {< Authentication />} >
  //       <Route index element={<Dashboard profile={profile} list={activitys} limit={5} />} ></Route>
  //       <Route path="activity" element={<Activity list={activitys} />} ></Route>
  //       <Route path="add" element={<Add />} ></Route>
  //       <Route path='edit-profile' element={<Edit profile1={profile} />}></Route>
  //       <Route path='edit-activities/:activity_id' element={<EditActivity />}></Route>
  //     </ >
  // return (
  //   <div className="App">
  //     {Page()}
  //   </div>
  // )
}

export default App
