import React from 'react'
import Navbar from "./component/navbar.jsx"
import Herosection from "./component/herosection.jsx"
import AI from "./component/AI.jsx"
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className ="
     max-w-7xl mx-auto pt-20 px-6">
    <Herosection/>
    <AI></AI>
    </div>
    </>
  )
}

export default App
