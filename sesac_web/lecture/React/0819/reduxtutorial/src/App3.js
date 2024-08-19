import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import './styles/Box.css';
import { minus, plus } from './store/counterReducer';
import { changeVisiblity } from './store/isVisibleReducer';
function App2() {
  
  const number = useSelector((state)=>state.counter.number);
  const state = useSelector((state)=>state);
  
  return (
    <div className="App">
      <h1>React Redux Ex3</h1>
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
  const number =useSelector((state)=>state.counter.number);
  const isVisible = useSelector((state)=>state.isVisible);
  console.log(isVisible);
  
  const dispatch = useDispatch();

  const styles={
    isVisible : isVisible,
  }

  return(
    <>
      <button onClick={()=>{dispatch(changeVisiblity())}}>VisibleToggle</button>
      <div className='Box4' style={{visibility : isVisible? 'visible': 'hidden'}}>
        <h2>Box 4 : {number} </h2>
        <h2>isVisible 값은 {isVisible ? '참' : '거짓' } 이다</h2>
        <button onClick={()=>{dispatch(plus())}}>plus</button>
        <button onClick={()=>{dispatch(minus())}}>minus</button>
      </div>
    </>
  )
};


export default App2;