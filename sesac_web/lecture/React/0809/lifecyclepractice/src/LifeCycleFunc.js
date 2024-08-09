import React,{useState} from 'react'
import LifeCycleFuncChild from './LifeCycleFuncChild'

const LifeCycleFunc = () => {
  const [number , setNumber] = useState(0);
  const [visible, setVisible] =useState(true);
  
  const changeNumber = ()=>{
    setNumber(number+1);
  }
  const changeVisible = ()=>{
    setVisible(!visible);
  }
  
  return (
    <div style={{backgroundColor : 'coral'}}>
      <button onClick={changeNumber}>+ Plus +</button>
      <button onClick={changeVisible}>On / Off</button>
      <br/>
      {visible && <LifeCycleFuncChild number={number} />}
    </div>
  )
}

export default LifeCycleFunc