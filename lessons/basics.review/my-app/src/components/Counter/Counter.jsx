import React from 'react'
import { useState } from 'react'
import "./counter.css"


function Counter() {

let [ count, updateCount ] = useState(0)
    
    function addCount(){
        updateCount(count +1)
    }

    function subtractCount(){
        updateCount(count -1)
    }

  return (
    <>
    <button className='subtract' onClick={subtractCount}>-</button>
    <span className='counter'>{count}</span>
    <button className='add' onClick={addCount}>+</button>
    </>
  )
}

export default Counter