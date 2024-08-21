import React from 'react';
import Student from './components/Student';
import Card from './components/Card';

function App() {
  const handleClick=(name:string ,grade:number):void=>{
    console.log(`안녕 나는 ${name} 이고 ${grade}학년이야`);
    
  }

  return (
    <div className="App">
      <Student name="새싹" grade={3} handleClick={handleClick}/>
      <hr/>
      <Card title='오늘 배워볼 것은'>
        <p>TypeScript with React</p>
      </Card>
    </div>
  );
}

export default App;
