import './App.css';
import './postList.css';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      {/* <LifeCycleClass/> */}
      <hr/>
      {/* <LifeCycleFunc/> */}
      <PostList reqState={true}/>
    </div>  
  );
}

export default App;