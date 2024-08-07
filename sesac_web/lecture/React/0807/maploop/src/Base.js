import React from 'react'

const Base = () => {
  
  
  /**
   * - 모든 배열 뒤에 .map
   * - array 자료의 개수만큼 함수안의 코드를 실행해줌.
   * - return 안에 있는것들을 array로 반환해줌.
   * - index 안에
   * 
   * [ 필기 ]
   * arr.map ( callbackFunction, [thisArg] ) 분석
   * -callbackFunction : 배열의 각 요소를 순회하며 반복 실행할 함수.
   * (currentValue, index, array) 세개의 인ㄴ수를 가짐
   * 
   * -- currentValue : 배열의 현재 요소.
   * -- index : 현재 요소의 인덱스(위치). (선택)
   * -- array : 'map()' 이 호출된 원본 배열. (선택) 
   * 
   * -- [thisArg] : callbackFunction 내부에서 this 로 사아ㅛㅇ할 값을 지정 .(선택)
   * 만약 이 인수가 제공되지 않으면 undefined가 기본적으로 할당됨.
   */

  //원본 배열
  const numbers = [ 10, 20, 30, 40 ];

  //map() 함수 사용
  const Items = numbers.map((currentValue, index, array)=>{
    console.log('currentValue >>>>>>>>>>>>',currentValue);
    console.log('index >>>>>>>>>>>>>>>>>>>',index);
    console.log('array >>>>>>>>>>>>>>>>>>>',array.join(','));
    console.log('--------------------------------------------------------');
    
    return(
      <li>
        값 : {currentValue}, 인덱스 : {index} , 원본 배열 : {array.join(',')}
      </li>
    );
  });

  return (
    <>
      <h1>Map ( 1 )</h1>
      <ul>{Items}</ul>

      <h1>Map ( 2 )</h1>
      <ul>
        {numbers.map((currentValue, index, array) => {
          console.log('currentValue >>>>>>>>>>>>', currentValue);
          console.log('index >>>>>>>>>>>>>>>>>>>', index);
          console.log('array >>>>>>>>>>>>>>>>>>>', array.join(','));
          console.log('--------------------------------------------------------');
          
          return(
            <li>
              값 : {currentValue}, 인덱스 : {index} , 원본 배열 : {array.join(',')}
            </li>
          );
        })}
      </ul>
    </>
  )
}

/**
 * Q) forEach 와 map 의 차이점?
 * 공통점
 * - 둘 다 배열의 각 요소를 순회하는 메서드.
 * 
 * "forEach"
 * - 배열의 각 요소에 대해 주어진 함수를 실행하는 것이 목적!
 * - 반환값이 없는 함수.
 * - 배열을 순회하면서 각 요소에 대해 이벤트를 발생시키는데 사용. 
 * 
 * "map"
 * - 배열의 각 요소를 변형하여 새로운 배열을 생성하는 것이 목적
 * - 변형된 요소들로 구성된 새로운 배열 반환
 * - 원본 배열은 변경되지 않는다.
 * 
 * ex)
 */
export default Base