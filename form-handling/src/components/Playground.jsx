import React, { useEffect, useState } from 'react'

const Playground = () => {
    const [msg, setMsg] = useState('a');

    useEffect(()=>{
        function onTimeOut(){
            console.log('Message: '+ msg);
        }
        console.log('💙 Schedule'+ msg +'log');
        
        const id = setTimeout(onTimeOut,  3000)
        return ()=>{
            console.log('💛 Cancelling..'+ msg);
            clearTimeout(id);
        }
    }, [msg])



  return (
    <>
        <label>
            Enter Some text here 
            <input 
                type='text'
                onChange={(e) =>setMsg(e.target.value)}
            />
            <h1>{msg.toUpperCase()}</h1>
        </label>
    </>
  )
}

export default Playground