// [ Toolkit 사용 ]
import { createSlice } from '@reduxjs/toolkit';

const isVisibleSlice = createSlice({
    name: 'isVisible', // 즉, plus 액션은 'counter/plus' 라는 타입이다.
    initialState: {isVisible : true},
    reducers: {
      changeVisible:(state)=>{
        state.isVisible = !state.isVisible;
      }
    },
});

export const { changeVisible } = isVisibleSlice.actions;

export default isVisibleSlice.reducer;
