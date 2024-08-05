import './App.css';
import Counter from './Ccounter';
import SayFunction from './sayFunction';
import CounterFunction from './CounterFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Counter/>
          <hr className='hrrrr'/>
          <SayFunction/>
          <hr className='hrrrr'/>
          <CounterFunction value={"plus 1"}/>
      </header>
    </div>
  );
}

export default App;
