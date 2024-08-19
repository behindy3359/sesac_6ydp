import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import './styles/Box.css';

function App2() {
  
  const number =useSelector((state)=>state.number);

  return (
    <div className="App">
      <h1>React Redux Ex2</h1>
      <h2>Redux를 사용할때 props 전달</h2>
      <h2>number : {number}</h2>
      <Box1/>
    </div>
  );
}


const Box1 = ()=>{
  return(
    <>
      <div className='Box1'>
        <h2>Box 1 :</h2>
        <Box2/>
      </div>
    </>
  )
};
const Box2 = ()=>{
  return(
    <>
      <div className='Box2'>
        <h2>Box 2 : </h2>
        <Box3/>
      </div>
    </>
  )
};
const Box3 = ()=>{
  return(
    <>
      <div className='Box3'>
        <h2>Box 3 : </h2>
        <Box4/>
      </div>
    </>
  )
};
const Box4 = ()=>{
  const number =useSelector((state)=>state.number);
  const dispatch = useDispatch();

  return(
    <>
      <div className='Box4'>
        <h2>Box 4 : {number} </h2>
        <button onClick={()=>{dispatch({type:'counter/PLUS'})}}>plus</button>
        <button onClick={()=>{dispatch({type:'counter/MINUS'})}}>minus</button>
      </div>
    </>
  )
};


export default App2;