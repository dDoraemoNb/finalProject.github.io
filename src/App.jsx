import { useState } from 'react'
import reactLogo from './react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'

const App = () => {
  const [count, setCount] = useState(0)
  const [selectedActivity, setSelectActivity] = useState();

  return (
    <div className="App">
      <BrowserRouter>
            
        <Routes>

          <Route path="/" element={<Dashboard />} >
            {/* <Route index element={<ActivityList />} ></Route> */}
            {/* <Route path="" element={<Dashboard />} ></Route> */}
          </Route>

          {/* <Route path="/" element={<ListActivity />} ></Route>
          <Route path="/" element={<AddActivity />} ></Route> */}
        </Routes>
      </BrowserRouter>

      {/* <div className="content">
        <div className="Dashboard">
          <Dashboard />
        </div>
        <div className="Profile">
          <Profile />
        </div>
      </div> */}
    </div>
  )
}

export default App
