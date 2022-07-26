import { useState } from 'react'
import reactLogo from './react.svg'
import Profile from '../Profile/Profile'
import Dashboard from '../Dashboard/Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="content">
        <div className="Dashboard">
          <Dashboard />
        </div>
        <div className="Profile">
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default App
