import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AudioContextProvider from './context/AudioContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AudioContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AudioContextProvider>,
)
