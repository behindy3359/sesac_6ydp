import './styles/App.css';
import './styles/Box.css';
import {useState} from 'react'

function App() {
  const[number, setNumber]=useState(100);
  const plus = ()=>setNumber(number+1);
  const minus = ()=>setNumber(number-1);
  
  return (
    <div className="App">
      <h1>React Redux</h1>
      <h2>Redux를 사용하지 않을 때 props 전달</h2>
      <Box1 number={number} plus={plus} minus={minus}/>
    </div>
  );
}

export default App;

const Box1 = ({number, plus, minus})=>{
  return(
    <>
      <div className='Box1'>
        <h2>Box: 1</h2>
        <Box2 number={number} plus={plus} minus={minus}/>
      </div>
    </>
  )
};
const Box2 = ({number, plus, minus})=>{
  return(
    <>
      <div className='Box2'>
        <h2>Box: 2</h2>
        <Box3 number={number} plus={plus} minus={minus}/>
      </div>
    </>
  )
};
const Box3 = ({number, plus, minus})=>{
  return(
    <>
      <div className='Box3'>
        <h2>Box: 3</h2>
        <Box4 number={number} plus={plus} minus={minus}/>
      </div>
    </>
  )
};
const Box4 = ({number, plus, minus})=>{
  return(
    <>
      <div className='Box4'>
        <h2>Box: 4 ===== {number}</h2>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
      </div>
    </>
  )
};