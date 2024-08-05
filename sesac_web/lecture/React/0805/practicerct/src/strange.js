import { Component } from "react";
import PropTypes from 'prop-types';

class strangeComponent extends Component{

  
  render(){
    const {text, valid} = this.props;
    return(
      <>
        <h2> {text}</h2>
        <button onClick={()=>{console.log('콘솔 띄우기 성공!')}}>콘솔 메세지</button>
      </>
    )
  }

  static defaultProps = {
    text: '이건 기본 text props입니다.',
  }

  static propTypes = {
      name: PropTypes.string,
  }

}

export default strangeComponent;