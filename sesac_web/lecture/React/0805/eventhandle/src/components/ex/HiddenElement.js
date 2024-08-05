import React, {useState} from 'react'

const HiddenElement = () => {

  const [text , setText] = useState('사라져라');
  const [visible , setVisible] = useState('visible');

  const hiddenFunc = (a,b) => {
    if(a ==='visible'){
      setText('보여라');
      setVisible('hidden');
    }else{
      setText('사라져라');
      setVisible('visible');
    }
  }

  return (
    <>
      <button onClick={()=>{hiddenFunc(visible,text)}}>{text}</button>
      <h1 style={{visibility : visible}}>안녕하세요</h1>
    </>
  )
}

export default HiddenElement