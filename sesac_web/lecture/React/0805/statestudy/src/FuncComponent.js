import React, {useState} from 'react'

const FuncComponent = () => {

  const [fcNumber , setfcNumber] = useState(0);
  const increase = ()=>{
    setfcNumber(fcNumber +1);
  }
   
  const decrease = ()=>{
    setfcNumber(fcNumber -2);
  }
  
  return (
    <>
    <h1> 함수 형 !  숫 자  : { fcNumber } </h1>
    <button onClick={increase}>+1</button>
    <button onClick={decrease}>-2</button>
    </>
  )
}

export default FuncComponent