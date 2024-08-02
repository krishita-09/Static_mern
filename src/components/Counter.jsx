import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(1000)
    

    return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onMouseOver ={()=>setCount(count+1000)} style = {{backgroundColor:"black", color:"white", margin:"2rem"}}>Increment</button>
      <button onMouseOut ={()=>setCount(count-1)} style = {{backgroundColor:"black", color:"white", margin:"2rem"}}>Decrement</button>
      <button onMouseMove ={()=>setCount(0)} style = {{backgroundColor:"black", color:"white", margin:"2rem"}}>Reset</button>
    </div>
  )
}

export default Counter
