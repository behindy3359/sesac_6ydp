import './button.css';
import PropTypes from 'prop-types';
/**
 * props.children
 * 부모 컴포넌트에서 자식 컴포넌트를 호출 시 태그 사이에 존재하는
 * 문자열, 숫자, JSX, 배열 등 다양한 형태를 보여줌,
 * 
 * 
 * 
 */
const iAmBtn = (props)=>{
  // console.log( 'props >>>>>>>>>>>',props);
  const {link, children} = props;

  return (
    <>
      <a href={props.link}>
        <button className="iAmButton" > {children} </button>
      </a>
    </>
  )
};

iAmBtn.defaultProps={
  children : 'NAVER',
  link : 'https://www.naver.com'
}

export default iAmBtn;

