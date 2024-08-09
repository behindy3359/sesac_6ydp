import React from 'react'
import useToggle from '../hooks/useToggle'

const Faq = () => {
  const [isFaqOpen, setIsFaqOpen] = useToggle();

  return (
    <>
      <h1> custom hook (useToggle) ex</h1>
      <div onClick={setIsFaqOpen} style={{cursor:'pointer'}}> Q. 리액트에서 훅 만들기 성공했어요?</div>
      {isFaqOpen && <div style={{backgroundColor :'black', color :'white'}}>성공!</div>}
    </>
  )
}

export default Faq