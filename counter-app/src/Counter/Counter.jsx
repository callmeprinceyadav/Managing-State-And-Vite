import React from 'react'
import { useState } from 'react'
const  Counter= ()=> {
    const [count, setCount] = useState(1)
    return (
      <>
      <p>Count = {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
        
        
        
      </>
    )
  }

export default Counter