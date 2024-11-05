import React from 'react'
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
function Controls({handleClick, isPlaying}) {
  
  return (
    <div className='controls'>
      <button><BiSolidSkipPreviousCircle /></button>
      <button onClick={handleClick}>{isPlaying ? <FaCirclePause />: <FaPlay /> }</button>
      <button><BiSolidSkipNextCircle /></button>
    </div>
  )
}

export default Controls