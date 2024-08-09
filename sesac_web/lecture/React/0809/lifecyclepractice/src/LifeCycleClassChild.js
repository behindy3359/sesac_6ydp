import React, { Component } from 'react'

export class LifeCycleClassChild extends Component {
  // componentDidMount (){
  //   console.log('컴포넌트 마운트 !! 파란불');  
  // }
  // componentDidUpdate(){
  //   console.log('컴포넌트 마운트 !! 초록불');  
  // }
  // componentWillUnmount(){
  //   console.log('컴포넌트 마운트 !! 빨간불');  
  // }
  
  render() {
    return (
      <>
        자식 컴포넌트
        <p> 현재 number 값은 {this.props.number} 입니다. </p>
      </>
    )
  }
}

export default LifeCycleClassChild