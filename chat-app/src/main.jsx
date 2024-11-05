import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyProvider1 from './context/MyProvider1.jsx'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyProvider1>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MyProvider1>
  </BrowserRouter>,
)
