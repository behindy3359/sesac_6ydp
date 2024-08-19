// toolkit 사용하지 않는 버전. ( 전통 방식의 redux 설정 방식 )
// 액션 생성자 정의
// - 이를 통해서 컴포넌트에 액션을 쉽게 디스패치 할 수 있음.

const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

/**
 * -'type' 반드시 포함/ 이름도 변경 불가능!
 * -> 리듀서는 이 type을 보고 어떤 상태 변경을 해야 할지 판단.
 * 'type' = 액션의 유형을 설명하는 문자열 ( 필수 속성 )
 * **추가 데이터 종류
 * payload / meta / error
 */
export const plus = ()=>({type : PLUS});
export const minus = ()=>({type: MINUS});

//state 초기값 정의
const initialState ={
  number : 100, // 초기 number 값 설정
}
const counterReducer = (state = initialState, action) =>{
  switch(action.type){
    case PLUS :
      return {number : state.number + 1};
    case MINUS :
      return {number : state.number - 1};
    default:
      console.log('how can you reach here?');
      return state;
  }
}

export default counterReducer;
