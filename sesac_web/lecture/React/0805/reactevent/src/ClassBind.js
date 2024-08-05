import React, { Component } from 'react'

export class ClassBind extends Component {
  
  constructor(props){
    //클래스형 컴포넌트으이 생성자 메서드, 컴포넌트가 처음 생성될 때 호출.
    super(props);
    
    this.state={
      name : 'SeSAC',
    }
    //#1 클래스 컴포넌트에서 이벤트 사용 - bind 쓰기
    /**
     * 'bind' 메서드로 'this' 바인딩
     * Q) 바인딩이란?
     * - 프로그램의 어떤 기본 단위가 가질 수 있는 구성요소의 구체적인 값, 성격을 확정짓는 것.
     * 
     * - js 에서 'this'는 함수가 호출되는 방식에 따라 달라질 수 있다.
     * - 즉, 'this'가 무엇을 가르키는지 명확하게 해주기 위해 바인딩이 필요!
     * -> 'this' 가 올바른 객체를 가리키도록 설정하는 작업.
     * 
     */

    //#1 생성자에서 바인딩
    this.printConsole = this.printConsole.bind(this);
    //#2 화살표함수에서 바인딩하기!
  
  }
  //bind 사용하기
  printConsole(){
    console.log("printConsole - this  : " + this);
    console.log("printConsole - state : " + this.state);
    console.log("--------------------------------------------------------");
  }

  arrowPrintConsole = (evt, msg, msg2)=>{
    console.log("evt >>> ", evt);
    console.log("evt.target>>>>", evt.target);
    console.log("evt.currentTarget>>>", evt.currentTarget);
    console.log("msg>>>>", msg);
    console.log("e>>>>", msg2);
    console.log("this>>>>>>>" , this); // 클래스 인스턴스
    console.log("--------------------------------------------------------");
  }  
  //#2 화살표 함수에서 이벤트 사용 - 화살표 함수 사용
  // 화살표 함수는 'this' 가 상위 스코프의 'this' 를 참조 하므로 바인딩이 필요없음.(=Lexical Scoping)
  // 자신만의 this를 가지지 않습니다.
  
  render() {
    return (
      <> 
        <h1> class Component Event</h1>
        <button onClick={this.printConsole}>printConsole</button>
        <button onClick={(e)=>{this.arrowPrintConsole(e,'msg','msg2')}}>arrowPrintConsole</button>
      </>
    )
  }
}

export default ClassBind