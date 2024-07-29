import './App.css';
import ClassComponentExample from './classComponentExample';
import FunctionComponentExample from './functionComponentExample';
import IAmBtn from './button';

function App() {
  return (
    <div className="App">
      <ClassComponentExample/>
      <ClassComponentExample name="SeSAC 6기"/>
      <hr/>
      <FunctionComponentExample name ="3"/>
      <FunctionComponentExample name ="영등포 캠퍼스"/>
      <hr/>
      <IAmBtn link="https://www.google.com" children="Google"/>
      <hr/>
      <IAmBtn/>
      <hr/>
    </div>
  );
}

export default App;
