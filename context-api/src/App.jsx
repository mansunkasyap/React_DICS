import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeContextProvider from './context/ThemeContextProvider'
import Login from './components/Login'
import UserContext from './context/UserContext'

function App() {

  return (
    <div className='app-compo'>
      <UserContext>
        <Login />
      </UserContext>
    </div>
  )
}

export default App
