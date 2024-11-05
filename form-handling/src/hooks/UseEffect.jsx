import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const [text, setText] = useState('')
    useEffect(()=>{
        console.log("Hello");
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default UseEffect