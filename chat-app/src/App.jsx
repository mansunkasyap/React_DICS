import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './components/Chat'
import Message from './components/Message'
import Consumer from './context/Consumer'
import FormExample from './components/FormExample'
import MyForm from './components/MyForm'
import Music from './components/audio/Music.jsx';
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/Chat'));
const About = lazy(() => import('./components/Message'));

function App() {
  const [allMessages, setAllMessages] = useState([])
  const [message, setMessage] = useState({})
  console.log(allMessages);
  return (  
    // <div className='app-compo'>

    //   {/* <h1>Chat App</h1>
  
    // <Consumer />


    //   {allMessages.map(
    //     (message, index) =>{
    //     console.log(message)
    //     return <Chat message={message} key={index} />
    //     })
    // } */}








    //   {/* <Message
    //     allMessages={allMessages}
    //     setAllMessage={setAllMessages}
    //   /> */}
    // {/* <FormExample/> */}
    // {/* <MyForm /> */}


    //     <Routes>
    //       <Route path='/' element={<Chat />}/>
    //       <Route path='/formexample' element={<FormExample />}/>
    //       <Route path='/message' element={<Chat />}/>
    //     </Routes>


    // </div>

      // <Suspense fallback={<div>Loading...</div>}>
      //   <Routes>
      //     <Route path="/" element={<Chat />} />
      //     <Route path="/message" element={<Message />} />
      //   </Routes>
      // </Suspense>
  <Music />
  );
}

export default App
