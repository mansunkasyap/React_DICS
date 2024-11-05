import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import UseEffect from './hooks/UseEffect'
import Playground from './components/Playground'

function App() {
  // const [show , setShow] = React.useState(false)

    return (
      <>
        {/* <Form /> */}
        {/* <UseEffect /> */}

        {/* <button 
          onClick={()=>setShow(!show)}
        >
            {show ? 'Unmount': 'Mount'} the Component
        </button>
            {show && <hr />}
            {show && <Playground />} */}
            <Form />
      </>
    )
}

export default App