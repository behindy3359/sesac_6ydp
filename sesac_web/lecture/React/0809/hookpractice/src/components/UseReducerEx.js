import React,{useState,useReducer} from 'react'

const initState = { value : 0 };
const reducer = (prevState, action)=>{
  console.log('prevState >>>>>>>>>>>>>', prevState);
  console.log('action >>>>>>>>>>>>>>>>', action);
  switch (action.type){
    case 'INCREMENT' :
      return {value : prevState.value +1};
    case 'DECREMENT' :
      return {value : prevState.value -1};
    case 'RESET' :
      return initState;
    default :
      return console.log('몬가 수상한 일이 일어남!');
  }
}

const UseReducerEx = () => {
  // #3. useReducer 훅 사용

  const [state, dispatch] = useReducer(reducer, initState);

  const increment = ()=>dispatch({type : 'INCREMENT'});
  const decrement = ()=>dispatch({type: 'DECREMENT'});
  const reset = ()=>dispatch({type:'RESET'});

  return (
    <>
      <h2>{state.value}</h2><hr/>
      <button onClick={increment}> + 1 </button>
      <button onClick={decrement}> - 1 </button> 
      <button onClick={reset}>Reset</button>    
    </>
  )
}

export default UseReducerEx 