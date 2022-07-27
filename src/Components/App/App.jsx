import React from "react"
import Navbar from "../Navbar/Navbar"
import ActivitiesList from "../ActivitiesList/ActivitiesList"
import "./App.css"

function App() {

  return (
    <div className="App">
      <Navbar />
      {<ActivitiesList />}
    </div>
  )
}

export default App
