import React from 'react'
import Context1 from './ContextStore'
const MyProvider1 = ({children}) => {
    console.log(children);
    const [state, setState] = React.useState(0)
  return (
    <Context1.Provider value={{state, setState}}>
        {children}
    </Context1.Provider>
  )
}

export default MyProvider1