import React, { useRef } from 'react'
import '../css/Message.css'
import { IoSend } from "react-icons/io5";
function Message({allMessages, setAllMessage})
{
    console.log("Msg compoo");
    const msgBoxRef = useRef(null)
   
    const send = (e)=>{
        console.log("send..");
        e.preventDefault();
        // console.log(msgBoxRef.current.value);
        setAllMessage(prevMsg => {
           return [...prevMsg, {username : msgBoxRef.current.value}]
        })
    }
    return (
        <form onSubmit={send}>
            <div className='message-compo'>
                <input
                    type="text"
                    name=""
                    className='chat-msg'
                    placeholder='Message'
                    ref={msgBoxRef}
                />
                <button>
                    <IoSend />
                </button>
            </div>
        </form>
    )
}

export default Message