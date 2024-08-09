import './App.css';
import UseMemoEx from './components/UseMemoEx';
import UseCallBackEx from './components/UseCallBackEx';
import UseCallBackEx2 from './components/UseCallBackEx2';
import UseReducerEx from './components/UseReducerEx';
import useMyCustomHook from './hooks/useMyCustomHook';
import Faq from './components/Faq';

function App() {
  useMyCustomHook(`Reack hook 공부중! ${Math.floor(Math.random()*100 + 1)}`);
  return (
    <div className="App">
    {/* <UseMemoEx/> */}
    <hr/>
    <UseCallBackEx/>
    <hr/>
    <UseCallBackEx2 postId={Math.floor(Math.random()*100 + 1)}/>
    <hr/>
    <UseReducerEx/>
    <hr/>
    <Faq/>
    </div>
  );
}

export default App;
