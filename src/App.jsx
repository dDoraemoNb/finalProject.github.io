import { useState } from 'react'
import reactLogo from './react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Activity from './Pages/Activity/Activity'
import Login from './Pages/Login/Login'
import Signup from './Pages/Login/Signup'
import Add from './Pages/Add/Add'

const App = (props) => {
  const [count, setCount] = useState(0)
  const [selectedActivity, setSelectActivity] = useState();

  const [profile,setProfile] = useState({name:'Aman',lastname:'Stickman',yrs:150,height:185,weight:65});

  const token = true

  if (token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard profile={profile} />} ></Route>
          <Route path="activity" element={<Activity />} ></Route>
          <Route path="add" element={<Add />} ></Route>


          {/* <Route path="/" element={<ListActivity />} ></Route>
          <Route path="/" element={<AddActivity />} ></Route> */}
        </Routes>
      </BrowserRouter>
    )
  } else {
    if(!window.location.href){
      window.location.href = "login"; //replace with your url
    }else{
      
    }
      
    return (
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} ></Route>
          <Route path='signup' element={<Signup />} ></Route>
        </Routes>
      </BrowserRouter>
    )
  }


  // return (
  //   <div className="App">
  //     {Page()}
  //   </div>
  // )
}

export default App
