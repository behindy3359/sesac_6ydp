import React ,{useState, useMemo } from 'react'

//useMemo
// - 메모이제이션으로 이전에 수행한 연산의 결과 값을 기억함으로서 불필요한 연산을 최소화함.
const UseMemoEx = () => {
  const[ count , setCount ] = useState(0);
  const[ input , setInput ] = useState('');

  const calc =()=>{
    console.log('열심히 계산중 💦');
    let k;

    for(let i = 0; i <10000000 ; i ++){
      k = i;
    }

    return count ** 2;
  }

  const calcMemo = useMemo(()=>{
    console.log('열심히 메모중!!! 🗓️');
    return count ** 2;
  },[count]);

  return (
    <>
      <h1>UseMemo Ex</h1>
      <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
      <button onClick={()=>{setCount(()=> count + 1 )}}>Plus</button>
      <p> count : {count} </p>
      <p> calc : {calc()}</p>
      <p> calcMemo : {calcMemo}</p>
    </>
  )
}

export default UseMemoEx