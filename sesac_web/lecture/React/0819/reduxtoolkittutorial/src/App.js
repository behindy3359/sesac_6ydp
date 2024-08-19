import { useDispatch, useSelector } from 'react-redux';
import {plus , minus} from './store/counterSlice';
import './styles/App.css';
import './styles/Box.css';
import { changeVisible } from './store/isVisibleSlice';


function App() {
  
  const number = useSelector((state)=>state.counter.number);
  const isVisible = useSelector((state)=>state.isVisible.isVisible);
  // const state = useSelector((state)=>state);
  console.log(isVisible);
  
  return (
    <div className="App">
      <h1>React Redux Ex5</h1>
      <h2>Redux toolkit 을 사용해 props 전달</h2>
      <h2>리듀서 추가</h2>
      <h2>number : {number}</h2>
      <h2>isVisible :{isVisible ? 'true':'false'}</h2>
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
  const number =useSelector((state)=>state.counter.number);
  const isVisible =useSelector((state)=>state.isVisible.isVisible);
  // const isVisible = useSelector((state)=>state.isVisible);
  // console.log(isVisible);

  const dispatch = useDispatch();

  return(
    <>

      <button onClick={()=>{dispatch(changeVisible())}}>visibilityToggle</button>
      <div className='Box4' style={{visibility : isVisible? 'visible': 'hidden'}}>
        <h2>Box 4 : {number} </h2>
      
        <button onClick={()=>{dispatch(plus())}}>plus</button>
        <button onClick={()=>{dispatch(minus())}}>minus</button>
      </div>
    </>
  )
};


export default App;