// [ Toolkit 사용 ]
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice';
// #2. Store 생성
// - configureStore를 사용하여 스토어 생성.

// *configureStore*
// - Redux Toolkit에서 제공하는 함수로, 스토어를 더 쉽게 설정 할 수 있게 해줌.

const store = configureStore({
    reducer: {
        account: accountReducer,
      },
});

export default store;