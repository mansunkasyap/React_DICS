import React, { useEffect } from 'react'

export const createdContext = React.createContext()

const UserContext = ({children}) => {
    // define states here
    const [user, setUser] = React.useState({});
    useEffect(()=>{
      
    }, [])
  return (
    <createdContext.Provider value={{user, setUser}}>
        {children}
    </createdContext.Provider>
  )
}

export default UserContext