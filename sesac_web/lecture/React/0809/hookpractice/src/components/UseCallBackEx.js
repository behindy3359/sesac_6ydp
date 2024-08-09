import React,{useState, useCallback} from 'react'

const UseCallBackEx = () => {
  const[text, setText] = useState('');

  const onChangeText = useCallback((e)=>{
    setText(e.target.value);
  },[text]);

  return (
    <>
      <h1> useCallback ex</h1>
      <input type='text' onChange={onChangeText}></input>
      <div>작성한 값 : {text || '없음'}</div>
    </>
  )
}

export default UseCallBackEx