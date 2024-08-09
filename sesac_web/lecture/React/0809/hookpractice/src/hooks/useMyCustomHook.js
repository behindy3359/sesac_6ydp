import React,{useEffect} from 'react'

const useMyCustomHook = (customV) => {
  useEffect(()=>{
    //mount 실행공간
    const prevTitle = document.title;
    document.title = customV;
    
    //unMount시 실행공간
    return ()=>{document.title = prevTitle};
  },[customV])
}

export default useMyCustomHook