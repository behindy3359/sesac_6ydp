import React, {useState} from 'react'

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = (a)=>{
    setNumber( number + a );
  }

  const alertMsg =(msg)=>{
    alert(`${msg} ~ 현재 숫자는 ${number} 입니다~`);
  }
  const consoleMsg = (a, b) =>{
    console.log('target >>>>>>>>>>',a.target);
    console.log('b  >>>>>>>>>>>>>>',b);
  }
  const handleEvent = (e) =>{
    console.log('e.target>>>>>>>>>>>',e.target);// 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소
    console.log('e.currentTarget>>>>',e.currentTarget);// 이벤트 핸들러가 있는 요소
  }
  return (
    <>
      <h1> Number Counter </h1>
      <h2> {number} </h2>
      <button onClick={()=>{increase(1)}}>+1</button>
      <button onClick={()=>{increase(10)}}>+10</button>
      <button onClick={()=>{increase(100)}}>+100</button><br/>
      <button onClick={()=>{alertMsg('hello!')}}>alert출력</button>
      <button onClick={(e)=>{consoleMsg(e, "hello!")}}>console 출력</button>
      <button onClick={handleEvent}><span>handleEvent</span></button>
    </>
  )
}

export default Counter