

import React, { useState } from 'react'

const CounterFunction = (props) => {
  
  const {value} =props;
  const [Number , setNumber] = useState(0);
  const onClickEnter = ()=>{
    setNumber(Number + 1)
  }
  return (
    <>
      <div>
        <h1>{Number}</h1>
        <button onClick={onClickEnter}>{value},{Number}</button>
      </div>
    </>
  )
}

export default CounterFunction