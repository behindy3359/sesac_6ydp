import React from 'react'
import { useSearchParams } from 'react-router-dom'

function MainPage() {
  const [searchParams, setSearchParams ] = useSearchParams();
  // console.log('searchParmas >>>>', searchParams.get('mode'));
  
  return (
    <>
      <div className={['Main',searchParams.get('mode')].join(' ')}>
        <div className={`Main ${searchParams.get('mode')||''}`}>

        </div>
        <h1>Main Page</h1>
        <button onClick={()=>{
          setSearchParams({mode : 'Dark'});
        }}>Dark Mode</button>
      </div>
    </>
  )
}

export default MainPage