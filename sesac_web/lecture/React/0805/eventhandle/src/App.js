import './App.css';
import HandlerEx from './components/ex/HandlerEx';
import ChangeColor from './components/ex/ChangeColor';
import HiddenElement from './components/ex/HiddenElement';
import FoodChoice from './components/ex/FoodChoice';

function App() {
  return (
    <section className="App">
      <HandlerEx/>
      <hr/>
      <ChangeColor/>
      <hr/>
      <HiddenElement/>
      <hr/>
      <FoodChoice/>

    </section>
  );
}

export default App;
