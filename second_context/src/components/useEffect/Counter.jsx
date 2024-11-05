import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)

    const tick = ()=>{
        setCount(prev => prev+1) 
    }
    
    React.useEffect(() => { 
        
        const intervalId = setInterval(tick, 1000)
        return () => clearInterval(intervalId);
    }, [])


    return (
        <div>{count}</div>
        
    )
}

export default Counter