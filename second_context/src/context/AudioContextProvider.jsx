import React, { useState } from 'react'
import { AudioContext } from './AudioContext'
function AudioContextProvider({children}) {
    const [isPlaying, setIsPlaying] = useState(false)
  return (
    <AudioContext.Provider value={{isPlaying, setIsPlaying}}>
        {children}
    </AudioContext.Provider>
  )
}

export default AudioContextProvider