
import './App.css';
import FoodComponent from './food';
import VookComponent from './book';
import StrangeComponent from './strange';


function App() {
  const name = '볼프강';
  const animal = '아마데우스';

  const a = 40;
  const b = 20;

  const title = '점심먹고올걸!';

  return (
    <>
      <h2 >   
        제 반려 동물의 이름은 {name}입니다.
      </h2>
      <h2>
        {name}은 {animal}입니다.
      </h2>
      <hr/>
      <span>
        3 + 5 == 8 은? {3 + 5 == 8 ? "정답입니다!": "오답입니다!" }
      </span>
      <hr/>
        <div>{ a > b && <p> a가 b 보다 큽니다.</p> }</div>
      <hr/>
      <div className='input-wrapper'>
        <div className='input-title'>
          {title}
        </div>
        <div className='input-content'>
          아이디:<input type='text' name='input-id'></input><br/>
          비밀번호:<input type='password' name='input-pw'></input>
        </div>
      </div> 
      <hr/>
      <h2>값이 있는경우</h2>
        <FoodComponent name='짜장면'/>
      <h2>값이 없는경우</h2>
        <FoodComponent/>
      <hr/>
        <VookComponent title='goose goose duck' author='김오리' price='1300' type='최고야'/>
      <hr/>
        <StrangeComponent text="App 컴포넌트에서 넘겨준 text props 입니다."/>
      </>
  );
}

export default App;
