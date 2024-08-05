import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ClassComponent extends Component {
  static propTypes = {}
  state ={
    NumberNum : 0
  }

  render() {
    const {NumberNum} = this.state;

    return (
      <>
      <h1> 클래스형 !  숫 자  : { NumberNum } </h1>
      <button onClick={()=>{this.setState({NumberNum: NumberNum + 2})}}>+2</button>
      <button onClick={()=>{this.setState({NumberNum: NumberNum - 1})}}>-1</button>
      </>
    )
  }
}

export default ClassComponent