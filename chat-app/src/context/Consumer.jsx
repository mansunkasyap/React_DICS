import React from 'react'
import Context1 from './ContextStore'

const Consumer = () => {
    console.log("Thisz dded",Context1);
    const context1 = React.useContext(Context1)
  return (
    <div>
        This is Consumer
    </div>
  )
}

export default Consumer