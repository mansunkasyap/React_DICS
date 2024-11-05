import React, { useEffect, useRef } from 'react'
import Controls from './Controls'
import '../../css/audio.css'
import Range from './Range'

function Music() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = useRef(new Audio("/o-maahi.mp3"))

  useEffect(() => {
    const audio = audioRef.current
    isPlaying ? audio.play() : audio.pause();

    return () => {
      console.log("efefefefe");
      
      audio.pause()
    }
  }, [isPlaying])

  const handleClick = () => {
    console.log("Clicked")
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='music'>
      <img src='' alt='song wallpaper  ' />
      <Range />
      <div className="marquee">
        <span>Song Title!</span>
      </div>
      <Controls handleClick={handleClick} isPlaying={isPlaying} />
    </div>
  )
}

export default Music
