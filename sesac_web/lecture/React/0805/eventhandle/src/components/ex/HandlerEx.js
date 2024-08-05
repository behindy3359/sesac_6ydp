import React, { Component } from 'react'

export class HandlerEx extends Component {

  static propTypes = {}
  state ={
    text: 'Hello World!!',
  }

  render() {
    const {text} = this.state;

    return (
      <>
      <h1> { text } </h1>
      <button onClick={()=>{this.setState({text: 'Goodbye World!!'})}}>클릭</button>
      </>
    )
  }
}

export default HandlerEx