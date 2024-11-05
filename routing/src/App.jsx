import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <>
      <h1>Routing in React</h1>
      <Routes>
        <Route
          path='/'
          element = {<Home />}
        />

        <Route
          path='/about'
          element = {<About />}
        />
        
        
      </Routes>
    </>

  )
}

export default App
