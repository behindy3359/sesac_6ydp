import React, { useEffect, useState } from 'react'

const LifeCycleFuncChild = ({number}) => {
  const[input, setInput] = useState('');

  //Mount 시점에 실행
  // useEffect(()=>{
  //   console.log('1 : 컴포넌트 마운트!! 🔵');
  // },[]);
  // useEffect(()=>{
  //   console.log('2 : 컴포넌트 마운트!! 🔵');
  //   return ()=>{
  //     console.log('2 : 컴포넌트 언마운트!! 🔴');
  //   }
  // },[]);
  // useEffect(()=>{
  //   console.log('3 : 컴포넌트 마운트!! 🔵 or 업데이트 🟢');
  //   return ()=>{
  //     console.log('3 : 컴포넌트 언마운트!! 🔴');
  //   }
  // });

  useEffect(()=>{
    console.log('4 : 마운트 🔵 or input 상태가 변경됨에 따라 컴포넌트 업데이트 🔴');
  },[input, number])

  return (
    <div style={{color : 'white'}}>
      자식 컴포넌트!
      <div> 현재 number값은 {number} 입니다. </div>
      <input type='text' value={input} onChange={(e)=>{ 
        if(e.target.value.length>10){
          e.target.value='';
        }
        setInput(e.target.value);
      }}></input>
      <br/>
      <span> input : {input}</span>
    </div>
  )
}

export default LifeCycleFuncChild;