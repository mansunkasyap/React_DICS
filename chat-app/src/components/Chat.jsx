import React, { useEffect, useState } from 'react'
import '../css/Chat.css'
import { TiTickOutline } from "react-icons/ti";
function Chat(message) {
  console.log(message);
  const [time, setTime] = useState({hours : 0, minutes:0})


useEffect(()=>{
  const date = new Date();
  date.getHours()
  console.log(date.getHours(), date.getMinutes());
  setTime({hours : date.getHours(), minutes : date.getMinutes()})
},[] )


  return (
    <div className="chat-compo">
        <div className='upper'>
            <img src={"Image"} alt="user's Image" />
            <div>{message.username}</div>
        </div>
        {/* <p>{message.message}</p> */}
        <div className='lower'>
            <div className='part-1'>
              <p>{time.hours} : {time.minutes}</p>
              <div><TiTickOutline /></div>
            </div>
        </div>
    </div>
  )
}

export default Chat