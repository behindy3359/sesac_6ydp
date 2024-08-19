// [ Toolkit 사용 ]
import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
    name: 'account', // 즉, plus 액션은 'counter/plus' 라는 타입이다.

    initialState: { leftMoney : 0},
    reducers: {
      plus:(state, action)=>{
        console.log(action);
        
        state.leftMoney += action.payload;
      },
      minus:(state, action)=>{
        state.leftMoney -= action.payload; 
      }
    },
});

export const { plus, minus } = accountSlice.actions;

export default accountSlice.reducer;
