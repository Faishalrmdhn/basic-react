import React from 'react'
import { useState } from 'react'
function Counter() {
  let [count, setCount] = useState(0)

  const incCounter =()=>{
    return setCount(count+1)
  } 

  const decCounter =()=>{
    return setCount(count-1)
  }
  return (
    <>
      <div>
        <button style={{marginRight:'1rem'}} onClick={incCounter}>+</button>
        {count}
        <button style={{marginLeft:'1rem'}} onClick={decCounter}>-</button>
      </div>
        {/* <p>{count}</p> */}
    </>
  )
}

export default Counter