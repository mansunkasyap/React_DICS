import React from 'react'

function Counter() {
    const [count, dispatchCount]= React.useReducer( 
        function funny(){
            console.log("Hello jii");
        }, 0
    );
    console.log(dispatchCount);
function handleClick(){

}
// onClick={}
  return (
    <div >
        Hello {count}
    </div>
  )
}

export default Counter