import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { plus, minus } from './store/accountSlice';

function App() {
  const [changeMoney, setChangeMoney] = useState(0);
  const leftMoney = useSelector((state) => state.account.leftMoney);

  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>코딩온 은행</h1>
      <h2>잔액 : {leftMoney}원</h2>
      <input
        type='number'
        placeholder='입금 또는 출금 금액을 입력해주세요'
        value={changeMoney}
        onChange={(e) => setChangeMoney(parseInt(e.target.value))}
      />
      <button onClick={()=>{dispatch(plus(changeMoney))}}>입금</button>
      <button onClick={()=>{dispatch(minus(changeMoney))}}>출금</button>
    </div>
  );
}

export default App;