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
        <button onClick={incCounter}>+</button>
        <p>{count}</p>
        <button onClick={decCounter}>-</button>
    </>
  )
}

export default Counter