import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';

function App() {
  return (
    <section className="App">
      <SyntheticEvent/>
      <hr/>
      <ClassBind/>
      <hr/>
      <Counter/>
    </section>
  );
}

export default App;
