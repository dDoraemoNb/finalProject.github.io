import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Activity from './Pages/Activity/Activity'
import Login from './Pages/Login/Login'
import Signup from './Pages/Login/Signup'
import Add from './Pages/Add/Add'
import Edit from './Pages/Edit/Edit'
import EditActivity from './Pages/EditActivities/EditActivities'

const App = (props) => {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState();

  if (token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} ></Route>
          <Route path='signup' element={<Signup />} ></Route>
        </Routes>
      </BrowserRouter>
    )
  }


  const [selectedActivity, setSelectActivity] = useState();

  const [profile, setProfile] = useState(
    { name: 'Aman', lastname: 'Stickman', yrs: "1900-10-28", height: 185, weight: 65 }
  );

  const [activitys, setActivitys] = useState(
    [
      { img: '010', title: 'ไปวิ่งกับน้องหมา', type: 'Jogging', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ' },
      { img: '002', title: 'ไปปาก', type: 'swim', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    ]
  );

  const getProfile = async (user = '62f32c1d78af39f80fa8aadd') => {
    const response = await axios.get('http://localhost:8080/users/user', { params: { u_id: user } });
    // console.log(response.data)
    setProfile(response.data)
  }
  useEffect(() => {
    getProfile();
  }, []);
  //const token = true

 
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard profile={profile} list={activitys} />} ></Route>
        <Route path="activity" element={<Activity list={activitys} />} ></Route>
        <Route path="add" element={<Add />} ></Route>
        <Route path='edit-profile' element={<Edit profile1={profile} />}></Route>
        <Route path='edit-activities' element={<EditActivity />}></Route>

        {/* <Route path="/" element={<ListActivity />} ></Route>
          <Route path="/" element={<AddActivity />} ></Route> */}
      </Routes>
    </BrowserRouter>
  )



  // return (
  //   <div className="App">
  //     {Page()}
  //   </div>
  // )
}

export default App
