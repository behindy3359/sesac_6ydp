import React from "react";
import { Component } from "react";

export default class Counter extends Component{
  
  state ={
    count : 0,
  }

  // constructor ( props){
  //   // 주로 초기 상태를 설정.
  //   // 'props'를 부모 컴포넌트에서 받아와 사용하기 위함.
  //   // js 에서 'super'는 부모 클래스 생성자의 참조. (호출)
  //   // 

  //   super(props);
  //   // this. props 를 사용할 수 있도록 설정.
  //   // 호출하지 않으면 this.키워드 사용 불가.

  //   this.state={
  //     count : 0, //초기상태 설정
  //   }
  // }

  render(){
    const {count} = this.state;
    return(
      <div>
        <h1> Class Component State </h1>
        <h1> this.state.count : {this.state.count} </h1>
        <h1> count : {count} </h1>
        <button onClick={()=>{
          this.setState({count : count +1})
        }}>+1</button>
        <button onClick={()=>{
          alert(count);
        }}>alert Number</button>
      </div>
    )
  }
}
