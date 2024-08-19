const CHANGE_VISIBLITY ='isVisible/CHANGE';

export const changeVisiblity = ()=>({
  type : CHANGE_VISIBLITY,
})


const initialState = true;

const isVisibleReducer = (state = initialState, action)=>{
  if(action.type === CHANGE_VISIBLITY){
    return !state;
  }
  return state;
}

export default isVisibleReducer;