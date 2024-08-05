import React, {useState} from 'react'


const ChangeColor = () => {

  const [color, setColor] = useState('black');
  const [text, setText] = useState('검정색 글씨'); 

  
  const pressBtn =(a,b)=>{
    setColor(a);
    setText(b);
  }

  return (
    <>
      <h1 style={{color :color}}> {text} </h1>
      <button onClick={()=>{ pressBtn('red','빨간색 글씨');}}>빨간색</button>
      <button onClick={()=>{ pressBtn('blue','파란색 글씨');}}>파란색</button>
    </>
  )
}

export default ChangeColor