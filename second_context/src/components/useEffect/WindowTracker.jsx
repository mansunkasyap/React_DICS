import React, { Fragment } from 'react'
import '../../App.css'
const WindowTracker = () => {
    const [cordinate, setCordinate] = React.useState({x:0, y: 0});
   
    React.useEffect(()=>{
        function Listener(e){
            setCordinate((prevCoordinate) =>({...prevCoordinate, 
                x: e.clientX,
                y: e.clientY
            }))
        }
        document.getElementById('track').addEventListener('mousemove', Listener)
        return ()=>{
            removeEventListener('mousemove', Listener)
            console.log("Removed..");
        }
    }, [])



  return (
    <div className='window-tracker' id='track'>
       <div >X : {cordinate.x} Y : {cordinate.y}</div>
    </div>
  )
}

export default WindowTracker