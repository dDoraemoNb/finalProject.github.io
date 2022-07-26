import { useState } from 'react'
import reactLogo from './react.svg'
import Greeting from '../Greeting/Greeting'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Greeting/>
          </div>
  )
}

export default App
