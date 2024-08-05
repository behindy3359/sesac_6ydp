import React, { useState } from 'react'

const SayFunction = () => {
  console.log(useState('welcome!!'));

  const[ message , setMessage ] = useState("welcome!!");
  
  const onclickEnter= ()=>{
    setMessage('안녕하세요');
  }
  const onclickEscape= ()=>{
    setMessage('안녕히 가세요');
  }
  const handleClick = ()=>{
    setMessage((currentMessage)=>{
      return currentMessage === 'welcome!!' ? "Hi": "Bye";
    })
  }

  return (
    <div>  
      <div>sayFunction</div>
      <button onClick={onclickEnter}>입장</button>
      <button onClick={onclickEscape}>퇴장</button>
      <button onClick={handleClick}>HI</button>
      <h2> {message} </h2>  
    </div>
  )
}

export default SayFunction