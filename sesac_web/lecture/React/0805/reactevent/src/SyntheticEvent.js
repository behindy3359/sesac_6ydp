import React from 'react'

const SyntheticEvent = () => {
  function syntheticEvent(e){
    console.log("s버튼 클릭됨!");
    console.log(e);
    console.log(e.target);
    // 콘솔에 찍히는 e 객체는 합성 이벤트
    // React 가 만들어낸 이벤트 객체
    // 브라우저마다 이벤트 이름과 종류 등 이벤트를 처리하는 방식이 다르기 때문에
    // react 에서 동일하게 처리하기 위해서 사용하는 이벤트 객체
    // e.preventDefault();
    //합성 이벤트는 react 가 모든 브라우저에서 동일한 이벤트를 처리할 수 있게 해주는 도구라고 봐야할 것
  
  
  }
  function printInputValue(e){
    console.log(e.target.value);
  }


  return (
    <>
      <div className='article first-article'>  
        <div>SyntheticEvent</div>
        <button onClick={syntheticEvent}>syntheticEvent 버튼</button>
        <input type="text" placeholder='입력하세요' onChange={printInputValue}/>
      </div>
    </>
  )
}

export default SyntheticEvent