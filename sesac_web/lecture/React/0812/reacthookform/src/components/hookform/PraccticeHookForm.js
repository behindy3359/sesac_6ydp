import React from 'react'
import {useForm} from 'react-hook-form';

const PraccticeHookForm = () => {
  const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
  } = useForm();
  const submitFunc = (data)=>{
    console.log('폼 데이터 : ', data);
    
  }
  const onInValid = (err) => {
      console.log('onInValid >>>>> ', err);
  };

  return (
    <>            
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(submitFunc, onInValid)}>
          <input
              type="text"
              placeholder="username"
              // register 함수
              {...register('username', {
                  required: '이름은 필수 항목입니다',
                  minLength: {
                      message: '이름은 최소 2글자 이상 작성해주세요',
                      value: 2,
                  },
              })}
          />
          <input
              type="number"
              placeholder="userage"
              {...register("userage", {
                required:'나이를 입력해주세요', 
                min:{
                  message: '0 이상의 숫자만 입력 가능합니다.',
                  value : 0,
                },
              })}
          />
          <button type="submit">Submit</button><br/>
          {errors.username?.message}<br/>
          {errors.userage?.message}
      </form>
    </>
  )
}

export default PraccticeHookForm