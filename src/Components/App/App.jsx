import { useState } from 'react'
import reactLogo from './react.svg'
import Greeting from '../Greeting/Greeting'
import AddActivities from '../AddActivities/AddActivities'
import Editprofile from '../Editprofile/Editprofile'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Greeting/> */}
      {/* <AddActivities /> */}
      <Editprofile/>
    </div>
  )
}

export default App