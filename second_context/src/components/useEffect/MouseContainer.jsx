import React from 'react'
import WindowTracker from './WindowTracker'
import '../../css/MouseCon.css'
function MouseContainer() {
    const[isShown, setIsShown] = React.useState(true);
    function toggle(){
        setIsShown(prev => !prev)
    }

  return (
    <div>
        <button onClick={toggle}>Hide/Show</button>
        {isShown && <WindowTracker />}
    </div>
  )
}

export default MouseContainer