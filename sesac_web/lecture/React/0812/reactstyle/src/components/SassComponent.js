import React from 'react'
import '../styles/SassComponent.scss'

const SassComponent = () => {
  return (
    <>
      <div className='container'>
        <div className='box red'>1</div>
        <div className='box yellow'>2</div>
        <div className='box green'>3</div>
      </div>
      <div className='box black'></div>
      <button className='btn'>Button</button>
      <button className='btn-primary'>Button Primary</button>
    </>
  )
}

export default SassComponent


// 참고. css 코드
