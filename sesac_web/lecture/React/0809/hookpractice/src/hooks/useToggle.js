
import React,{useState} from 'react'

const useToggle = ( initV = false ) => {
  const [value ,setValue] = useState(initV);

  const toggleValue = ()=>{
    console.log(' 토글 상태 바꾸기!!!');
    
    setValue(!value);
  }

  return[ value, toggleValue ];
}

export default useToggle